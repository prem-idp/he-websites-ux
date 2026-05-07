"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

interface CategoryCardData {
  title: string;
  badge: string;
  bgColor: string;
  badgeBgColor: string;
  badgeTextColor: string;
  image: string;
}

interface WuscaRankingCategoryGridProps {
  cards: CategoryCardData[];
}

const LeftArrow = () => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999"
      stroke="#3460DC"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrow = () => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6"
      stroke="#3460DC"
      strokeWidth="1.48148"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Wuscarankingcategorygrid = ({ cards }: WuscaRankingCategoryGridProps) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
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
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="MultiSwiper !px-[0]"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Link
              href="#"
              className={`block ${card.bgColor} rounded-[8px] overflow-hidden hover:outline-2 hover:outline hover:outline-primary-400`}
            >
              <div className="flex justify-between h-[200px]">
                <div className="flex flex-col justify-between p-[16px] pr-[0]">
                  <div
                    className={`w-fit uppercase font-bold x-small ${card.badgeTextColor} ${card.badgeBgColor} px-[8px] py-[2px] rounded-[4px]`}
                  >
                    {card.badge}
                  </div>
                  <h5 className="font-bold">{card.title}</h5>
                </div>
                <Image
                  src={card.image}
                  width={186}
                  height={200}
                  alt={card.title}
                  className="object-cover h-[200px] w-[186px] shrink-0"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Arrow Button */}
      {!isBeginning && (
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-[-18px] top-[100px] -translate-y-1/2 z-10 w-[37px] h-[37px] rounded-full bg-white border border-primary-400 flex items-center justify-center hover:bg-primary-50 cursor-pointer"
          aria-label="Previous slide"
        >
          <LeftArrow />
        </button>
      )}

      {/* Right Arrow Button */}
      {!isEnd && (
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-[-18px] top-[100px] -translate-y-1/2 z-10 w-[37px] h-[37px] rounded-full bg-white border border-primary-400 flex items-center justify-center hover:bg-primary-50 cursor-pointer"
          aria-label="Next slide"
        >
          <RightArrow />
        </button>
      )}
    </div>
  );
};

export default Wuscarankingcategorygrid;
