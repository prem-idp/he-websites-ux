"use client";

import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

const ClearingUniversity = () => {
  //University
  const [isUniversityOpen, setIsUniversityOpen] = useState(false);
  const universityClicked = () => {
    setIsUniversityOpen(!isUniversityOpen);
  };
  const universities = [
    "Universities A - C",
    "Universities D - H",
    "Universities I - M",
    "Universities N - P",
    "Universities Q - U",
    "Universities V - Z",
  ];

  // university list
  const universityList = [
    "Aberystwyth University ",
    "Acacia Learning",
    "Academy Of Contemporary Music",
    "Accrington And Rossendale College",
    "Activate Learning",
    "Aecc University College",
    "Al-Maktoum College Of Higher Education",
    "Amersham And Wycombe College",
    "Amity Business School London",
    "Anglia Ruskin University Aru",
    "Architectural Association School Of Architecture",
  ];
  return (
    <section className="bg-grey-50 pt-[24px] md:py-[64px]">
      <div className="w-full md:w-[598px] mx-auto md:border md:border-grey-200 md:rounded-[8px] bg-white">
        <div className="flex flex-col p-[16px] gap-[24px] md:p-[32px]">
          <div className="flex items-start bg-positive-light rounded-[6px] px-[16px] py-[16px] gap-[8px] border border-positive-default">
            <svg
              className="mt-[4px]"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7L5 11L15 1"
                stroke="#106519"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="small font-semibold text-positive-dark flex w-[calc(100%_-_24px)]">
              You have signed up for Clearing updates
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h5>Register your interest</h5>
            <div className="small">
              Register your interest in a university ahead of results day so
              they can contact you about their available Clearing places
            </div>
          </div>
          <div className="flex flex-col gap-[24px] p-[16px] md:border md:border-grey-200 md:rounded-[8px] bg-grey-50">
            <div className="flex flex-col gap-[8px]">
              <div className="font-semibold">
                Add a university{" "}
                <span className="x-small font-normal text-grey-700">
                  (optional)
                </span>
              </div>
              <div className="bg-white rounded-[32px] p-[19px_24px] border border-grey-300 hover:border-primary-500 ">
                <div
                  className="flex item-center gap-[12px]"
                  onClick={universityClicked}
                >
                  <input
                    type="text"
                    className="w-full focus:outline-none small text-black placeholder:text-gray-500"
                    aria-label="enter keyword"
                    placeholder="Search universities"
                  />
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
                      stroke="#767676"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative">
                {isUniversityOpen && (
                  <div
                    className={`bg-white absolute top-0 left-0 w-full  z-10 transition-all duration-300 ease-in-out ${
                      isUniversityOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                  >
                    <div className="flex flex-col gap-[16px]">
                      <ul className="flex flex-wrap gap-[8px] uppercase">
                        <li className="flex items-center gap-[2px] bg-primary-50 text-primary-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 12L12 4M4 4L12 12"
                              stroke="#0657AD"
                              stroke-width="1.13"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          University of Aberdeen
                        </li>
                      </ul>
                      <div className="flex flex-col gap-[12px] h-[246px] overflow-y-auto custom-scrollbar-2">
                        <div
                          onClick={universityClicked}
                          className="flex items-center gap-[4px] text-blue-400 font-semibold cursor-pointer"
                        ></div>
                        <div className="flex flex-col gap-[16px] shadow-custom-9 p-[16px] rounded-[4px]">
                          {universityList.map((item, index) => (
                            <div className="form_check relative" key={index}>
                              <div className="flex items-start gap-[8px]">
                                <div className="checkbox_card">
                                  <input
                                    type="checkbox"
                                    className="form-checkbox hidden"
                                    id={item}
                                  />
                                  <label
                                    htmlFor={item}
                                    className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-2 border-grey-600 my-[2px] group-checked:bg-primary-400"
                                  >
                                    <svg
                                      width="10"
                                      height="8"
                                      viewBox="0 0 10 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                                        fill="white"
                                        stroke="white"
                                        strokeWidth="0.666667"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </label>
                                </div>
                                <label
                                  htmlFor={item}
                                  className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
                                >
                                  {item}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {isUniversityOpen && ( // Placeholder div
                  <div className="h-[100px]"></div> // Height matches expected content height
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="font-semibold">Popular Clearing universities</div>
              {universityList.map((item, index) => (
                <div
                  className="form_check relative border border-grey-200 rounded-[4px] p-[12px]"
                  key={index}
                >
                  <div className="flex items-start gap-[8px]">
                    <div className="checkbox_card">
                      <input
                        type="checkbox"
                        className="form-checkbox hidden"
                        id={item}
                      />
                      <label
                        htmlFor={item}
                        className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-2 border-grey-600 my-[2px] group-checked:bg-primary-400"
                      >
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="0.666667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </label>
                    </div>
                    <label
                      htmlFor={item}
                      className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
                    >
                      {item}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClearingUniversity;
