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
      <SearchFilterComponent jsondata={jsondata} />
    </>
  );
};

export default FilterWrapper;
