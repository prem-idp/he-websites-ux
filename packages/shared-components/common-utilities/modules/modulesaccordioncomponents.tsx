"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react"
import Moduleinnercomponents from "@/app/course-details/modules/moduleinnercomponents";


const Modulesaccordioncomponents = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = (index: number) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faq_items = [
        {
          title: "Modules (year 1)",
          content:
            "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
        },
        {
          title: "Modules (year 2)",
          content:
            "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
        },
        {
          title: "Modules (year 3)",
          content:
            "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
        },
        {
          title: "Modules (year 4)",
          content:
            "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
        },
      ];
  return (
    <>
    <div className="accordion flex flex-col rounded-[6px] bg-white border border-grey-200 px-[16px]">
      {faq_items.map((item,index) => (
          <div className="accordion-item flex flex-col py-[16px] border-b border-b-grey-200 last:border-b-0" key={index}>
              <div className='accordion-header flex items-center justify-between gap-[48px] para-lg font-semibold text-primary-400 hover:underline cursor-pointer' onClick={() => toggleAccordion(index)}>
                  {item.title}
                  <div className="relative flex items-center justify-center w-[12px] h-[12px]">
                        <span className="absolute">
                            <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.38477H1" stroke="#4664DC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        
                        <span className={`absolute transition-all duration-300 ${openIndex === index ? 'rotate-180':'rotate-90' }`}>
                            <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.38477H1" stroke="#4664DC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                  </div>
              </div>
              {/* {openIndex === index && ( */}
                <div className={`accordion-body transition-all ease-in-out ${openIndex === index ? 'max-h-[2000px] duration-700 opacity-[1]':'max-h-0 opacity-0 duration-300 overflow-hidden' }`}>
                    <div className="mt-[16px]">
                        <Moduleinnercomponents />
                    </div>                              
                </div>
              {/* )} */}
          </div>
      ))}
      </div>
    </>
  )
}

export default Modulesaccordioncomponents