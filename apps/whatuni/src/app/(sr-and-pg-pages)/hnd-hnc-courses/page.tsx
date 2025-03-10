import React from "react";
import { MetaDataProps } from "@packages/lib/types/interfaces";
import { getMetaDetailsObject } from "@packages/lib/utlils/common-function-server";
import { getSearchPageMetaDetailsFromContentful } from "@packages/lib/utlils/resultsPageActions";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";
import { Metadata } from "next";

export async function generateMetadata({
  params,
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  const paramsAwaited = await params;
  const pathname = `/${paramsAwaited?.hero}/`;
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  const metaData = await getSearchPageMetaDetailsFromContentful(await searchParams, pathname, paramsAwaited, displayNameBFFEndPt);

  return getMetaDetailsObject(metaData);
}

const Page = () => {
  return <div>Page</div>;
};

export default Page;
