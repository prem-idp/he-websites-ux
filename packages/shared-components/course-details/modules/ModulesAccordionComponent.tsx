"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react"
import ModuleChildAccordionComponent from "@packages/shared-components/course-details/modules/ModuleChildAccordionComponent";
import { Module } from "./modules.model";

interface ModulesAccordionComponentProps {
  modules: Module[]
}

const ModulesAccordionComponent = ({ modules }: ModulesAccordionComponentProps) => {
  console.log(modules)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="accordion flex flex-col rounded-[6px] bg-white border border-grey-200 px-[16px]">
        {modules?.map((module, index: number) => (
          <div className="accordion-item flex flex-col gap-[8px] py-[16px] border-b border-b-grey-200 last:border-b-0" key={index}>
            <div className='accordion-header flex items-center justify-between gap-[48px] para-lg font-semibold text-primary-400 hover:underline cursor-pointer' onClick={() => toggleAccordion(index)}>
              {module?.moduleName}
              <div className="relative flex items-center justify-center w-[12px] h-[12px]">
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
              </div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } }}

                  className={`accordion-body `}>
                  <div className="mt-[16px]">
                    <ModuleChildAccordionComponent subModules={module?.subModules} />
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

export default ModulesAccordionComponent;