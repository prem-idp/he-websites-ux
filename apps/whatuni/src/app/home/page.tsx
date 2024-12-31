"use server";
import dynamicComponentImports from "@packages/lib/dynamic-imports/imports";
import Heroslidercomponent from "@packages/shared-components/home/hero/heroslidercomponent";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { homePageQuery } from "@packages/lib/graphQL/graphql-query";
import {
  MultipleCardContainer,
  SliderBannerCollection,
} from "@packages/lib/types/interfaces";
//import GoogleOneTap from "@packages/lib/utlils/GoogleOneTap";
import { Amplify } from "aws-amplify";
import awsconfig from "../../../configs/amplifyconfiguration";
//import { PageViewLogging } from "@packages/lib/utlils/pageviewlogging";
//import dynamic from "next/dynamic";
//const PageViewLogging = dynamic(() => import("@packages/lib/utlils/pageviewlogging"), { ssr: false });
//const PageViewLogging: any = dynamicComponentImports("pageviewlog");
import ErrorBoundary from "@packages/lib/utlils/errorboundary";
Amplify.configure(awsconfig, { ssr: true });
const Page = async () => {
  const jsonData = await graphQlFetchFunction(homePageQuery);
  const componentList =
    jsonData?.data?.contentData?.items[0]?.bodyContentCollection?.items;
  const heroSliderData: SliderBannerCollection =
    jsonData?.data?.contentData?.items[0]?.sliderBannerCollection;
  console.log("NEXT_PUBLIC_GRAPHQL_API:", process.env.NEXT_PUBLIC_GRAPHQL_API);
  console.log(
    "NEXT_PUBLIC_GRAPHQL_AUTH:",
    process.env.NEXT_PUBLIC_GRAPHQL_AUTH
  );
  console.log(
    "NEXT_PUBLIC_SEARCH_AJAX_API:",
    process.env.NEXT_PUBLIC_SEARCH_AJAX_API
  );
  console.log("NEXT_PUBLIC_X_API_KEY:", process.env.NEXT_PUBLIC_X_API_KEY);
  console.log(
    "NEXT_PUBLIC_BFF_API_DOMAIN:",
    process.env.NEXT_PUBLIC_BFF_API_DOMAIN
  );
  console.log(
    "NEXT_PUBLIC_AWS_USER_POOLS_ID:",
    process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID
  );
  console.log(
    "NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID:",
    process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID
  );
  console.log(
    "NEXT_PUBLIC_AWS_COGNITO_REGION:",
    process.env.NEXT_PUBLIC_AWS_COGNITO_REGION
  );
  console.log(
    "NEXT_PUBLIC_CLICKSTREAM_API:",
    process.env.NEXT_PUBLIC_CLICKSTREAM_API
  );
  console.log(
    "NEXT_PUBLIC_CLICKSTREAM_API_KEY:",
    process.env.NEXT_PUBLIC_CLICKSTREAM_API_KEY
  );
  console.log(
    "NEXT_PUBLIC_WU_GA_ACCOUNT:",
    process.env.NEXT_PUBLIC_WU_GA_ACCOUNT
  );
  console.log(
    "NEXT_PUBLIC_WU_GTM_ACCOUNT:",
    process.env.NEXT_PUBLIC_WU_GTM_ACCOUNT
  );
  console.log(
    "NEXT_PUBLIC_ONE_TRUST_SRC:",
    process.env.NEXT_PUBLIC_ONE_TRUST_SRC
  );
  console.log(
    "NEXT_PUBLIC_ONE_TRUST_DOMAIN:",
    process.env.NEXT_PUBLIC_ONE_TRUST_DOMAIN
  );

  return (
    <>
      {/* <GoogleOneTap /> */}
      {/* <PageViewLogging gaData={{
        website: `${process.env.PROJECT}`,
        pageName: jsonData?.data?.contentData?.items[0]?.gaPageName,
      }}/>   */}
      <ErrorBoundary>
        <Heroslidercomponent
          data={heroSliderData}
          pageName={jsonData?.data?.contentData?.items[0]?.gaPageName}
        />
      </ErrorBoundary>
      <div>
        {componentList.map(
          (childItems: MultipleCardContainer, index: number) => {
            const Component: any = dynamicComponentImports(
              childItems.flagComponentStyle
            );
            return (
              <ErrorBoundary key={index}>
                <div
                  className={`${index === 0 || index % 2 === 0 ? "bg-grey-50" : "bg-white"}`}
                >
                  <Component
                    heading={childItems?.cardSectionTitle}
                    subheading={childItems?.shortDescription}
                    internalName={childItems?.internalName}
                    callAction={childItems?.callToAction}
                    pageName={jsonData?.data?.contentData?.items[0]?.gaPageName}
                  />
                </div>
              </ErrorBoundary>
            );
          }
        )}
      </div>
    </>
  );
};

export default Page;
