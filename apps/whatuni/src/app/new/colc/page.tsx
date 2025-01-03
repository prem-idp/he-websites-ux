"use server";
import Link from "next/link";
import React from "react";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { ColcLandingPageQuery } from "@packages/lib/graphQL/cocl-landing";
import { MultipleCardContainer } from "@packages/lib/types/interfaces";
import dynamicComponentImports from "@packages/lib/dynamic-imports/imports";
const page = async () => {
  const componentList = (await graphQlFetchFunction(ColcLandingPageQuery))?.data
    ?.contentData?.items[0]?.bodyContentCollection.items;
  return (
    <>
      <h1>
        <Link href="/new/mf">Calculation page</Link>
      </h1>
      {componentList.map((childItems: MultipleCardContainer, index: number) => {
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
            routename="colc"
            key={index}
            heading={childItems?.cardSectionTitle}
            subheading={childItems?.shortDescription}
            internalName={childItems?.internalName}
            callAction={childItems?.callToAction}
          />
        );
      })}
    </>
  );
};

export default page;
