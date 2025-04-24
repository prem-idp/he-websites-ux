"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Video from "../videos/video";

const ReviewThumbGallerySliderComponents = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Sample media list with both images and videos
  const thumbItems = [
    { type: "image", src: "/static/assets/images/course-details/Frame_9350.jpg" },
    { type: "image", src: "/static/assets/images/course-details/Frame_9351.jpg" },
    { type: "video", src: "/static/assets/images/course-details/Frame_9352.jpg" },
    { type: "video", src: "/static/assets/images/course-details/Frame_9352.jpg" },
    { type: "image", src: "/static/assets/images/course-details/Frame_9353.jpg" },
    { type: "video", src: "/static/assets/images/course-details/Frame_9354.jpg" },
    { type: "image", src: "/static/assets/images/course-details/Frame_9355.jpg" },
  ];
  const mediaItems = [
    { type: "image", src: "/static/assets/images/course-details/Frame_9350.jpg" },
    { type: "image", src: "/static/assets/images/course-details/Frame_9351.jpg" },
    { type: "video", src: "/static/assets/videos/sample-video.mp4" },
    { type: "video", src: "/static/assets/videos/sample-video.mp4" },
    { type: "video", src: "/static/assets/videos/sample-video2.mp4" },
    { type: "image", src: "/static/assets/images/course-details/Frame_9353.jpg" },
  ];
 
  useEffect(() => {
    setIsMobileView(window.innerWidth <= 767);
  }, []);

  const swiperWrapperRef = useRef<HTMLDivElement | null>(null);
  const handleSlideChange = (swiper: any) => {
    console.log("Slide changed to index:", swiperWrapperRef.current);

    if (swiperWrapperRef.current) {
      const videos = swiperWrapperRef.current.querySelectorAll('video');
      console.log("Videos found:", videos);
      videos.forEach((video) => {
        if (!video.paused) {
          video.pause();
        }
      });
  
      // Optional: autoplay the current video
      const currentSlide = swiper.slides[swiper.activeIndex];
      const currentVideo = currentSlide.querySelector('video');
      if (currentVideo) {
        currentVideo.play();
      }
    }
  
    console.log("Slide changed to index:", swiper.activeIndex);
  };

  return (
    <div ref={swiperWrapperRef} className="max-w-lg w-full lg:w-[907px] mx-auto">
      {/* Main Swiper */}
      <Swiper
      onSlideChange={handleSlideChange}
        spaceBetween={8}
        navigation={true}
        autoHeight={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="reviewMainSwiper MultiSwiper"
      >
        {mediaItems.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "image" ? (
              <img src={item.src} alt={`Slide ${index}`} className="w-full rounded-lg" />
            ) : (
              <Video />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerGroupSkip={3}
        freeMode={true}
        watchSlidesProgress={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
            slidesPerGroup: 3,
          },
        }}
        modules={[Thumbs]}
        className="thumbSwiper"
      >
        {thumbItems.map((item, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            {item.type === "image" ? (
              <img src={item.src} alt={`Thumbnail ${index}`} className="w-full h-auto object-cover rounded-[4px]" />
            ) : (
              <>
              <button className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer">
                <Image alt="video_play_icon" loading="lazy" width="52" height="52" decoding="async" data-nimg="1" src="/static/assets/icons/video_play_icon.svg" /></button>
              <img src={item.src} alt={`Thumbnail ${index}`} className="w-full h-auto object-cover rounded-[4px]" />
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewThumbGallerySliderComponents;
