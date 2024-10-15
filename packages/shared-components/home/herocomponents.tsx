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
  return (
    <>
      <div className="bg-blue-200 pt-[40px] px-[10px] lg:p-0 min-h-[483px]">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between gap-[16px]">
            <div className="py-0 lg:py-[64px] w-[701px]">
              <div className="flex items-center gap-[4px] mb-[16px]">
                <div className="bg-primary-500 w-[16px] h-[8px] rounded-[4px]"></div>
                <div className="bg-blue-100 w-[8px] h-[8px] rounded-[4px]"></div>
                <div className="bg-blue-100 w-[8px] h-[8px] rounded-[4px]"></div>
              </div>
              <h1 className="font-farro font-bold text-heading-lg mb-[4px] leading-[57px] lg:text-heading-xl">
                Nam vitae porttitor lorem. Vestibulum vel felis
              </h1>
              <p className="font-inter font-normal text-para-lg mb-[16px] leading-[24px] lg:text-para">
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
            <div className="w-[495px] pt-[15px] px-[37px]">
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
          <div className="bg-white rounded-none p-[16px] mx-[-16px] lg:rounded-[32px] lg:p-[24px] min-h-[160px] z-0 relative mt-[-80px] shadow-custom-5 mb-[-80px]">
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
              <Link
                href="#"
                className="flex items-center gap-[6px] justify-end text-primary-400 hover:underline lg:justify-end"
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
              <div className="row-start-2 md:col-span-2">
                {activeTab === "tab1" && (
                  <div className="flex flex-col gap-[24px]">
                    <div className="bg-white rounded-[32px] p-[16px] border-[1px] border-solid border-neutral-300 hover:border-secondary-500 shadow-[0px_2px_4px_-2px_rgba(16,24,40,0.1),0px_4px_6px_-1px_rgba(16,24,40,0.1)] md:p-[8px]">
                      <div className="flex flex-col items-start justify-between divide-y divide-neutral-200 md:flex-row md:items-center md:divide-y-0 md:divide-x">
                        <div className="w-full relative mb-[14px] md:w-fit md:mr-[16px] md:mb-[0] ">
                          <button
                            className="btn btn-outline-secondary w-full font-normal small text-neutral-900 flex items-center justify-between gap-[8px] text-left pl-[0px] md:pl-[20px]"
                            type="button"
                          >
                            Undergraduate
                            <Image
                              src="/assets/icons/arrow_down_black.svg"
                              width="12"
                              height="7"
                              alt="Search icon"
                            />
                          </button>
                          <div className="dropdown-menu w-full md:w-[185px] z-[1] bg-white shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px] absolute left-[-8px] top-[49px] overflow-hidden hidden">
                            <ul>
                              <li>
                                <Link
                                  href="#"
                                  className="dropdown-item block small font-normal px-[16px] py-[10px] hover:bg-secondary-50"
                                >
                                  Undergraduate
                                </Link>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item block small font-normal px-[16px] py-[10px] hover:bg-secondary-50"
                                  href="#"
                                >
                                  HND / HNC
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item block smal font-normall px-[16px] py-[10px] hover:bg-secondary-50"
                                  href="#"
                                >
                                  Foundation degree
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item block small font-normal px-[16px] py-[10px] hover:bg-secondary-50"
                                  href="#"
                                >
                                  Access & foundation
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item block small font-normal px-[16px] py-[10px] hover:bg-secondary-50"
                                  href="#"
                                >
                                  Postgraduate
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="findbar-card-input flex flex-col justify-between w-[100%] md:flex-row divide-y md:divide-y-0 divide-neutral-20">
                          <div className="flex items-center w-full my-[12px] md:my-[0]">
                            <input
                              type="text"
                              className="form-control w-full focus:outline-none font-normal small text-neutral-900 placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                              aria-label=""
                              placeholder="Enter subject"
                            />
                          </div>
                          <div className="flex items-center w-full my-[12px] md:my-[0] border-l-0 lg:border-l border-neutral-20">
                            <input
                              type="text"
                              className="form-control w-full focus:outline-none font-normal small text-neutral-900 placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                              aria-label=""
                              placeholder="Enter subject"
                            />
                          </div>
                          <div className="search-btn pt-[24px] md:pt-[0]">
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
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div className="flex flex-col gap-[24px]">
                    <div className="bg-white rounded-[32px] border-[1px] border-solid border-neutral-300 p-[8px] hover:border-secondary-500 shadow-custom-1">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col justify-between w-full lg:flex-row relative">
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="form-control w-full focus:outline-none font-normal small text-neutral-900 placeholder:text-gray-500 rounded-tl-[24px] rounded-bl-[24px] px-[16px] py-[10px]"
                              aria-label=""
                              placeholder="University name"
                            />
                          </div>
                          <div className="search-btn pt-[24px] md:pt-[0]">
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
                          <div className="dropdown-menu flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px] left-[-8px] top-[53px] overflow-hidden hidden">
                            <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                              UNIVERSITIES
                            </div>
                            <ul className="custom-vertical-scrollbar max-h-[205px] overflow-y-scroll mr-[4px]">
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  University of Law
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  University of Manchester
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  University of Liverpool
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  University of Barnsley
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  University of Burnley
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  Bristol, University of the West of England
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  INTO Manchester (The University of Manchester)
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  Courtauld Institute of Art, University of
                                  London
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  Cardiff Metropolitan University
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  Institute of Advanced Legal Studies, School of
                                  Advanced Study, University of London
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "tab3" && (
                  <div className="flex flex-col gap-[24px]">
                    <div className="bg-white rounded-[32px] border-[1px] border-solid border-neutral-300 p-[8px] hover:border-secondary-500 shadow-custom-1">
                      <div className="flex items-center justify-between">
                        <div className="flex justify-between w-[100%] relative">
                          <div className="flex items-center w-[calc(100%-44px)]">
                            <input
                              type="text"
                              className="form-control w-full focus:outline-none font-normal small text-neutral-900 placeholder:text-gray-500 rounded-tl-[24px] rounded-bl-[24px] px-[16px] py-[10px]"
                              aria-label=""
                              placeholder="Enter keyword"
                            />
                          </div>
                          <div className="search-btn pt-[24px] md:pt-[0]">
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
                          <div className="dropdown-menu flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.1),0px_1px_3px_0px_rgba(16,24,40,0.1)] rounded-[8px] left-[-8px] top-[53px] overflow-hidden hidden">
                            <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                              UNIVERSITIES
                            </div>
                            <ul className="custom-vertical-scrollbar max-h-[205px] overflow-y-scroll mr-[4px]">
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  University of Law
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  University of Manchester
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  University of Liverpool
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  University of Barnsley
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  University of Burnley
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  Bristol, University of the West of England
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  INTO Manchester (The University of Manchester)
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  Courtauld Institute of Art, University of
                                  London
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  Cardiff Metropolitan University
                                </a>
                              </li>
                              <li className="px-[16px] py-[10px]">
                                <a
                                  className="dropdown-item w-fit block small text-grey300 hover:underline"
                                  href="#"
                                >
                                  Institute of Advanced Legal Studies, School of
                                  Advanced Study, University of London
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
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
