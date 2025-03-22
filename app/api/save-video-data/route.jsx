import { chatSession } from "@/configs/AiModel";
import { db } from "@/configs/db";
import { videoTable } from "@/configs/schema";

import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { videoData, userData } = await req.json(); // Destructure first
        console.log(videoData); // Log after destructuring

        const result = await db.insert(videoTable).values({
            audioCaption: videoData?.audioCaption,
            audioFileUrl: videoData?.audioFileUrl,
            videoScript: videoData?.videoScript,
            imageList: videoData?.imageList,
            createdBy: userData
        })

        console.log("Save video data result\n", result);
        //console.log("Server side save-video-data", result);
        return NextResponse.json({ "result": result });
    } catch (e) {
        console.log("Error in get-video-script", e);
        return NextResponse.json({ "Error in get-video-script": e });
    }
}