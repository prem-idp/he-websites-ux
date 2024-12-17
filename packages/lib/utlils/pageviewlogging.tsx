"use client";

import { useEffect } from "react";

import { GoogleAnalytics } from 'nextjs-google-analytics';
import { GADataLayerFn} from "@packages/lib/utlils/helper-function";

interface PageViewLoggingProps {
  gaData: {
    website: string;
    pageName:string;
  };
}
export const PageViewLogging: React.FC<PageViewLoggingProps> = ({ gaData }) => {
  const {
    pageName,
    website,
  } = gaData;
  useEffect(() => {
    //Clickstream pageview
    //sendClickStreamData(attributeValues); 
    GADataLayerFn("pageview", "NA", "NA", "NA", "NA", "NA", pageName, "NA","NA", "NA", "NA", "NA", "NA", "NA","NA", "NA", "in_year", "0", "NA", "NA", "NA", "NA", "NA","NA",website,"NA","NA","NA","NA"); 
  }, []); 
  return (
    <>     
      <GoogleAnalytics
  gaMeasurementId={
    website === 'pgs'
      ? process.env.NEXT_PUBLIC_PGS_GA_ACCOUNT || ''
      : process.env.NEXT_PUBLIC_WU_GA_ACCOUNT || ''
  }
/>  
    </>
  );
}


