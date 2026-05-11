"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { HeartBlue } from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";

interface ReviewBreakdown {
  star: number;
  percentage: number;
}

interface WuscaWinnerShowcaseProps {
  universityName: string;
  rank: string;
  rating: number;
  reviewCount: number;
  badge: string;
  description: string;
  heroImages: string[];
  logo: string;
  reviewBreakdown: ReviewBreakdown[];
  lovedMostBadges: string[];
}

const WuscaWinnerShowcase = ({
  universityName,
  rank,
  rating,
  reviewCount,
  badge,
  description,
  heroImages,
  logo,
  reviewBreakdown,
  lovedMostBadges,
}: WuscaWinnerShowcaseProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-grey-200 rounded-[16px] overflow-hidden shadow-custom-1 bg-white">
      {/* Image Carousel with Swiper built-in navigation */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[550px] slider-container">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="w-full h-full MultiSwiper"
        >
          {heroImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 15.2%), url(${img})`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Top Row: Logo + Shortlist (absolute over swiper) */}
        <div className="absolute top-[16px] left-[16px] right-[16px] flex justify-between items-start z-10 pointer-events-none">
          <div className="w-[64px] h-[64px] rounded-[8px] overflow-hidden shadow-custom-3 bg-white pointer-events-auto">
            <Image
              src={logo}
              alt={universityName}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <button
            type="button"
            className="w-[40px] h-[40px] rounded-[24px] bg-white border border-blue-500 flex items-center justify-center shadow-custom-1 cursor-pointer pointer-events-auto hover:bg-blue-100"
            aria-label="Add to shortlist"
          >
            <HeartBlue />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-[24px] md:p-[32px] lg:px-[64px] lg:py-[32px] flex flex-col gap-[10px]">
        {/* Top Row: University Info + Review Breakdown */}
        <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[40px] items-start lg:items-end">
          {/* Left: University Info */}
          <div className="flex flex-col gap-[4px] flex-1 min-w-0">
            {/* Rank */}
            <span className="font-inter font-normal text-para text-grey300">
              {rank}
            </span>

            {/* University Name */}
            <Link
              href="#"
              className="font-farro font-bold text-heading5 lg:text-heading3 text-primary-400 hover:underline"
            >
              {universityName}
            </Link>

            {/* Rating Row */}
            <div className="flex items-center gap-[16px] flex-wrap mt-[4px]">
              <div className="flex items-center gap-[4px]">
                <Image
                  src="/static/assets/icons/blue-star-icon.svg"
                  width={24}
                  height={24}
                  alt="Rating"
                />
                <span className="font-inter font-normal text-small text-grey300">
                  {rating}
                </span>
              </div>
              <Link
                href="#"
                className="font-inter font-normal text-small text-primary-400 hover:underline"
              >
                {reviewCount} reviews
              </Link>
              <span className="font-inter font-bold text-x-small uppercase bg-grey-100 text-grey500 px-[8px] py-[0px] rounded-[4px] leading-[18px]">
                {badge}
              </span>
            </div>

            {/* Description */}
            <div className="mt-[12px]">
              <p
                className={`font-inter font-normal text-para text-grey300 ${!isExpanded ? "line-clamp-3" : ""}`}
              >
                {description}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-[4px] text-grey300 font-inter font-normal text-small underline cursor-pointer w-fit mt-[4px]"
              >
                {isExpanded ? "Read less" : "Read more"}
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#333333"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Review Breakdown */}
          <div className="flex flex-col gap-[4px] w-full lg:w-[380px] shrink-0">
            <span className="font-inter font-semibold text-small text-grey300">
              Review breakdown
            </span>
            <div className="flex flex-col gap-[8px]">
              {reviewBreakdown.map((item) => (
                <div key={item.star} className="flex items-center gap-[17px]">
                  <span className="font-inter font-normal text-small text-grey300 w-[40px] shrink-0">
                    {item.star} star
                  </span>
                  <div className="relative flex-1 h-[8px]">
                    <div className="absolute inset-x-0 top-[2px] h-[4px] bg-grey-200 rounded-[2px]"></div>
                    <div
                      className="absolute left-0 top-0 h-[8px] bg-blue-200 rounded-[4px]"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="font-inter font-semibold text-small text-grey300 w-[32px] shrink-0 text-right">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row: What students love most + Get Prospectus */}
        <div className="flex flex-row gap-[16px] items-end mt-[16px]">
          {/* Left: Badges (wrapped into rows) */}
          <div className="flex flex-col gap-[8px] flex-1 min-w-0">
            <span className="font-inter font-semibold text-small text-grey300">
              What students love most
            </span>
            <div className="flex flex-wrap gap-[4px] max-w-[600px]">
              {lovedMostBadges.map((badgeLabel, index) => (
                <span
                  key={index}
                  className="font-inter font-bold text-x-small uppercase bg-grey-100 text-grey500 px-[6px] py-[1px] rounded-[4px] leading-[18px]"
                >
                  {badgeLabel}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Get Prospectus Button */}
          <Link
            href="#"
            className="shrink-0 font-inter font-semibold text-small text-primary-400 border border-primary-400 rounded-[20px] px-[20px] py-[10px] hover:bg-primary-400 hover:text-white transition-colors whitespace-nowrap shadow-custom-1"
          >
            Get prospectus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WuscaWinnerShowcase;
