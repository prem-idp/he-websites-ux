"use client";
import React, { useState } from 'react'; 
interface ReadMoreProps {
  children: string; 
  maxLength?: number;
}

function ReadMoreLess({ children, maxLength = 300, }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = children || "";

  const needsTruncation = text.length > maxLength;

  const displayedText = needsTruncation && !isExpanded
    ? text.substring(0, maxLength) + "..."
    : text;

  return (
    <div>
      {displayedText}
      {needsTruncation && ( 
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-400 cursor-pointer hover:underline" 
        >
          {isExpanded ? "- Read Less" : "+ Read More"}
        </span>
      )}
    </div>
  );
}

export default ReadMoreLess;