import React, { useState } from "react";
import InterestedSkeleton from "../skeleton/ip/interested-skeleton";

const Interested = () => {
  const [click, setIsClicked] = useState(false);

  const buttonClicked = () => {
    setIsClicked(!click);
  };
  return (
    <>
      <section className="bg-green200 py-[12px]">
        <div className="text-black small flex item-center justify-center gap-[4px]">
          I’m interested in
          <div className="relative">
            <button
              onClick={buttonClicked}
              className="flex items-center gap-[4px] text-primary-500 underline"
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
            </button>
            {click && (
              <div className="bg-white z-[1] shadow-custom-3 rounded-[4px] absolute top-[33px] md:w-[246px]">
                <ul>
                  <li className="px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer">
                    Clearing 2025
                  </li>
                  <li className="px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer">
                    Postgraduate
                  </li>
                  <li className="px-[16px] py-[12px] hover:bg-blue-50 hover:underline cursor-pointer">
                    Undergraduate
                  </li>
                </ul>
              </div>
            )}
          </div>
          courses
        </div>
      </section>
      <InterestedSkeleton />
    </>
  );
};

export default Interested;
