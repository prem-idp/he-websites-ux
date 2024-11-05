"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { isMobile } from 'react-device-detect';
import Megamenucomponents from "../topnav/megamenucomponents";

const Header = () => {

   // Toggle Menu
  const [isMobileView, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
    
  const mobileToggleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsMobile(isMobile);
    const handleResize = () => {
      setIsMobile(isMobile);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // search click
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isUserClicked, setIsUserClicked] = useState(false);
  const [isShortlistClicked, setIsShortlistClicked] = useState(false);

  // right menu actions
  const rightMenuAction = (actionName: string) => {
    if (actionName == "SEARCH") {
      setIsSearchClicked(!isSearchClicked);
      setIsUserClicked(false);
      setIsShortlistClicked(false);
    } else if (actionName == "USER") {
      setIsUserClicked(!isUserClicked);
      setIsSearchClicked(false);
      setIsShortlistClicked(false);
    } else if (actionName == "SHORTLIST") {
      setIsShortlistClicked(!isShortlistClicked);
      setIsSearchClicked(false);
      setIsUserClicked(false);
    }
  };

  useEffect(() => {
    const body = document.body;
    if (isSearchClicked || isUserClicked || isShortlistClicked) {
      body.classList.add("overflow-y-hidden");
    } else {
      body.classList.remove("overflow-y-hidden");
    }
  }, [isSearchClicked || isUserClicked || isShortlistClicked]);

  // course tab click
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
      <header className="bg-white pl-[16px] pr-[21px] py-[4px] md:px-[20px] xl2:px-0 lg:py-[8px]">
        <div className="max-w-container mx-auto flex items-center ">
          <div className="order-2 md:grow md:basis-[100%] lg:order-1 lg:grow-0 lg:basis-[54px]">
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
            {isMobileView && (
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
            {isMobileView ? (
              <>
                <div onClick={mobileToggleOpen}
                  className={`${
                    isOpen ? "animate-fadeIn block" : "hidden"
                  } backdrop-shadow lg:bg-transparent fixed top-0 left-0 right-0 bottom-0 z-[5]`}
                ></div>
                <div
                  className={`megamenu-container fixed left-0 top-0 z-[6] w-[376px] h-[100vh] lg:h-auto transition-all duration-300 ease-in-out ${
                    isOpen ? "animate-fadeInLeft" : "-translate-x-full duration-300"
                  }`}
                >
                  <div className="relative z-[6] w-fit">
                    <div
                      onClick={mobileToggleOpen}
                      className={`menu-close-card lg:hidden absolute right-[-40px]`}
                    >
                      <div className="menu-close bg-neutral-900 p-[8px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 6L6 18"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 6L18 18"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <Megamenucomponents />
                  </div>
                </div>
              </>
            ) : (
              <Megamenucomponents />
            )}
          </div>
          <div className="order-3 basis-[100%] md:grow lg:grow-0 lg:basis-0">
            <ul className="flex items-center justify-end gap-[10px] rightmenu">
              <li aria-label="Search">
                <span
                  onClick={() => rightMenuAction("SEARCH")}
                  className="border border-gray-500 rounded-[34px] flex items-center justify-center w-[48px] h-[48px] cursor-pointer hover:border-primary-500 hover:bg-primary-500"
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
                </span>
                {/* course tab section */}
                {isSearchClicked && (
                  <div
                    className={`backdrop-shadow fixed top-0 left-0 right-0 bottom-0 z-[5]`}
                  >
                    <div className="bg-white absolute top-0 left-0 right-0 z-10 lg:min-h-[222px]">
                      <div className="max-w-container w-full mx-auto flex flex-col px-[16px] pt-[8px] pb-[56px] md:pt-[16px] md:pb-[32px]">
                        <div className="flex justify-end relative">
                          <svg
                            className="cursor-pointer"
                            onClick={() => rightMenuAction("SEARCH")}
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
                        <div className="flex flex-col items-center justify-center gap-y-[16px] mt-[16px] md:mt-[-16px]">
                          <ul className="flex items-center gap-[4px] cursor-pointer">
                            <li
                              className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block hover:bg-black hover:text-white border border-grey-500 ${
                                activeTab === "tab1"
                                  ? "bg-black text-white"
                                  : "bg-white text-black"
                              }`}
                              onClick={() => searchTabClick("tab1")}
                            >
                              Courses
                            </li>
                            <li
                              className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block hover:bg-black hover:text-white border border-grey-500 ${
                                activeTab === "tab2"
                                  ? "bg-black text-white"
                                  : "bg-white text-black"
                              }`}
                              onClick={() => searchTabClick("tab2")}
                            >
                              Universities
                            </li>
                            <li
                              className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block hover:bg-black hover:text-white border border-grey-500 ${
                                activeTab === "tab3"
                                  ? "bg-black text-white"
                                  : "bg-white text-black"
                              }`}
                              onClick={() => searchTabClick("tab3")}
                            >
                              Advice
                            </li>
                          </ul>
                          <div className="w-full lg:max-w-[800px]">
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
                                        className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] para md:w-[138px] lg:para-lg"
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
                                <div className="flex items-center justify-center small">
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
                                  <div className="ml-[4px] mr-[8px]">
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
                              <div className="flex flex-col gap-[24px] min-h-[60px]">
                                <div className="bg-white rounded-[32px] p-[16px] border border-neutral300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:p-[10px]">
                                  <div className="flex flex-col gap-x-[10px] justify-between md:flex-row">
                                    <div className="relative grow">
                                      <input
                                        onClick={() =>
                                          courseActions("University")
                                        }
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
                                                Bristol, University of the West
                                                of England
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                                href="#"
                                              >
                                                INTO Manchester (The University
                                                of Manchester)
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
                                                Institute of Advanced Legal
                                                Studies, School of Advanced
                                                Study, University of London
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      )}
                                    </div>
                                    <div className="pt-[16px] md:pt-[0]">
                                      <button
                                        type="submit"
                                        className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] para md:w-[138px] lg:para-lg"
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
                                <div className="flex justify-center">
                                  <Link
                                    href="#"
                                    className="flex items-center gap-[4px] text-blue-500 small font-semibold hover:underline"
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
                                                Bristol, University of the West
                                                of England
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                                                href="#"
                                              >
                                                INTO Manchester (The University
                                                of Manchester)
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
                                                Institute of Advanced Legal
                                                Studies, School of Advanced
                                                Study, University of London
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                      )}
                                    </div>
                                    <div className="pt-[16px] md:pt-[0]">
                                      <button
                                        type="submit"
                                        className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] para md:w-[138px] lg:para-lg"
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
                                <div className="flex justify-center">
                                  <Link
                                    href="#"
                                    className="flex items-center gap-[4px] text-blue-500 small font-semibold hover:underline"
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
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li aria-label="User" className="relative">
                <span
                  onClick={() => rightMenuAction("USER")}
                  className="relative border border-gray-500 rounded-[34px] flex items-center justify-center w-[48px] h-[48px] cursor-pointer hover:border-primary-500 hover:bg-primary-500"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3332 5.83333C13.3332 7.67428 11.8408 9.16667 9.99984 9.16667C8.15889 9.16667 6.6665 7.67428 6.6665 5.83333C6.6665 3.99238 8.15889 2.5 9.99984 2.5C11.8408 2.5 13.3332 3.99238 13.3332 5.83333Z"
                      stroke="#5C656E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.99984 11.6667C6.77818 11.6667 4.1665 14.2783 4.1665 17.5H15.8332C15.8332 14.2783 13.2215 11.6667 9.99984 11.6667Z"
                      stroke="#5C656E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {/* user section */}
                {isUserClicked && (
                  <>
                    <div
                      className={`backdrop-shadow fixed top-[64px] left-0 right-0 bottom-0 z-[5] md:top-[84px] lg:top-[76px]`}
                    ></div>
                    <div className="flex justify-between p-[16px] absolute z-10 top-[56px] right-[-39px] shadow-custom-5 bg-white min-w-[339px] rounded-[4px] md:top-[65px] lg:top-[62px] lg:right-0">
                      <ul className="small">
                        <li className="mb-[16px] hover:underline">
                          <Link href="#">My profile</Link>
                        </li>
                        <li className="mb-[16px] hover:underline">
                          <Link href="#">Favourites</Link>
                        </li>
                        <li className="mb-[16px] hover:underline">
                          <Link href="#">Profile item</Link>
                        </li>
                        <li className="text-primary-400 hover:underline">
                          <Link href="#">Log out</Link>
                        </li>
                      </ul>
                      <Link
                        href="#"
                        className="font-semibold x-small text-success-700 uppercase tracking-[1px] self-start"
                      >
                        Complete your profile
                      </Link>
                    </div>
                  </>
                )}
              </li>
              <li aria-label="Shortlist" className="relative">
                <div className="cursor-pointer" onClick={() => rightMenuAction("SHORTLIST")}>
                  <span                    
                    className="flex items-center justify-center min-h-[48px]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z"
                        fill="#00BBFD"
                        stroke="#3460DC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="absolute flex items-center justify-center min-w-[16px] h-[16px] rounded-[8px] top-[22px] left-[13px] bg-success-400 text-black font-inter font-semibold xs-small px-[5px] py-[2px]">
                    2
                  </div>
                </div>
                {/* shortlist section */}
                {isShortlistClicked && (
                  <>
                    <div
                      className={`backdrop-shadow fixed top-[64px] left-0 right-0 bottom-0 z-[5] md:top-[84px] lg:top-[76px]`}
                    ></div>
                    <div className="flex justify-between p-[16px] absolute z-10 top-[56px] right-[-5px] shadow-custom-5 bg-white min-w-[339px] rounded-[4px] md:top-[65px] lg:top-[62px]">
                      <ul className="small">
                        <li className="mb-[16px] hover:underline">
                          <Link href="#">
                            Favourites
                            <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                              5
                            </span>
                          </Link>
                        </li>
                        <li className="mb-[16px] hover:underline">
                          <Link href="#">
                            Courses
                            <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                              2
                            </span>
                          </Link>
                        </li>
                        <li className="hover:underline">
                          <Link href="#">
                            Universities
                            <span className="w-[16px] h-[16px] rounded-[8px] bg-success-400 ml-[8px] text-black font-semibold xs-small px-[5px] py-[2px]">
                              3
                            </span>
                          </Link>
                        </li>
                      </ul>
                      <Link
                        href="#"
                        className="font-semibold small bg-primary-400 text-white px-[16px] py-[8px] rounded-[18px] self-start hover:bg-primary-500"
                      >
                        Compare
                      </Link>
                    </div>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
