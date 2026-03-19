"use client";
import React, { useState } from "react";
import Image from "next/image";
import Forgotpassword from "./forgotpassword";

const LoginForm = ({
  email = "",
  onUseDifferentEmail,
}: {
  email?: string;
  onUseDifferentEmail?: () => void;
}) => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setPasswordError("Please enter your password");
      return;
    }

    setPasswordError(
      "Incorrect password. Please try again or reset your password",
    );
  };

  if (showForgotPassword) return <Forgotpassword />;

  return (
    <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit}>
      <div className="flex flex-col text-center gap-[8px]">
        <h5>Welcome back!</h5>
        <div className="small">Enter your password to continue</div>
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
          className="w-full small font-normal px-[12px] py-[10px] bg-grey-50 border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
          id="emailAddress"
          placeholder="neil.burgess@idp.com"
          defaultValue={email}
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

      <div className="flex flex-col basis-full gap-[4px]">
        <label htmlFor="password" className="small font-semibold">
          Password
          <span className="text-negative-default">*</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className={`w-full small font-normal px-[12px] py-[10px] pr-[40px] border rounded-[4px] outline-none shadow-custom-2 ${passwordError ? "border-negative-default" : "border-grey-500"}`}
            id="password"
            placeholder="Please enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
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
          <div className="x-small text-negative-default">{passwordError}</div>
        )}
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
                <span className="x-small font-normal">
                  (Don't use this on a public computer)
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>

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
      <button
        type="button"
        onClick={() => setShowForgotPassword(true)}
        className="small font-semibold text-center text-primary-400 underline hover:text-primary-500"
      >
        Forgot password?
      </button>
    </form>
  );
};

export default LoginForm;
