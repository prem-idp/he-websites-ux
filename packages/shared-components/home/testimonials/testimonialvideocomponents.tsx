"use client";

import React, { useRef, useState} from "react";
import Image from "next/image";

const TestimonialVideo = ({ contentfullRightData }: any) => {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const clickPlayIcon = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="video-container flex justify-center items-center lg:items-start xl:items-center rounded-[8px] overflow-hidden relative">
              <div className={`video ${isVideoPlaying ? 'block' : 'hidden'}`}>
            	<video ref={videoRef} 
                     className="w-full" 
                     data-testid="video-element"
                     src={contentfullRightData?.multimediaBlockLeft?.videoUpload?.url} 
                     width={contentfullRightData?.multimediaBlockLeft?.videoUpload?.width || 600} 
                     height={contentfullRightData?.multimediaBlockLeft?.videoUpload?.height || 316}  
                     controls
                     data-src={contentfullRightData?.multimediaBlockLeft?.videoUpload?.url}>
		</video>
	      </div>
	      <div className={`block ${isVideoPlaying ? 'hidden' : 'block'}`}>	    
          {contentfullRightData?.multimediaBlockLeft?.thumbnail?.url ? (
                <Image
                    className="block w-full"
                    src={contentfullRightData?.multimediaBlockLeft?.thumbnail?.url}
                    alt="video thumbnail image"
                    width={contentfullRightData?.multimediaBlockLeft?.thumbnail?.width || 600}
                    height={contentfullRightData?.multimediaBlockLeft?.thumbnail?.height || 316}
                    data-src={contentfullRightData?.multimediaBlockLeft?.thumbnail?.url}
                  />
          ) : null}             
              <div className="video-play-icon absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer" onClick={clickPlayIcon}>
                <Image
                  src="/static/assets/icons/video_play_icon.svg"
                  width="52"
                  height="52"
                  alt=""
                  data-src="/static/assets/icons/video_play_icon.svg"
                />
              	</div>
              </div>
	    </div>

  );
};

export default TestimonialVideo;