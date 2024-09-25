"use server";
import React from "react";

import type { Metadata } from "next";
const Metadata = async ({ data }: any) => {
  return (
    <>
      <title>{data?.seoDetails?.metaTitle}</title>
      <meta name="description" content={data?.seoDetails?.metaDescription} />
      <meta name="keywords" content={data?.seoDetails?.metaKeywords} />
      <meta name="robots" content={data?.seoDetails?.metaRobots} />
    </>
  );
};

export default Metadata;
