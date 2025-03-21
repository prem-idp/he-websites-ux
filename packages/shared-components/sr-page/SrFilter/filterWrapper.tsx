"use server";
import React from "react";
import { filterbodyJson } from "@packages/lib/utlils/filters/filterJson";
import { getSrFilter, getSrFilterCount } from "@packages/REST-API/rest-api";
import { cookies } from "next/headers";
import dynamic from "next/dynamic";
const SearchFilterComponent = dynamic(
  () =>
    import(
      "@packages/shared-components/common-utilities/popups/searchfiltercomponent"
    )
);

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
  const body = filterbodyJson(paramObject, fullPath?.split("/")[1]);
  const data = await getSrFilter(body);
  const count = await getSrFilterCount(body);
  return (
    <>
      {data && (
        <SearchFilterComponent data={data} path={fullPath} count={count} />
      )}
    </>
  );
};

export default FilterWrapper;
