import React, { useState } from "react";
import InterestedSkeleton from "../skeleton/ip/interested-skeleton";

const Interested = () => {
  const [click, setIsClicked] = useState(false);

  const buttonClicked = () => {
    setIsClicked(!click);
  };
  return (
    <>
      <section className="bg-green200 py-[12px] text-black small flex item-center justify-center gap-[4px]">
        I’m interested in
        <button
          onClick={buttonClicked}
          className="flex items-center gap-[4px] text-primary-500 underline relative group pb-[12px] mb-[-12px]"
        >
          Clearing 2025
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8.5L10 13.5L5 8.5"
              stroke="#0657AD"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="bg-white z-[1] shadow-custom-3 rounded-[4px] absolute overflow-hidden top-[33px] md:w-[246px] hidden group-hover:block">
            <ul>
              <li className="px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer text-left text-grey300">
                Clearing 2025
              </li>
              <li className="px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer text-left text-grey300">
                Postgraduate
              </li>
              <li className="px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer text-left text-grey300">
                Undergraduate
              </li>
            </ul>
          </div>
        </button>
        courses
      </section>
      {/* <InterestedSkeleton /> */}
    </>
  );
};

export default Interested;
