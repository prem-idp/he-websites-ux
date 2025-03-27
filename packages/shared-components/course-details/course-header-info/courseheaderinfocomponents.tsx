
import Getprospectus from '@packages/shared-components/common-utilities/cards/interaction-button/getprospectus'
import Favbutton from "@packages/shared-components/course-details/course-header-info/favbutton"
import React from 'react'
import Image from 'next/image'
import Visitwebsite from '@packages/shared-components/common-utilities/cards/interaction-button/visitwebsite'
import RequestInfo from '@packages/shared-components/common-utilities/cards/interaction-button/requestinfo'
import BookEvent from '@packages/shared-components/common-utilities/cards/interaction-button/bookevent'
import { getMetaDetailsQueryForSRpage } from '@packages/lib/graphQL/search-results'
import { graphQlFetchFunction, httpBFFRequest } from '@packages/lib/server-actions/server-action'
import { replaceSEOPlaceHolder } from '@packages/lib/utlils/resultsPageActions'
import { SRDisplayNameEndPt } from '@packages/shared-components/services/bffEndpoitConstant'
import { MetaFilterTypesReplace } from '@packages/lib/types/interfaces'
import Viewmore from "@packages/shared-components/course-details/course-header-info/viewmore";
import UserFavourite from '@packages/shared-components/common-utilities/user-favourite/user-favourite'

const Courseheaderinfocomponents = async ({ data, searchPayload, institutionUrl}: any) => {

  const prams_slug = await data;
  let h1h2Text: string[] = [];
  const displayNameReqBody = {
    "courseId": searchPayload?.get('courseId') ? +searchPayload?.get('courseId') : ""
  }

  const displayNameBFFEndPt = `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}${SRDisplayNameEndPt}`;
  const displayNameResponse = await httpBFFRequest(displayNameBFFEndPt,
    displayNameReqBody,
    "POST",
    `${process.env.NEXT_PUBLIC_X_API_KEY}`,
    "no-cache", 0,
    {});
  const query = getMetaDetailsQueryForSRpage("SEO - courseDetails" + ` - ${process.env.PROJECT}`);
  let contentfulMetadata = await graphQlFetchFunction(query);
  contentfulMetadata = contentfulMetadata?.data?.pageSeoFieldsCollection?.items[0];
  h1h2Text = contentfulMetadata?.h1Title?.includes("[SPLIT]") ? contentfulMetadata?.h1Title?.split("[SPLIT]") : null;
  const metaFiltersOpted: MetaFilterTypesReplace = {
    providerName: displayNameResponse?.collegeName ?? undefined,
    courseName: displayNameResponse?.courseName ?? undefined,
  };

  return (
    <>
      <div className='cd-uni-info-container'>
        <div className='max-w-container mx-auto'>
          <div className='cd-uniinfo-card-container flex flex-col gap-[24px] py-[24px] px-[16px] md:px-[20px] lg:px-[0]'>
            {/* -- */}
            <div className='uniresults-inner flex flex-col md:flex-row md:gap-[24px]'>
              <div className='uniresults-left'>
                <div className="univ__logo bg-white p-[4px] w-[120px] rounded-[8px] shadow-custom-4 overflow-hidden hidden md:block">
                  {data?.courseInfo?.institutionLogoUrl &&
                    <Image className='w-full' src={data?.courseInfo?.institutionLogoUrl} alt="uni logoo" width={112} height={112} />
                  }
                </div>
              </div>
              <div className='uniresults-right flex flex-col flex-1 gap-[16px]'>
                <div className='uni-info-card flex flex-col gap-[8px] md:gap-0'>
                  <div className='flex flex-col-reverse md:flex-row gap-[16px] md:gap-0  justify-between items-start h5 text-grey300'>
                    <span>{replaceSEOPlaceHolder(h1h2Text?.[0], metaFiltersOpted)}</span>
                    <UserFavourite {...{
                        contentType: 'COURSE',
                        contentId: data?.courseInfo?.courseId,
                        contentName: data?.courseInfo?.courseTitle
                      }} />
                  </div>
                  <div className='flex flex-col gap-[8px]'>
                    <a href={institutionUrl? institutionUrl : ""} className='block w-fit para-lg font-semibold text-primary-400 hover:text-primary-500 hover:underline'>{replaceSEOPlaceHolder(h1h2Text?.[1], metaFiltersOpted)}</a>
                    <div className='flex'>
                      <div className='rating-pod flex items-center gap-[8px]'>
                        <div className='rating-card flex items-center gap-[8px]'>
                          <span className="reviewLink small text-grey300">Student rating</span>
                          <div className='flex gap-[4px]'>
                            <div className='tooltip'>
                              <div className='flex gap-[2px]'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD" />
                                </svg>
                              </div>
                            </div>
                            <span className='small text-grey300'>({data?.courseInfo?.overallRatingExact})</span>
                          </div>
                        </div>
                        {(data?.latestReviews?.length>0 || data?.reviewBreakdown?.length >0 ) && 
                          <Viewmore />
                        }
                      </div>
                    </div>
                    <p className='small text-grey300'>{replaceSEOPlaceHolder(contentfulMetadata?.h2Text, metaFiltersOpted)}</p>
                  </div>
                </div>
                <div className='uniresults-content-right flex items-end'>
                  <div className='btn-pod w-full grid grid-col-1 md:grid-cols-2 lg:flex lg:grid-cols-none gap-[8px]'>
                    {data?.enquiryDetails?.institutionDetails?.emailFlag?.toLowerCase() === "y" &&
                    <RequestInfo />
                    }
                    {data?.enquiryDetails?.institutionDetails?.prospectusFlag?.toLowerCase() === "y" &&
                    <Getprospectus pageName={"courseDetails"} />
                    }
                      {data?.enquiryDetails?.institutionDetails?.opendayFlag?.toLowerCase() === "y" &&
                    <Visitwebsite />
                    }
                       {data?.enquiryDetails?.institutionDetails?.websiteFlag?.toLowerCase() === "y" &&
                    <BookEvent />
                    }

                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Courseheaderinfocomponents