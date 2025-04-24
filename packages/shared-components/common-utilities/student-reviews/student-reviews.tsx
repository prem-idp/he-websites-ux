import React from "react";
import Reviewscard from "../cards/reviews-card/reviewscard";

const StudentReviews = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[8px] items-start justify-between md:flex-row md:items-center mx-[16px] border-t border-grey-200 pt-[16px]">
        <div className="flex items-center gap-[4px]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7.0625C3 5.26757 4.45507 3.8125 6.25 3.8125H17.625C19.4199 3.8125 20.875 5.26757 20.875 7.0625V13.5625C20.875 15.3574 19.4199 16.8125 17.625 16.8125H14.375L9.5 21.6875V16.8125H6.25C4.45507 16.8125 3 15.3574 3 13.5625V7.0625Z"
              fill="#333333"
            />
            <path
              d="M24.125 10.3125V16.0625C24.125 18.2716 22.3341 20.0625 20.125 20.0625H15.7212L12.8503 22.9334C13.305 23.1754 13.824 23.3125 14.375 23.3125H17.625L22.5 28.1875V23.3125H25.75C27.5449 23.3125 29 21.8574 29 20.0625V13.5625C29 11.7676 27.5449 10.3125 25.75 10.3125H24.125Z"
              fill="#333333"
            />
          </svg>
          <span className="para-lg font-semibold">What do students say?</span>
        </div>
        <div className="xs-small font-semibold uppercase">
          Source:
          <span className="text-primary-400">
            Whatuni student choice awards
          </span>
        </div>
      </div>

      <div className="lg:w-[650px] xl:w-[907px]">
        <div className="overflow-x-auto snap-x snap-mandatory flex px-[16px] scroll-mx-[8px] space-x-[8px] md:scroll-mx-[16px] md:space-x-[16px] md:overflow-hidden">
          <div className="flex-shrink-0 w-[310px] md:w-[335px] lg:w-[308px] xl:w-[430px] snap-center">
            <Reviewscard />
          </div>
          <div className="flex-shrink-0 w-[310px] md:w-[335px] lg:w-[308px] xl:w-[430px] snap-center">
            <Reviewscard />
          </div>
          <div className="flex-shrink-0 w-[310px] md:w-[335px] lg:w-[308px] xl:w-[430px] snap-center">
            <Reviewscard />
          </div>
          <div className="flex-shrink-0 w-[310px] md:w-[335px] lg:w-[308px] xl:w-[430px] snap-center">
            <Reviewscard />
          </div>
          <div className="flex-shrink-0 w-[310px] md:w-[335px] lg:w-[308px] xl:w-[430px] snap-center">
            <Reviewscard />
          </div>
          <div className="flex-shrink-0 w-[310px] md:w-[335px] lg:w-[308px] xl:w-[430px] snap-center">
            <Reviewscard />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[8px] mb-[16px]">
        <a
          href="#"
          className="flex items-center w-fit font-semibold para text-primary-400 hover:underline gap-[8px]"
        >
          View all reviews
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6"
              stroke="#3460DC"
              strokeWidth="1.48148"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default StudentReviews;
