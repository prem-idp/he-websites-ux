"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Wuscacategorycard from "./wuscacategorycard";

interface CategoryCardData {
  title: string;
  badge: string;
  bgColor: string;
  badgeBgColor: string;
  badgeTextColor: string;
  image: string;
}

interface WuscaCategoryGridProps {
  cards: CategoryCardData[];
}

const Wuscacategorygrid = ({ cards }: WuscaCategoryGridProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="slider-container">
          <Swiper
            pagination={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
            }}
            modules={[FreeMode, Pagination]}
            className="MultiSwiper"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <Wuscacategorycard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-[20px]">
          {cards.map((card, index) => (
            <Wuscacategorycard key={index} {...card} />
          ))}
        </div>
      )}
    </>
  );
};

export default Wuscacategorygrid;
