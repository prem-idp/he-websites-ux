"use server";
import Header from "./headercomponents";
import {
  graphQlFetchFunction,
  searchAjaxFecthFunction,
} from "@packages/lib/server-actions/server-action";
import { Headerquery } from "@packages/lib/graphQL/graphql-query";
import { headers } from "next/headers";
export default async function HeaderWrapper() {
  const headersList = await headers(); // Await the promise
  const isAuthenticated = headersList.get("isAuthenticated") || "false";
  const body = {
    affiliateId: 220703,
    actionType: "subject",
    keyword: "",
    qualCode: "",
    networkId: 2,
  };
  const unibody = {
    affiliateId: 220703,
    actionType: "institution",
    keyword: "",
    qualCode: "",
    networkId: 2,
  };
  let course_data, uni_data, topnav_data;
  try {
    const results = await Promise.allSettled([
      searchAjaxFecthFunction(body),
      searchAjaxFecthFunction(unibody),
      graphQlFetchFunction(Headerquery),
    ]);
  
    course_data =
      results[0].status === "fulfilled" ? results[0].value : null;
    uni_data =
      results[1].status === "fulfilled" ? results[1].value : null;
    topnav_data =
      results[2].status === "fulfilled" ? results[2].value : null;
  } catch (error) {
    console.error("Unexpected error:", error);
    course_data = uni_data = topnav_data = null; // Fallback data
  }
  // const data = await graphQlFetchFunction(Headerquery);

  return (
    <Header
    topnav_data={topnav_data}
      course_data={course_data}
      uni_data={uni_data}
      isAuthenticated={isAuthenticated}
    ></Header>
  );
}
