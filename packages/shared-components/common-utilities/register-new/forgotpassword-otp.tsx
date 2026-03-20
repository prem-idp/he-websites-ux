"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  HideEyeIcon,
  ShowEyeIcon,
} from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";

const ForgotpasswordOtp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasMinLength = password.length >= 8;

  const confirmHasUpper = /[A-Z]/.test(confirmPassword);
  const confirmHasLower = /[a-z]/.test(confirmPassword);
  const confirmHasDigit = /\d/.test(confirmPassword);
  const confirmHasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(confirmPassword);
  const confirmHasMinLength = confirmPassword.length >= 8;

  const validatePassword = (val: string) => {
    setPassword(val);
    const isValid =
      /[A-Z]/.test(val) &&
      /[a-z]/.test(val) &&
      /\d/.test(val) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(val) &&
      val.length >= 8;
    setPasswordError(
      val && !isValid ? "Password does not meet requirements" : "",
    );
    if (confirmPassword && val !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const validateConfirmPassword = (val: string) => {
    setConfirmPassword(val);
    setConfirmPasswordError(
      val && val !== password
        ? "Your passwords do not match, please try again"
        : "",
    );
  };
  return (
    <form className="flex flex-col gap-[24px]">
      <div className="flex flex-col text-center gap-[8px]">
        <h5>Please enter your 6-digit code</h5>
        <div className="small">
          We’ve sent your reset password code to:
          <br />
          <span className="font-semibold">neil.burgess@idp.com</span>
        </div>

        {/* OTP Inputs  */}
        <div className="flex justify-center gap-[4px]">
          <input
            type="text"
            maxLength={1}
            placeholder="0"
            className="w-[41px] h-[41px] text-center border border-grey-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-grey-500"
          />

          <input
            type="text"
            maxLength={1}
            placeholder="0"
            className="w-[41px] h-[41px] text-center border border-grey-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-grey-500"
          />

          <input
            type="text"
            maxLength={1}
            placeholder="0"
            className="w-[41px] h-[41px] text-center border border-grey-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-grey-500"
          />

          <input
            type="text"
            maxLength={1}
            placeholder="0"
            className="w-[41px] h-[41px] text-center border border-grey-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-grey-500"
          />

          <input
            type="text"
            maxLength={1}
            placeholder="0"
            className="w-[41px] h-[41px] text-center border border-grey-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-grey-500"
          />

          <input
            type="text"
            maxLength={1}
            placeholder="0"
            className="w-[41px] h-[41px] text-center border border-grey-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-grey-500"
          />
        </div>
        <p className="small">
          This is to protect you from anyone trying to steal your data/login
          details
        </p>
      </div>

      <div className="flex flex-col basis-full gap-[4px]">
        <label htmlFor="password" className="small font-semibold">
          New Password
          <span className="text-negative-default">*</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => validatePassword(e.target.value)}
            className={`w-full small px-[12px] py-[10px] pr-[40px] border rounded-[4px] outline-none shadow-custom-2 ${passwordError ? "border-negative-default" : "border-grey-500"}`}
            id="password"
            placeholder="Please enter your password"
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
        {passwordError && (
          <p className="text-negative-default x-small">{passwordError}</p>
        )}
        <div className="flex justify-center divide-x divide-grey-200 small [&>*]:px-[8px]">
          <div className={hasUpper ? "text-positive-default" : ""}>ABC</div>
          <div className={hasLower ? "text-positive-default" : ""}>abc</div>
          <div className={hasDigit ? "text-positive-default" : ""}>123</div>
          <div className={hasSpecial ? "text-positive-default" : ""}>!@%</div>
          <div className={hasMinLength ? "text-positive-default" : ""}>
            8 characters
          </div>
        </div>
      </div>

      <div className="flex flex-col basis-full gap-[4px]">
        <label htmlFor="confirmpassword" className="small font-semibold">
          Confirm Password
          <span className="text-negative-default">*</span>
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => validateConfirmPassword(e.target.value)}
            className={`w-full small px-[12px] py-[10px] pr-[40px] border rounded-[4px] outline-none shadow-custom-2 ${confirmPasswordError ? "border-negative-default" : "border-grey-500"}`}
            id="confirmpassword"
            placeholder="Please enter your password"
          />
          <button
            className="cursor-pointer absolute inset-y-0 right-[12px] flex items-center text-gray-500"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <ShowEyeIcon /> : <HideEyeIcon />}
          </button>
        </div>
        {confirmPasswordError && (
          <p className="text-negative-default x-small">
            {confirmPasswordError}
          </p>
        )}

        <div className="flex justify-center divide-x divide-grey-200 small [&>*]:px-[8px]">
          <div className={confirmHasUpper ? "text-positive-default" : ""}>
            ABC
          </div>
          <div className={confirmHasLower ? "text-positive-default" : ""}>
            abc
          </div>
          <div className={confirmHasDigit ? "text-positive-default" : ""}>
            123
          </div>
          <div className={confirmHasSpecial ? "text-positive-default" : ""}>
            !@%
          </div>
          <div className={confirmHasMinLength ? "text-positive-default" : ""}>
            8 characters
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
      >
        Confirm code
      </button>
      <hr className="border-t border-grey-200" />
      <div className="flex flex-col items-center justify-center gap-[8px]">
        <div className="small font-semibold">Didn’t receive a code?</div>
        <div className="x-small">
          50 Secs{" "}
          <span>
            <Link
              href="#"
              className="text-primary-400 hover:text-primary-500 hover:underline"
            >
              Resend code
            </Link>
          </span>
        </div>
        <p className="text-negative-default x-small">
          Too many attempts! Please try again in 24 hours.
        </p>
      </div>
      <Link
        href="/registeration/signin"
        className="bg-grey-50 pt-[16px] mb-[-16px] small font-semibold text-center text-primary-400 hover:text-primary-500 hover:underline"
      >
        Return to log in
      </Link>
    </form>
  );
};

export default ForgotpasswordOtp;
