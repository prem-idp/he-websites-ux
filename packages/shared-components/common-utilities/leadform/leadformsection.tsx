import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@/app/media-utilities/mediautilities";
import SuccessNotification from "./success-notification";
import LeadFormHeader from "./leadform-header";
import SignInSection from "./signin-section";
import LeadFormFeilds from "./leadformfeilds";

type LeadFormSectionProps = {
  title: string;
  description: string;
  notificationMessage?: string;
  signInHeading?: string;
  signInDescription?: React.ReactNode;
  pageType?:
    | "requestinfo"
    | "opendays"
    | "digitalprospectus"
    | "physicalprospectus";
  onSubmit?: () => void;
  submitLabel?: string;
};
const LeadFormSection = ({
  title,
  description,
  notificationMessage,
  signInHeading,
  signInDescription,
  pageType,
  onSubmit,
  submitLabel,
}: LeadFormSectionProps) => {
  return (
    <div className="border-y md:border border-grey-200 md:rounded-[8px] overflow-hidden">
      <div className="bg-white p-[32px_16px] md:p-[32px] flex flex-col gap-[24px]">
        {/* {notificationMessage && <SuccessNotification message={notificationMessage} />} */}
        <LeadFormHeader title={title} description={description} />
        <SignInSection
          heading={signInHeading}
          description={signInDescription}
        />
        <LeadFormFeilds
          pageType={pageType}
          onSubmit={onSubmit}
          submitLabel={submitLabel}
        />
      </div>
    </div>
  );
};

export default LeadFormSection;
