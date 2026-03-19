"use client";
import React, { useState } from "react";

const UnsubscribeAccordion = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <>
      <button
        type="button"
        className="flex items-center justify-between w-full border-b border-grey-300 pb-[8px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="small font-semibold hover:underline">{title}</span>
        <svg
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 8L10 13L5 8"
            stroke="#5C656E"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] mt-[16px]" : "max-h-0"}`}
      >
        {children}
      </div>
    </>
  );
};

export default UnsubscribeAccordion;
