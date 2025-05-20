import { AssemblyAI } from 'assemblyai'
import { NextResponse } from 'next/server';

export async function POST(req,res){
    try{
 
    const {audioFileUrl } = await req.json();
    const client = new AssemblyAI({
        apiKey: process.env.ASSEMBLY_API_KEY,
    })

    const config = {
        audio_url: audioFileUrl
    }
    const transcript = await client.transcripts.transcribe(config)
    // console.log(transcript.words)
    return NextResponse.json({result:transcript.words})
}
catch(err){
    NextResponse.json({"Error in generate-caption ":err});
}
}