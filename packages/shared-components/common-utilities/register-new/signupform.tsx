"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SigninBenefits from "./signinbenefits";
import {
  HideEyeIcon,
  ShowEyeIcon,
} from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";

const RegisterFrom = ({ email = "" }: { email?: string }) => {
  const [showBenefits, setShowBenefits] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
              className="w-full small px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
              id="firstName"
              placeholder="Eg: Paul"
            />
            <p className="x-small text-positive-default">
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
              className="w-full small px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
              id="lastName"
              placeholder="Eg: Atreides"
            />
            <p className="x-small text-negative-default">
              We still don't know your name. Remind us?
            </p>
          </div>
        </div>
        <div className="flex flex-col basis-full gap-[4px]">
          <label
            htmlFor="emailAddress"
            className="small font-semibold text-grey-700"
          >
            Email address
            <span className="text-negative-default">*</span>
          </label>
          <input
            type="email"
            className="w-full small px-[12px] py-[10px] bg-grey-50 border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
            id="emailAddress"
            placeholder="neil.burgess@idp.com"
            defaultValue={email}
          />
          <div className="flex x-small gap-[2px]">
            Not you?
            <Link href="#" className="text-primary-400 underline">
              Use a different email
            </Link>
          </div>
          <p className="x-small text-negative-default">
            Please enter a valid email address
          </p>
        </div>

        <div className="flex flex-col basis-full gap-[4px]">
          <label htmlFor="password" className="small font-semibold">
            Password
            <span className="text-negative-default">*</span>
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-full small px-[12px] py-[10px] pr-[40px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
              id="password"
              placeholder="8 characters or more"
            />

            <button
              className="cursor-pointer absolute inset-y-0 right-[12px] flex items-center text-gray-500"
              aria-label={showPassword ? "Hide password" : "Show password"}
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <ShowEyeIcon /> : <HideEyeIcon />}
            </button>
          </div>

          <p className="x-small text-negative-default">
            We still don't know your password. Remind us?
          </p>

          <div className="flex justify-center divide-x divide-grey-200 small [&>*]:px-[8px]">
            <div> ABC</div>
            <div> abc</div>
            <div> 123</div>
            <div> !@%</div>
            <div> 8 characters</div>
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
