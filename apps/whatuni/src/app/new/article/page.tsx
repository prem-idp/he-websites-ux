"use server";
import React from "react";
import { ArticleLandingPageQuery } from "@packages/lib/graphQL/article-landing";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { MultipleCardContainer } from "@packages/lib/types/interfaces";
import dynamicComponentImports from "@packages/lib/dynamic-imports/imports";
const page = async () => {
  const componentList = (await graphQlFetchFunction(ArticleLandingPageQuery))
    ?.data?.contentData?.items[0]?.bodyContentCollection?.items;
  console.log(
    "actual data",
    await graphQlFetchFunction(ArticleLandingPageQuery)
  );
  return (
    <div className="article_landing">
      {componentList?.map(
        (childItems: MultipleCardContainer, index: number) => {
          const Component: any = dynamicComponentImports(
            childItems.flagComponentStyle
          );
          if (!Component) {
            console.warn(
              `No component found for flagComponentStyle: ${childItems.internalName}`
            );
            return null;
          }
          return (
            <Component
              key={index}
              heading={childItems?.cardSectionTitle}
              subheading={childItems?.shortDescription}
              internalName={childItems?.internalName}
              callAction={childItems?.callToAction}
              routename="/advice"
              contentModelName={"pageTemplateLandingPageCollection"}
            />
          );
        }
      )}
    </div>
  );
};

export default page;
