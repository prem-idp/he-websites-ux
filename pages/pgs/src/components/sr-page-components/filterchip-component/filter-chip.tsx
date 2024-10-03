"use server";

import React from "react";
import Link from "next/link";
interface dataProps {
  Title: String;
  value: string[];
}
const FilterChip: React.FC<{ data: dataProps }> = ({ data }) => {
  return (
    <>
      <div className="flex items-center gap-[8px] overflow-x-auto whitespace-nowrap snap-x snap-mandatory scroll-px-[24px] px-[24px] lg:px-0 lg:custom-vertical-scrollbar">
        <div className="text-para-lg">{data.Title}</div>
        <div className="flex items-center gap-[4px]">
          {data.value.map((item, index) => (
            <Link
              href={`?subject=${item}`}
              className="btn-primary-outline capitalize"
              key={index}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterChip;
