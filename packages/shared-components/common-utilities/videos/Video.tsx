import React, { useRef, useState,useEffect} from "react";
import Image from "next/image";
import emitter from "@packages/lib/eventEmitter/eventEmitter";

const Video = ({featuredData}:any) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = (event:React.FormEvent) => {
    event.stopPropagation();
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const onClickPause = (event:React.FormEvent) => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
      videoRef.current.currentTime = 0; // Reset video position (optional)
      setIsPlaying(false);
    }
  };

  const handleVideoClick = (event:React.FormEvent) => {
    event.stopPropagation(); // Prevents the parent onClick from being triggered
  };

  useEffect(() => {
    emitter.on("pauseVideo", onClickPause); // while click the filter button
    return () => {
      emitter.off("pauseVideo", onClickPause);
    };
  }, [isPlaying]);
  return (
    <>
      <video
        ref={videoRef}
        className="w-full"
        controls
        preload="none"
        onClick={(event) => handleVideoClick(event)} 
        onPlay={(event)=>playVideo(event)}
        onPause={(event)=>onClickPause(event)}
        poster={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${featuredData?.thumbnailPath}`}
      >
        <source
          src={
            featuredData?.mediaPath
              ? `${featuredData?.mediaPath}`
              : "/"
          }
          type="video/mp4"
        />
      </video>
      {!isPlaying && (
        <button
          onClick={(event)=>playVideo(event)}
          className="ripple-circle absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer"
        >
          <Image
            alt="video_play_icon"
            loading="lazy"
            width="52"
            height="52"
            src="/static/assets/icons/video_play_icon.svg"
          />
        </button>
      )}
    </>
  );
};

export default Video;
