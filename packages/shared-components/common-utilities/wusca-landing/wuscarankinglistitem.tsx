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
    <>
      <div className="flex items-center border-b border-grey-200 last:border-b-0">
        <div className="flex gap-[8px] w-[92px] md:w-[124px] px-[16px] md:px-[24px] shrink-0">
          {/* Rank */}
          <div className="w-[28px] md:w-[36px]">
            <span className="font-inter font-normal text-x-small md:text-small">
              {rank}
            </span>
          </div>
          {/* Movement */}
          <div className="flex flex-col items-center gap-[2px] shrink-0 md:flex-row">
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
                  stroke="#168721"
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
                  stroke="#EF4444"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {movementDirection === "new" && (
              <span className="x-small font-semibold text-positive-dark">
                new
              </span>
            )}
            <span className="x-small text-grey-500">{movement}</span>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] md:items-center grow md:flex-row py-[16px] md:py-[4px] md:pr-[16px]">
          {/* Logo */}
          <div className="w-[64px] h-[64px] shrink-0 rounded-[4px] bg-white shadow-custom-3 overflow-hidden hidden md:block">
            <Image
              src={logo}
              alt={name}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>

          {/* University Info */}
          <div className="flex flex-col gap-[2px] flex-1 min-w-0">
            <Link
              href="#"
              className="font-inter font-semibold text-x-small md:text-small hover:text-primary-400 hover:underline line-clamp-1"
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
              <span className="x-small font-semibold">{rating}</span>
              <span className="x-small text-grey-500 hidden md:inline">
                {category}
              </span>
            </div>
          </div>

          {/* Get Prospectus Button */}
          <div className="shrink-0">
            <Link
              href="#"
              className="inline-block whitespace-nowrap x-small font-semibold text-primary-400 border border-primary-400 rounded-[20px] px-[10px] md:px-[14px] py-[6px] hover:bg-primary-400 hover:text-white transition-colors"
            >
              Get prospectus
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wuscarankinglistitem;
