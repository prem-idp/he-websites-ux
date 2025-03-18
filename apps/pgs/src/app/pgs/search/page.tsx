"use server";
import React from "react";
import SrPageComponent from "@packages/shared-components/sr-page/srpage-component";
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
  const pathname = `/pgs/search`;
  const metaData = await getSearchPageMetaDetailsFromContentful(await searchParams, "", pathname);

  return getMetaDetailsObject(metaData);
}

const page = async ({ searchParams }: any) => {
  // Check if 'University' exists in searchParams
  const searchparams = await searchParams;

  console.log("University " + searchparams?.['university']);

  const isUniversitySearch = searchparams?.['university'] !== undefined;

  return isUniversitySearch ? (
    <PrPageComponent searchparams={searchparams} />
  ) : (
    <SrPageComponent searchparams={searchparams} />
  );
};

export default page;
