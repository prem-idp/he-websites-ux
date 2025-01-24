"use client";

import { useEffect } from "react";

import {
  GADataLayerFn,
  currentAuthenticatedUser,
} from "@packages/lib/utlils/helper-function";
import { logClickstreamEvent } from "./clickstream";

interface PageViewLoggingProps {
  gaData: {
    website: string;
    pageName: string;
  };
}
const PageViewLogging: React.FC<PageViewLoggingProps> = ({ gaData }) => {
  const { pageName, website } = gaData;
  useEffect(() => {
    //Clickstream pageview
    if(pageName != "home_page") {
      logClickstreamEvent({pageName:pageName,eventType:"PageViewed"})
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("gaPageName", pageName);
    }
    const GAData = async () => {
      GADataLayerFn(
        "pageview",
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        pageName,
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        "in_year",
        await currentAuthenticatedUser(),
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        "NA",
        website,
        "NA",
        "NA",
        "NA",
        "NA"
      );
    };
    GAData();
  }, []);
  return <></>;
};

export default PageViewLogging;
