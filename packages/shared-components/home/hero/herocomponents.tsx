"use server";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "./searchbox";
const Herocomponents = () => {
  return (
    <>
      <div className="bg-blue-200 pt-[40px] px-[16px] xl:p-0 min-h-[483px]">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between gap-[16px]">
            <div className="py-0 w-full md:w-[701px] md:py-[64px]">
              <div className="flex items-center gap-[4px] mb-[16px]">
                <div className="bg-primary-500 w-[16px] h-[8px] rounded-[4px]"></div>
                <div className="bg-blue-100 w-[8px] h-[8px] rounded-[4px]"></div>
                <div className="bg-blue-100 w-[8px] h-[8px] rounded-[4px]"></div>
              </div>
              <h1 className="font-farro font-bold text-heading-lg mb-[4px]">
                Nam vitae porttitor lorem. Vestibulum vel felis
              </h1>
              <p className="text-para-lg mb-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                vestibulum neque lectus, molestie congue risus
              </p>
              <Link
                href="#"
                className="flex items-center gap-[6px] w-fit bg-primary-400 hover:bg-primary-500 text-white rounded-[20px] font-inter font-semibold text-small px-[20px] py-[10px]"
              >
                Learn more
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.55556 1.55554L15 6.99999M15 6.99999L9.55555 12.4444M15 6.99999L1 6.99999"
                    stroke="#fff"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-[495px] pt-[15px] px-[37px] hidden md:block">
              <div className="flex items-center justify-end">
                <Image
                  src="/static/assets/images/hero-banner.png"
                  width={362}
                  height={420}
                  alt="Here Banner"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-none p-[16px] mx-[-16px] min-h-[160px] z-0 relative mt-[40px] mb-[0px] shadow-custom-5 md:mx-0 md:mt-[-40px] md:mb-[-40px] md:rounded-[32px] md:p-[24px] lg:mt-[-80px] lg:mb-[-80px]">
            <SearchBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herocomponents;
