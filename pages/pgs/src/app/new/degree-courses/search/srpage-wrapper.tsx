"use server";
import React from "react";
import fetchSrPageData from "@/lib/helper-functions/functions";
import Hero from "@/components/sr-page-components/hero-component/index";
import dynamic from "next/dynamic";
import Colleges from "@/components/sr-page-components/body-component/colleges";
import Announcement from "@/components/sr-page-components/announcement-component/bottom-announcement";
import FilterChip from "@/components/sr-page-components/filterchip-component/filter-chip";
import data2 from "@/lib/data/top.json";
const FacebookPixelComponent = dynamic(
  () => import("@/lib/facebook-pixel/facebookpixel"),
  { ssr: false },
);
const AdBanner = dynamic(() => import("@/lib/ads-banner/Adbanner"), {
  ssr: false,
});
const SrPageContent = async ({ sub }: any) => {
  let data: any = await fetchSrPageData(sub);
  return (
    <>
      <Hero inputProps={data?.browseCatDesc} />
      <FilterChip data={data2} />
      {data?.searchResultsList != null &&
        data?.searchResultsList?.map((item: any, index: number) => (
          <Colleges data={item} key={index} title={data?.browseCatDesc} />
        ))}
      <AdBanner />
      <FacebookPixelComponent />
      <Announcement />
    </>
  );
};

export default SrPageContent;
