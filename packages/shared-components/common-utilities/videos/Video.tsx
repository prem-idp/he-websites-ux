import React, { useRef, useState } from "react";
import Image from "next/image";

const Video = ({featuredData}:any) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickPlay = (event:React.FormEvent) => {
    event.stopPropagation();
    setIsPlaying(true);
  };

  const onClickPause = (event:React.FormEvent) => {
    event.stopPropagation();
    setIsPlaying(false);
  };

  const playVideo = (event:React.FormEvent) => {
    event.stopPropagation();
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <>
      <video
        ref={videoRef}
        className="w-full"
        controls
        preload="none"
        onPlay={(event)=>onClickPlay(event)}
        onPause={(event)=>onClickPause(event)}
        poster={
          featuredData?.thumbnailPath
            ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${featuredData?.thumbnailPath}`
            : "/static/assets/images/search-results/thumbnail.png"
        }
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
