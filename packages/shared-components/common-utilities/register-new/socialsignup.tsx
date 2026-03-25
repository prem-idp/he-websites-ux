"use client";
import React, { useState } from "react";
import Image from "next/image";
import SocialSigninButtons from "./social-signin-buttons";
import RegisterFrom from "./signupform";
import LoginForm from "./signinform";

const SocialSignup = ({
  registerModal = false,
}: {
  registerModal?: boolean;
}) => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showSigninForm, setShowSigninForm] = useState(false);
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleContinue = () => {
    if (!email.trim()) {
      setShowSignupForm(true);
      return;
    }
    if (!isValidEmail(email)) {
      setShowError(true);
      return;
    }
    setShowSigninForm(true);
  };

  if (showSignupForm) {
    return <RegisterFrom email={email} registerModal={registerModal} />;
  }

  if (showSigninForm) {
    return (
      <LoginForm
        email={email}
        onUseDifferentEmail={() => {
          setShowSigninForm(false);
          setEmail("");
        }}
      />
    );
  }

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Heading Section */}
      <div className="flex flex-col text-center gap-[8px]">
        <h5>Sign in or create an account</h5>
        <div className="small">
          One account. Three websites. All the support you need to choose a
          university. Sign up to Whatuni, Complete University Guide and
          Postgraduate Search.
        </div>
      </div>

      {/* Social Signin Section */}

      <SocialSigninButtons />
      <div className="py-[10px]">
        <div className="relative w-full border-b border-gray-200">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-[8px] small font-semibold">
            OR
          </div>
        </div>
      </div>

      <div className="flex flex-col basis-full gap-[4px]">
        <label htmlFor="emailAddress" className="small font-semibold">
          Email address
          <span className="text-negative-default">*</span>
        </label>
        <input
          type="email"
          className={`w-full small font-normal px-[12px] py-[10px] border rounded-[4px] outline-none shadow-custom-2 ${showError ? "border-negative-default" : "border-grey-500"}`}
          id="emailAddress"
          placeholder="neil.burgess@idp.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setShowError(false);
          }}
        />
        {showError && (
          <div className="x-small text-negative-default">
            Please enter a valid email address
          </div>
        )}
      </div>

      {/* Button */}
      <button
        type="button"
        className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
        onClick={handleContinue}
      >
        Continue
        <Image
          src="/static/assets/icons/right_white_arrow.svg"
          width={17}
          height={14}
          alt="arrow icon"
        />
      </button>
    </div>
  );
};

export default SocialSignup;
