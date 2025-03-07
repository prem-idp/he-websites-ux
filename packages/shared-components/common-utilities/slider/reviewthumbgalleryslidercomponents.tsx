"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Reviewthumbgalleryslidercomponents = () => {
  const [isMobileView, setIsMobile] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const images = [
    "/static/assets/images/course-details/Frame_9350.jpg",
    "/static/assets/images/course-details/Frame_9351.jpg",
    "/static/assets/images/course-details/Frame_9352.jpg",
    "/static/assets/images/course-details/Frame_9353.jpg",
    "/static/assets/images/course-details/Frame_9354.jpg",
    "/static/assets/images/course-details/Frame_9355.jpg",
    "/static/assets/images/course-details/Frame_9350.jpg",
    "/static/assets/images/course-details/Frame_9351.jpg",
    "/static/assets/images/course-details/Frame_9352.jpg",
    "/static/assets/images/course-details/Frame_9353.jpg",
    "/static/assets/images/course-details/Frame_9354.jpg",
    "/static/assets/images/course-details/Frame_9355.jpg",
    "/static/assets/images/course-details/Frame_9355.jpg",
    "/static/assets/images/course-details/Frame_9350.jpg",
  ];

  useEffect(() => {
    let isMobile = window.innerWidth >= 767;
    setIsMobile(isMobile);
    console.log(isMobile);
  }, []);

  return (
    <>
      <div className="max-w-lg mx-auto">
        {/* Main Swiper */}
        <Swiper
          spaceBetween={8}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          className="reviewMainSwiper MultiSwiper">
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index}`} className="w-full rounded-lg" />
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
              slidesPerGroup: 3
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
              slidesPerGroup: 3
            },
          }}
          modules={[Thumbs]}
          className="thumbSwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <img src={src} alt={`Thumbnail ${index}`} className="w-full h-auto object-cover rounded-[4px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Reviewthumbgalleryslidercomponents