"use server";
import React from "react";
import Image from "next/image";
import Findacoursecomponents from "@packages/shared-components/course-details/findacourse/findacoursecomponents";
const SrPageNoResults = () => {
  return (
    <>
      <div className="bg-grey-50 md:py-[56px]">
        <div className="flex gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <div className="para-lg font-bold font-farro">
              {/* No exact matches, but we&apos;re close */}
              Well, that's unexpected!
            </div>
            <div className="small">
              {/* We couldn’t find an exact match but here are some options related to
            [search terms]. Or try modifying the filters to find what you need */}
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

      <Findacoursecomponents />
    </>
  );
};

export default SrPageNoResults;
