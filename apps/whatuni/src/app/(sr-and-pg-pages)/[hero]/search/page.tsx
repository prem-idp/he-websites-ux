"use server";
import React from "react";
import { cookies } from "next/headers";
import { qualCode } from "@packages/lib/utlils/filters/filterJson";
import SearchResultComponent from "@packages/shared-components/sr-page/srpage-component";
import { getSearchPageMetaDetailsFromContentful } from "@packages/lib/utlils/resultsPageActions";import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMetaDetailsObject } from "@packages/lib/utlils/common-function-server";
import { MetaDataProps } from "@packages/lib/types/interfaces";

export async function generateMetadata({
  params,
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  const qulInUrl = (await params)?.hero;
  const pathname = `/${qulInUrl}/search`;
  const metaData = await getSearchPageMetaDetailsFromContentful(
    await searchParams,
    qulInUrl,
    pathname
  );
  return getMetaDetailsObject(metaData);
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
  return (
    <SearchResultComponent searchparams={searchparams} params={paramsAwaited} />
  );
};

export default Page;
