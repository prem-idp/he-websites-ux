import React, { useState } from "react";
import Image from "next/image";
import CustomCheckbox from "./custom-checkbox";
import SuccessNotification from "./success-notification";
import { PlusIcon } from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";

interface OpenDayConfirmStepProps {
  universityName?: string;
  openDayDate?: string;
  openDayType?: string;
  onSubmit?: () => void;
}

const OpenDayConfirmStep = ({
  universityName = "University of Bradford",
  openDayDate = "Sat 17th August 2026",
  openDayType = "Undergraduate",
  onSubmit,
}: OpenDayConfirmStepProps) => {
  const [prospectusOrdered, setProspectusOrdered] = useState(false);
  return (
    <div className="border-y md:border border-grey-200 md:rounded-[8px] overflow-hidden">
      <div className="bg-white p-[16px] md:p-[32px] flex flex-col gap-[24px]">
        {/* Header */}
        <div className="flex flex-col gap-[8px] text-center">
          <h1 className="text-heading6 md:text-heading5 font-farro font-bold">
            Book your open day place at
          </h1>
          <p className="text-small">
            {universityName}, {openDayDate}, {openDayType}
          </p>
        </div>

        {/* Get prospectus card */}
        <div className="bg-grey-50 border border-grey-200 rounded-[8px] p-[16px] flex flex-col gap-[12px]">
          <div className="flex flex-col gap-[4px]">
            <p className="small font-semibold">
              Get a free [uni] prospectus (optional)
            </p>
            <p className="text-small">
              Find out more about this uni before you head there in person with
              a free prospectus sent straight to you
            </p>
          </div>
          {prospectusOrdered ? (
            <SuccessNotification message="Prospectus ordered" />
          ) : (
            <button
              type="button"
              className="group btn-primary-outline bg-white p-[8px_10px] w-full flex items-center justify-center gap-[4px] small"
              onClick={() => setProspectusOrdered(true)}
            >
              <PlusIcon hover="stroke-primary-400 group-hover:stroke-white" />
              Get prospectus
            </button>
          )}
        </div>

        {/* Stay in the know */}
        <div className="space-y-[8px]">
          <label className="small font-semibold">Stay in the know</label>
          <CustomCheckbox>
            We&apos;ll send helpful updates and occasionally invite you to share
            your views.
          </CustomCheckbox>
          <CustomCheckbox>
            Receive newsletters from this uni. Contact the uni directly to
            update your email preferences.{" "}
            <a href="#" className="text-primary-400">
              Privacy Policy
            </a>
          </CustomCheckbox>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="btn btn-primary btn-medium w-full flex items-center justify-center gap-[8px]"
          onClick={onSubmit}
        >
          Book open day
          <Image
            src="/static/assets/icons/right_white_arrow.svg"
            width={17}
            height={14}
            alt="arrow icon"
          />
        </button>
      </div>
    </div>
  );
};

export default OpenDayConfirmStep;
