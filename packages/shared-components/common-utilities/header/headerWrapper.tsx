"use server";
import Header from "./headercomponents";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { Headerquery } from "@packages/lib/graphQL/graphql-query";
export default async function HeaderWrapper() {
  const data = await graphQlFetchFunction(Headerquery);
  return <Header data={data} />;
}
