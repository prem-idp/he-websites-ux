"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

import Reviewscard from "../cards/reviews-card/reviewscard";

const Reviewslidercomponents = ({ maxSlidesPerView, className, totalCards, autoplay = false, hideNavigation = false, hideReadMore = false, mobileSpaceBetween = 8 }: { maxSlidesPerView?: number; className?: string; totalCards?: number; autoplay?: boolean; hideNavigation?: boolean; hideReadMore?: boolean; mobileSpaceBetween?: number }) => {
  const max = maxSlidesPerView || 3;
  const cardCount = totalCards || 6;
  return (
    <>
      <div className="slider-container">
        <Swiper
          pagination={true}
          navigation={!hideNavigation}
          autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: mobileSpaceBetween,
            },
            768: {
              slidesPerView: Math.min(2, max),
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: Math.min(3, max),
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          className={`MultiSwiper ${className || ""}`}
        >
          {Array.from({ length: cardCount }).map((_, index) => (
            <SwiperSlide key={index}>
              <Reviewscard hideReadMore={hideReadMore} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Reviewslidercomponents;
