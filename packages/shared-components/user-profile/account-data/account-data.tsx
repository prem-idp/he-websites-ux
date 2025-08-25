"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DeleteAccount from "@packages/shared-components/user-profile/delete-account/delete-account";
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
  const [settingPopup, setSettingPopup] = useState(false);
  // Assuming you want to render the first item in the data array
  const { title, description, buttonText, popupBlocker } = data[0] || {};
  const handleNavigation = () => {
    router.push("/two-factor-authentication");
  };
  return (
    <>
      <div className="flex flex-col items-start gap-[16px]">
        <div className="h6">{title}</div>
        <div className="para">{description}</div>
        {buttonText === "Delete my account" ? (
          <button
            onClick={() => setSettingPopup(true)}
            className="btn btn-primary w-full md:w-auto"
          >
            {buttonText}
          </button>
        ) : (
          <button
            onClick={handleNavigation}
            className="btn btn-primary w-full md:w-auto"
          >
            {buttonText}
          </button>
        )}

        {popupBlocker && <span className="pb-[8px]">{popupBlocker}</span>}
      </div>
      {settingPopup && (
        <DeleteAccount
          onAccountPop={setSettingPopup}
          accountPop={settingPopup}
        />
      )}
    </>
  );
};

export default AccountData;
