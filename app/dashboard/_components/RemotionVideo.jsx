import React, { useEffect } from "react";
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
  // console.log(
  //   "RemotionVideo Props",
  //   videoScript,
  //   imageList,
  //   audioFileUrl,
  //   audioCaption,
  //   setDurationInFrame
  // );
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const getDurationFrames = () => {
    return (audioCaption[audioCaption?.length - 1]?.end / 1000) * fps;
  };

  useEffect(() => {
    // Set the duration in frames after the component has mounted
    if (audioCaption?.length > 0) {
      const duration = getDurationFrames();
      setDurationInFrame(duration);
    }
  }, [audioCaption, fps, setDurationInFrame]);

  const getCurrentCaptions = () => {
    const currentTime = (frame / fps) * 1000; // Convert frame number to milliseconds
    const currentCaption = audioCaption.find(
      (word) => word.start && currentTime <= word.end
    );
    return currentCaption ? currentCaption?.text : "";
  };

  return (
    videoScript && (
      <AbsoluteFill className="bg-black">
        {imageList
          ?.filter((item) => item) // Filter out undefined or invalid items
          .map((item, index) => {
            const startTime = (index * getDurationFrames()) / imageList?.length;
            const duration = getDurationFrames();
            const scale = (index) =>
              interpolate(
                frame,
                [startTime, startTime + duration / 2, startTime + duration],
                index % 2 === 0 ? [1, 1.8, 1] : [1.8, 1, 1.8],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              );

            return (
              <div key={index}>
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
                        textAlign: "center",
                      }}
                    >
                      <h2 className="text-2xl">{getCurrentCaptions()}</h2>
                    </AbsoluteFill>
                  </AbsoluteFill>
                </Sequence>
              </div>
            );
          })}

        {audioFileUrl && <Audio src={audioFileUrl} />}
      </AbsoluteFill>
    )
  );
}

export default RemotionVideo;