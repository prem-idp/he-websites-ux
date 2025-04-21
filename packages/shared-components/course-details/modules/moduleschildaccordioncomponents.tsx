"use client";
import React, { useState } from "react";
import Link from "next/link";

const Moduleschildaccordioncomponents = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const modules_items = [
        {
          title: "Introductory Law (80 credits)",
          content:
            {
              innerContent: [
                "Criminal Litigation (20 credits) - Core",
                "Public Law (20 credits) - Core",
                "Study Skills (Law) (20 credits) - Core"
              ]
            },
              
        },
        {
          title: "Specific Law (80 credits)",
          content:
          {
            innerContent: [
              "Criminal Litigation (20 credits) - Core",
              "Public Law (20 credits) - Core",
              "Study Skills (Law) (20 credits) - Core"
            ]
          },
        },
      ];
  return (
    <>
    <div className="accordion flex flex-col rounded-[6px] bg-white">
      {modules_items.map((item,index) => (
          <div className="accordion-item flex flex-col gap-[8px] py-[8px]" key={index}>
              <div className='accordion-header w-fit flex flex-row-reverse items-center justify-end gap-[8px] para font-semibold text-primary-400 hover:underline cursor-pointer' onClick={() => toggleAccordion(index)}>
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
              <div className={`accordion-body transition-all ease-in-out ${openIndex === index ? 'max-h-[2000px] duration-700 opacity-[1]':'max-h-0 opacity-0 duration-300 overflow-hidden' }`}>
                    <div className="m-[6px_0]">
                      <p>Criminal Litigation (20 credits) - Core</p>
                      <p>Public Law (20 credits) - Core</p>
                      <p>Study Skills (Law) (20 credits) - Core</p>
                    </div>                              
                </div>                     
          </div>
      ))}
      </div>
    </>
  )
}

export default Moduleschildaccordioncomponents