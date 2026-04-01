"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ForgotpasswordOtp from "./forgotpassword-otp";

const Forgotpassword = ({
  email = "",
  onUseDifferentEmail,
}: {
  email?: string;
  onUseDifferentEmail?: () => void;
}) => {
  const [showOtp, setShowOtp] = useState(false);

  const handleResetPassword = () => {
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
        <label
          htmlFor="emailAddress"
          className="small font-semibold text-grey-700"
        >
          Email address
          <span className="text-negative-default" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="email"
          className="w-full small px-[12px] py-[10px] bg-grey-50 border border-grey-500 rounded-[4px] outline-none shadow-custom-2 cursor-not-allowed read-only:text-grey500"
          id="emailAddress"
          value={email}
          readOnly
          aria-readonly="true"
          aria-required="true"
        />
        <div className="flex x-small gap-[2px]">
          Not you?
          <button
            type="button"
            onClick={onUseDifferentEmail}
            className="text-primary-400 underline"
          >
            Use a different email
          </button>
        </div>
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
      <div className="bg-grey-50 border-t border-grey-200 mx-[-32px] py-[16px] mb-[-32px] text-center">
        <Link
          href="#"
          className="w-fit mx-auto small font-semibold  text-primary-400 hover:text-primary-500"
        >
          Return to log in
        </Link>
      </div>
    </form>
  );
};

export default Forgotpassword;
