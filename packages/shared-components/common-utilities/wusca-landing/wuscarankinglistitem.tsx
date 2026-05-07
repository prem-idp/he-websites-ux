import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WuscaRankingListItemProps {
  rank: string;
  movement: string;
  movementDirection: "up" | "down" | "new";
  logo: string;
  name: string;
  rating: number;
  category: string;
}

const Wuscarankinglistitem = ({
  rank,
  movement,
  movementDirection,
  logo,
  name,
  rating,
  category,
}: WuscaRankingListItemProps) => {
  return (
    <div className="flex items-center py-[12px] md:py-[16px] px-[12px] md:px-[24px] border-b border-grey-200 last:border-b-0">
      {/* Rank */}
      <div className="shrink-0 w-[28px] md:w-[36px]">
        <span className="font-inter font-normal text-x-small md:text-small text-grey300">
          {rank}
        </span>
      </div>

      {/* Movement */}
      <div className="flex items-center gap-[2px] shrink-0 w-[28px] md:w-[36px]">
        {movementDirection === "up" && (
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 4L4 1L1 4"
              stroke="#333F48"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {movementDirection === "down" && (
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L4 4L7 1"
              stroke="#333F48"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {movementDirection === "new" && (
          <span className="x-small font-semibold text-positive-dark">new</span>
        )}
        <span className="x-small text-grey-500">{movement}</span>
      </div>

      {/* Logo */}
      <div className="w-[36px] h-[36px] md:w-[48px] md:h-[48px] shrink-0 rounded-[4px] overflow-hidden">
        <Image
          src={logo}
          alt={name}
          width={48}
          height={48}
          className="object-cover w-full h-full"
        />
      </div>

      {/* University Info */}
      <div className="flex flex-col gap-[2px] flex-1 min-w-0 ml-[8px] md:ml-[16px]">
        <Link
          href="#"
          className="font-inter font-semibold text-x-small md:text-small text-grey300 hover:text-primary-400 hover:underline line-clamp-1"
        >
          {name}
        </Link>
        <div className="flex items-center gap-[4px]">
          <Image
            src="/static/assets/icons/blue-star-icon.svg"
            width={14}
            height={14}
            alt="Rating"
          />
          <span className="x-small font-semibold text-grey300">{rating}</span>
          <span className="x-small text-grey-500 hidden md:inline">
            {category}
          </span>
        </div>
      </div>

      {/* Get Prospectus Button */}
      <div className="shrink-0 ml-[8px] md:ml-[16px]">
        <Link
          href="#"
          className="inline-block whitespace-nowrap x-small font-semibold text-primary-400 border border-primary-400 rounded-[20px] px-[10px] md:px-[14px] py-[6px] hover:bg-primary-400 hover:text-white transition-colors"
        >
          Get prospectus
        </Link>
      </div>
    </div>
  );
};

export default Wuscarankinglistitem;
