"use server";
import React from "react";
import { cookies } from "next/headers";
import { qualCode } from "@packages/lib/utlils/filters/filterJson";
import SearchResultComponent from "@packages/shared-components/sr-page/srpage-component";
import { getSRMetaDetailsFromContentful } from "@packages/lib/utlils/resultsPageActions";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMetaDetailsObject } from "@packages/lib/utlils/common-function-server";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";

export type MetaDataProps = {
  params?: any;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  const paramsAwaited = await params;
  const pathname = `/${paramsAwaited?.hero}/search`;
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  const metaData = await getSRMetaDetailsFromContentful(
    await searchParams,
    pathname,
    paramsAwaited,
    displayNameBFFEndPt,
    "SR"
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
