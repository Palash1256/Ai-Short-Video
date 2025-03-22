
"use client"
import React, { useContext, useEffect, useState } from 'react';
import SelectTopic from './_components/SelectTopic';
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';
import { v4 as uuidv4 } from 'uuid';
import { VideoDataContext } from '@/app/_context/VideoDataContext';
import { db } from '@/configs/db';
import { videoTable } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';


function CreateNew() {
    try{
    const [formData, setFormData] = useState({});
    const [isFormValid, setFormValid] = useState(false);
    const [loading,setloading]=useState(false);
    const [videoScript,setVideoScript]=useState([]);
    const [audioFileUrl,setAudioFileUrl]=useState()
    const [caption,setCaption]=useState();
    const [imageList,setImageList]=useState();
    const {videoData,setVideoData} = useContext(VideoDataContext)
    const {user} = useUser()

    const onHandleInputChange = (fieldName, fieldValue) => {
        console.log(fieldName, fieldValue);
        setFormData(prev => {
            const updatedFormData = {
                ...prev,
                [fieldName]: fieldValue
            };
            // Check if all required fields are filled
            const isValid = updatedFormData.topic && updatedFormData.imageStyle && updatedFormData.duration;
            setFormValid(isValid);
            return updatedFormData;
        });
    };

    //console.log("formData", formData);

    const clickHandler = () => {
            GetVideoScript();
            //GenerateImage()
    };

    // get video script
    const GetVideoScript = async() => {
        setloading(true)
        const prompt = "Write a script to generate " + formData.duration + " video on topic : " + formData.topic + " along with AI image prompt in " + formData.imageStyle + " format for each scene and give me result in JSON format with imagePrompt and ContentText as field,No plain text";
        console.log("This is getvideo prompt \n",prompt);
        const response = await axios.post('/api/get-video-script',{
            prompt:prompt
        })
        console.log("This is videoScript response \n",response.data);
        if(response.data.result){
            setVideoData(prev=>({
                ...prev,
                "videoScript":response.data.result
            }))
        }
        setVideoScript(response.data.result);
        GenerateAudioFile(response.data.result);
        //setloading(false);
    };

    //get audio file
    const GenerateAudioFile = async (videoScriptData) => {
    setloading(true);
    let script = "";
    const uid = uuidv4();

    videoScriptData.forEach(item => {
        script = script + item.contentText + " ";
    });
    console.log("This is audio text\n",script);

    try {
        const response = await axios.post('/api/generate-audio', {
            text: script,
            id: uid
        });
        setAudioFileUrl(response.data.audioFileUrl);
        console.log("This is generateAudioFile response\n",response.data.audioFileUrl);
        if(response.data.audioFileUrl){
            setVideoData(prev=>({
                ...prev,
                "audioFileUrl":response.data.audioFileUrl,
                "id":uid
            }))
        }
        response.data.audioFileUrl && GenerateAudioCaption(response.data.audioFileUrl, videoScriptData);

        } catch (error) {
        console.error('Error generating audio file:', error);
        
        }
        //setloading(false);

    };

    //generate caption
    const GenerateAudioCaption = async (fileUrl, videoScriptData) => {
        setloading(true);

        const response = await axios.post("/api/generate-caption",{
            audioFileUrl:fileUrl,
        })
        setCaption(response?.data?.result);
        response?.data?.result&&GenerateImage(videoScriptData)
        if(response.data.result){
            setVideoData(prev=>({
                ...prev,
                "audioCaption":response.data.result
            }))
        }
        console.log("This is generateAudioCaption response\n",response.data);
        //setloading(false);
    }
    //generate image
    const GenerateImage = async (videoScriptData) => {
    try {
        let images = [];
        console.log("This is videoScript of use state", videoScriptData);
        for (const element of videoScriptData) {
            const response = await axios.post('/api/generate-image', {
                prompt: element?.imagePrompt
            });
            images.push(response.data.result);
            console.log("This is GenerateImage response\n",response.data.result);
        }
        console.log("Images Array", images);
        setImageList(images);
        if(images){
            setVideoData(prev=>({
                ...prev,
                "imageList":images
            }))
        }
        setloading(false);
    } catch (error) {
        console.error("Error generating image:", error);
    }
    };


    useEffect(()=>{
            console.log(videoData)
             if (Object.keys(videoData).length === 5) {
            saveVideoData(videoData);
        }

    },[videoData])

     const saveVideoData = async (videoData) => {
        try {
            setloading(true);
            const result = await db.insert(videoTable).values([{
            audioCaption: videoData?.audioCaption,
            audioFileUrl: videoData?.audioFileUrl,
            videoScript: videoData?.videoScript,
            imageList: videoData?.imageList,
            createdBy: user?.primaryEmailAddress?.emailAddress
            }]).returning({id:videoTable?.id});

            console.log("Save video data result\n", result);
            setloading(false);
        } catch (error) {
            console.error("Error saving video data:", error);
        }
    };




    return (
        <div className='md:px-20'>
            <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>

            <div className='mt-10 shadow-md p-10'>
                {/* Select Topic */}
                <SelectTopic onUserSelect={onHandleInputChange} />
                {/* {Select Style} */}
                <SelectStyle onUserSelect={onHandleInputChange} />
                {/* Duration  */}
                <SelectDuration onUserSelect={onHandleInputChange} />
                {/*  Create Button*/}
                <Button className="mt-10 w-full" onClick={clickHandler} disabled={!isFormValid}>
                    Create short video
                </Button>
            </div>
            <CustomLoading loading={loading}/>
        </div>
    );
        
}catch(err){
    setloading(false)
    console.log(err);
    }
}

export default CreateNew;
