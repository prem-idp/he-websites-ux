"use client";

import { useEffect } from "react";

import { GoogleAnalytics } from 'nextjs-google-analytics';
import { GADataLayerFn} from "@packages/lib/utlils/helper-function";

interface PageViewLoggingProps {
  children: React.ReactNode;
  gaData: {
    website: string;
    pageName:string;
  };
}
export const PageViewLogging: React.FC<PageViewLoggingProps> = ({ children, gaData }) => {
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
      <GoogleAnalytics gaMeasurementId={process.env.NEXT_PUBLIC_GA_ACCOUNT} />     
    </>
  );
}


