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
        <div className="flex flex-col gap-[8px] ">
          <div className="flex flex-col gap-[4px] items-center">
            <div className="h6">Two factor authentication</div>
            <span className="text-x-small">
              {verify
                ? "Please enter the 6 digit pin"
                : " Type your phone number and we will send you a code"}
            </span>
          </div>
          {verify ? (
            <div className="flex">
              {/* <input
                type="texxt"
                value="tr"
                placeholder="enter your phone sssnumber"
              /> */}
            </div>
          ) : (
            <div className="flex">
              <select name="" id="">
                <option value="">+44</option>
                <option value="">+43</option>
                <option value="">+23</option>
              </select>
              {/* <input
                type="phone"
                value=""
                placeholder="enter your phone number"
              /> */}
            </div>
          )}

          <span className="text-x-small">
            This is to protect you from anyone trying to steal your data/login
            details
          </span>
          <button
            onClick={() => setVerify(!verify)}
            className="btn btn-primary"
          >
            {!verify ? "Verify" : "Confirm code"}
          </button>
        </div>
      </div>
      {verify && (
        <div className="flex w-[550px] max-w-[100%]  flex-col gap-[4px]">
          <span className="">Didn’t receive a code?</span>
          <span>
            50 Secs <Link href="#">Resend code</Link>
          </span>
          <span>
            Or<Link href="#">Edit number</Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default MoblieFactorAuthentication;
