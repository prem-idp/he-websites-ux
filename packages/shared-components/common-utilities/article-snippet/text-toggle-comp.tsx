"use client";
import React, { useState } from "react";
import { ContentfulInspectorManager } from "@packages/lib/contentful-preview/ContentfulInspector";
const TextToggleComponent = ({ text, iscontentPreview, sysId }: any) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const truncatedText = text?.slice(0, 550);
  console.log("toggle text", text);
  return (
    <>
      {iscontentPreview && (
        <ContentfulInspectorManager
          fields={[
            {
              entryId: sysId,
              fieldId: "longDescription",
              targetSelector: "#toggle-description-element",
            },
          ]}
        />
      )}
      <div className="flex flex-col gap-[8px] w-full lg:w-[calc(100%_-_289px)]">
        <div className="flex flex-col gap-[24px]">
          <p className="para font-normal" id="toggle-description-element">
            {isExpanded ? text : truncatedText}
          </p>
        </div>
        <div
          className="small font-semibold text-primary-400 hover:underline cursor-pointer"
          onClick={toggleReadMore}
        >
          {isExpanded ? "- Read Less" : "+ Read More"}
        </div>
      </div>
    </>
  );
};

export default TextToggleComponent;
