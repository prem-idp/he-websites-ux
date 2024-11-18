"use server";
import Header from "./headercomponents";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { headerQuery } from "@packages/lib/graphQL/graphql-query";
export default async function HeaderWrapper() {
  const data = await graphQlFetchFunction(headerQuery);
  return <Header data={data} />;
}
