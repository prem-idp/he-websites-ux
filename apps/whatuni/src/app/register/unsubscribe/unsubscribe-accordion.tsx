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
    <div className="border-b border-grey-300 py-[8px]">
      <button
        type="button"
        className="flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="small font-semibold hover:underline">{title}</span>
        <svg
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.29289 5.29289C2.68342 4.90237 3.31658 4.90237 3.70711 5.29289L8 9.58579L12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071L2.29289 6.70711C1.90237 6.31658 1.90237 5.68342 2.29289 5.29289Z"
            fill="#4664DC"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] mt-[16px]" : "max-h-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default UnsubscribeAccordion;
