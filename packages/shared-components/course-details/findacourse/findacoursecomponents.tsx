"use client";

import Image from "next/image";
import Link from "next/link";
// import React from 'react'
import CourseTab from "@packages/shared-components/common-utilities/searchBar/search-input-pods/coursetab";
import React, { useState, useEffect } from "react";
import makeApiCall from "@packages/REST-API/rest-api";
import getApiUrl from "@packages/REST-API/api-urls";
import optimizedSearch from "@packages/REST-API/optimizedsearch";
const Findacoursecomponents = () => {
  const [searchFormHandle, setsearchFormHandle] = useState({
    activeTab: "tab1",
    isCourseType: false,
    isSubjectClicked: false,
    isLocationClicked: false,
    isAdviceClicked: false,
    isUniversityClicked: false,
    courseType: { qualUrl: "degree", qualCode: "M", qualDesc: "Undergraduate" },
    university: "",
    subject: {},
    location: {},
    advice: "",
  });
  const [course_data, setCourseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const body = {
        affiliateId: "220703", // Convert to string if using URLSearchParams
        actionType: "subject",
        keyword: "",
        qualCode: "",
        networkId: "2",
      };

      try {
        const queryParamsBody = new URLSearchParams(body as any).toString();
        const bodyData = await optimizedSearch(
          getApiUrl?.subjectAjax,
          "GET",
          null,
          queryParamsBody,
          null
        );
        setCourseData(bodyData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (!course_data && process.env.PROJECT === "Whatuni") {
      fetchData();
    }
  }, [course_data]);

  return (
    <section className="bg-orange-100">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-[16px] p-[16px]  md:p-[0_20px_26px_20px] lg:py-0 xl:px-0 min-h-[194px]">
          <div className="w-full flex flex-col flex-grow gap-[16px] self-center md:self-end lg:p-[16px_0_38px]">
            <div className="flex flex-col gap-[4px]">
              <h1 className="text-heading1 md:text-heading-xl">
                Find a course
              </h1>
              <div>
                Find <span className="font-semibold"> courses, </span>
                read <span className="font-semibold"> honest reviews, </span>
                get <span className="font-semibold">expert advice </span>
              </div>
            </div>
            <div className="w-full lg:min-w-[680px] lg:max-w-[825px]">
              <div className="flex flex-col gap-[24px] min-h-[60px]">
                <CourseTab
                  placeholder="Enter Subject"
                  searchFormHandle={searchFormHandle}
                  setsearchFormHandle={setsearchFormHandle}
                  data={course_data}
                  showlocation={false}
                />
              </div>
            </div>
          </div>
          <div className="flex self-end justify-center w-full shrink-0 md:w-[219px] lg:w-[392px] pt-[12px]">
            <div className="w-[108px] md:w-[205px]">
              <Image
                src="/static/assets/images/article/slice_1.png"
                className="w-full"
                width={205}
                height={260}
                priority
                alt="Colc Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Findacoursecomponents;
