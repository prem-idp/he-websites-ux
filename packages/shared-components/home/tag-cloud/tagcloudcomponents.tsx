"use server";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import Link from "next/link";
import React from "react";
import { HomePageInterface } from "@packages/lib/types/interfaces";
import { tagCloudQuery } from "@packages/lib/graphQL/graphql-query";

interface headingProps {
  heading: string;
}

const Tagcloudcomponents: React.FC<headingProps> = async ({heading}) => {
  const tagCloudData: HomePageInterface = (await graphQlFetchFunction(tagCloudQuery))
  const tagCloudArray = tagCloudData?.data?.contentData.items?.[0]
                        ?.bodyContentCollection.items[0].mediaCardsCollection.items
  return (
  
    <div className="tag-cloud-container">
      <div className="tag-cloud-card-container flex flex-col gap-[16px] px-[20px] lg:px-[0] pt-[32px]">
        <div className="tag-cloud-header">
          <h6 className="font-bold">{heading}</h6>
        </div>
        <div className="tag-cloud-inner-wrap">
          <ul className="flex flex-wrap gap-[8px]">
            {tagCloudArray?.map((data, index) => (
              <li key={index}>
                {data?.tagUrl && (
                  <Link href={data?.tagUrl}
                  className="font-bold x-small text-primary-500 uppercase rounded-[4px] bg-primary-50 hover:bg-primary-500 hover:text-white px-[8px] py-[3px]"
                  >
                    {data?.tagName}
                  </Link>
                )}
              </li>
            ))}       
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tagcloudcomponents;
