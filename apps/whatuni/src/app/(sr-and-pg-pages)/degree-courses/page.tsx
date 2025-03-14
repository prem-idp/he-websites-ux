"use server";
import React from "react";
import SearchResultComponent from "@packages/shared-components/sr-page/srpage-component";

import { MetaDataProps } from "@packages/lib/types/interfaces";
import { getMetaDetailsObject } from "@packages/lib/utlils/common-function-server";
import { getSearchPageMetaDetailsFromContentful } from "@packages/lib/utlils/resultsPageActions";
import { Metadata } from "next";

export async function generateMetadata({
  params,
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  const qulInUrl = "degree-courses";
  const pathname = `/${qulInUrl}/`;
  const metaData = await getSearchPageMetaDetailsFromContentful(await searchParams, qulInUrl, pathname);

  return getMetaDetailsObject(metaData);
}

const Page = async ({ searchParams }: any) => {
  const searchparams = searchParams;
  return <SearchResultComponent searchparams={searchparams} />;
};

export default Page;
