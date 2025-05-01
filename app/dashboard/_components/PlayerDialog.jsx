import React, { use, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Player } from "@remotion/player";
import RemotionVideo from "./RemotionVideo";
import { db } from "@/configs/db";
import { Button } from "@/components/ui/button";
import { videoTable } from "@/configs/schema";
import { useRouter } from "next/navigation";
import { eq } from "drizzle-orm";
import SelectDuration from "../create-new/_components/SelectDuration";

function PlayerDialog({ playVideo, videoId }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [videoData, setVideoData] = useState();
  const [durationInFrame, setDurationInFrame] = useState(100);
  const router = useRouter();
  useEffect(() => {
    setOpenDialog(!openDialog);
    videoId && GetVideoData();
  }, [playVideo, videoId]);
  console.log("videoId", videoId);
  const GetVideoData = async () => {
    const result = await db
      .select()
      .from(videoTable)
      .where(eq(videoTable.id, videoId));
    console.log("Video Data Fetched:", result);

    // console.log("videoData:", videoData);

    setVideoData(result[0]);
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="bg-white flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold my-5">
            Your video is ready
          </DialogTitle>
          {/* <DialogDescription> */}{" "}
          <div>
            <Player
              // acknowledgeRemotionLicense
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
            <div className="flex gap-10 mt-10 ">
              <Button
                variant="ghost"
                onClick={() => {
                  router.replace("/dashboard");
                  setOpenDialog(false);
                }}
              >
                Cancel
              </Button>
              {/* <Button>Export</Button> */}
            </div>
            {/* </DialogDescription> */}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default PlayerDialog;
