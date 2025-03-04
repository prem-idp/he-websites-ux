"use server";
import React from "react";
import { cookies, headers } from "next/headers";
import { qualCode } from "@packages/lib/utlils/filters/filterJson";
import SearchResultComponent from "@packages/shared-components/sr-page/srpage-component";
import { getSRMetaDetailsFromContentful } from "@packages/lib/utlils/resultsPageActions";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export type MetaDataProps = {
  params?: any;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({params, searchParams}: MetaDataProps): Promise<Metadata> {

  const paramsAwaited = await params;
  const pathname = `/${paramsAwaited?.hero}/search`;
  const metaData = await getSRMetaDetailsFromContentful(await searchParams, pathname, paramsAwaited);

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

const Page = async ({ params, searchParams }: any) => {
  const cookieStore = await cookies();
  const pathname =
    cookieStore?.get("pathnamecookies")?.value?.split("/")[1] || "{}";
  const isThePageSlugValid = Object.keys(qualCode)?.includes(pathname);
  if (!isThePageSlugValid) {
    notFound();
  }
  const searchparams = await searchParams;
  const paramsAwaited = await params;
  return <SearchResultComponent searchparams={searchparams} params={paramsAwaited} />;
};

export default Page;
