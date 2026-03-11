"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SigninBenefits from "./signinbenefits";

const RegisterFrom = () => {
  const [showBenefits, setShowBenefits] = useState(false);

  const handleSignup = () => {
    setShowBenefits(true);
  };

  if (showBenefits) {
    return <SigninBenefits />;
  }

  const study = [
    "Undergraduate (eg: first degree)",
    "Postgraduate (eg: master’s)",
  ];
  return (
    <>
      <form className="flex flex-col gap-[24px]">
        <div className="flex flex-col text-center gap-[8px]">
          <h5>Upgrade your university search</h5>
          <div className="small">
            Your free account gives you access to all the tools and advice on
            Whatuni, Complete University Guide and Postgraduate Search.
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[8px]">
          <div className="flex flex-col basis-full md:basis-6/12 gap-[4px]">
            <label htmlFor="firstName" className="small font-semibold">
              First name
              <span className="text-negative-default">*</span>
            </label>
            <input
              type="text"
              className="w-full small font-normal px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
              id="firstName"
              placeholder="Eg: Paul"
            />
            <p className="x-small font-normal text-positive-default">
              Nice to meet you! Great name
            </p>
          </div>
          <div className="flex flex-col basis-6/12 gap-[4px]">
            <label htmlFor="lastName" className="small font-semibold">
              Last name
              <span className="text-negative-default">*</span>
            </label>
            <input
              type="text"
              className="w-full small font-normal px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
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
            className="small font-semibold text-grey-700"
          >
            Email address
            <span className="text-negative-default">*</span>
          </label>
          <input
            type="email"
            className="w-full small font-normal px-[12px] py-[10px] bg-grey-50 border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
            id="emailAddress"
            placeholder="neil.burgess@idp.com"
          />
          <div className="flex x-small gap-[2px]">
            Not you?
            <Link href="#" className="text-primary-400 underline">
              Use a different email
            </Link>
          </div>

          <div className="err_msg">
            <p className="x-small font-normal text-negative-default">
              Please enter a valid email address
            </p>
          </div>
        </div>

        <div className="flex flex-col basis-full gap-[4px]">
          <label htmlFor="password" className="small font-semibold">
            Password
            <span className="text-negative-default">*</span>
          </label>
          <div className="relative space-y-[4px]">
            <input
              type="password"
              className="w-full small font-normal px-[12px] py-[10px] pr-[40px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
              id="password"
              placeholder="8 characters or more"
            />
            <div className="err_msg">
              <p className="x-small font-normal text-negative-default">
                We still don't know your password. Remind us?
              </p>
            </div>
            <button
              className="cursor-pointer absolute top-[8px] right-[11px] w-[24px] h-[24px]"
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

        <div className="flex flex-col gap-[8px]">
          <div className="small font-semibold">
            Which level do you want to study at?
            <span className="text-negative-default">*</span>
          </div>
          <div className="flex flex-row flex-wrap gap-[8px]">
            {study.map((item, index) => (
              <div className="form_check flex relative" key={index}>
                <input
                  defaultChecked={index === 0}
                  type="checkbox"
                  name="study"
                  className="form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                  id={item}
                />
                <label htmlFor={item} className="btn btn-primary-outline">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-grey-200" />
        <div className="space-y-[8px]">
          <label className="small font-semibold">Stay in the know</label>
          <label className="flex items-center gap-[12px] cursor-pointer">
            <input type="checkbox" className="peer hidden" />
            <div
              className="w-[16px] h-[16px] border border-grey-400 rounded flex items-center justify-center
    peer-checked:bg-blue-600 peer-checked:border-blue-600
    [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100"
            >
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition"
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
            </div>
            <span className="x-small text-grey-600">
              We’ll send helpful updates and occasionally invite you to share
              your views.
            </span>
          </label>
        </div>
        <hr className="border-grey-200 mx-[-16px] md:mx-0" />
        <div className="x-small">
          By continuing, I confirm I’m over 13 and agree to the{" "}
          <Link
            href=""
            className="text-primary-400 underline hover:text-primary-500"
          >
            terms and conditions{" "}
          </Link>
          and{" "}
          <Link
            href=""
            className="text-primary-400 underline hover:text-primary-500"
          >
            privacy notice
          </Link>
          <span className="text-negative-default">*</span>
        </div>
        <button
          type="button"
          className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
          onClick={handleSignup}
        >
          Sign up
          <Image
            src="/static/assets/icons/right_white_arrow.svg"
            width={17}
            height={14}
            alt="arrow icon"
          />
        </button>
      </form>
    </>
  );
};

export default RegisterFrom;
