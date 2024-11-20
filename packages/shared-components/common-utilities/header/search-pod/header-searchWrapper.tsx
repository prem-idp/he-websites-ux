"use server";
import Search from "./header-search";
import { searchAjaxFecthFunction } from "@packages/lib/server-actions/server-action";

export default async function HeadersearchWrapper() {
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
  const [course_data, uni_data] = await Promise.all([
    searchAjaxFecthFunction(body),
    searchAjaxFecthFunction(unibody),
  ]);
  //   console.log(data);

  return <Search course_data={course_data} uni_data={uni_data} />;
}
