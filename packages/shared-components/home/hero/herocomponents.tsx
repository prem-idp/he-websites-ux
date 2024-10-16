"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Herocomponents = () => {
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
                  src="/assets/images/hero-banner.png"
                  width={362}
                  height={420}
                  alt="Here Banner"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-none p-[16px] mx-[-16px] min-h-[160px] z-0 relative mt-[40px] mb-[0px] shadow-custom-5 md:mx-0 md:mt-[-40px] md:mb-[-40px] md:rounded-[32px] md:p-[24px] lg:mt-[-80px] lg:mb-[-80px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[16px]">
              <ul className="flex gap-[4px] justify-center md:justify-start">
                <li role="button">
                  <Link
                    href="#"
                    className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block ${
                      activeTab === "tab1"
                        ? "bg-neutral-900 text-white"
                        : "bg-white text-neutral-900 border border-neutral-900"
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
                        ? "bg-neutral-900 text-white"
                        : "bg-white text-neutral-900 border border-neutral-900"
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
                        ? "bg-neutral-900 text-white"
                        : "bg-white text-neutral-900 border border-neutral-900"
                    }`}
                    onClick={() => searchTabClick("tab3")}
                  >
                    Advice
                  </Link>
                </li>
              </ul>
              {activeTab == "tab1" && (
                <Link
                  href="#"
                  className="flex items-center gap-[6px] justify-center text-primary-400 font-semibold small hover:underline md:justify-end"
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
              )}
              {activeTab == "tab2" && (
                <Link
                  href="#"
                  className="flex items-center gap-[6px] justify-center text-primary-400 font-semibold small hover:underline md:justify-end"
                >
                  Browse unis A-Z
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    width={20}
                    height={20}
                    alt="Right Arrow"
                  />
                </Link>
              )}
              {activeTab == "tab3" && (
                <Link
                  href="#"
                  className="flex items-center gap-[6px] justify-center text-primary-400 font-semibold small hover:underline md:justify-end"
                >
                  Browse advice
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    width={20}
                    height={20}
                    alt="Right Arrow"
                  />
                </Link>
              )}
              <div className="row-start-2 md:col-span-2">
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
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div className="flex flex-col gap-[24px]">
                    <div className="bg-white rounded-[32px] p-[16px] border border-neutral-300 hover:border-primary-500 shadow-custom-1 lg:pl-[24px] lg:p-[8px]">
                      <div className="flex flex-col gap-x-[10px] justify-between relative lg:flex-row">
                        <div className="grow">
                          <input
                            onClick={() => courseActions("University")}
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
                    </div>
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
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herocomponents;
