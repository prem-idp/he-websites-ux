"use server";
import { discoverpodQuery } from "@packages/lib/graphQL/graphql-query";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import Discoverslidercomponents from "@packages/shared-components/common-utilities/slider/discoverslidercomponents";
import React from "react";

interface DiscoverSliderInterface {
  heading: string;
  subheading: string;
  internalName: string;
}

const Discovercomponents: React.FC<DiscoverSliderInterface> = async (props) => {
  const discovercontentfulData: any = (
    await graphQlFetchFunction(
      discoverpodQuery(process.env.PROJECT, props.internalName)
    )
  ).data?.contentData?.items[0]?.bodyContentCollection?.items[0]
    ?.mediaCardsCollection?.items;

  return (
    discovercontentfulData && (
      <div className="discover-container bg-white">
        <div className="max-w-container mx-auto">
          <div className="discover-card-container px-[0] py-[34px] md:py-[64px]">
            <div className="discover-header px-[20px] lg:px-[0] mb-[26px] md:mb-[32px]">
              <h2 className={`font-bold`} data-testid="discoverHeading">
                {props.heading}
              </h2>
              <p className={`small mt-[8px]`} data-testid="discoverSubHeading">
                {props.subheading}
              </p>
            </div>
            <div className="discover-inner-wrap">
              <Discoverslidercomponents
                dicoverCardContentfulList={discovercontentfulData}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Discovercomponents;
