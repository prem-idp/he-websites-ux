"use client";

import React from "react";
import GADataLayerFn from "../commonutil/ga-util";
import { useRouter } from "next/router";

interface ClickTrackingWrapperProps {
  children: React.ReactNode;
  gaData: {
    event?: any;
    eventName?: any;
    ctaTitle?: any;
    ctaUrl?: any;
    website?: any;
    pageName?:any;
    contentfulCategory1?:any;
    contentfulCategory2?:any;
  };
}

const ClickTrackingWrapper: React.FC<ClickTrackingWrapperProps> = ({ children, gaData }) => {
  const handleClick = () => {
    const {
      event,
      eventName,
      ctaTitle,
      ctaUrl,
      pageName,
      website,
      contentfulCategory1,//added condition for optional field to pass from components
      contentfulCategory2,
    } = gaData;

    GADataLayerFn(
      event,
      eventName,
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
      "0",
      "NA",
      "NA",
      "NA",
      "NA",
      "NA",
      "NA",
      website,
      ctaTitle,
      ctaUrl,
      contentfulCategory1,
      contentfulCategory2,
    );
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default ClickTrackingWrapper;
