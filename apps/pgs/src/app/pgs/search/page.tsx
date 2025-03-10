"use server";
import React from "react";
import SrPageComponent from "@packages/shared-components/sr-page/srpage-component";
import { Metadata } from "next";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";
import { getSearchPageMetaDetailsFromContentful } from "@packages/lib/utlils/resultsPageActions";
import { getMetaDetailsObject } from "@packages/lib/utlils/common-function-server";
import { MetaDataProps } from "@packages/lib/types/interfaces";

export async function generateMetadata({
  params,
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  const paramsAwaited = await params;
  const pathname = `/pgs/search`;
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  const metaData = await getSearchPageMetaDetailsFromContentful(await searchParams, pathname, paramsAwaited, displayNameBFFEndPt);

  return getMetaDetailsObject(metaData);
}

const page = async ({ searchParams }: any) => {
  const searchparams = await searchParams;
  return <SrPageComponent searchparams={searchparams} />;
};

export default page;
