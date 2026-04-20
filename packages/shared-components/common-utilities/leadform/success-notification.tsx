import React from "react";
import { Tick, CloseGreenIcon } from "@/app/media-utilities/mediautilities";

type SuccessNotificationProps = {
  message?: string;
};

const SuccessNotification = ({
  message = "Your details have been saved",
}: SuccessNotificationProps) => (
  <div className="flex gap-[8px] bg-positive-light border border-positive-dark rounded-[6px] p-[16px]">
    <Tick />
    <div className="flex flex-grow small font-semibold text-positive-dark">
      {message}
    </div>
    <div className="cursor-pointer">
      <CloseGreenIcon />
    </div>
  </div>
);

export default SuccessNotification;
