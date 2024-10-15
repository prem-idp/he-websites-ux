"use client";

import React, { useRef, useState } from 'react';
import AdviceCourseCard from '../cards/advice-course/advicecoursecard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdviceCourseCardSkeleton from '../skeleton/advicecoursecardskeleton';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination} from 'swiper/modules';

const AdviceCourseSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0, 
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows : false,
          centerPadding: "32px",
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : false,
          centerMode: true,
          centerPadding: "16px",
        }
      },
    ]
  };
  return (
    <>
      <div className='advice-course-container px-[0] xl2:px-[0]  mt-[48px]'>
        <h4 className='font-bold text-neutral-900 mb-[16px] px-[16px] md:px-[24px] xl2:px-[0]'>Advice on choosing a course</h4>
        
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
            <div>
            <AdviceCourseCardSkeleton />
            </div>
            <div>
            <AdviceCourseCard />
            </div>
          </Slider>
          <div className='flex justify-center mt-[34px]'>
            <a href='#' className='flex items-center w-fit font-semibold para text-secondary-500 hover:underline gap-[8px]'>
            View more advice
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6" stroke="#3460DC" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </a>
          </div> 
        </div>


        <Swiper
        freeMode={true}
        navigation={true}
        pagination={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
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

export default AdviceCourseSlider;
