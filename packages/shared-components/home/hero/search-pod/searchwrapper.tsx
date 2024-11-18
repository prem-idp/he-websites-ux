"use server";
import SearchBox from "./searchbox";
import { searchAjaxFecthFunction } from "@packages/lib/server-actions/server-action";

export default async function SearchWrapper() {
  const body = {
    affiliateId: 220703,
    actionType: "default",
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
  const course_data = await searchAjaxFecthFunction(body);
  const uni_data = await searchAjaxFecthFunction(unibody);
  //   console.log(data);

  return <SearchBox course_data={course_data} uni_data={uni_data} />;
}
