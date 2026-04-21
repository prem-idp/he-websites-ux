"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination } from "swiper/modules";

import Reviewscard from "../cards/reviews-card/reviewscard";

const Reviewslidercomponents = ({ maxSlidesPerView, className, totalCards }: { maxSlidesPerView?: number; className?: string; totalCards?: number }) => {
  const max = maxSlidesPerView || 3;
  const cardCount = totalCards || 6;
  return (
    <>
      <div className="slider-container">
        <Swiper
          pagination={true}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
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
          modules={[FreeMode, Pagination, Navigation]}
          className={`MultiSwiper ${className || ""}`}
        >
          {Array.from({ length: cardCount }).map((_, index) => (
            <SwiperSlide key={index}>
              <Reviewscard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Reviewslidercomponents;
