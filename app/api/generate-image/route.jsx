import Replicate from "replicate";
import { NextResponse } from "next/server";
import cloudinary from "@/configs/CloudinaryConfig";

export async function POST(req, res) {
    try {
        const { prompt } = await req.json();
        const replicate = new Replicate({
            auth: process.env.REPLICATE_API_TOKEN
        });

        const input = {
            prompt: prompt,
            height: 1280,
            width: 1024,
            num_outputs: 1
        };

        const output = await replicate.run("bytedance/sdxl-lightning-4step:5599ed30703defd1d160a25a63321b4dec97101d98b4674bcc56e41f62f35637", { input });

        console.log("Image output", output);

        // Convert ReadableStream to a base64 string
        const reader = output[0].getReader();
        let chunks = [];
        let done, value;
        while (!done) {
            ({ done, value } = await reader.read());
            if (value) {
                chunks.push(value);
            }
        }
        const imageUrl = `data:image/png;base64,${Buffer.concat(chunks).toString('base64')}`;

        // Save the generated image to Cloudinary
        const uploadResponse = await cloudinary.uploader.upload(imageUrl, {
            folder: "ai-short-video-images", 
            public_id: `${Date.now()}`
        });

        console.log("Cloudinary upload response", uploadResponse);

        // Return the image link
        return NextResponse.json({ 'result': uploadResponse.secure_url });
    } catch (error) {
        console.log({ "Error in image-generate": error });
        return NextResponse.json({ "Error in image-generate": error });
    }
}