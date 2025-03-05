import React from "react";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import TopSectionSkeleton from "@packages/shared-components/skeleton/search-result/top-section-skeleton";
//import { Seosrdetails } from "@packages/lib/graphQL/graphql-query";
import {
  graphQlFetchFunction,
  httpBFFRequest,
} from "@packages/lib/server-actions/server-action";
//import { SEOparams } from "@packages/lib/types/interfaces";
import {
  getDisplayNameReqBody,
  getSeoMetaFeildId,
  replaceSEOPlaceHolder,
} from "@packages/lib/utlils/resultsPageActions";
import { getMetaDetailsQueryForSRpage } from "@packages/lib/graphQL/search-results";
interface searchProps {
  searchParam?: any;
  searchResultsData: any[];
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
  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}/hewebsites/v1/seo/search-display-names`;
  const displayNameResponse = await httpBFFRequest(
    displayNameBFFEndPt,
    displayNameReqBody,
    "POST",
    `${process.env.NEXT_PUBLIC_X_API_KEY}`,
    "default"
  );
  const seoMetaFeildId: string = getSeoMetaFeildId(searchParam);
  const query = getMetaDetailsQueryForSRpage(seoMetaFeildId);
  let contentfulMetadata = await graphQlFetchFunction(query);
  contentfulMetadata =
    contentfulMetadata?.data?.pageSeoFieldsCollection?.items[0];

  const breadcrumbData = [
    {
      url: "#",
      Imgurl: "/static/assets/icons/breadcrumbs-home-icon.svg",
    },
    {
      url: "#",
      label: "Home",
    },
    {
      url: "#",
      label: "Scholarships",
    },
    {
      url: "",
      label: "Search results",
    },
  ];
  const metaFiltersOpted: MetaFilterTypesReplace = {
    courseCount: searchResultsData.length ?? undefined,
    location: displayNameResponse?.locationName ?? undefined,
    searchSubject: displayNameResponse?.subjectName ?? undefined,
    studylevel: displayNameResponse?.studyLevel ?? undefined,
    studymode: displayNameResponse?.studyMode ?? undefined,
  };
  return (
    <>
      {/* start breadcrumb and subject*/}
      <section className="bg-white px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto">
          {/* breadcrumb  */}
          <div className="px-[16px] xl:px-[0] md:p-[24px_0_8px] hidden md:block">
            <Breadcrumblayoutcomponent data={breadcrumbData} />
          </div>
          {/* breadcrumb  */}
          {/* start subject */}
          <div className="py-[16px]">
            <div className="h5 mb-[4px]">
              {replaceSEOPlaceHolder(
                contentfulMetadata?.h1Title,
                metaFiltersOpted
              )}
            </div>
            <p>
              {" "}
              {replaceSEOPlaceHolder(
                contentfulMetadata?.h2Text,
                metaFiltersOpted
              )}
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
