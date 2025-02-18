"use server";
import React from "react";
import { filterbodyJson } from "@packages/lib/utlils/result-filters";
import { getSrFilter } from "@packages/REST-API/rest-api";
import { headers } from "next/headers";
import SearchFilterComponent from "@packages/shared-components/common-utilities/popups/searchfiltercomponent";
const FilterWrapper = async () => {
  const headersList = await headers();
  const referer: any = headersList?.get("referer");
  // console.log(headersList);
  if (referer) {
    let searchParams = new URLSearchParams();
    const url = new URL(referer, "http://localhost:3000");
    searchParams = url.searchParams;
    const quaification: string = url.pathname.split("/")[1] || "degree-courses";
    const paramsObject = Object.fromEntries(searchParams.entries());
    //const filterdata = await getSrFilter({});
    console.log("param object", paramsObject);
    const d = filterbodyJson(paramsObject, quaification);
    console.log(d);
  } else {
    console.log("no referer");
  }

  return (
    <>
      <SearchFilterComponent />
    </>
  );
};

export default FilterWrapper;
