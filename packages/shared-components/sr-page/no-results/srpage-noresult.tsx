"use server";
import React from "react";
import Image from "next/image";

const SrPageNoResults = () => {
  return (
    <>
      <div className="md:py-[56px]">
        <div className="flex gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <div className="para-lg font-bold font-farro">
              Well, that's unexpected!
            </div>
            <div className="small">
              We couldn’t find any matches for[search terms] Not what you
              expected? Try a new search term or check for typos. Let's find
              what you're looking for!
            </div>
            <ul className="list-disc small mt-[20px] ml-[20px]">
              <li>
                Not what you expected? Try a new search term or check for typos.
              </li>
              <li>Let’s find what you’re looking for!</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SrPageNoResults;
