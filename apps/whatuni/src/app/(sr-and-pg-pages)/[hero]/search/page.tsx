"use server";
import React from "react";
import { cookies } from "next/headers";
import { qualCode } from "@packages/lib/utlils/filters/filterJson";
import SearchResultComponent from "@packages/shared-components/sr-page/srpage-component";
import { getSRMetaDetailsFromContentful } from "@packages/lib/utlils/resultsPageActions";
import { Metadata } from "next";
import Head from "next/head";

export type MetaDataProps = {
  params?: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  const metaData = await getSRMetaDetailsFromContentful(await searchParams);

  return {
    alternates: {
      canonical: metaData?.canonical || "https://www.Whatuni.com",
    },
    title: metaData?.title || "Default Title",
    description: metaData?.description || "Default Description",
    robots: metaData?.indexation || "noindex, nofollow",
    keywords: metaData?.keyword || [],
  };
}

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
