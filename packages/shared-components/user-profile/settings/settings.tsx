"use client";
import React, { useState } from "react";
import Link from "next/link";
import AccountData from "@packages/shared-components/user-profile/account-data/account-data";
import SwitchToggleComponent from "../../common-utilities/form-variations/SwitchToggleComponent";
const Settings = () => {
  const [accountpop, setAccountPop] = useState(false);
  const downloadData = [
    {
      title: "Download my data",
      description: (
        <>
          When you register and use our services, we collect certain information
          from you, like your full name and email address. Check out our{" "}
          <Link className="text-primary-400 cursor-pointer pr-[4px]" href="#">
            Privacy Notice
          </Link>
          for more details about the information that we collect and retain. You
          can download a copy from here to access your data and this will only
          be accessible to you.
        </>
      ),
      buttonText: "Download my data",
      popupBlocker:
        "*Please make sure you have your popup blocker disabled before trying to download the PDF.",
    },
  ];
  const deleteAccount = [
    {
      title: "Delete my account",
      description: (
        <>
          We'll be sad to see you go, but if you want to delete your Whatuni,
          Whatuni App, Postgraduate Search and IDP accounts, please click the
          button below.
        </>
      ),
      buttonText: "Delete my account",
      popupFunc: true,
    },
  ];
  return (
    <div className="max-w-container py-[24px] md:py-[40px] mx-auto px-[16px] md:px-[20px] xl:px-0">
      <div className="max-w-[800px] mx-auto flex flex-col gap-[32px]">
        <div className="h4">Settings</div>
        <div className="flex flex-col gap-[16px]">
          <div className="h6">Mailing preferences</div>

          <SwitchToggleComponent
            stateEnable={true}
            label="Newsletters"
            description="Emails from us providing you the latest university news, tips and guides"
          />
          <SwitchToggleComponent
            stateEnable={true}
            label="University updates"
            description="Emails on behalf of universities and carefully selected third-party partners"
          />
          <SwitchToggleComponent
            stateEnable={false}
            label="Surveys"
            description="Have your say on important education issues and the services you receive from us and our partners"
          />
        </div>
        <span className="border-t border-grey-300"></span>
        <AccountData data={downloadData} />
        <span className="border-t border-grey-300"></span>
        <AccountData data={deleteAccount} />
      </div>
    </div>
  );
};

export default Settings;
