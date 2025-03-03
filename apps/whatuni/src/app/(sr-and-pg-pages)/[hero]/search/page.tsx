"use server";
import React from "react";
import { cookies } from "next/headers";
import { qualCode } from "@packages/lib/utlils/filters/filterJson";
import SearchResultComponent from "@packages/shared-components/sr-page/srpage-component";
import { notFound } from "next/navigation";
const Page = async ({ searchParams }: any) => {
  const cookieStore = await cookies();
  const pathname =
    cookieStore?.get("pathnamecookies")?.value?.split("/")[1] || "{}";
  const isThePageSlugValid = Object.keys(qualCode)?.includes(pathname);
  if (!isThePageSlugValid) {
    notFound();
  }
  const searchparams = await searchParams;
  return <SearchResultComponent searchparams={searchparams} />;
};

export default Page;
