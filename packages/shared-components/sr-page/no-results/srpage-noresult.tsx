"use server";
import React from "react";
import { httpBFFRequest,graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";

const SrPageNoResults = async ({searchPayLoad}: any) => {
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  const displayNameResponse = await httpBFFRequest(displayNameBFFEndPt, searchPayLoad, "POST", `${process.env.NEXT_PUBLIC_X_API_KEY}`, "no-cache", 0, {});
  return (
    <>
      <div className="md:py-[56px]">
        <div className="flex gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <div className="para-lg font-bold font-farro">
              Well, that's unexpected!
            </div>
            <div className="small">
              We couldn’t find any matches for {displayNameResponse?.subjectName?.join(", ")} Not what you
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
