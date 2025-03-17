"use server";
import React from "react";
import PrPageComponent from "@packages/shared-components/pr-page/prpage-component";
import { Metadata } from "next";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";
import { getSearchPageMetaDetailsFromContentful } from "@packages/lib/utlils/resultsPageActions";
import { getMetaDetailsObject } from "@packages/lib/utlils/common-function-server";
import { MetaDataProps } from "@packages/lib/types/interfaces";

export async function generateMetadata({
  params,
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  const qulInUrl = (await params)?.hero;
  const pathname = `/${qulInUrl}/csearch`;
  const metaData = await getSearchPageMetaDetailsFromContentful(await searchParams, qulInUrl, pathname);
  return getMetaDetailsObject(metaData);
}


const page = async ({ searchParams }: any) => {
  const searchparams = await searchParams;
  return <PrPageComponent searchparams={searchparams} />;
};

export default page;
