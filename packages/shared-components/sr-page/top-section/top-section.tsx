import React from "react";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import { graphQlFetchFunction, httpBFFRequest } from "@packages/lib/server-actions/server-action";
import { getDisplayNameReqBody, getMetaOptedDisplayNames, getPGS_SearchSEOFieldId, getWU_SearchSEOFieldId, replaceSEOPlaceHolder } from "@packages/lib/utlils/resultsPageActions"
import { getMetaDetailsQueryForSRpage } from "@packages/lib/graphQL/search-results";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";
import { getCustomDomain } from "@packages/lib/utlils/common-function-server";
interface searchProps {
  searchParam?: any;
  params: any;
}
interface MetaFilterTypesReplace {
  searchSubject?: string[];
  studylevel?: string;
  studymode?: string;
  location?: string[];
  providerCount?: string;
  courseCount?: any;
}
const TopSection: React.FC<searchProps> = async ({
  searchParam,
  params
}) => {
  const displayNameReqBody = getDisplayNameReqBody(searchParam);
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  const displayNameResponse = await httpBFFRequest(displayNameBFFEndPt, displayNameReqBody, "POST", `${process.env.NEXT_PUBLIC_X_API_KEY}`, "no-cache", 0, {});
  const seoMetaFeildId: string = process.env.PROJECT == "Whatuni" ? getWU_SearchSEOFieldId(searchParam) : getPGS_SearchSEOFieldId(searchParam);
  const customParams = {cache: "no-cache", next: {revalidate: 300}};
  const query = getMetaDetailsQueryForSRpage(seoMetaFeildId);
  const domain = getCustomDomain();
  let contentfulMetadata = await graphQlFetchFunction(query, false, customParams);
  contentfulMetadata = contentfulMetadata?.data?.pageSeoFieldsCollection?.items[0];

  const subjectDisplayName = displayNameResponse?.subjectName?.length >= 0 ? displayNameResponse?.subjectName[0] : ""; 
  
  const  get_find_a_course_url = (qualCode: string) => {
    let qualText = "/degrees/courses/"
    if ("M" === qualCode) {
      qualText = "/degrees/courses/"
    } else if ("L" === qualCode) {
      qualText = "/postgraduate-courses/"
    } else if ("A" === qualCode) {
      qualText = "/foundation-degree-courses/"
    } else if ("T" === qualCode) {
      qualText = "/access-foundation-courses/"
    } else if ("N" === qualCode) {
      qualText = "/hnd-hnc-courses/"
    }
    return qualText;
  }
  
  const breadcrumb_courses = searchParam?.parentQualification ? [{url: get_find_a_course_url(searchParam?.parentQualification), label: "Courses"}] : [];
  const breadCrumb_subject = searchParam?.searchSubject && searchParam?.searchSubject?.length >= 1 ? [{url: `/${params?.hero}/search?subject=${searchParam?.searchSubject?.[0]}`, label: `${subjectDisplayName} courses`}] : [];
  const breadCrumb_keyword = searchParam?.searchKeyword ? [{url: `/${params?.hero}/search?q=${searchParam?.searchKeyword}`, label: `${subjectDisplayName} courses`}] : [];
  console.log("searchParam?.searchKeyword", searchParam?.searchKeyword);
  const breadcrumbData = [
    {
      url: domain,
      Imgurl: "/static/assets/icons/breadcrumbs-home-icon.svg",
    },
    ...breadcrumb_courses,
    ...breadCrumb_subject,
    ...breadCrumb_keyword,
  ];
  const metaFiltersOpted: MetaFilterTypesReplace = getMetaOptedDisplayNames(displayNameResponse);
  return (
    <>
      {/* start breadcrumb and subject*/}
      <section className="bg-white px-[16px] md:px-[20px] xl:px-0 ">
        <div className="max-w-container mx-auto">
          {/* breadcrumb  */}
          <div className="px-[16px] xl:px-[0] md:p-[24px_0_8px] hidden md:block">
            <Breadcrumblayoutcomponent data={breadcrumbData} />
          </div>
          {/* breadcrumb  */}
          {/* start subject */}
          <div className="py-[16px]">
            <div className="h5 mb-[4px]">
              {replaceSEOPlaceHolder(contentfulMetadata?.h1Title || "Compare courses and degrees in the UK" , metaFiltersOpted)}
            </div>
            <p>
            {/* {searchParam?.ucasTariffRange && searchParam?.ucasTariffRange != 0 ? replaceSEOPlaceHolder(contentfulMetadata?.h2WithgradeText, metaFiltersOpted) : replaceSEOPlaceHolder(contentfulMetadata?.h2WithoutgradeText, metaFiltersOpted) } */}
            {replaceSEOPlaceHolder(contentfulMetadata?.h2Text || "Choose from [Course count] courses from [Provider Count] universities based on your selections.", metaFiltersOpted)}
            </p>
          </div>
          {/* end subject */}
          {/* <TopSectionSkeleton/> */}
        </div>
      </section>
      {/* end breadcrumb and subject*/}
    </>
  );
};

export default TopSection;
