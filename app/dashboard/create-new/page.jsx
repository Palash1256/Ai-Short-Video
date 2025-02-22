"use client"
import React, { useState } from 'react';
import SelectTopic from './_components/SelectTopic';
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from './_components/CustomLoading';

function CreateNew() {
    const [formData, setFormData] = useState({});
    const [isFormValid, setFormValid] = useState(false);
    const [loading,setloading]=useState(false);
    const [videoScript,setVideoScript]=useState(false);

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
    };

    // get video script
    const GetVideoScript = async() => {
        setloading(true)
        const prompt = "Write a script to generate " + formData.duration + " video on topic : " + formData.topic + " along with AI image prompt in " + formData.imageStyle + " format for each scene and give me result in JSON format with imagePrompt and ContentText as field,No plain text";
        //console.log(prompt);
        const result = await axios.post('/api/get-video-script',{
            prompt:prompt
        })
        setVideoScript(result.data.result);
        //console.log(result,"resulttt")
        setloading(false)
        console.log(videoScript)
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
}

export default CreateNew;