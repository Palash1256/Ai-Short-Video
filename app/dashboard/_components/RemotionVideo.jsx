import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useVideoConfig,
  Audio,
  Img,
  useCurrentFrame,
} from "remotion";
import { interpolate } from "remotion";
function RemotionVideo({
  videoScript,
  imageList,
  audioFileUrl,
  audioCaption,
  setDurationInFrame,
}) {
  console.log(
    "RemotionVideo Props",
    videoScript,
    imageList,
    audioFileUrl,
    audioCaption,
    setDurationInFrame
  );
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const getDurationFrames = () => {
    setDurationInFrame(
      (audioCaption[audioCaption?.length - 1]?.end / 1000) * fps
    );
    return (audioCaption[audioCaption?.length - 1]?.end / 1000) * fps;
  };
  // const getDurationFrames = () => {
  //   const duration = (audioCaption[audioCaption?.length - 1]?.endTime / 1000) * fps;
  //  //if (typeof setDurationInFrame === "function") {
  //     setDurationInFrame(duration);
  //   //}
  //   console.log("duration",duration)
  //   return duration;
  // };

  const getCurrentCaptions = () => {
    const currentTime = (frame / 30) * 1000; //convert frame number to millisecond (30fps)
    const currentCaption = audioCaption.find(
      (word) => word.start && currentTime <= word.end
    );
    return currentCaption ? currentCaption?.text : "";
  };

  return (
    videoScript && (
      <AbsoluteFill className="bg-black">
        {imageList?.map((item, index) => {
          const startTime = (index * getDurationFrames()) / imageList?.length;
          const duration = getDurationFrames();
          const scale = (index)=> interpolate(
            frame,
            [startTime, startTime + duration / 2, startTime + duration],
            index%2==0 ? [1, 1.8, 1]:[1.8,1,1.8],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            // zoom in zoom out
          );

          return (
            <div key={index}>
              console.log("item...................",item)
              <Sequence
                key={index}
                from={startTime}
                durationInFrames={getDurationFrames()}
              >
                <AbsoluteFill
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Img
                    key={index}
                    src={item}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: `scale(${scale(index)})`,
                    }}
                  />

                  <AbsoluteFill
                    style={{
                      color: "white",
                      bottom: 50,
                      height: 150,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      // alignItems: "center",
                      top:"undefined",
                      textAlign: "center",
                      // important to come above image
                    }}
                  >
                    <h2 className="text-2xl">{getCurrentCaptions()}</h2>
                  </AbsoluteFill>
                </AbsoluteFill>
              </Sequence>
            </div>
          );
        })}

        <Audio src={audioFileUrl}/>
        {/* {audioFileUrl && <Audio src={audioFileUrl} />} */}
      </AbsoluteFill>
    )
  );
}

export default RemotionVideo;
