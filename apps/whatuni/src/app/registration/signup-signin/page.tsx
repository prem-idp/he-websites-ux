"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SocialSigninButtons from "@packages/shared-components/common-utilities/register/social-signin-buttons";
import RegisterClearingUpdates from "@packages/shared-components/common-utilities/register/registerclearingupdates";

const Registration = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [error, setError] = useState(true);
  return (
    <>
      <section className="bg-grey-50 pt-[28px] md:py-[64px]">
        <div className="w-full md:w-[598px] mx-auto md:border md:border-grey-200 md:rounded-[8px] bg-white">
          {/* Tabs Header */}
          <div className="flex border-b border-gray-200 text-center small font-semibold mb-[-2px]">
            <button
              onClick={() => setActiveTab("tab1")}
              className={`flex-1 py-[12px] 
            ${
              activeTab === "tab1"
                ? "border-b-2 border-primary-400 text-primary-400"
                : "text-black"
            }`}
            >
              Join us
            </button>

            <button
              onClick={() => setActiveTab("tab2")}
              className={`flex-1 py-[12px]
            ${
              activeTab === "tab2"
                ? "border-b-2 border-primary-400 text-primary-400"
                : "text-black"
            }`}
            >
              Sign in
            </button>
          </div>
          {/* Tabs Content */}
          {activeTab === "tab1" && (
            <>
              {/* social signin buttons */}
              <SocialSigninButtons
                title="Welcome to Whatuni"
                isVisible={true}
              />
              {/* social signin buttons */}

              {/* form details */}
              <RegisterClearingUpdates signupVisible={true} />
              {/* form details */}
            </>
          )}
          {activeTab === "tab2" && (
            <>
              <div className="flex flex-col gap-[16px] p-[32px_16px] md:gap-[24px] md:p-[32px]">
                <h5 className="text-center">Sign in with email</h5>
                <form className="flex flex-col gap-[24px]">
                  <div className="flex flex-col gap-[16px] md:gap-[24px]">
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
                          placeholder="6 characters or more"
                        />
                        <div className="err_msg">
                          <p className="x-small font-normal text-negative-default">
                            Please enter your password
                          </p>
                        </div>
                        <button
                          className="cursor-pointer absolute top-[12px] right-[11px] w-[20px] h-[20px]"
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
                    </div>
                    <div className="form_check flex flex-col gap-[4px]">
                      <div className="form-check-group flex flex-col gap-[8px]">
                        <div className="flex items-center gap-[12px] relative">
                          <div className="checkbox_card">
                            <input
                              type="checkbox"
                              className="form-checkbox hidden"
                              id="newsletters"
                            />
                            <label
                              htmlFor="newsletters"
                              className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border border-grey-400 my-[6px]"
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
                            htmlFor="Remember me"
                            className="check-label small w-[calc(100%_-_28px)]"
                          >
                            <span className="x-small text-grey-600">
                              Remember me {""}
                              <span className="x-small font-normal text-grey-700">
                                (Don’t use this on a public computer)
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[24px] md:gap-[32px]">
                    <button
                      type="submit"
                      className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
                    >
                      Sign in{" "}
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
                    <div className="small font-semibold text-grey300 text-center">
                      <Link
                        href="/registeration/signin"
                        className="text-primary-400 hover:text-primary-500 hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className="border-t border-t-grey-200">
                {/* social signin buttons */}
                <SocialSigninButtons title="or" isVisible={false} />
                {/* social signin buttons */}
              </div>
              <div className="py-[16px] w-full border-t border-t-grey-200">
                <div className="small font-semibold text-grey300 text-center">
                  Don’t have an account?{" "}
                  <Link
                    href="/registeration/signin"
                    className="text-primary-400 hover:text-primary-500 hover:underline"
                  >
                    Join us
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Registration;
