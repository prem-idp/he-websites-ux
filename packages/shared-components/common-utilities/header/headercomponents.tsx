"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Megamenucomponents from "../topnav/megamenucomponents";
import TopRightMenu from "./rightside-menu";

const Header = () => {
  // Toggle Menu
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const mobileToggleOpen = () => {
    setIsOpen(!isOpen);
  };

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
      <header className="bg-white pl-[16px] pr-[21px] py-[4px] xl:px-0 xl:py-[8px]">
        <div className="max-w-container mx-auto flex items-center ">
          <div className="order-2 md:grow md:basis-[100%] lg:order-1 lg:grow-0 lg:basis-[70px]">
            <Link href="#">
              <Image
                className="md:mx-auto lg:mx-0"
                src="/assets/images/whatuni-logo.svg"
                alt="Whatuni Logo"
                priority
                width={70}
                height={78}
              />
            </Link>
          </div>
          <div className="order-1 md:grow md:basis-[100%] lg:order-2 lg:grow-1 lg:basis-0">
            {isMobile && (
              <button
                className="mr-[16px] block lg:hidden"
                onClick={mobileToggleOpen}
                aria-label="Mobile Toggle"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#333F48"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            {isMobile ? (
              <>
              <div className={`${isOpen ? 'animate-fadeIn block' : 'hidden'} bg-neutral400 lg:bg-transparent fixed top-0 left-0 right-0 bottom-0 z-[5]`}></div>
               <div className={`megamenu-container fixed left-0 top-0 z-[6] w-full h-[100vh] lg:h-auto transition-all duration-300 ease-in-out ${isOpen ? 'animate-fadeInLeft' :'-translate-x-full'}`}>
                
              <>
              { isOpen && (
                <div className="relative z-[6] w-fit">
                    <div onClick={mobileToggleOpen} className={`menu-close-card lg:hidden absolute right-[-40px]`}>
                      <div className='menu-close bg-neutral-900 p-[8px]'>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                      </div>
                  </div>
                  <Megamenucomponents/>
                </div>                         
               )}                         
            </>
            </div>
            </>
              ) : (
                <Megamenucomponents />
              )}
          </div>
          <div className="order-3 basis-[100%] md:grow lg:grow-0 lg:basis-0">
            <ul className="flex items-center justify-end gap-[10px]">
              <li>
                <Link
                  onClick={() => rightMenuAction("SEARCH")}
                  href="#"
                  aria-label="Search"
                  className="border border-gray-500 rounded-[34px] p-[14px] w-[48px] h-[48px] block"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                      stroke="#5C656E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                {/* course tab section */}
                {isSearchClicked && (
                  <div className="bg-white absolute top-0 left-0 right-0 min-h-[222px] z-10 lg:top-[94px]">
                    <div className="max-w-container w-full mx-auto flex flex-col px-[16px] py-[8px] cursor-pointer lg:py-[16px]">
                      <div
                        className="flex justify-end mr-[-8px]"
                        onClick={() => rightMenuAction("SEARCH")}
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 29L29 3M3 3L29 29"
                            stroke="#333F48"
                            strokeWidth="2.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-y-[16px] mt-[16px] lg:mt-[-16px]">
                        <ul className="flex items-center gap-[4px]">
                          <li role="button">
                            <Link
                              href="#"
                              className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block ${
                                activeTab === "tab1"
                                  ? "bg-black text-white"
                                  : "bg-white text-black border border-neutral-500"
                              }`}
                              onClick={() => searchTabClick("tab1")}
                            >
                              Courses
                            </Link>
                          </li>
                          <li role="button">
                            <Link
                              href="#"
                              className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block ${
                                activeTab === "tab2"
                                  ? "bg-black text-white"
                                  : "bg-white text-black border border-neutral-500"
                              }`}
                              onClick={() => searchTabClick("tab2")}
                            >
                              Universities
                            </Link>
                          </li>
                          <li role="button">
                            <Link
                              href="#"
                              className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block ${
                                activeTab === "tab3"
                                  ? "bg-black text-white"
                                  : "bg-white text-black border border-neutral-500"
                              }`}
                              onClick={() => searchTabClick("tab3")}
                            >
                              Advice
                            </Link>
                          </li>
                        </ul>
                        <div className="w-full lg:max-w-[804px]">
                          {activeTab === "tab1" && (
                            <div className="flex flex-col gap-[24px]">
                              <div className="bg-white rounded-[32px] p-[16px] border border-neutral-300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:pr-[10px] md:py-[7px]">
                                <div className="flex flex-col items-stretch md:flex-row md:items-center">
                                  <div className="relative mb-[24px] md:mb-[0]">
                                    <button
                                      onClick={() => courseActions("UG")}
                                      className="flex items-center justify-between gap-[4px] mr-0 w-full small text-black md:w-[124px] md:mr-[16px]"
                                      type="button"
                                    >
                                      Undergraduate
                                      <Image
                                        src="/assets/icons/arrow_down_black.svg"
                                        width="20"
                                        height="20"
                                        alt="Search icon"
                                      />
                                    </button>
                                    {isUndergratuateClicked && (
                                      <div className="w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[40px] overflow-hidden lg:w-[230px]">
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
                                    <div className="flex items-center w-full my-[12px] md:my-[0]">
                                      <input
                                        type="text"
                                        className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                                        aria-label=""
                                        placeholder="Enter subject"
                                      />
                                    </div>
                                    {isSubjectClicked && (
                                      <div className="w-full md:w-[253px] z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[50px] max-h-[311px] overflow-y-scroll custom-vertical-scrollbar overflow-hidden">
                                        <Link href="">
                                          <div className="px-[16px] py-[12px]">
                                            <p className="x-small font-semibold text-black tracking-[1px] leading-[18px]">
                                              KEYWORD SEARCH FOR
                                            </p>
                                            <p className="small text-primary-400">
                                              Law
                                            </p>
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
                                    <div className="flex items-center w-full my-[12px] md:my-[0] border-l-0 lg:border-l border-neutral-200">
                                      <input
                                        type="text"
                                        className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                                        aria-label=""
                                        placeholder="Location (optional)"
                                      />
                                    </div>
                                    {isLocationClicked && (
                                      <div className="w-full md:w-[253px] z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[50px] overflow-hidden">
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
                              <div className="flex items-center justify-center gap-[4px] small">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.66678 6.11111H12.3334M12.3334 13.8889V11.5556M10.0001 13.8889H10.0079M7.66678 13.8889H7.67456M7.66678 11.5556H7.67456M10.0001 11.5556H10.0079M12.3334 9.22222H12.3412M10.0001 9.22222H10.0079M7.66678 9.22222H7.67456M6.11122 17H13.889C14.7481 17 15.4446 16.3036 15.4446 15.4444V4.55556C15.4446 3.69645 14.7481 3 13.889 3H6.11122C5.25211 3 4.55566 3.69645 4.55566 4.55556V15.4444C4.55566 16.3036 5.25211 17 6.11122 17Z"
                                    stroke="#0F172A"
                                    strokeWidth="1.67"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <div className="ml-[1px] mr-[8px] lg:ml-[4px]">
                                  Don’t know your UCAS points?
                                </div>
                                <Link
                                  href="#"
                                  className="text-blue-500 font-semibold hover:underline"
                                >
                                  Calculate them
                                </Link>
                              </div>
                            </div>
                          )}
                          {activeTab === "tab2" && (
                            <div className="flex flex-col gap-[24px]">
                              <div className="bg-white rounded-[32px] p-[16px] border border-neutral-300 hover:border-primary-500 shadow-custom-1 lg:pl-[24px] lg:p-[8px]">
                                <div className="flex flex-col gap-x-[10px] justify-between relative lg:flex-row">
                                  <div className="grow">
                                    <input
                                      onClick={() =>
                                        courseActions("University")
                                      }
                                      type="text"
                                      className="form-control w-full focus:outline-none pb-[16px] small text-black placeholder:text-gray-500 lg:py-[10px] border-b border-neutral-400 lg:border-none"
                                      aria-label=""
                                      placeholder="University name"
                                    />
                                  </div>
                                  <div className="pt-[16px] md:pt-[0]">
                                    <button
                                      type="submit"
                                      className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] min-w-[136px]"
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
                                  {isUniversityClicked && (
                                    <div className="flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-8px] top-[53px] overflow-hidden">
                                      <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                                        UNIVERSITIES
                                      </div>
                                      <ul className="custom-vertical-scrollbar max-h-[205px] overflow-y-scroll mr-[4px]">
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
                                            Bristol, University of the West of
                                            England
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                            href="#"
                                          >
                                            INTO Manchester (The University of
                                            Manchester)
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                            href="#"
                                          >
                                            Courtauld Institute of Art,
                                            University of London
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
                                            Institute of Advanced Legal Studies,
                                            School of Advanced Study, University
                                            of London
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <Link
                                href="#"
                                className="flex items-center justify-center gap-[4px] text-blue-500 small font-semibold hover:underline"
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
                          {activeTab === "tab3" && (
                            <div className="flex flex-col gap-[24px]">
                              <div className="bg-white rounded-[32px] p-[16px] border border-neutral-300 hover:border-primary-500 shadow-custom-1 lg:pl-[24px] lg:p-[8px]">
                                <div className="flex flex-col gap-x-[10px] justify-between relative lg:flex-row">
                                  <div className="grow">
                                    <input
                                      onClick={() => courseActions("Advice")}
                                      type="text"
                                      className="form-control w-full focus:outline-none pb-[16px] small text-black placeholder:text-gray-500 lg:py-[10px] border-b border-neutral-400 lg:border-none"
                                      aria-label=""
                                      placeholder="Enter keyword"
                                    />
                                  </div>
                                  <div className="pt-[16px] md:pt-[0]">
                                    <button
                                      type="submit"
                                      className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] min-w-[136px]"
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
                                  {isAdviceClicked && (
                                    <div className="flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-8px] top-[53px] overflow-hidden">
                                      <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                                        UNIVERSITIES
                                      </div>
                                      <ul className="custom-vertical-scrollbar max-h-[205px] overflow-y-scroll mr-[4px]">
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
                                            Bristol, University of the West of
                                            England
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                            href="#"
                                          >
                                            INTO Manchester (The University of
                                            Manchester)
                                          </Link>
                                        </li>
                                        <li>
                                          <Link
                                            className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                            href="#"
                                          >
                                            Courtauld Institute of Art,
                                            University of London
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
                                            Institute of Advanced Legal Studies,
                                            School of Advanced Study, University
                                            of London
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <Link
                                href="#"
                                className="flex items-center justify-center gap-[4px] text-blue-500 small font-semibold hover:underline"
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
                        </div>
                      </div>
                    </div>
                  )}
                </>
              </div>
            ) : (
              <Megamenucomponents />
            )}
          </div>
          <TopRightMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
