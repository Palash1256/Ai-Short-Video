import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Player } from "@remotion/player";
import RemotionVideo from "./RemotionVideo";
import { db } from "@/configs/db";
import { Button } from "@/components/ui/button";
import { videoTable } from "@/configs/schema";
import { useRouter } from "next/navigation";
import { eq } from "drizzle-orm";

function PlayerDialog({ playVideo, videoId }) {
  const [openDialog, setOpenDialog] = useState(true);
  const [videoData, setVideoData] = useState();
  const [durationInFrame, setDurationInFrame] = useState(100);
  const router = useRouter();

  useEffect(() => {
    setOpenDialog(!openDialog);
    videoId && GetVideoData();
  }, [playVideo, videoId]);

  const GetVideoData = async () => {
    const result = await db
      .select()
      .from(videoTable)
      .where(eq(videoTable.id, videoId));
    console.log("Video Data Fetched:", result);
    setVideoData(result[0]);
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="bg-white flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold my-5">
            Your video is ready
          </DialogTitle>
          <div>
            <Player
              component={RemotionVideo}
              durationInFrames={Number(durationInFrame.toFixed(0))}
              compositionWidth={300}
              compositionHeight={450}
              fps={30}
              controls={true}
              inputProps={{
                ...videoData,
                setDurationInFrame: (frameValue) =>
                  setDurationInFrame(frameValue),
              }}
            />
            <div className="flex mt-10 justify-center items-center">
              <Button
                onClick={() => {
                  router.replace("/dashboard");
                  setOpenDialog(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default PlayerDialog;