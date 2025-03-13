import React from "react";
import { MetaDataProps } from "@packages/lib/types/interfaces";
import { getMetaDetailsObject } from "@packages/lib/utlils/common-function-server";
import { getSearchPageMetaDetailsFromContentful } from "@packages/lib/utlils/resultsPageActions";
import { Metadata } from "next";

export async function generateMetadata({
  params,
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  const qulInUrl = "hnd-hnc-courses";
  const pathname = `/${qulInUrl}/search`;
  const metaData = await getSearchPageMetaDetailsFromContentful(await searchParams, qulInUrl, pathname);

  return getMetaDetailsObject(metaData);
}

const Page = () => {
  return <div>Page</div>;
};

export default Page;
