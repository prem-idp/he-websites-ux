"use server";
import React from "react";
import { filterbodyJson } from "@packages/lib/utlils/filters/filterJson";
import { getSrFilter } from "@packages/REST-API/rest-api";
import { cookies } from "next/headers";
import SearchFilterComponent from "@packages/shared-components/common-utilities/popups/searchfiltercomponent";

export async function getFiltersInparamReqBody(cookieStore: any) {
  const pathname =
    cookieStore?.get("pathnamecookies")?.value?.split("/")[1] || "{}";
  const params = cookieStore?.get("searchParamscookies")?.value || "{}";
  const urlparams = new URLSearchParams(params);
  const cookieObject = Object.fromEntries(urlparams?.entries());
  return filterbodyJson(cookieObject, pathname);
}

const FilterWrapper = async () => {
  const cookieStore = await cookies();
  const fullPath = cookieStore?.get("pathnamecookies")?.value || "{}";
  const searchparams = cookieStore?.get("searchParamscookies")?.value || "{}";
  const urlparams = new URLSearchParams(searchparams || "?default=value");
  const paramObject = Object?.fromEntries(urlparams?.entries());
  console.log(filterbodyJson(paramObject, fullPath?.split("/")[1]));
  const data = await getSrFilter(
    filterbodyJson(paramObject, fullPath?.split("/")[1])
  );
  return <>{data && <SearchFilterComponent data={data} path={fullPath} />}</>;
};

export default FilterWrapper;
