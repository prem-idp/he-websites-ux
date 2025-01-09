"use server";
import React from "react";

import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import Articlelinkcard from "@packages/shared-components/common-utilities/cards/article-link/articlelinkcard";
const Articlelinkcomponents = ({
  heading,
  subheading,
  internalName,
  callAction,
  routename,
  contentModelName,
}: any) => {
  return (
    <div className="articlelink-container bg-grey-50">
      <div className="max-w-container mx-auto">
        <div className="articlelink-card-container flex flex-col gap-[32px] px-[16px] md:px-[20px] xl:px-[0] py-[40px] md:py-[64px]">
          <div className="articlelink-header">
            {heading && <div className="h2 font-bold">{heading}</div>}
            {subheading && (
              <p className="font-normal small mt-[8px]">{subheading}</p>
            )}
          </div>
          <div className="articlelink-course-container ">
            <div className="articlelink-inner-wrap">
              <Articlelinkcard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articlelinkcomponents;
