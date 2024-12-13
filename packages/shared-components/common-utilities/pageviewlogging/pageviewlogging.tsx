"use client";

import { useEffect } from "react";
import { sendClickStreamData }from "@packages/lib/server-actions/server-action";
import { GoogleAnalytics } from 'nextjs-google-analytics';
import GADataLayerFn from "@packages/shared-components/common-utilities/commonutil/ga-util";

interface PageViewLoggingProps {
  children: React.ReactNode;
  gaData: {
    website: string;
    pageName:string;
    contentfulCategory1?:string;//added condition for optional field to pass from components
    contentfulCategory2?:string;
  };
}
export const PageViewLogging: React.FC<PageViewLoggingProps> = ({ children, gaData }) => {
  const {
    pageName,
    website,
  } = gaData;
  useEffect(() => {
    console.log("triggered on page load.");
    //Clickstream pageview
    //sendClickStreamData(attributeValues); 
    GADataLayerFn("pageview", "NA", "NA", "NA", "NA", "NA", pageName, "NA","NA", "NA", "NA", "NA", "NA", "NA","NA", "NA", "in_year", "0", "NA", "NA", "NA", "NA", "NA","NA",website,"NA","NA","NA","NA"); 
  }, []); 
  return (
    <>     
      <GoogleAnalytics gaMeasurementId={process.env.NEXT_PUBLIC_GA_ACCOUNT} />     
    </>
  );
}