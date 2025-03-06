"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react"
import { SubModule } from "./modules.model";

interface ModuleChildAccordionComponent {
  subModules: SubModule[];
}

const ModuleChildAccordionComponent = ({ subModules }: ModuleChildAccordionComponent) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="accordion flex flex-col rounded-[6px] bg-white">
        {subModules.map((item, index: number) => (
          <div className="accordion-item flex flex-col gap-[8px] py-[8px]" key={index}>
            <div className={`accordion-header w-fit flex flex-row-reverse items-center justify-end gap-[8px] para font-semibold ${item?.description ? 'text-primary-400 hover:underline' : ''} cursor-pointer`} onClick={() => toggleAccordion(index)}>
              {item.title}  {item?.credits ? ('(' + item?.credits + ' credits)') : ''}  -  {item?.moduleTypeName ?? ''}
              {!!item?.description && <div className="relative flex items-center justify-center w-[12px] h-[12px]">
                <span className="absolute">
                  <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1.38477H1" stroke="#4664DC" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <motion.span animate={{ rotate: openIndex === index ? 180 : 90 }}
                  className="absolute rotate-90">
                  <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1.38477H1" stroke="#4664DC" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              </div>}
            </div>
            <AnimatePresence>
              {(openIndex === index && !!item?.description) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } }}

                  className={`accordion-body `}>
                  <div className="m-[6px_0]">
                    <p>{item?.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  )
}

export default ModuleChildAccordionComponent;