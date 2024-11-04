"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import HeroComponent from "@/app/components/cards/hero-card/herocomponent";

const HeroSliderComponent = () => {
  // course tab
  const [activeTab, setActiveTab] = useState("tab1");
  const searchTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };

  // course tab actions
  const [isUndergratuateClicked, setIsUndergratuateClicked] = useState(false);
  const [isSubjectClicked, setIsSubjectClicked] = useState(false);
  const [isLocationClicked, setIsLocationClicked] = useState(false);
  const [isUniversityClicked, setIsUniversityClicked] = useState(false);
  const [isAdviceClicked, setIsAdviceClicked] = useState(false);

  const courseActions = (tabName: string) => {
    if (tabName == "UG") {
      setIsUndergratuateClicked(!isUndergratuateClicked);
      setIsSubjectClicked(false);
      setIsLocationClicked(false);
      setIsUniversityClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == "Subject") {
      setIsSubjectClicked(!isSubjectClicked);
      setIsUndergratuateClicked(false);
      setIsLocationClicked(false);
      setIsUniversityClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == "Location") {
      setIsLocationClicked(!isLocationClicked);
      setIsUndergratuateClicked(false);
      setIsSubjectClicked(false);
      setIsUniversityClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == "University") {
      setIsUniversityClicked(!isUniversityClicked);
      setIsUndergratuateClicked(false);
      setIsSubjectClicked(false);
      setIsLocationClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == "Advice") {
      setIsAdviceClicked(!isAdviceClicked);
      setIsUndergratuateClicked(false);
      setIsSubjectClicked(false);
      setIsLocationClicked(false);
      setIsUniversityClicked(false);
    }
  };

  return (
    <>
      <div className="bg-blue-200 px-[16px] md:px-[20px] xl2:px-0">
        <div className="max-w-container mx-auto">
          <Swiper
            slidesPerView={1}
            effect="fade"
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, EffectFade, Pagination]}
            className="mySwiper hero"
          >
            <SwiperSlide>
              <HeroComponent />
            </SwiperSlide>
            <SwiperSlide>
              <HeroComponent />
            </SwiperSlide>
            <SwiperSlide>
              <HeroComponent />
            </SwiperSlide>
            <SwiperSlide>
              <HeroComponent />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="pb-[12px] md:px-[16px]">
        <div className="bg-white w-full rounded-none max-w-container mx-auto p-[16px] mt-0 min-h-[160px] relative z-3 md:shadow-custom-5 md:rounded-[32px] md:p-[24px] md:mt-[-82px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ul className="flex gap-[4px] justify-center cursor-pointer md:justify-start">
              <li
                className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block border border-neutral-900 hover:bg-neutral-900 hover:text-white ${
                  activeTab === "tab1"
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-900"
                }`}
                onClick={() => searchTabClick("tab1")}
              >
                Courses
              </li>
              <li
                className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block border border-neutral-900 hover:bg-neutral-900 hover:text-white ${
                  activeTab === "tab2"
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-900 border border-neutral-900"
                }`}
                onClick={() => searchTabClick("tab2")}
              >
                Universities
              </li>
              <li
                className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block border border-neutral-900 hover:bg-neutral-900 hover:text-white ${
                  activeTab === "tab3"
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-900 border border-neutral-900"
                }`}
                onClick={() => searchTabClick("tab3")}
              >
                Advice
              </li>
            </ul>
            {activeTab == "tab1" && (
              <div className="flex justify-center md:justify-end my-[24px] md:my-0">
                <Link
                  href="#"
                  className="flex items-center gap-[6px] text-primary-400 font-semibold small hover:underline"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.66678 6.11111H12.3334M12.3334 13.8889V11.5556M10.0001 13.8889H10.0079M7.66678 13.8889H7.67456M7.66678 11.5556H7.67456M10.0001 11.5556H10.0079M12.3334 9.22222H12.3412M10.0001 9.22222H10.0079M7.66678 9.22222H7.67456M6.11122 17H13.889C14.7481 17 15.4446 16.3036 15.4446 15.4444V4.55556C15.4446 3.69645 14.7481 3 13.889 3H6.11122C5.25211 3 4.55566 3.69645 4.55566 4.55556V15.4444C4.55566 16.3036 5.25211 17 6.11122 17Z"
                      stroke="#4664DC"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Calculate your UCAS points
                </Link>
              </div>
            )}
            {activeTab == "tab2" && (
              <div className="flex justify-center md:justify-end my-[24px] md:my-0">
                <Link
                  href="#"
                  className="flex items-center gap-[6px] text-primary-400 font-semibold small hover:underline"
                >
                  Browse unis A-Z
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    width={20}
                    height={20}
                    alt="Right Arrow"
                  />
                </Link>
              </div>
            )}
            {activeTab == "tab3" && (
              <div className="flex justify-center md:justify-end my-[24px] md:my-0">
                <Link
                  href="#"
                  className="flex items-center gap-[6px] text-primary-400 font-semibold small hover:underline"
                >
                  Browse advice
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    width={20}
                    height={20}
                    alt="Right Arrow"
                  />
                </Link>
              </div>
            )}
            <div className="row-start-2 md:col-span-2 mt-[16px]">
              {activeTab === "tab1" && (
                <div className="flex flex-col gap-[24px] min-h-[60px]">
                  <div className="bg-white rounded-[32px] p-[16px] border border-neutral300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:p-[10px]">
                    <div className="flex flex-col items-stretch md:flex-row md:items-center">
                      <div className="relative mb-[24px] md:mb-[0] shrink-0">
                        <button
                          onClick={() => courseActions("UG")}
                          className="flex items-center justify-between gap-[4px] mr-0 w-full small text-black md:w-[160px] md:mr-[16px]"
                          type="button"
                        >
                          Access & foundation
                          <Image
                            src="/assets/icons/arrow_down_black.svg"
                            width="20"
                            height="20"
                            alt="Search icon"
                          />
                        </button>
                        {isUndergratuateClicked && (
                          <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-[-16px] top-[43px] overflow-hidden lg:w-[192px]">
                            <ul>
                              <li>
                                <Link
                                  href="#"
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                >
                                  Undergraduate
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  HND / HNC
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Foundation degree
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Access & foundation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Postgraduate
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div
                        className="w-full relative border-y-[1px] border-neutral200 grow md:border-l md:border-y-0"
                        onClick={() => courseActions("Subject")}
                      >
                        <div className="flex items-center my-[12px] md:my-[0]">
                          <input
                            type="text"
                            className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                            aria-label="submenu"
                            placeholder="Enter subject"
                          />
                        </div>
                        {isSubjectClicked && (
                          <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[54px] max-h-[311px] overflow-y-scroll custom-scrollbar-2 overflow-hidden">
                            <Link href="">
                              <div className="px-[16px] py-[12px]">
                                <p className="x-small font-semibold text-black tracking-[1px] leading-[18px]">
                                  KEYWORD SEARCH FOR
                                </p>
                                <p className="small text-primary-400">Law</p>
                              </div>
                            </Link>
                            <ul>
                              <li>
                                <Link
                                  href="#"
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                >
                                  Law
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Law / Legal Studies
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Law (Specific Statutes)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Asian Law
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Civil Law
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Family Law
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div
                        className="w-full relative grow md:border-l border-neutral200"
                        onClick={() => courseActions("Location")}
                      >
                        <div className="flex items-center my-[12px] md:my-[0]">
                          <input
                            type="text"
                            className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                            aria-label="submenu"
                            placeholder="Location (optional)"
                          />
                        </div>
                        {isLocationClicked && (
                          <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[54px] overflow-hidden">
                            <ul>
                              <li>
                                <Link
                                  href="#"
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                >
                                  Undergraduate
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  HND / HNC
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Foundation degree
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Access & foundation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Postgraduate
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="pt-[2px] md:pt-[0]">
                        <button
                          type="submit"
                          className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] md:w-[138px]"
                        >
                          <Image
                            src="/assets/icons/search_icon.svg"
                            width="18"
                            height="18"
                            alt="Search icon"
                          />
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab2" && (
                <div className="flex flex-col gap-[24px] min-h-[60px]">
                  <div className="bg-white rounded-[32px] p-[16px] border border-neutral300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:p-[10px]">
                    <div className="flex flex-col gap-x-[10px] justify-between md:flex-row">
                      <div className="relative grow">
                        <input
                          onClick={() => courseActions("University")}
                          type="text"
                          className="form-control w-full focus:outline-none pb-[16px] small text-black placeholder:text-gray-500 md:py-[10px] border-b border-neutral200 md:border-none"
                          aria-label="submenu"
                          placeholder="University name"
                        />
                        {isUniversityClicked && (
                          <div className="flex flex-col w-full absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-16px] top-[52px] overflow-hidden">
                            <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                              UNIVERSITIES
                            </div>
                            <ul className="custom-scrollbar-2 max-h-[205px] overflow-y-scroll mr-[4px]">
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  University of Law
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  University of Manchester
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  University of Liverpool
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  University of Barnsley
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  University of Burnley
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Bristol, University of the West of England
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  INTO Manchester (The University of Manchester)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Courtauld Institute of Art, University of
                                  London
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Cardiff Metropolitan University
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Institute of Advanced Legal Studies, School of
                                  Advanced Study, University of London
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="pt-[16px] md:pt-[0]">
                        <button
                          type="submit"
                          className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] md:w-[138px]"
                        >
                          <Image
                            src="/assets/icons/search_icon.svg"
                            width="18"
                            height="18"
                            alt="Search icon"
                          />
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab3" && (
                <div className="flex flex-col gap-[24px] min-h-[60px]">
                  <div className="bg-white rounded-[32px] p-[16px] border border-neutral300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:p-[10px]">
                    <div className="flex flex-col gap-x-[10px] justify-between md:flex-row">
                      <div className="relative grow">
                        <input
                          onClick={() => courseActions("Advice")}
                          type="text"
                          className="form-control w-full focus:outline-none pb-[16px] small text-black placeholder:text-gray-500 md:py-[10px] border-b border-neutral200 md:border-none"
                          aria-label="submenu"
                          placeholder="Enter keyword"
                        />
                        {isAdviceClicked && (
                          <div className="flex flex-col w-full absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-16px] top-[53px] overflow-hidden">
                            <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                              UNIVERSITIES
                            </div>
                            <ul className="custom-scrollbar-2 max-h-[205px] overflow-y-scroll mr-[4px]">
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  University of Law
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  University of Manchester
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  University of Liverpool
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  University of Barnsley
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  University of Burnley
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Bristol, University of the West of England
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  INTO Manchester (The University of Manchester)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Courtauld Institute of Art, University of
                                  London
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Cardiff Metropolitan University
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                  href="#"
                                >
                                  Institute of Advanced Legal Studies, School of
                                  Advanced Study, University of London
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="pt-[16px] md:pt-[0]">
                        <button
                          type="submit"
                          className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] md:w-[138px]"
                        >
                          <Image
                            src="/assets/icons/search_icon.svg"
                            width="18"
                            height="18"
                            alt="Search icon"
                          />
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-start justify-center gap-[8px] md:hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 15.6H17V14.2C17 13.0402 16.0598 12.1 14.9 12.1C14.2311 12.1 13.6352 12.4128 13.2506 12.9M13.5 15.6H6.5M13.5 15.6V14.2C13.5 13.7407 13.4115 13.302 13.2506 12.9M6.5 15.6H3V14.2C3 13.0402 3.9402 12.1 5.1 12.1C5.76892 12.1 6.3648 12.4128 6.74937 12.9M6.5 15.6V14.2C6.5 13.7407 6.5885 13.302 6.74937 12.9M6.74937 12.9C7.26545 11.6107 8.52637 10.7 10 10.7C11.4736 10.7 12.7345 11.6107 13.2506 12.9M12.1 6.50002C12.1 7.65982 11.1598 8.60002 10 8.60002C8.8402 8.60002 7.9 7.65982 7.9 6.50002C7.9 5.34023 8.8402 4.40002 10 4.40002C11.1598 4.40002 12.1 5.34023 12.1 6.50002ZM16.3 8.60002C16.3 9.37322 15.6732 10 14.9 10C14.1268 10 13.5 9.37322 13.5 8.60002C13.5 7.82683 14.1268 7.20002 14.9 7.20002C15.6732 7.20002 16.3 7.82683 16.3 8.60002ZM6.5 8.60002C6.5 9.37322 5.8732 10 5.1 10C4.3268 10 3.7 9.37322 3.7 8.60002C3.7 7.82683 4.3268 7.20002 5.1 7.20002C5.8732 7.20002 6.5 7.82683 6.5 8.60002Z"
                stroke="#333333"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="x-small">
              More than
              <span className="font-semibold"> 5 million people </span> come to
              Whatuni each year for their university research
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSliderComponent;
