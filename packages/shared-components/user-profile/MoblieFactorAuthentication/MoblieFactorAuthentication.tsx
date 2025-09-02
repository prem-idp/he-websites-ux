"use client";
import React, { useState } from "react";
import Link from "next/link";

const MoblieFactorAuthentication = () => {
  const [verify, setVerify] = useState(false);
  return (
    <div className="flex flex-col items-center gap-[32px] py-[56px]">
      <div className="flex items-center flex-col gap-[32px] w-[550px] max-w-[100%] border rounded-[4px] border-grey-300 p-[24px] bg-white">
        <div className="flex flex-col gap-[4px] w-[320px] max-w-[100%] text-center items-center">
          <div className="h2 pl-[2px] w-full whitespace-nowrap overflow-hidden text-ellipsis ">
            Just making sure...
          </div>
          <span className="text-x-small">
            {!verify
              ? "To download your data we require two factor authentication so we can verify it is really you"
              : "To download your data we require two factor authentication so we can verify it is really you"}
          </span>
        </div>
        <div className="flex flex-col gap-[8px] items-center">
          <div className="flex flex-col gap-[4px] items-center">
            <div className="h6">Two factor authentication</div>
            <span className="text-x-small text-center">
              {verify
                ? "Please enter the 6 digit pin"
                : " Type your phone number and we will send you a code"}
            </span>
          </div>
          <div className="flex justify-center mx-auto w-full max-w-[350px] gap-[4px]">
            {verify ? (
              Array(6)
                .fill(0)
                .map((_, index) => (
                  <input
                    key={index}
                    type="number"
                    className="appearance-none appearance-textfield py-[10px] px-[12px] rounded-[4px] h-[41px] border border-grey-500 bg-grey-100 w-[40px] text-center text-small text-grey-600"
                    value="0"
                    placeholder="0"
                    maxLength={1}
                  />
                ))
            ) : (
              <>
                <select
                  name=""
                  id=""
                  className="max-w-[85px] w-full dropdown-grey dropdown-regular"
                >
                  <option value="">+44</option>
                  <option value="">+43</option>
                  <option value="">+23</option>
                </select>
                <input
                  type="phone"
                  className="py-[10px] px-[12px] rounded-[4px] h-[41px] border border-grey-500 bg-grey-100 w-full text-small text-grey-600"
                  value=""
                  placeholder="enter your phone number"
                />
              </>
            )}
          </div>

          <span className="text-x-small text-center">
            This is to protect you from anyone trying to steal your data/login
            details
          </span>
          <button
            onClick={() => setVerify(!verify)}
            className="btn btn-primary btn-xsmall min-w-[150px]"
          >
            {!verify ? "Verify" : "Confirm code"}
          </button>
        </div>
      </div>
      {verify && (
        <div className="flex w-[550px] max-w-[100%] flex-col gap-[4px]">
          <span className="text-small text-grey-900 font-semibold">
            Didn’t receive a code?
          </span>
          <span className="text-x-small">
            50 Secs{" "}
            <Link className="text-blue-500" href="#">
              Resend code
            </Link>
          </span>
          <span className="text-x-small">
            Or{" "}
            <Link className="text-blue-500" href="#">
              Edit number
            </Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default MoblieFactorAuthentication;
