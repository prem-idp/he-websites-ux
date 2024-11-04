"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

export const OurPartnerComponent = () => {
  return (
    <>
      <section className="bg-grey-50 py-[40px] md:pt-[64px] md:pb-[39px] px-[16px] md:px-[20px] xl2:px-0">
        <div className="max-w-container mx-auto">
          <h2 className="text-center font-bold">
            Partnered with over 100 universities
          </h2>
          <div className="flex items-center pt-[32px]">
            <Swiper
              autoplay={{
                delay: 0,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 5,
                  spaceBetween: 16,
                  freeMode:true
                },
                1200: {
                  slidesPerView: 10,
                  spaceBetween: 64,
                },
              }}
              modules={[Autoplay, EffectFade, Pagination]}
              className="mySwiper partner"
              pagination={true}
              speed={3000}
              loop={true}
            >
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner1.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner2.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner3.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner4.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner5.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner6.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner7.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner8.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner9.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner10.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner1.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner2.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner3.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner4.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
            <SwiperSlide><div className="bg-white p-[4px] rounded-[8px] shadow-custom-8 w-[64px] h-[64px]"><Image className="rounded-[4px]" src="/assets/images/our-partner/partner5.png" alt="Partnered Uni Logo" width={64} height={64}/></div></SwiperSlide>
          </Swiper>
        </div>
          <div className='flex justify-center mt-[16px] lg:hidden lg:mt-[28px]'>
                  <a href='#' className='flex items-center w-fit font-semibold para text-primary-400 hover:underline gap-[8px]'>
                  View more
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6" stroke="#3460DC" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </a>
                </div> 
        </div>
      </section>
    </>
  );
};

export default OurPartnerComponent;
