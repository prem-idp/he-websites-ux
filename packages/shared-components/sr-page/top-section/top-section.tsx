import React from "react";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import { graphQlFetchFunction, httpBFFRequest } from "@packages/lib/server-actions/server-action";
import { getDisplayNameReqBody, getMetaOptedDisplayNames, getPGS_SearchSEOFieldId, getWU_SearchSEOFieldId, replaceSEOPlaceHolder } from "@packages/lib/utlils/resultsPageActions"
import { getMetaDetailsQueryForSRpage } from "@packages/lib/graphQL/search-results";
import { SRDisplayNameEndPt } from "@packages/shared-components/services/bffEndpoitConstant";
import { getCustomDomain } from "@packages/lib/utlils/common-function-server";
interface searchProps {
  searchParam?: any;
  searchResultsData: any;
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
  searchResultsData,
}) => {
  const displayNameReqBody = getDisplayNameReqBody(searchParam);
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  const displayNameResponse = await httpBFFRequest(displayNameBFFEndPt, displayNameReqBody, "POST", `${process.env.NEXT_PUBLIC_X_API_KEY}`, "no-cache", 0, {});
  const seoMetaFeildId: string = process.env.PROJECT == "Whatuni" ? getWU_SearchSEOFieldId(searchParam) : getPGS_SearchSEOFieldId(searchParam);
  const customParams = {cache: "no-cache", next: {revalidate: 300}};
  const query = getMetaDetailsQueryForSRpage(seoMetaFeildId);
  let contentfulMetadata = await graphQlFetchFunction(query, false, customParams);
  contentfulMetadata =
    contentfulMetadata?.data?.pageSeoFieldsCollection?.items[0];

  const subjectDisplayName = displayNameResponse?.subjectName?.length >= 0 ? displayNameResponse?.subjectName[0] : ""; 
  const domain = getCustomDomain();
  //const studyLevelSelected = 
  const breadcrumbData = [
    {
      url: domain,
      Imgurl: "/static/assets/icons/breadcrumbs-home-icon.svg",
    },
    {
      url: "#",
      label: "Courses",
    },
    {
      url: "#",
      label: `${subjectDisplayName} courses`,
    },
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
              {replaceSEOPlaceHolder( contentfulMetadata?.h1Title, metaFiltersOpted) ??
               "Compare courses and degrees in the UK"}
            </div>
            <p>
            {/* {searchParam?.ucasTariffRange && searchParam?.ucasTariffRange != 0 ? replaceSEOPlaceHolder(contentfulMetadata?.h2WithgradeText, metaFiltersOpted) : replaceSEOPlaceHolder(contentfulMetadata?.h2WithoutgradeText, metaFiltersOpted) } */}
            {replaceSEOPlaceHolder(contentfulMetadata?.h2Text, metaFiltersOpted) ??
             replaceSEOPlaceHolder("Choose from [Course count] courses from [Provider Count] universities based on your selections.", metaFiltersOpted)}
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
