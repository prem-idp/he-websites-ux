"use server";
import Header from "./headercomponents";
import {
  graphQlFetchFunction,
  searchAjaxFecthFunction,
} from "@packages/lib/server-actions/server-action";
import { Headerquery } from "@packages/lib/graphQL/graphql-query";
export default async function HeaderWrapper() {
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
  // const data = await graphQlFetchFunction(Headerquery);
  return (
    <Header data={data} course_data={course_data} uni_data={uni_data}></Header>
  );
}
