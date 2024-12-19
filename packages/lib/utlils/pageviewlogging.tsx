"use client";

import { useEffect } from "react";

import { GoogleAnalytics } from 'nextjs-google-analytics';
import { GADataLayerFn , currentAuthenticatedUser} from "@packages/lib/utlils/helper-function";

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
    const GAData = async() => { 
      GADataLayerFn("pageview", "NA", "NA", "NA", "NA", "NA", pageName, "NA","NA", "NA", "NA", "NA", "NA", "NA","NA", "NA", "in_year", await currentAuthenticatedUser(), "NA", "NA", "NA", "NA", "NA","NA",website,"NA","NA","NA","NA");  
   }
   GAData();
}, []); 
  return (
    <>     
        
    </>
  );
}


