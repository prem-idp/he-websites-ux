import React, { useRef, useState } from 'react';
import Image from 'next/image';

const Video = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onClickPlay = () => {
    setIsPlaying(true);
  };

  const onClickPause = () => {
    setIsPlaying(false);
  };

  const playVideo = () => {
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
        onPlay={onClickPlay}
        onPause={onClickPause}
        poster="/static/assets/images/course-details/Frame_9352.jpg"
      >
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/899704911/rendition/720p/file.mp4?loc=external&oauth2_token_id=1255563299&signature=8eec76c77c81d1bf9ee9a1a7de4b147d341691ec131b46e043ad6371a7014284"
          type="video/mp4"
        />
      </video>
      {!isPlaying && (
        <button
          onClick={playVideo}
          className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer"
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
