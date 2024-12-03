"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CourseTab from "../../search-input-pods/coursetab";
import UniversityTab from "../../search-input-pods/universitytab";
import AdviceTab from "../../search-input-pods/advicetab";
import UcasComponent from "@packages/shared-components/common-utilities/popups/ucascomponent";

const SearchBox = ({ course_data, uni_data }: any) => {
  const searchTabClick = (tabName: string) => {
    setsearchFormHandle((preData) => ({ ...preData, activeTab: tabName }));
  };
  const [searchFormHandle, setsearchFormHandle] = useState({
    activeTab: "tab1",
    isCourseType: false,
    isSubjectClicked: false,
    isLocationClicked: false,
    isAdviceClicked: false,
    isUniversityClicked: false,
    courseType: { qualUrl: "degree", qualCode: "M", qualDesc: "Undergraduate" },
    university: "",
    subject: {},
    location: {},
    advice: "",
  });

  const [isUniversityClicked, setIsUniversityClicked] = useState(false);

  const courseActions = (tabName: string) => {
    if (tabName == "University") {
      setIsUniversityClicked(!isUniversityClicked);
    }
  };

  // ucas calculate
  const [isUcasPopupOpen, SetIsUcasPopupOpen] = useState(false);
  const ucasClick = () => {
    // SetIsUcasPopupOpen(true);
    // const body = document.body;
    // body.classList.add("overflow-y-hidden");
    console.log("blocking ucas temporarly ");
  };

  const ucasClose = () => {
    const body = document.body;
    SetIsUcasPopupOpen(false);
    body.classList.remove("overflow-y-hidden");
  };

  // PGS SearchBox
  const [isPgsUniversityClicked, setIsPgsUniversityClicked] = useState(false);
  const universityClick = () => {
    setIsPgsUniversityClicked(!isPgsUniversityClicked);
  };
  const [isPgsSearched, setIsPgsSearched] = useState(false);
  const search = ["Masters", "PhD", "PGCert", "PGDip", "MBA", "PGCE"];

  const handleKeyUp = (event: any) => {
    if (event.key === "Enter") {
      setIsPgsSearched(!isPgsSearched);
    }
  };

  const searchKey = [
    {
      name: "Law",
      course: "1124 courses",
    },
    {
      name: "Law / Legal Studies",
      course: "1124 courses",
    },
    {
      name: "Law (Specific Statutes)",
      course: "1124 courses ",
    },
    {
      name: "Asian Law",
      course: "1124 courses",
    },
    {
      name: "Civil Law",
      course: "1124 courses",
    },
  ];

  // console.log(searchFormHandle,"______________________________________________");
  return (
    <>
      <div className="md:px-[16px] xl:px-0">
        <div className="bg-white w-full rounded-none max-w-container mx-auto p-[16px] mt-0 min-h-[160px] relative z-3 md:shadow-custom-5 md:rounded-[32px] md:p-[24px] md:mt-[-82px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ul className="flex gap-[8px] justify-center md:justify-start">
              <li role="button">
                <button
                  className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block border border-neutral-900 hover:bg-neutral-900 hover:text-white cursor-pointer ${
                    searchFormHandle?.activeTab === "tab1"
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-900"
                  }`}
                  onClick={() => searchTabClick("tab1")}
                >
                  Courses
                </button>
              </li>
              <li role="button">
                <button
                  className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block border border-neutral-900 hover:bg-neutral-900 hover:text-white cursor-pointer ${
                    searchFormHandle?.activeTab === "tab2"
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-900"
                  }`}
                  onClick={() => searchTabClick("tab2")}
                >
                  Universities
                </button>
              </li>
              <li role="button">
                <button
                  className={`rounded-[20px] px-[12px] py-[8px] small font-semibold inline-block border border-neutral-900 hover:bg-neutral-900 hover:text-white cursor-pointer ${
                    searchFormHandle?.activeTab === "tab3"
                      ? "bg-neutral-900 text-white"
                      : "bg-white text-neutral-900"
                  }`}
                  onClick={() => searchTabClick("tab3")}
                >
                  Advice
                </button>
              </li>
            </ul>

            {searchFormHandle?.activeTab == "tab1" && (
              <div className="flex justify-center md:justify-end my-[24px] md:my-0">
                <div
                  onClick={ucasClick}
                  className="flex items-center gap-[6px] text-primary-400 font-semibold small cursor-pointer hover:underline"
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
                </div>
                <UcasComponent
                  onClose={ucasClose}
                  isUcasOpen={isUcasPopupOpen}
                />
              </div>
            )}
            {searchFormHandle?.activeTab == "tab2" && (
              <div className="flex justify-center md:justify-end my-[24px] md:my-0">
                <Link
                  href="#"
                  className="flex items-center gap-[6px] text-primary-400 font-semibold small hover:underline"
                >
                  Browse unis A-Z
                  <Image
                    src="/static/assets/icons/arrow-right.svg"
                    width={20}
                    height={20}
                    alt="Right Arrow"
                  />
                </Link>
              </div>
            )}
            {searchFormHandle?.activeTab == "tab3" && (
              <div className="flex justify-center md:justify-end my-[24px] md:my-0">
                <Link
                  href="#"
                  className="flex items-center gap-[6px] text-primary-400 font-semibold small hover:underline"
                >
                  Browse advice
                  <Image
                    src="/static/assets/icons/arrow-right.svg"
                    width={20}
                    height={20}
                    alt="Right Arrow"
                  />
                </Link>
              </div>
            )}

            <div className="row-start-2 md:col-span-2 mt-[16px]">
              {searchFormHandle?.activeTab === "tab1" && (
                <CourseTab
                  searchFormHandle={searchFormHandle}
                  setsearchFormHandle={setsearchFormHandle}
                  data={course_data}
                />
              )}
              {searchFormHandle?.activeTab === "tab2" && (
                <UniversityTab
                  searchFormHandle={searchFormHandle}
                  setsearchFormHandle={setsearchFormHandle}
                  data={uni_data}
                />
              )}
              {searchFormHandle?.activeTab === "tab3" && (
                <AdviceTab
                  searchFormHandle={searchFormHandle}
                  setsearchFormHandle={setsearchFormHandle}
                />
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
      {/* PGS SEARCH */}
      <div className="max-w-container mx-auto">
        <div className="px-[16px] py-[16px] xl:p-0 flex flex-col gap-[16px]">
          <div className="bg-white rounded-[24px] p-[16px] relative z-3 border border-grey-200 hover:border-primary-500 shadow-custom-1 md:rounded-[32px] md:mt-[-28px] md:pl-[24px] md:p-[10px]">
            <div className="flex flex-col gap-[16px] small md:flex-row">
              <div className="relative grow">
                <input
                  onClick={universityClick}
                  onKeyUp={handleKeyUp}
                  type="text"
                  className="w-full focus:outline-none pt-0 pb-[16px] text-black placeholder:text-gray-500 border-b border-grey-200 md:py-[10px] md:border-none"
                  aria-label="submenu"
                  placeholder="Subject, qualification or university"
                />
                {isPgsUniversityClicked && (
                  <div className="flex flex-col w-[calc(100%+32px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-16px] top-[53px] md:w-[345px]">
                    <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                      QUALIFICATION
                    </div>
                    <ul>
                      {search.map((item, index) => (
                        <li
                          key={index}
                          className="px-[16px] py-[10px] block hover:bg-blue-50 hover:underline cursor-pointer"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isPgsSearched && (
                  <div className="flex flex-col w-[calc(100%+32px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px]  left-[-16px] top-[53px] custom-scrollbar-2 max-h-[205px] overflow-y-auto mr-[4px]">
                    <Link href="">
                      <div className="px-[16px] py-[12px]">
                        <p className="x-small font-semibold text-black tracking-[1px] leading-[18px]">
                          KEYWORD SEARCH FOR
                        </p>
                        <p className="small text-primary-400">Law</p>
                      </div>
                    </Link>
                    <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                      QUALIFICATION
                    </div>
                    <ul>
                      {searchKey.map((item, index) => (
                        <li
                          key={index}
                          className="px-[16px] py-[10px] block hover:bg-blue-50 cursor-pointer"
                        >
                          <span className="text-grey900 underline">
                            {item.name}
                          </span>{" "}
                          <span className="text-grey-700">{item.course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] md:w-[114px]"
              >
                <Image
                  src="static/assets/icons/search_icon.svg"
                  width="18"
                  height="18"
                  alt="Search icon"
                />
                Search
              </button>
            </div>
          </div>
          <p className="small text-negative-default">
            Please select university from dropdown
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
