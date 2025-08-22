import React from "react";
import {
  HeartBlue,
  RightBlueArrowIcon,
} from "../../../../../apps/whatuni/src/app/media-utilities/mediautilities";

interface ResultItem {
  heading: string;
  date: string;
  university: string;
  hasHearIcon: boolean;
  description: string;
  textLink?: string;
  showHighlight?: boolean;
}

const Resultcard = ({ data }: { data: ResultItem[] }) => {
  return (
    <div className="space-y-[8px]">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white p-[16px] rounded-[8px] shadow-custom-3 flex flex-col gap-[8px]"
        >
          <div className="flex justify-between items-center">
            <div className="xs-small font-semibold uppercase">
              {item.heading} {item.date}
            </div>
            {item.hasHearIcon && (
              <button className="group">
                <HeartBlue hover={"group-hover:fill-blue-500"} />
              </button>
            )}
          </div>
          <div className="small font-semibold">{item.university}</div>
          <div
            className={`flex gap-[16px] ${item.showHighlight ? "md:flex-col" : "md:flex-row md:justify-between md:items-center"}`}
          >
            <div
              className={`text-neutral600 x-small line-clamp-8 md:line-clamp-4 ${item.showHighlight ? "bg-grey-100 p-[8px] rounded-[8px] " : "bg-white"}`}
            >
              {item.description}
            </div>
            <button className="flex justify-end items-center gap-[4px] text-primary-400 x-small group shrink-0">
              {item.textLink}
              <RightBlueArrowIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resultcard;
