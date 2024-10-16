"use client";

import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Reviewscard from '../cards/reviewscard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {FreeMode, Navigation, Pagination} from 'swiper/modules';

const Reviewslidercomponents = () => {
  return (
    <> 
    <div className='slider-container'>
      <Swiper
        freeMode={true}
        pagination={true}
        navigation= {true}
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
        className="mySwiper"
      >
              <SwiperSlide>
                  <Reviewscard />
              </SwiperSlide>
              <SwiperSlide>
                  <Reviewscard />
              </SwiperSlide>
              <SwiperSlide>
                  <Reviewscard />
              </SwiperSlide>
              <SwiperSlide>
                  <Reviewscard />
              </SwiperSlide>
              <SwiperSlide>
                  <Reviewscard />
              </SwiperSlide>
              <SwiperSlide>
                  <Reviewscard />
              </SwiperSlide>
              <SwiperSlide>
                  <Reviewscard />
              </SwiperSlide>
            </Swiper>   
          </div>
    </>
  );
};

export default Reviewslidercomponents;
