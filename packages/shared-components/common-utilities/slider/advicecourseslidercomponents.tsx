"use client";

import React, { useRef, useState } from 'react';
import AdviceCourseCard from '../cards/advice-course/advicecoursecard';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import AdviceCourseCardSkeleton from '../skeleton/advicecoursecardskeleton';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Navigation, Pagination} from 'swiper/modules';

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
        className="MultiSwiper">
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
