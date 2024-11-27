"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchFormHandle } from "@packages/lib/types/interfaces";
import { useState, useEffect } from "react";
import Form from "next/form";
interface UniversityTabProps {
  searchFormHandle: any;
  setsearchFormHandle: any;
  data: any;
}
const UniversityTab: React.FC<UniversityTabProps> = ({
  searchFormHandle,
  setsearchFormHandle,
  data,
}) => {
  const [universityList, setUniversityList] = useState<string[]>([]);
  const [unierror, setUnierror] = useState(false);
  const [unidetails, setUnidetails] = useState<Array<any>>(
    Array.isArray(data) ? data : []
  );
  // useEffect(() => {
  //   const body = {
  //     affiliateId: 220703,
  //     actionType: "institution",
  //     keyword: "",
  //     qualCode: "",
  //     networkId: 2,
  //   };
  //   if (data) {
  //     // console.log("inside the empty object useefffect");
  //     const fetchLocationandstudymode = async () => {
  //       const fetchdata = await searchAjaxFecthFunction(body);
  //       // console.log(fetchdata);
  //       if (fetchdata) {
  //         setUnidetails(fetchdata);
  //       }
  //     };
  //     // console.log()
  //     // console.log(subjectlist, locationlist, studymodelist);
  //     fetchLocationandstudymode();
  //   }
  // }, []);

  useEffect(() => {
    if (
      !searchFormHandle?.university ||
      searchFormHandle?.university?.length < 3
    ) {
      setUniversityList([]);
      return;
    }

    // console.log(searchFormHandle.university);

    const results = unidetails?.filter((colleges: any) =>
      colleges.collegeNameDisplay
        ?.toLowerCase()
        .includes(searchFormHandle.university.toLowerCase())
    );

    // console.log(results, "result in filtered result of the uni");
    setUniversityList(results || []);
  }, [searchFormHandle?.university]);

  const resetAllTabs = (currentTab: string) => ({
    isUniversityClicked:
      currentTab === "University"
        ? !searchFormHandle?.isUniversityClicked
        : false,
  });

  const courseActions = (tabName: string) => {
    setsearchFormHandle((prevData: SearchFormHandle) => ({
      ...prevData,
      ...resetAllTabs(tabName),
    }));
  };
  function handleUnisearch() {
    setUnierror(true);
  }
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="bg-white rounded-[32px] p-[16px] border border-neutral-300 hover:border-primary-500 shadow-custom-1 lg:pl-[24px] lg:p-[8px]">
        <Form
          action={handleUnisearch}
          className="flex flex-col gap-x-[10px] justify-between relative lg:flex-row"
        >
          <div className="grow">
            <input
              onClick={() => {
                courseActions("University");
                setUnierror(false);
              }}
              type="text"
              className="form-control w-full focus:outline-none pb-[16px] small text-black placeholder:text-gray-500 lg:py-[10px] border-b border-neutral-400 lg:border-none"
              aria-label=""
              placeholder="University name"
              onChange={(event) => {
                setsearchFormHandle((preData: any) => ({
                  ...preData,
                  university: event.target.value.trimStart(),
                  isUniversityClicked: true,
                }));
                setUnierror(false);
              }}
              value={searchFormHandle?.university || ""}
            />
          </div>
          <div className="pt-[16px] md:pt-[0]">
            <button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] min-w-[136px]"
            >
              <Image
                src="/static/assets/icons/search_icon.svg"
                width="18"
                height="18"
                alt="Search icon"
              />
              Search
            </button>
          </div>
          {searchFormHandle?.isUniversityClicked &&
            searchFormHandle?.university?.length > 2 && (
              <div className="flex flex-col w-[calc(100%+16px)] absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-[-8px] top-[53px] overflow-hidden">
                <ul className="custom-vertical-scrollbar max-h-[205px] overflow-y-scroll mr-[4px]">
                  {universityList?.map((item: any, index: any) => (
                    <Link
                      href={`/university-profile/${item?.collegeNameDisplay
                        ?.toLowerCase() // Convert to lowercase
                        ?.replace(/\s+/g, "-")}/${item.collegeId}`}
                      onClick={() =>
                        setsearchFormHandle((prevData: any) => ({
                          ...prevData,
                          university: item.college_name_display,
                          isUniversityClicked: false,
                        }))
                      }
                      key={index}
                      className="px-[16px] py-[10px] block small hover:bg-blue-50 hover:underline cursor-pointer"
                    >
                      {item.collegeNameDisplay}
                    </Link>
                  ))}
                </ul>
              </div>
            )}
        </Form>
      </div>
      {unierror && (
        <p className="small text-negative-default">
          {" "}
          Please select university from dropdown
        </p>
      )}
    </div>
  );
};

export default UniversityTab;
