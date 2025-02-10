"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProviderResultsCard from "@packages/shared-components/PR/provider-results-card/provider-results-card";

const page = () => {

  return (
    <>
      {/* Skeleton loader  */}
      <section className="hidden">
      <div className="bg-white ">
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
          {/* Skeleton Breadcrum  */}
          <div className="pt-[16px] pb-[40px]">
            <nav aria-label="breadcrumb">
              <ul className="flex flex-wrap gap-[20px]">
                <li className="flex relative">
                  <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                </li>
                <li className="flex relative">
                  <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                </li>
                <li className="flex relative">
                  <span className="skeleton after:absolute after:flex after:justify-center after:content-['/'] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                </li>
                <li className="flex relative">
                  <span className="skeleton after:absolute after:flex after:justify-center after:content-[''] after:w-[20px] after:h-[20px] after:right-[-20px] rounded-none after:text-grey-300 min-w-[65px] h-[17px] flex skeleton-text-animated"></span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
        {/* Skeleton Breadcrum END */}        
      {/* filter  */}
      <section className="bg-grey-100 px-[12px] py-[16px]">
        <div className="max-w-container mx-auto flex gap-[8px] small">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex gap-[8px]">
              <span className="skeleton skeleton-text-animated min-w-[140px] min-h-[40px] flex"></span>
            </div>
          ))}
        </div>
      </section>
      {/* filter ENd */}
      {/* filter tag  */}
      <section className="overflow-x-auto snap-x snap-mandatory bg-white px-[16px] py-[10px] xl:px-0 lg:py-[8px]">
        <div className="max-w-container mx-auto">
          <ul className="flex items-start gap-[8px]">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className="min-w-[100px]">
                <span className="skeleton skeleton-text-animated !rounded-[4px] min-h-[30px] flex"></span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* filter tag END */}
      {/* listing card  */}
      <section className="bg-white ">
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[24px] px-[10px] gap-[20px]">
            {/* card  */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col rounded-[16px] overflow-hidden bg-white shadow-custom-3 border border-grey-200"
              >
                <div className="flex justify-end h-[72px] p-[16px] bg-blue-100">
                  <span className="skeleton skeleton-text-animated flex max-w-[40px] min-h-[40px] rounded-[50px] !m-0"></span>
                </div>
                <div className="p-[16px]">
                  <div className="min-h-[240px] gap-[16px] flex flex-col">
                    <div className="flex flex-col">
                      <span className="skeleton skeleton-text-animated flex w-full"></span>
                      <span className="skeleton skeleton-text-animated flex max-w-[90%]"></span>
                      <span className="skeleton skeleton-text-animated flex max-w-[60%]"></span>
                    </div>

                    <div className="flex flex-col">
                      <span className="skeleton skeleton-text-animated flex w-full"></span>
                      <span className="skeleton skeleton-text-animated flex max-w-[90%]"></span>
                      <span className="skeleton skeleton-text-animated flex max-w-[60%]"></span>
                    </div>
                  </div>
                  <div className="">
                    <span className="skeleton skeleton-text-animated flex w-full min-h-[37px]"></span>
                    <span className="skeleton skeleton-text-animated flex w-full min-h-[37px]"></span>
                    <span className="skeleton skeleton-text-animated flex w-full min-h-[37px]"></span>
                    <span className="skeleton skeleton-text-animated flex w-full min-h-[37px]"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* listing card  END */}
      </section>
      {/* skeleton loader END */}
<h2>use exiting Breadcrumb component </h2>
      {/* University details  */}
      <section className="bg-white">
        <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0]">
          <div className="flex justify-between w-full py-[16px]">
            <div className="flex gap-[17px]">
              <span className="p-[4px] bg-white rounded-[8px] hidden md:block shadow-custom-1 min-w-[64px] h-[64px]">
                <Image
                  src="/static/assets/icons/search-result/kent.png"
                  alt="University logo"
                  width={56}
                  height={56}
                />
              </span>
              <div className="flex flex-col gap-[4px]">
                <div className="h5 heading5 font-farro text-black">
                  University of kent
                </div>
                <span className="para">1563 courses available </span>
                <div className="flex items-center gap-[8px] text-blue-400 small">
                  <span className="flex items-center">
                    <Image
                      alt="blue star icon"
                      className="relative top-[-1px]"
                      width="24"
                      height="24"
                      src="./static/assets/icons/blue-star-icon.svg"
                    />
                    4.6
                  </span>
                  <Link href="#" className="underline ">
                    400 reviews
                  </Link>
                </div>
                <ul className="flex mt-[4px] flex-wrap gap-[8px]">
                  <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-grey-100 text-grey-500 xs-small">
                    REGION
                  </li>
                  <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                    {/* <Image
                      src="./static/assets/icons/search-result/location-green.svg"
                      width="16"
                      height="16"
                      alt="location icon"
                    /> */}
                    18.1 Miles from you
                  </li>
                  <li className="relative group text-nowrap uppercase underline text-blue-400 x-small">
                    <span>
                      WUSCA ranking: 18th
                      <div
                        className="absolute select-none hidden group-hover:flex border border-grey-200 top-[20px] shadow-custom-1 whitespace-normal normal-case rounded-[8px] max-w-[100%] md:min-w-[320px] min-w-[200px] left-[-16px] md:left-0  bg-white p-[12px] flex-col gap-4 after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:left-[30px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0
                    "
                      >
                        <span className="x-small text-grey900 font-semibold">
                          Why should you trust our uni reviews?
                        </span>
                        <p className="x-small text-grey300">
                          All our reviews are from real students, submitted
                          using their verified university email address.
                        </p>
                      </div>
                    </span>
                  </li>
                  <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                    Lecturers and Teaching
                  </li>
                  <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                    + 2 more
                  </li>
                </ul>
              </div>
            </div>

            <span className="favorite group mr-[0] lg:mr-[10px]  items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
              <div className="heart min-w-[40px] w-[40px] h-[40px] bg-white border border-blue-500 rounded-[24px] flex items-center justify-center cursor-pointer hover:bg-blue-100">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                    stroke="#4664DC"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </span>
          </div>
        </div>
      </section>
      {/* University details END */}
      <h2>use exiting Fitler and tag component </h2>
          {/* Provider Result card list  */}
        <ProviderResultsCard/>
      {/* Provider Result card list END */}

    </>
  )
}

export default page