"use server";

import Header from "./headercomponents";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { Headerquery } from "@packages/lib/graphQL/graphql-query";
import makeApiCall from "@packages/REST-API/rest-api";
import getApiUrl from "@packages/REST-API/api-urls";

export default async function HeaderWrapper() {
  let topnav_data = null;
  let pgs_search_data = null;

  try {
    if (process.env.PROJECT === "PGS") {
      const pgsbody:any = {
        affiliateId: 607022,
        actionType: "subject",
        keyword: "",
        qualCode: "",
        networkId: 2,
      };

      const queryParams = new URLSearchParams(pgsbody).toString();

      // Execute both API calls in parallel for better performance
      const [pgsResponse, topnavResponse] = await Promise.all([
        makeApiCall(getApiUrl?.subjectAjax, "GET", null, queryParams, null),
        graphQlFetchFunction(Headerquery),
      ]);

      pgs_search_data = pgsResponse;
      topnav_data = topnavResponse;
    } else {
      // Only fetch GraphQL data when PROJECT is not PGS
      topnav_data = await graphQlFetchFunction(Headerquery);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }

  return <Header topnav_data={topnav_data} pgs_search_data={pgs_search_data} />;
}
