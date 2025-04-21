import React, { useState } from "react";
import Image from "next/image";

const WuscaBadge = () => {
  const wuscabadge = Number(4);
  return (
    <div className="bg-primary-50 flex flex-col gap-[16px] p-[16px]">
      <div className="flex items-center gap-[4px]">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5127 19.85L16.8527 19.61L16.1127 18.11C15.8527 17.59 15.4427 17.59 15.1827 18.11L14.4427 19.61L12.7827 19.85C12.2127 19.93 12.0827 20.33 12.4927 20.73L13.6927 21.9L13.4127 23.55C13.3127 24.12 13.6527 24.36 14.1627 24.09L15.6527 23.31L17.1327 24.09C17.6427 24.36 17.9827 24.12 17.8827 23.55L17.6027 21.9L18.8027 20.73C19.2127 20.32 19.0827 19.93 18.5127 19.85ZM24.5627 2H18.0827C17.8127 2 17.5627 2.15 17.4327 2.39L13.0227 10.4C13.8627 10.19 14.7427 10.06 15.6427 10.06C17.4627 10.06 19.1827 10.52 20.6927 11.32L25.2127 3.11C25.4927 2.61 25.1327 2 24.5627 2Z"
            fill="#FFD700"
          />
          <path
            d="M14.5228 3.82L13.8728 2.64C13.7428 2.4 13.4928 2.25 13.2228 2.25H6.74282C6.17282 2.25 5.82282 2.86 6.09282 3.35L10.4428 11.25L14.5228 3.82ZM15.6528 11.91C10.6628 11.91 6.61282 15.96 6.61282 20.95C6.61282 25.95 10.6628 30 15.6528 30C20.6428 30 24.6928 25.95 24.6928 20.96C24.6928 15.96 20.6428 11.92 15.6528 11.91ZM15.6528 26.28C12.7128 26.28 10.3228 23.9 10.3228 20.95C10.3228 18.01 12.7028 15.62 15.6528 15.62C18.5928 15.62 20.9828 18 20.9828 20.95C20.9828 23.9 18.5928 26.28 15.6528 26.28Z"
            fill="#FFD700"
          />
        </svg>
        <span className="para-lg font-semibold">
          Whatuni Student Choice Awards 2025
        </span>
      </div>
      <div
        className={`grid grid-cols-1 gap-[16px] ${wuscabadge == 4 ? "md:grid-cols-2" : wuscabadge === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}
      >
        {wuscabadge >= 1 && (
          <div className="flex items-center gap-[8px]">
            <Image className="shrink-0"
              src="/static/assets/images/gold-university-of-the-year.png"
              alt="gold-university-of-the-year"
              width="135"
              height="117"
            />
            <div className="flex flex-col gap-[4px] grow">
              <div className="bg-positive-default text-white uppercase rounded-[4px] x-small font-bold px-[8px] w-fit">
                Winner
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="text-heading2 font-farro font-bold">1st</span>
                <span className="small">/ 101</span>
              </div>
              <a href="#" className="small font-semibold underline">
                University of the Year
              </a>
            </div>
          </div>
        )}
        {wuscabadge >= 2 && (
          <div className="flex items-center gap-[8px]">
            <Image className="shrink-0"
              src="/static/assets/images/gold-university-of-the-year.png"
              alt="gold-university-of-the-year"
              width="135"
              height="117"
            />
            <div className="flex flex-col gap-[4px] grow">
              <div className="bg-positive-default text-white uppercase rounded-[4px] x-small font-bold px-[8px] w-fit">
                Winner
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="text-heading2 font-farro font-bold">1st</span>
                <span className="small">/ 101</span>
              </div>
              <a href="#" className="small font-semibold underline">
                Halls and student accommodation
              </a>
            </div>
          </div>
        )}
        {wuscabadge >= 3 && (
          <div className="flex items-center gap-[8px]">
            <Image className="shrink-0"
              src="/static/assets/images/bronze-student-life.png"
              alt="bronze-student-life"
              width="135"
              height="117"
            />
            <div className="flex flex-col gap-[4px] grow">
              <div className="bg-positive-default text-white uppercase rounded-[4px] x-small font-bold px-[8px] w-fit">
                THird place
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="text-heading2 font-farro font-bold">3rd</span>
                <span className="small">/ 101</span>
              </div>
              <a href="#" className="small font-semibold underline">
                Student life
              </a>
            </div>
          </div>
        )}
        {wuscabadge >= 4 && (
          <div className="flex items-center gap-[8px]">
            <Image className="shrink-0"
              src="/static/assets/images/gold-university-of-the-year.png"
              alt="gold-university-of-the-year"
              width="135"
              height="117"
            />
            <div className="flex flex-col gap-[4px] grow">
              <div className="bg-positive-default text-white uppercase rounded-[4px] x-small font-bold px-[8px] w-fit">
                Winner
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="text-heading2 font-farro font-bold">1st</span>
                <span className="small">/ 101</span>
              </div>
              <a href="#" className="small font-semibold underline">
                University of the Year
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WuscaBadge;
