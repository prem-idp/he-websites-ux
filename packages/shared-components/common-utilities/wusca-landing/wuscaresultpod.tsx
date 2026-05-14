"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartBlue } from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";

interface WuscaResultPodProps {
  rank: string;
  universityName: string;
  rating: number;
  reviewCount: number;
  badge: string;
  description: string;
  campusImage: string;
  logo: string;
  lovedMostBadges: string[];
}

const WuscaResultPod = ({
  rank,
  universityName,
  rating,
  reviewCount,
  badge,
  description,
  campusImage,
  logo,
  lovedMostBadges,
}: WuscaResultPodProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row border border-grey-200 rounded-[16px] overflow-hidden shadow-custom-2 bg-white">
      {/* Left: Campus Image */}
      <div className="relative w-full h-[200px] md:min-h-[392px] lg:md:min-h-[332px] md:w-[280px] lg:w-[500px] shrink-0 overflow-hidden">
        <Image src={logo} alt={universityName} fill className="object-cover" />
        {/* Logo */}
        <div className="absolute top-[16px] left-[16px] md:top-[24px] md:left-[24px]">
          <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-[8px] overflow-hidden shadow-custom-3 bg-white">
            <Image
              src={campusImage}
              alt={universityName}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Heart icon */}
        <button
          type="button"
          className="absolute top-[16px] right-[16px] md:top-[24px] md:right-[24px] w-[40px] h-[40px] rounded-[24px] bg-white border border-blue-500 flex items-center justify-center shadow-custom-1 cursor-pointer hover:bg-blue-100"
          aria-label="Add to shortlist"
        >
          <HeartBlue />
        </button>
      </div>

      {/* Right: Content */}
      <div className="flex flex-col justify-between p-[16px] md:p-[24px] gap-[16px] md:gap-[20px] flex-1">
        {/* University Info */}
        <div className="flex flex-col gap-[4px]">
          {/* Rank */}
          <span className="font-inter font-normal text-para text-grey300">
            {rank}
          </span>

          {/* University Name */}
          <Link
            href="#"
            className="font-farro font-bold text-heading5 text-primary-400 hover:underline"
          >
            {universityName}
          </Link>

          {/* Rating Row */}
          <div className="flex items-center gap-[8px] md:gap-[16px] flex-wrap">
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
          <div className="mt-[4px]">
            <p
              className={`font-inter font-normal text-para text-grey300 ${!isExpanded ? "line-clamp-3" : ""}`}
            >
              {description}
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-[4px] text-grey300 font-inter font-normal text-small underline cursor-pointer mt-[4px]"
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

        {/* Bottom: Badges + Button */}
        <div className="flex flex-col lg:flex-row gap-[16px] lg:items-end">
          <div className="flex flex-col gap-[4px] flex-1 min-w-0">
            <span className="font-inter font-semibold text-small text-grey300">
              What students love most
            </span>
            <div className="flex flex-wrap gap-[4px]">
              {lovedMostBadges.map((badgeLabel, index) => (
                <span
                  key={index}
                  className="font-inter font-bold text-x-small uppercase bg-grey-100 text-grey500 px-[6px] py-[1px] rounded-[4px] leading-[18px] text-center"
                >
                  {badgeLabel}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="#"
            className="w-full lg:w-auto text-center lg:shrink-0 font-inter font-semibold text-small text-primary-400 border border-primary-400 rounded-[20px] px-[20px] py-[10px] hover:bg-primary-400 hover:text-white transition-colors whitespace-nowrap shadow-custom-1"
          >
            Get prospectus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WuscaResultPod;
