"use client";
import React, { useState } from "react";

const TextToggleComponent = ({ text }: any) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const truncatedText = text.slice(0, 550);
  return (
    <div className="flex flex-col gap-[8px] w-full lg:w-[calc(100%_-_289px)]">
      <div className="flex flex-col gap-[24px]">
        <p className="para font-normal">{isExpanded ? text : truncatedText}</p>
      </div>
      <div
        className="small font-semibold text-primary-400 hover:underline cursor-pointer"
        onClick={toggleReadMore}
      >
        {isExpanded ? "- Read Less" : "+ Read More"}
      </div>
    </div>
  );
};

export default TextToggleComponent;
