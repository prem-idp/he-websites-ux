import React from "react";
import {
  HeartBlue,
  RightBlueArrowIcon,
} from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";

const Enquiries = () => {
  const enquiries = [1, 2, 3, 4, 5].map(() => ({
    date: "29 JUL 2024",
    university: "University of Bristol",
    description:
      "Hello, I read about the Nutrition and Exercise as Medicine with Foundation Year BSc (Hons) offered by University of Salford on Whatuni.com and would like to request more information about the course. Hello, I read about the Nutrition and Exercise as Medicine with Foundation Year BSc (Hons) offered by University of Salford on Whatuni.com and would like to reques",
    hasUniversityInfo: true,
  }));

  return (
    <>
      <div className="h5 mb-[16px]">Enquiries</div>
      <div className="space-y-[8px]">
        {enquiries.map((item, index) => (
          <div
            key={index}
            className="bg-white p-[16px] rounded-[8px] shadow-custom-3 flex flex-col gap-[8px]"
          >
            <div className="flex justify-between items-center">
              <div className="xs-small font-semibold">
                Enquired ON {item.date}
              </div>
              <button className="group">
                <HeartBlue hover={"group-hover:fill-blue-500"} />
              </button>
            </div>
            <div className="small font-semibold">{item.university}</div>
            <div
              className={`flex gap-[16px] ${item.hasUniversityInfo ? "md:flex-col" : "md:flex-row md:justify-between md:items-center"}`}
            >
              <div
                className={`text-neutral600 x-small line-clamp-8 md:line-clamp-4 ${item.hasUniversityInfo ? "bg-grey-100 p-[8px] rounded-[8px] " : "bg-white"}`}
              >
                {item.description}
              </div>
              <button className="flex justify-end items-center gap-[4px] text-primary-400 x-small group shrink-0">
                University Info
                <RightBlueArrowIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Enquiries;
