"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
const Faqcomponents = async ({faqData}:any) => {
  const faqDatas = faqData?.bottomZoneComponentsCollection?.items?.[0]?.faqEntriesCollection?.items
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  if(!faqDatas) return<></>
  return (
    <div className="faq-container bg-white">
      <div className="max-w-container mx-auto">
        <div className="faq-card-container flex flex-col gap-[32px] px-[16px] py-[40px] md:px-[20px] md:py-[64px] lg:px-[20px] xl:px-[0]">
          <div className="faq-header flex flex-col gap-[4px]">
            <div className="h2 font-bold">FAQs</div>
            <p className="font-normal small">{faqData?.pageTitle}</p>
          </div>
          <div className="accordion flex flex-col rounded-[6px] border border-grey-200 px-[16px]">
            {faqDatas?.map((item:any, index:any) => (
              <div
                className="accordion-item flex flex-col gap-[8px] py-[16px] border-b border-b-grey-200 last:border-b-0 cursor-pointer"
                key={index}
              >
                <div
                  className="accordion-header flex items-center justify-between gap-[48px] para font-semibold text-grey-600"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                  >
                    <svg
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
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: { duration: 0.25, ease: "easeInOut" },
                      }}
                      className={`accordion-body ${openIndex === index ? "expanded flex" : "collapsed hidden"}`}
                    >
                      <div className="mt-[16px]">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqcomponents;
