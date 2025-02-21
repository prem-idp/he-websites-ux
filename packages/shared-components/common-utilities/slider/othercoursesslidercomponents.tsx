"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination} from 'swiper/modules';
import Scholarshipunicard from '../cards/scholarshipuniversities/scholarshipunicard';
import Othercoursesmaylikecard from '../cards/other-courses-you-may-like/othercoursesmaylikecard';
const Othercoursesslidercomponents = () => {
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
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,            
          },
        }}
        modules={[FreeMode, Pagination, Navigation]} 
        className="MultiSwiper">
            <SwiperSlide>
                <Othercoursesmaylikecard />
            </SwiperSlide>
            <SwiperSlide>
                <Othercoursesmaylikecard />
            </SwiperSlide>
            <SwiperSlide>
                <Othercoursesmaylikecard />
            </SwiperSlide>
            <SwiperSlide>
                <Othercoursesmaylikecard />
            </SwiperSlide>
            <SwiperSlide>
                <Othercoursesmaylikecard />
            </SwiperSlide>
            <SwiperSlide>
                <Othercoursesmaylikecard />
            </SwiperSlide>            
          </Swiper>
        </div>
    </>
  );
};

export default Othercoursesslidercomponents;
