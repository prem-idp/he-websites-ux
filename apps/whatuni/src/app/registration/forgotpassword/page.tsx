"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const ForgotPassword = () => {
  return (
    <section className="bg-grey-50 pt-[28px] md:py-[64px]">
      <div className="w-full md:w-[598px] mx-auto md:border md:border-grey-200 md:rounded-[8px] bg-white">
        <div className="flex flex-col p-[24px_16px] gap-[24px] md:p-[32px]">
          <h5>Forgotten your password?</h5>
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
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
              >
                Reset password{" "}
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
          </form>
        </div>
        <div className="py-[16px] w-full border-t border-t-grey-200">
          <div className="small font-semibold text-grey300 text-center">
            <Link
              href="/registeration/signin"
              className="text-primary-400 hover:text-primary-500 hover:underline"
            >
              Return to log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
