"use server";
import React from "react";
import { filterbodyJson } from "@packages/lib/utlils/result-filters";
import { getSrFilter } from "@packages/REST-API/rest-api";
import { cookies } from "next/headers";
import SearchFilterComponent from "@packages/shared-components/common-utilities/popups/searchfiltercomponent";
const FilterWrapper = async () => {
  const cookieStore = await cookies();
  const pathname =
    cookieStore?.get("pathnamecookies")?.value?.split("/")[1] || "{}";
  const params = cookieStore?.get("searchParamscookies")?.value || "{}";
  const urlparams = new URLSearchParams(params);
  const cookieObject = Object.fromEntries(urlparams.entries());
  const body = filterbodyJson(cookieObject, pathname);
  const data = await getSrFilter(body);
  const jsondata = {
    qualificationList: [
      {
        qualCode: "M",
        qualTextKey: "degree",
        selectedFlag: "N",
        qualDisplayDesc: "Undergraduate",
      },
    ],
    studyModeList: [
      {
        studyModeDesc: "Full time",
        studyModeTextKey: "full-time",
        selectedFlag: "N",
      },
    ],
    studyMethodList: [
      {
        studyMethodDesc: "Online",
        studyMethodTextKey: "online",
        selectedFlag: "N",
      },
    ],
    regionList: [
      {
        regionName: "London",
        regionTextKey: "london",
        selectedKey: "N",
      },
      {
        regionName: "England",
        regionTextKey: "england",
        selectedKey: "N",
      },
      {
        regionName: "South East England",
        regionTextKey: "south-east-england",
        selectedKey: "N",
      },
    ],
    uniLocationTypeList: [
      {
        locTypeDesc: "Countryside",
        locTypeTextKey: "countryside",
        selectedFlag: "N",
      },
      {
        locTypeDesc: "Town",
        locTypeTextKey: "town",
        selectedFlag: "N",
      },
    ],
    universityGroupList: [
      {
        universityGroupDesc: "Russel Group",
        universityGroupTextKey: "RG",
        selectedFlag: "N",
      },
    ],

    cityList: [
      {
        cityName: "Manchester",
        cityTextKey: "manchester",
        selectedFlag: "N",
      },
    ],
    intakeYearDetails: {
      intakeYearList: [
        {
          year: 2025,
          selectedFlag: "N",
        },
      ],
      intakeMonthList: [
        {
          month: "Jan",
          selectedFlag: "N",
        },
        {
          month: "Feb",
          selectedFlag: "N",
        },
        {
          month: "Mar",
          selectedFlag: "N",
        },
        {
          month: "Apr",
          selectedFlag: "N",
        },
        {
          month: "Jul",
          selectedFlag: "N",
        },
        {
          month: "Oct",
          selectedFlag: "N",
        },
      ],
      subjectFilterList: [
        {
          categoryCode: "AK.,A,AK.2",
          categoryDesc: "Accounting, Business & Finance",
          selectedFlag: "N",
          parentSubject: "",
          subjectTextKey: "accounting-business-finance",
          qualificationCode: "M",
        },
      ],
    },
  };
  return (
    <>
      <SearchFilterComponent jsondata={jsondata} jsondata2={data} />
    </>
  );
};

export default FilterWrapper;
