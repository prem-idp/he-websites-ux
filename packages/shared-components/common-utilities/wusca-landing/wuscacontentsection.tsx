"use client";
import React, { useState } from "react";
import Link from "next/link";

const Wuscacontentsection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-grey-50 flex flex-col items-center px-[16px] py-[40px] md:px-[20px] md:py-[64px] xl:px-0 gap-[32px]">
      <div className="max-w-[802px] w-full flex flex-col gap-[16px]">
        <h1 className="font-farro font-bold text-heading2 md:text-heading-lg text-grey-900">
          Whatuni Student Choice Awards:
        </h1>

        <p className="font-semibold text-para-lg text-grey-900">
          The best UK unis of 2024, decided by students!
        </p>

        <div className="text-para">
          <div
            className={`${!isExpanded ? "line-clamp-4 md:line-clamp-none" : ""}`}
          >
            <p className="mb-[16px]">
              The Whatuni Student Choice Awards (WUSCAs) are the largest annual
              awards in the UK where the outcome is decided exclusively by
              students! Every year, we collect tens of thousands of reviews from
              students across the country through our campus visits and website.
              We then take the data from reviews and use it to calculate the
              winners of the annual WUSCAs.
            </p>
            <p className="mb-[16px]">
              All our reviews are from verified students and rank the
              institution across a wide range of different aspects of uni life.
              Whether you want to see which unis rank highly for student life,
              or whether you&apos;re more interested in seeing who excels for
              teaching quality, our reviews cover it.
            </p>
            <p className="mb-[16px]">
              A huge congratulations to our 2024 winners! To find out more about
              the different categories and the nominees in each, you can check
              out the category pages below.
            </p>
            <Link href="#" className="text-primary-400 font-semibold underline">
              How are the awards judged?
            </Link>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex md:hidden items-center gap-[4px] text-primary-400 font-semibold small underline mt-[8px]"
          >
            {isExpanded ? "Read less" : "Read more"}
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#4664DC"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Wuscacontentsection;
