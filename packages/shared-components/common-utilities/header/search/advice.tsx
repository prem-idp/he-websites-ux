"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Advice() {
  const [isAdviceClicked, setIsAdviceClicked] = useState(false);

  const courseActions = (tabName: string) => {
    setIsAdviceClicked(tabName === "Advice" ? !isAdviceClicked : false);
  };

  // Array of universities
  const universities = [
    "University of Law",
    "University of Manchester",
    "University of Liverpool",
    "University of Barnsley",
    "University of Burnley",
    "Bristol, University of the West of England",
    "INTO Manchester (The University of Manchester)",
    "Courtauld Institute of Art, University of London",
    "Cardiff Metropolitan University",
    "Institute of Advanced Legal Studies, School of Advanced Study, University of London",
  ];

  return (
    <>
      <div className="flex flex-col gap-[24px] min-h-[60px]">
        <div className="bg-white rounded-[32px] p-[16px] border border-neutral300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:p-[10px]">
          <div className="flex flex-col gap-x-[10px] justify-between md:flex-row">
            <div className="relative grow">
              <input
                onClick={() => courseActions("Advice")}
                type="text"
                className="form-control w-full focus:outline-none pb-[16px] small text-black placeholder:text-gray-500 md:py-[10px] border-b border-neutral200 md:border-none"
                aria-label="submenu"
                placeholder="Enter keyword"
              />
              {isAdviceClicked && (
                <div className="flex flex-col w-full absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-16px] top-[53px] overflow-hidden">
                  <div className="x-small font-semibold uppercase px-[16px] py-[10px] text-neutral-700 bg-neutral-50">
                    UNIVERSITIES
                  </div>
                  <ul className="custom-scrollbar-2 max-h-[205px] overflow-y-scroll mr-[4px]">
                    {universities.map((university, index) => (
                      <li key={index}>
                        <Link
                          className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline"
                          href="#"
                        >
                          {university}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="pt-[16px] md:pt-[0]">
              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] para md:w-[138px] lg:para-lg"
              >
                <Image
                  src="/static/assets/icons/search_icon.svg"
                  width="18"
                  height="18"
                  alt="Search icon"
                />
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="#"
            className="flex items-center gap-[4px] text-blue-500 small font-semibold hover:underline"
          >
            Browse advice
            <Image
              src="/static/assets/icons/arrow-right.svg"
              width={20}
              height={20}
              alt="Right Arrow"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
