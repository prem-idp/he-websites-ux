import { MetaDataProps } from "@packages/lib/types/interfaces";
import { getMetaDetailsObject } from "@packages/lib/utlils/common-function-server";
import { getSearchPageMetaDetailsFromContentful } from "@packages/lib/utlils/resultsPageActions";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  const qulInUrl = "access-foundation-courses";
  const pathname = `/${qulInUrl}/`;
  const metaData = await getSearchPageMetaDetailsFromContentful(await searchParams, qulInUrl, pathname);

  return getMetaDetailsObject(metaData);
}

const Page = () => {
  return <div>Page</div>;
};

export default Page;
