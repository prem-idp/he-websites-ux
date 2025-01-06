"use server";
import Eligibilitycriteriacard from "@packages/shared-components/common-utilities/cards/eligibility-criteria/eligibilitycriteriacard";
import React from "react";
import { discoverpodQuery } from "@packages/lib/graphQL/graphql-query";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { homePageComponentQueryFormation } from "@packages/lib/graphQL/fetch-function";
interface PropsInterface {
  heading: string | undefined;
  subheading: string | undefined;
  internalName: string | undefined;
  routename: string;
}
const Eligibilitycriteriacomponents = async ({
  heading,
  subheading,
  internalName,
  routename,
}: PropsInterface) => {
  const query = homePageComponentQueryFormation(
    internalName,
    discoverpodQuery,
    routename
  );
  const jsondata = await graphQlFetchFunction(query);
  console.log(jsondata);
  return (
    <div className="eligibility-container bg-grey-50">
      <div className="max-w-container mx-auto">
        <div className="eligibility-card-container flex flex-col gap-[32px] px-[16px] md:px-[20px] xl:px-[0] py-[34px] md:py-[64px]">
          <div className="eligibility-header">
            <div className="h2 font-bold">{heading}</div>
            <p className="font-normal small mt-[8px]">{subheading}</p>
          </div>
          <div className="eligibility-course-container ">
            <div className="eligibility-inner-wrap grid grid-col-1 md:grid-cols-3 gap-[16px]">
              <Eligibilitycriteriacard />
              <Eligibilitycriteriacard />
              <Eligibilitycriteriacard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibilitycriteriacomponents;
