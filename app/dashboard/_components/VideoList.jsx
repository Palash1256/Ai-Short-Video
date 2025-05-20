import React from "react";
import { Thumbnail } from "@remotion/player";
import RemotionVideo from "./RemotionVideo";
import PlayerDialog from "./PlayerDialog";
import { useState } from "react";
function VideoList({ videoList }) {
  // console.log("video list data", videoList);
  const [openPlayDialog, setOpenPlayerDialog] = useState(false);
  const [videoId, setVideoId] = useState();

  return (
     <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 justify-center items-center md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
      {videoList?.map((video, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer hover:scale-105 transition-all w-fit"
            onClick={() => {
              setOpenPlayerDialog(Date.now());
              setVideoId(video?.id);
            }}
          >
            <Thumbnail
              component={RemotionVideo}
              compositionWidth={250}
              compositionHeight={300}
              frameToDisplay={30}
              durationInFrames={120}
              fps={30}
              style={{
                borderRadius: 15,
                // margin: "12px",
                // padding: "34px",
              }}
              inputProps={{
                ...video,
                setDurationInFrame: (v) => console.log(v),
              }}
            />
          </div>
        );
      })}

      <PlayerDialog playVideo={openPlayDialog} videoId={videoId} />
    </div>
  );
}

export default VideoList;
