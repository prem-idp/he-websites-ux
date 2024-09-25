"use server";

import Image from "next/image";
import React from "react";
const Hero = ({ inputProps }: any) => {
  return (
    <>
      <section className="bg-white shadow-lg py-[20px] px-[24px] lg:px-0">
        <div className="max-w-container mx-auto">
          <div className="pt-[15px] pb-[12px]">
            <ol className="flex items-center whitespace-nowrap text-xs-small font-semibold">
              <li className="inline-flex items-center">
                <a
                  className="flex items-center hover:text-primary-500 hover:underline focus:outline-none focus:text-primary-500"
                  href="#"
                >
                  {/* <Image
                    src="/assets/icons/breadcrumbs-home-icon.svg"
                    alt="home icon"
                    width={20}
                    height={20}
                  /> */}
                  IOI
                </a>
                <svg
                  className="shrink-0 size-5 mx-[8px]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 13L10 3"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center">
                <a
                  className="flex items-center hover:text-primary-500 hover:underline focus:outline-none focus:text-primary-500 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                  href="#"
                >
                  Clearing 2024
                  <svg
                    className="shrink-0 size-5 mx-[8px]"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 13L10 3"
                      stroke="currentColor"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </a>
              </li>
              <li
                className="inline-flex items-center truncate"
                aria-current="page"
              >
                {inputProps} in Clearing
              </li>
            </ol>
          </div>
          <div className="text-success-600 my-[8px] uppercase">In Clearing</div>
          <div className="text-gray-400 text-heading5 font-normal">
            {inputProps} Clearing Courses
          </div>
          <div className="text-gray-400 text-small font-normal">
            721 degree courses in clearing featuring {inputProps}. Find which{" "}
            {inputProps}
            clearing course is the best for you.
          </div>
          <div className="mt-[20px]">
            <div className="flex items-center flex-wrap gap-[8px]">
              <div className="flex items-center justify-center gap-[8px] uppercase text-small font-bold bg-transparent border border-primary-500 text-primary-500 rounded-[4px] py-[9px] px-[16px] cursor-pointer">
                Your Grades
                <Image
                  src="https://images-dom.prod.aws.idp-connect.com/wu-cont/images/clr20_icn_plus_blue.svg"
                  width={12}
                  height={12}
                  alt="whilte Plus Icon"
                />
              </div>
              <div className="flex items-center justify-center gap-[8px] uppercase text-small font-bold bg-secondary-500 border border-secondary-500 text-white rounded-[4px] py-[9px] px-[16px] cursor-pointer">
                Course
                <Image
                  src="https://images-dom.prod.aws.idp-connect.com/wu-cont/images/clr20_icn_tick_white.svg"
                  width={12}
                  height={9}
                  alt="white tick Icon"
                />
              </div>
              <div className="flex items-center justify-center gap-[8px] uppercase text-small font-bold bg-transparent border border-primary-500 text-primary-500 rounded-[4px] py-[9px] px-[16px] cursor-pointer">
                Location
                <Image
                  src="https://images-dom.prod.aws.idp-connect.com/wu-cont/images/clr20_icn_plus_blue.svg"
                  width={12}
                  height={9}
                  alt="white tick Icon"
                />
              </div>
              <div className="flex items-center justify-center gap-[8px] uppercase text-small font-bold bg-transparent border border-primary-500 text-primary-500 rounded-[4px] py-[9px] px-[16px] cursor-pointer">
                University
                <Image
                  src="https://images-dom.prod.aws.idp-connect.com/wu-cont/images/clr20_icn_plus_blue.svg"
                  width={12}
                  height={9}
                  alt="white tick Icon"
                />
              </div>
              <div className="flex items-center justify-center gap-[8px] uppercase text-small font-bold bg-transparent border border-primary-500 text-primary-500 rounded-[4px] py-[9px] px-[16px] cursor-pointer">
                Chance of acceptance
                <Image
                  src="https://images-dom.prod.aws.idp-connect.com/wu-cont/images/clr20_icn_plus_blue.svg"
                  width={12}
                  height={9}
                  alt="white tick Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
