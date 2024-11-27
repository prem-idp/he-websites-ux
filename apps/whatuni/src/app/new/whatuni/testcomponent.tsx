"use client";
import { useEffect } from "react";
import {
  searchAjaxFecthFunction,
  graphQlFetchFunction,
} from "@packages/lib/server-actions/server-action";
import { Headerquery } from "@packages/lib/graphQL/graphql-query";
export default function Test() {
  useEffect(() => {
    const testfetch = async () => {
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
      const [course_data, uni_data, data] = await Promise.all([
        searchAjaxFecthFunction(body),
        searchAjaxFecthFunction(unibody),
        graphQlFetchFunction(Headerquery),
      ]);
      // console.log(course_data, uni_data, data, "from the test component");
    };
    testfetch();
  }, []);

  return <p> Test Component</p>;
}
