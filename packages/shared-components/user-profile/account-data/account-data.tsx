"use client";
import React from "react";
import { useRouter } from "next/navigation";

export interface AccountDataProps {
  data: {
    title: string;
    description: string | React.ReactNode;
    buttonText: string;
    popupBlocker?: string;
    popupFunc?: boolean;
  }[];
}
const AccountData = ({ data }: AccountDataProps) => {
  const router = useRouter();
  const { title, description, buttonText, popupBlocker, popupFunc } = data[0] || {};
  const handleNavigation = () => {
    router.push(popupFunc ? "/register/forgotpassword-otp" : "/two-factor-authentication");
  };
  return (
    <div className="flex flex-col items-start gap-[16px]">
      <div className="h6">{title}</div>
      <div className="text-x-small">{description}</div>
      <button
        onClick={handleNavigation}
        className="btn btn-primary min-w-[150px] btn-xsmall text-x-small w-full md:w-auto"
      >
        {buttonText}
      </button>
      {popupBlocker && (
        <span className="text-x-small pb-[8px]">{popupBlocker}</span>
      )}
    </div>
  );
};

export default AccountData;
