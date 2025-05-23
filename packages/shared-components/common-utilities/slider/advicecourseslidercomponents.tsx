"use client";
import React from "react";
import AdviceCourseCard from "../cards/advice-course/advicecoursecard";
import AdviceCourseCardSkeleton from "../skeleton/advicecoursecardskeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
const Advicecourseslidercomponents = () => {
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
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="MultiSwiper"
        >
          <SwiperSlide>
            <AdviceCourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdviceCourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdviceCourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdviceCourseCardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <AdviceCourseCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdviceCourseCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Advicecourseslidercomponents;
