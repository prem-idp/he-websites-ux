import React from "react";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import { graphQlFetchFunction, httpBFFRequest } from "@packages/lib/server-actions/server-action";
import { form_PGS_SR_breadcrumb, getDisplayNameReqBody, getMetaOptedDisplayNames, getPGS_SearchSEOFieldId, getWU_SearchSEOFieldId, replaceSEOPlaceHolder } from "@packages/lib/utlils/resultsPageActions"
import { getMetaDetailsQueryForSRpage } from "@packages/lib/graphQL/search-results";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";
import { getCustomDomain } from "@packages/lib/utlils/common-function-server";
import { getSEOSearchPayload } from "@packages/shared-components/services/utils";
import { cookies } from "next/headers";
import SchemaTagLayoutComponent from "@packages/shared-components/common-utilities/schematag-layout/SchemaTagLayoutComponent";
interface searchProps {
  searchParams?: any;
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
  searchParams,
  params
}) => {
  const cookieStore = await cookies();
  const qualInUrl =cookieStore?.get("pathnamecookies")?.value?.split("/")[1] || "{}";
  const searchSEOPayload = getSEOSearchPayload(searchParams, qualInUrl)
  const displayNameReqBody = getDisplayNameReqBody(searchSEOPayload);
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  const displayNameResponse = await httpBFFRequest(displayNameBFFEndPt, displayNameReqBody, "POST", `${process.env.NEXT_PUBLIC_X_API_KEY}`, "no-cache", 0, {});
  const seoMetaFeildId: string = process.env.PROJECT == "Whatuni" ? getWU_SearchSEOFieldId(searchSEOPayload) : getPGS_SearchSEOFieldId(searchSEOPayload);
  const customParams = {cache: "no-cache", next: {revalidate: 300}};
  const query = getMetaDetailsQueryForSRpage(seoMetaFeildId);
  const domain = getCustomDomain();
  const defaultH1text = "Compare courses and degrees in the UK";
  let contentfulMetadata = await graphQlFetchFunction(query, false, customParams);
  contentfulMetadata = contentfulMetadata?.data?.pageSeoFieldsCollection?.items[0];

  const subjectDisplayName = displayNameResponse?.subjectName?.length >= 0 ? displayNameResponse?.subjectName[0] : ""; 
  
  const  get_find_a_course_url_label = (qualCode: string) => {
    let qualUrl = "/degrees/courses/";
    let qualLabel = "Courses";
    if ("M" === qualCode) {
      qualUrl = "/degrees/courses/"
      qualLabel = "Courses";
    } else if ("L" === qualCode) {
      qualUrl = "/postgraduate-courses/";
      qualLabel = "Postgraduate";
    } else if ("A" === qualCode) {
      qualUrl = "/foundation-degree-courses/";
      qualLabel = "Foundation Degree";
    } else if ("T" === qualCode) {
      qualUrl = "/access-foundation-courses/";
      qualLabel = "Access Foundation";
    } else if ("N" === qualCode) {
      qualUrl = "/hnd-hnc-courses/";
      qualLabel = "HND/HNC";
    }
    return [qualUrl, qualLabel];
  }

  const getBreadcrumb = (): any[] => {
    if(process.env.PROJECT == "Whatuni"){
      const [qualUrl, qualLabel] = get_find_a_course_url_label(searchSEOPayload?.parentQualification);
      const breadcrumb_courses = searchSEOPayload?.parentQualification ? [{url: qualUrl, label: qualLabel}] : [];
      const breadCrumb_subject = searchSEOPayload?.searchSubject && searchSEOPayload?.searchSubject?.length >= 1 ? [{url: `/${qualInUrl}/search?subject=${searchSEOPayload?.searchSubject?.[0]}`, label: `${subjectDisplayName} courses`}] : [];
      const breadCrumb_keyword = searchSEOPayload?.searchKeyword ? [{url: `/${qualInUrl}/search?q=${searchSEOPayload?.searchKeyword}`, label: `${subjectDisplayName} Courses`}] : [];
      return [...breadcrumb_courses, ...breadCrumb_subject, ...breadCrumb_keyword];
    } else if(process.env.PROJECT == "PGS"){
      return form_PGS_SR_breadcrumb(searchSEOPayload, displayNameResponse, "/pgs/search");
    }
    return [];
  }
  const breadcrumb = getBreadcrumb();const breadcrumbData = [
    {
      url: domain,
      Imgurl: "/static/assets/icons/breadcrumbs-home-icon.svg",
    },
    ...breadcrumb,
  ];
  const displayNames = {
    ...displayNameResponse,
    month: searchParams?.month?.toUpperCase(),
    year: searchParams?.year,
  }
  const metaFiltersOpted: MetaFilterTypesReplace = getMetaOptedDisplayNames(displayNames);
  let schemaData: any[] = [];
  breadcrumb?.map((data, index) => {
    const obj: any = {
      '@type': 'ListItem',
      position: (index + 1),
      item: {
      '@id': data?.url,
      "name": data?.label,
    }}
    schemaData.push(obj);
  });
  return (
    <>
      {/* start breadcrumb and subject*/}
      <section className="bg-white px-[16px] md:px-[20px] xl:px-0 ">
        <div className="max-w-container mx-auto">
          {/* breadcrumb  */}
          <div className="px-[16px] xl:px-[0] md:p-[24px_0_8px] hidden md:block">
            <Breadcrumblayoutcomponent data={breadcrumbData} />
            <SchemaTagLayoutComponent schemaType="BreadcrumbList" schemaData={{"itemListElement": schemaData}}/>
          </div>
          {/* breadcrumb  */}
          {/* start subject */}
          <div className="py-[16px]">
            <div className="h5 mb-[4px]">
              {replaceSEOPlaceHolder(contentfulMetadata?.h1Title || defaultH1text , metaFiltersOpted)}
            </div>
            <p>
            {searchSEOPayload?.ucasTariffRange && searchSEOPayload?.ucasTariffRange != 0 ? 
            replaceSEOPlaceHolder(contentfulMetadata?.h2WithgradeText, metaFiltersOpted) : 
            replaceSEOPlaceHolder(contentfulMetadata?.h2Text, metaFiltersOpted) }
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
