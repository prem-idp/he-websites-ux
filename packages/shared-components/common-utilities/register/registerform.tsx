"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import EmailPreferences from "@packages/shared-components/common-utilities/register/emailpreferences";

const RegisterFrom = ({ signupVisible, clearingVisible }: any) => {
  const region = [
    "East Midlands",
    "East of England",
    "London",
    "North East England",
    "North West England",
    "Northern Ireland",
    "Scotland",
    "South East England",
    "South West England",
    "Wales",
    "West Midlands",
    "Yorkshire and the Humber",
  ];
  return (
    <>
      <div className="flex flex-col gap-[16px] p-[32px_16px] md:gap-[24px] md:p-[32px] border-t border-t-grey-200">
        {signupVisible && (
          <h5 className="text-center">Or sign up with email</h5>
        )}
        {clearingVisible && (
          <div className="flex flex-col gap-[4px]">
            <h5 className="text-grey300">Clearing updates coming your way</h5>
            <p className="small font-normal text-grey300">
              Sign up to get all the Clearing info you'll need sent straight to
              you
            </p>
          </div>
        )}
        <form className="flex flex-col gap-[24px] divide-y divide-grey-200">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col md:flex-row gap-[8px]">
              <div className="flex flex-col basis-full md:basis-6/12 gap-[4px]">
                <label
                  htmlFor="firstName"
                  className="small font-semibold text-grey300"
                >
                  First name
                  <span className="text-negative-default">*</span>
                </label>

                <input
                  type="text"
                  className="w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                  id="firstName"
                  placeholder="Eg: Paul"
                />
                <p className="x-small font-normal text-positive-default">
                  Nice to meet you! Great name
                </p>
                {/* <p className="x-small font-normal text-negative-default">
                          We still don't know your name. Remind us?
                        </p> */}
              </div>
              <div className="flex flex-col basis-6/12 gap-[4px]">
                <label
                  htmlFor="lastName"
                  className="small font-semibold text-grey300"
                >
                  Last name
                  <span className="text-negative-default">*</span>
                </label>
                <input
                  type="text"
                  className="w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                  id="lastName"
                  placeholder="Eg: Atreides"
                />
                <div className="err_msg">
                  <p className="x-small font-normal text-negative-default">
                    We still don't know your name. Remind us?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col basis-full gap-[4px] error">
              <label
                htmlFor="emailAddress"
                className="small font-semibold text-grey300"
              >
                Email address
                <span className="text-negative-default">*</span>
              </label>
              <input
                type="email"
                className="w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                id="emailAddress"
                placeholder="Eg: paul.atreides@arrakis.com"
              />
              <div className="err_msg">
                <p className="x-small font-normal text-negative-default">
                  Please enter a valid email address
                </p>
              </div>
            </div>
            {signupVisible && (
              <div className="flex flex-col basis-full gap-[4px]">
                <label
                  htmlFor="password"
                  className="small font-semibold text-grey300"
                >
                  Password
                  <span className="text-negative-default">*</span>
                </label>
                <div className="relative space-y-[4px]">
                  <input
                    type="password"
                    className="w-full small font-normal text-grey300 px-[12px] py-[10px] pr-[40px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                    id="password"
                    placeholder="8 characters or more"
                  />
                  <div className="err_msg">
                    <p className="x-small font-normal text-negative-default">
                      We still don't know your password. Remind us?
                    </p>
                  </div>
                  <button
                    className="cursor-pointer absolute top-[8px] right-[11px] w-[20px] h-[20px]"
                    aria-label="hide password"
                    role="button"
                    type="button"
                  >
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.39742 0.897461L4.03037 3.53041M14.6019 14.102L11.9692 11.4693M9.37504 12.5061C8.92964 12.5906 8.46999 12.6348 8.00001 12.6348C4.71527 12.6348 1.93477 10.4759 1 7.49969C1.25448 6.68947 1.64574 5.93983 2.14672 5.27782M6.4435 5.94355C6.84176 5.54529 7.39195 5.29896 7.99967 5.29896C9.21511 5.29896 10.2004 6.28427 10.2004 7.49971C10.2004 8.10743 9.95409 8.65762 9.55584 9.05588M6.4435 5.94355L9.55584 9.05588M6.4435 5.94355L4.03037 3.53041M9.55584 9.05588L4.03037 3.53041M9.55584 9.05588L11.9692 11.4693M4.03037 3.53041C5.17463 2.79271 6.53732 2.36463 7.99999 2.36463C11.2847 2.36463 14.0652 4.5235 15 7.49974C14.4814 9.15081 13.3948 10.5503 11.9692 11.4693"
                        stroke="#5C656E"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      className="hidden"
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2004 6.50032C10.2004 7.71576 9.21511 8.70107 7.99967 8.70107C6.78423 8.70107 5.79892 7.71576 5.79892 6.50032C5.79892 5.28488 6.78423 4.29957 7.99967 4.29957C9.21511 4.29957 10.2004 5.28488 10.2004 6.50032Z"
                        stroke="#5C656E"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 6.5003C1.93479 3.52408 4.71528 1.36523 7.99999 1.36523C11.2847 1.36523 14.0652 3.52411 15 6.50035C14.0652 9.47656 11.2847 11.6354 8.00001 11.6354C4.71527 11.6354 1.93477 9.47654 1 6.5003Z"
                        stroke="#5C656E"
                        strokeWidth="1.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-center divide-x divide-grey-200 small text-positive-default">
                  <div className="px-[8px]">ABC</div>
                  <div className="px-[8px]"> abc</div>
                  <div className="px-[8px]"> 123</div>
                  <div className="px-[8px]"> !@%</div>
                  <div className="px-[8px]"> 8 characters</div>
                </div>
              </div>
            )}
            {clearingVisible && (
              <div className="flex flex-col basis-full gap-[4px] error">
                <label
                  htmlFor="subjectofinterest"
                  className="small font-semibold text-grey300"
                >
                  Subject of interest
                  <span className="text-negative-default">*</span>
                </label>
                <input
                  type="subject"
                  className="w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                  id="subjectofinterest"
                />
                <div className="err_msg">
                  <p className="x-small font-normal text-negative-default">
                    Let us know which subject/s you’re interested in?
                  </p>
                </div>
              </div>
            )}
            {clearingVisible && (
              <div className="flex flex-col gap-[8px]">
                <div className="small font-semibold">
                  Which UK region/s are you interested in studying in
                  <span className="text-negative-default">*</span>
                </div>
                <p className="uppercase xs-small font-semibold">
                  CHOOSE ONE OR MORE
                </p>
                <div className="flex flex-row flex-wrap gap-[8px]">
                  {region.map((item, index) => (
                    <div className="form_check flex relative" key={index}>
                      <input
                        defaultValue={"East Midlands"}
                        type="checkbox"
                        name="uni"
                        className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id={item}
                      />
                      <label htmlFor={item} className="btn btn-primary-outline">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="err_msg">
                  <p className="x-small font-normal text-negative-default">
                    Let us know which region/s you’re interested studying in?
                  </p>
                </div>
              </div>
            )}

            <div className="form_group flex flex-row gap-[8px]">
              <div className="flex flex-col basis-6/12 gap-[4px] error">
                <label
                  htmlFor="postcode"
                  className="small font-semibold text-grey300"
                >
                  Postcode{" "}
                  <span className="x-small font-normal text-grey-700">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  className="w-full small font-normal text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
                  id="postcode"
                />
              </div>
              <div className="flex flex-col basis-6/12 justify-end gap-[4px]">
                <div className="postalcode hints md:mb-[12px]">
                  <Link
                    href=""
                    className="tooltip group/item relative small font-normal text-primary-400 underline"
                  >
                    Why do we need your postcode?
                    <div
                      className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                            shadow-custom-12 mt-[3px] absolute right-[-76px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[60%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                    >
                      <span className="font-semibold tooltip-head">
                        Why do we need your postcode?
                      </span>
                      <p className="x-small">
                        We use this information to help assess the reach of our
                        products. This is completely optional.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {signupVisible && (
              <div className="form_radio flex flex-col gap-[4px]">
                <label className="check-label small font-semibold text-grey300">
                  When do you plan to start uni?
                </label>
                <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px]">
                  <div className="flex relative">
                    <input
                      type="radio"
                      name="yoe"
                      className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                      id="2025"
                    />
                    <label
                      htmlFor="2025"
                      className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                    >
                      2025
                    </label>
                  </div>
                  <div className="flex relative">
                    <input
                      type="radio"
                      name="yoe"
                      className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                      id="2026"
                    />
                    <label
                      htmlFor="2026"
                      className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                    >
                      2026
                    </label>
                  </div>
                  <div className="flex relative">
                    <input
                      type="radio"
                      name="yoe"
                      className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                      id="2027"
                    />
                    <label
                      htmlFor="2027"
                      className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                    >
                      2027
                    </label>
                  </div>
                  <div className="flex relative">
                    <input
                      type="radio"
                      name="yoe"
                      className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                      id="2028"
                    />
                    <label
                      htmlFor="2028"
                      className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                    >
                      2028
                    </label>
                  </div>
                </div>
                <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px]">
                  <div className="flex relative">
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[70px]"></div>
                  </div>
                  <div className="flex relative">
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[70px]"></div>
                  </div>
                  <div className="flex relative">
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[70px]"></div>
                  </div>
                  <div className="flex relative">
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[70px]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="pt-[24px]">
            <EmailPreferences />
          </div>
          <div className="pt-[24px]">
            <div className="flex flex-col gap-[24px] x-small">
              <div>
                By continuing, I confirm I’m over 13 and agree to the{" "}
                <Link
                  href=""
                  className="text-primary-400 hover:text-primary-500 hover:underline"
                >
                  terms and conditions{" "}
                </Link>
                and{" "}
                <Link
                  href=""
                  className="text-primary-400 hover:text-primary-500 hover:underline"
                >
                  privacy notice
                </Link>
                , and to become a member of the Whatuni community
                <span className="text-negative-default">*</span>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
              >
                Sign up{" "}
                <svg
                  className="animate-spin"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12C4.5 7.875 7.875 4.5 12 4.5C16.125 4.5 19.5 7.875 19.5 12H22C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22V19.5C7.875 19.5 4.5 16.125 4.5 12Z"
                    fill="white"
                  />
                </svg>
                <Image
                  src="/static/assets/icons/right_white_arrow.svg"
                  width="17"
                  height="14"
                  alt="arrow icon"
                />
              </button>
            </div>
          </div>
        </form>
      </div>
      {signupVisible && (
        <div className="py-[16px] w-full border-t border-t-grey-200 bg-grey-50">
          <div className="small font-semibold text-grey300 text-center">
            Already have an account?{" "}
            <Link
              href="/registeration/signin"
              className="text-primary-400 hover:text-primary-500 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterFrom;
