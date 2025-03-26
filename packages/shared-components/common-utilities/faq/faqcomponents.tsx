"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
const Faqcomponents = ({ faqData }: any) => {
  const faqDatas =
    faqData?.bottomZoneComponentsCollection?.items?.[0]?.faqEntriesCollection
      ?.items;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  if (!faqDatas) return <></>;
  return (
    <div className="faq-container bg-white">
      <div className="max-w-container mx-auto">
        <div className="faq-card-container flex flex-col gap-[32px] px-[16px] py-[40px] md:px-[20px] md:py-[64px] lg:px-[20px] xl:px-[0]">
          <div className="faq-header flex flex-col gap-[4px]">
            <div className="h2 font-bold">FAQs</div>
            <p className="font-normal small">{faqData?.pageTitle}</p>
          </div>
          <div className="accordion flex flex-col rounded-[6px] border border-grey-200 px-[16px]">
            {faqDatas?.map((item: any, index: any) => (
              <div
                className="accordion-item flex flex-col gap-[8px] py-[16px] border-b border-b-grey-200 last:border-b-0 cursor-pointer"
                key={index}
              >
                <div
                  className="accordion-header flex items-center justify-between gap-[48px] para font-semibold text-grey-600"
                  onClick={() => setOpenIndex((prevIndex) => (prevIndex === index ? null : index))}
                >
                  {item.question}
                  <svg
                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1L6 6L1 1"
                      stroke="#82898F"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  className={`transition-all duration-300 overflow-hidden 
              ${openIndex === index ? "max-h-screen" : "max-h-0"}`}
                >
                  <div className="mt-[16px]">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqcomponents;
