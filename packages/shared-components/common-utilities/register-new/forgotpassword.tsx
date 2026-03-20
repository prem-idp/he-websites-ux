"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ForgotpasswordOtp from "./forgotpassword-otp";

const Forgotpassword = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleResetPassword = () => {
    if (!email.trim() || !isValidEmail(email)) {
      setShowError(true);
      return;
    }
    setShowOtp(true);
  };

  if (showOtp) return <ForgotpasswordOtp />;

  return (
    <form className="flex flex-col gap-[24px]">
      <div className="flex flex-col text-center gap-[8px]">
        <h5>Forgotton your password?</h5>
        <div className="small">
          Your new password will work across Whatuni, Postgraduate Search and
          Complete University Guide, keeping your account consistent on all
          three sites
        </div>
      </div>
      <div className="flex flex-col basis-full gap-[4px]">
        <label htmlFor="emailAddress" className="small font-semibold">
          Email address
          <span className="text-negative-default">*</span>
        </label>
        <input
          type="email"
          className={`w-full small px-[12px] py-[10px] border rounded-[4px] outline-none shadow-custom-2 ${showError ? "border-negative-default" : "border-grey-500"}`}
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

      <button
        type="button"
        onClick={handleResetPassword}
        className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
      >
        Reset password{" "}
        <Image
          src="/static/assets/icons/right_white_arrow.svg"
          width="17"
          height="14"
          alt="arrow icon"
        />
      </button>
      <Link
        href="/registeration/signin"
        className="bg-grey-50 border-t border-grey-200 mx-[-32px] pt-[16px] mb-[-16px] small font-semibold text-center text-primary-400 hover:text-primary-500"
      >
        Return to log in
      </Link>
    </form>
  );
};

export default Forgotpassword;
