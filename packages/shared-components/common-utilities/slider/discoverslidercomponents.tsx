"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import DiscoverCard, { DiscoverCardData } from "./discovercard";

export type { DiscoverCardData };

interface DiscoversliderProps {
  cards: DiscoverCardData[];
}

const Discoverslidercomponents1 = ({ cards }: DiscoversliderProps) => {
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
              320: { slidesPerView: 1, spaceBetween: 8 },
              768: { slidesPerView: 2, spaceBetween: 16 },
            }}
            modules={[FreeMode, Pagination]}
            className="MultiSwiper"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <DiscoverCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="discover grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[20px]">
          {cards.map((card, index) => (
            <DiscoverCard key={index} card={card} />
          ))}
        </div>
      )}
    </>
  );
};

export default Discoverslidercomponents1;
