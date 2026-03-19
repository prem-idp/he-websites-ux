"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      val && val !== password ? "Passwords do not match" : "",
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
            className={`w-full small font-normal px-[12px] py-[10px] pr-[40px] border rounded-[4px] outline-none shadow-custom-2 ${passwordError ? "border-negative-default" : "border-grey-500"}`}
            id="password"
            placeholder="Please enter your password"
          />

          <button
            className="cursor-pointer absolute inset-y-0 right-[12px] flex items-center text-gray-500"
            aria-label={showPassword ? "Hide password" : "Show password"}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
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
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.39742 3.39844L6.03037 6.03139M16.6019 16.6029L13.9692 13.9703M11.375 15.0071C10.9296 15.0916 10.47 15.1358 10 15.1358C6.71527 15.1358 3.93477 12.9769 3 10.0007C3.25448 9.19045 3.64574 8.4408 4.14672 7.7788M8.4435 8.44452C8.84176 8.04627 9.39195 7.79994 9.99967 7.79994C11.2151 7.79994 12.2004 8.78525 12.2004 10.0007C12.2004 10.6084 11.9541 11.1586 11.5558 11.5569M8.4435 8.44452L11.5558 11.5569M8.4435 8.44452L6.03037 6.03139M11.5558 11.5569L6.03037 6.03139M11.5558 11.5569L13.9692 13.9703M6.03037 6.03139C7.17463 5.29368 8.53732 4.86561 9.99999 4.86561C13.2847 4.86561 16.0652 7.02448 17 10.0007C16.4814 11.6518 15.3948 13.0513 13.9692 13.9703"
                  stroke="#5C656E"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
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
            className={`w-full small font-normal px-[12px] py-[10px] pr-[40px] border rounded-[4px] outline-none shadow-custom-2 ${confirmPasswordError ? "border-negative-default" : "border-grey-500"}`}
            id="confirmpassword"
            placeholder="Please enter your password"
          />
          <button
            className="cursor-pointer absolute inset-y-0 right-[12px] flex items-center text-gray-500"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <svg
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
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.39742 3.39844L6.03037 6.03139M16.6019 16.6029L13.9692 13.9703M11.375 15.0071C10.9296 15.0916 10.47 15.1358 10 15.1358C6.71527 15.1358 3.93477 12.9769 3 10.0007C3.25448 9.19045 3.64574 8.4408 4.14672 7.7788M8.4435 8.44452C8.84176 8.04627 9.39195 7.79994 9.99967 7.79994C11.2151 7.79994 12.2004 8.78525 12.2004 10.0007C12.2004 10.6084 11.9541 11.1586 11.5558 11.5569M8.4435 8.44452L11.5558 11.5569M8.4435 8.44452L6.03037 6.03139M11.5558 11.5569L6.03037 6.03139M11.5558 11.5569L13.9692 13.9703M6.03037 6.03139C7.17463 5.29368 8.53732 4.86561 9.99999 4.86561C13.2847 4.86561 16.0652 7.02448 17 10.0007C16.4814 11.6518 15.3948 13.0513 13.9692 13.9703"
                  stroke="#5C656E"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
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
