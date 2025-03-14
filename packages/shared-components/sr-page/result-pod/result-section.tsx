"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickAndShow from "@packages/shared-components/common-utilities/click-show/click-show";
import Getprospectus from "@packages/shared-components/common-utilities/cards/interaction-button/getprospectus";
import Visitwebsite from "@packages/shared-components/common-utilities/cards/interaction-button/visitwebsite";
import BookOpenDay from "@packages/shared-components/common-utilities/cards/interaction-button/bookopenday";
import RequestInfo from "@packages/shared-components/common-utilities/cards/interaction-button/requestinfo";
import ResultSectionSkeleton from "@packages/shared-components/skeleton/search-result/result-section-skeleton";
import ApplyNow from "@packages/shared-components/common-utilities/cards/interaction-button/applynow";
import UserFavourite from "@packages/shared-components/common-utilities/user-favourite/user-favourite";
import { useSearchParams } from "next/navigation";
import { AuthUser, getCurrentUser } from "@aws-amplify/auth";
import { getUserFavourites } from "@packages/lib/utlils/userfavourite";
interface SrPageResultPodProps {
  searchResultsData: any[];
  qualCode:string;
}
interface Favourite {
  fav_id: string;
  fav_type: string;
  fav_date?: string;
  final_choice_id?: string | null;
  choice_position?: number | null;
}

const SrPageResultPod: React.FC<SrPageResultPodProps> = ({
  searchResultsData,qualCode
}) => {
  const searchParams = useSearchParams();
  const selectedSubject = searchParams?.has("subject") ? searchParams?.get("subject") : "";
  const [user, setUserData] = useState<AuthUser | null>(null);
  const [favourite, setFavourite] = useState<{favouritedList: any[] }>({favouritedList: [] });
 const universityPodClick = (navigationUrl: any) => {
  typeof window !== "undefined" && window?.open(navigationUrl, "_self");
};

     useEffect(() => {
       // Getting favourites list when user logged in
       async function checkUser() {
         try {
           const user: AuthUser = await getCurrentUser();
           setUserData(user);
           if (user && typeof window !== "undefined") {
             const favList: Favourite[] = await getUserFavourites();
             setFavourite({ favouritedList: favList?.map((fav) => fav?.fav_id) });
           }
         } catch (error) {
           setUserData(null);
         }
       }
       checkUser();
     }, []);

  const calculateDaysBetween = (targetDate: any) => {
    const currentDate: any = new Date();
    const specificDate: any = new Date(targetDate);
    const differenceInTime = specificDate - currentDate;
    const differenceInDays = Math.ceil(
      differenceInTime / (1000 * 60 * 60 * 24)
    );
    return differenceInDays > 1
      ? "Next Open day in " + differenceInDays + " days"
      : "Next Open day in " + differenceInDays + " day";
  };
  //
  const getPRPageURL = (collegeTextKey: any) => {   
    const filteredParams = Array.from(searchParams.entries())
  .filter(([key]) => !['sort', 'pageno', 'page_no', 'region', 'city','russell-group'].includes(key))
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
// Convert filtered params to URLSearchParams
const queryString = new URLSearchParams(filteredParams).toString();
const baseUrl = process.env.PROJECT === "Whatuni" 
? "/degree-courses/csearch"
: "/pgs/search";

// Construct the final URL
const providerResultURL = `${baseUrl}?university=${encodeURIComponent(collegeTextKey)}${
queryString ? `&${queryString}` : ''
}`;    
    return providerResultURL;

  }
  
  const getEnquiryProps = (data:any,courseData:any) => {
    const baseEnquiryProps = {
      courseId: courseData?.courseId,
      collegeId: data?.collegeId,
      subOrderItemId: courseData?.enquiryDetails?.subOrderItemId,
      sponsoredListingFlag: data?.sponsoredListingFlag,
      manualBoostingFlag: data?.manualBoostingFlag,
      orderItemId: courseData?.enquiryDetails?.orderItemId,
      collegeName: data?.collegeTextKey,
      pageName: "browsemoneypageresults",
      qualCode: process.env.PROJECT === "PGS" ? "L" : qualCode,
      selectedSubject: selectedSubject
    };
    return baseEnquiryProps
  }

  return (
    <>
      {searchResultsData?.map((data, index) => (
        
        <div
          className="flex flex-col mt-[8px] md:mt-[24px] md:flex-row"
          key={index}
        >
          <div
            className="w-full h-[292px] relative bg-blue-400 bg-gradient11 shrink-0 rounded-t-[16px] md:rounded-l-[16px] md:rounded-tr-none md:w-[310px] md:h-[316px] lg:w-[500px] lg:h-[376px] cursor-pointer"
            onClick={() =>
              universityPodClick(
                process.env.PROJECT === "Whatuni"
                  ? `/university-profile/${data?.collegeTextKey}/${data?.collegeId}`
                  : `/universities/${data?.collegeTextKey}`
              )
            }
          >
            <div className="absolute top-0 left-0 p-[16px] bg-gradient11 w-full h-full lg:p-[24px] flex flex-col justify-between rounded-t-[16px] md:rounded-l-[16px] md:rounded-tr-none">
              <div className="flex justify-between">
                <div className="flex items-start gap-[8px]">
                {data?.collegeMedia?.ipCollegeLogo && (
                  <Link
                    href={
                      process.env.PROJECT === "Whatuni"
                        ? `/university-profile/${data?.collegeTextKey}/${data?.collegeId}`
                        : `/universities/${data?.collegeTextKey}}`
                    }
                    className="w-[64px] h-[64px] p-[4px] rounded-[4px] bg-white shadow-custom-4"
                  >
                    
                    <Image
                      src={
                        data?.collegeMedia?.ipCollegeLogo
                          ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${data?.collegeMedia?.ipCollegeLogo}`
                          : "/static/assets/icons/search-result/kent.png"
                      }
                      alt="University logo"
                      width={56}
                      height={56}
                      id="uni_img"
                    /> 
                  </Link> )}
                  {data?.sponsoredListingFlag === "Y" && (
                    <div className="bg-grey-100 text-grey-500 uppercase rounded-[4px] px-[8px] xs-small font-semibold">
                      sponsored
                    </div>
                  )}
                </div>
                <UserFavourite favourites={favourite} contentId={data?.collegeId} contentName={data?.collegeDisplayName} contentType="INSTITUTION"></UserFavourite>
              </div>
              <div className="flex flex-col gap-[4px] text-white">
                <Link
                  href={
                    process.env.PROJECT === "Whatuni"
                      ? `/university-profile/${data?.collegeTextKey}/${data?.collegeId}`
                      : `/universities/${data?.collegeTextKey}}`
                  }
                >
                  <div className="h5">{data?.collegeDisplayName}</div>
                </Link>
                <div className="x-small font-semibold">
                  {data?.courseCount} engineering{" "}
                  {data?.courseCount === 1 ? "course" : "courses"}
                </div>
                {data?.reviewCount && (
                  <div className="flex items-center gap-[8px] text-grey-50 small">
                    <div className="flex items-center gap-[2px]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                          fill="#0FBEFD"
                        />
                      </svg>
                      {data?.exactRating}
                    </div>
                    <Link
                      href={`/university-course-reviews/${data?.collegeTextKey}/${data?.collegeId}`}
                      className="underline"
                    >
                      {data?.reviewCount} reviews
                    </Link>
                  </div>
                )}
                <div className="flex items-center gap-[4px] font-bold uppercase xs-small">
                  {data?.adminVenue && (
                    <div className="bg-grey-100 text-grey-500 px-[8px] rounded-[4px]">
                      {data?.adminVenue}
                    </div>
                  )}
                  {data?.distanceInMiles && (
                    <div className="flex items-center justify-center gap-[2px] bg-positive-light text-positive-default px-[8px] rounded-[4px]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.929 10.0711C10.5878 10.4122 9.98482 11.0152 9.41426 11.5858C8.63321 12.3668 7.36696 12.3669 6.58591 11.5859C6.02667 11.0266 5.43232 10.4323 5.07111 10.0711C3.45351 8.45346 3.45351 5.83081 5.07111 4.2132C6.68872 2.5956 9.31137 2.5956 10.929 4.2132C12.5466 5.83081 12.5466 8.45346 10.929 10.0711Z"
                          stroke="#168721"
                          strokeWidth="1.13"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.55335 7.14214C9.55335 8 8.85791 8.69544 8.00005 8.69544C7.14218 8.69544 6.44675 8 6.44675 7.14214C6.44675 6.28427 7.14218 5.58884 8.00005 5.58884C8.85791 5.58884 9.55335 6.28427 9.55335 7.14214Z"
                          stroke="#168721"
                          strokeWidth="1.13"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {data?.distanceInMiles} Miles from you
                    </div>
                  )}
                </div>
                {data?.wuscaRanking && (
                  <div className="x-small underline w-fit relative group">
                    WUSCA rank: {data?.wuscaRanking}
                    <div className="absolute z-0 select-none hidden group-hover:flex border border-grey-200 top-[22px] shadow-custom-1 whitespace-normal rounded-[8px] w-[320px] left-[-16px] md:left-0 bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:left-[30px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0">
                      <div className="flex items-center justify-between">
                        <span className="text-grey900 font-semibold">
                          WUSCA Student Ranking
                        </span>
                        <svg
                          className="cursor-pointer"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 6L6 18"
                            stroke="#333333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 6L18 18"
                            stroke="#333333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="x-small text-grey300 font-normal">
                        These are the 2024 ranking, based on rating given by
                        past and present students
                      </p>
                    </div>
                  </div>
                )}
                {data?.wuscaBadges && process.env.PROJECT === "Whatuni" && (
                  <div className="flex items-center gap-[4px] font-bold uppercase xs-small">
                    <div className="flex items-center gap-[2px] bg-positive-light text-positive-default px-[8px] rounded-[4px]">
                      <Image
                        src="/static/assets/icons/search-result/lectures-green.svg"
                        alt="Lecturers and Teaching"
                        width={12}
                        height={12}
                      />
                      {data?.wuscaBadges}
                    </div>
                    {data?.wuscaBadges?.includes(",") ? 
                    <div className="bg-primary-400 px-[8px] rounded-[4px]">
                      + {data?.wuscaBadges?.split(",")?.length - 1} more
                    </div> : <></>}
                  </div>
                )}
                {data?.openDayDetails?.openDate &&
                process.env.PROJECT === "Whatuni" ? (
                  <div className="flex items-center gap-[4px] font-bold uppercase xs-small">
                    <div className="flex items-center gap-[2px] bg-positive-light text-positive-default px-[8px] rounded-[4px]">
                      {calculateDaysBetween(data?.openDayDetails?.openDate)}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {data?.collegeMedia?.ipCollegeImage && (
            <Image
              src={
                data?.collegeMedia?.ipCollegeImage
                  ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${data?.collegeMedia?.ipCollegeImage}`
                  : "/static/assets/images/search-results/university.jpg"
              }
              alt="University"
              width={500}
              height={376}
              className="w-full h-full rounded-t-[16px] object-cover md:rounded-l-[16px] md:rounded-tr-none"
            /> )}
          </div>
          <div className="flex flex-col grow">
            <div className="bg-white border border-grey-200 rounded-b-[16px] shadow-custom-3 md:rounded-tr-[16px]">
              {data?.review1Text && (
                <div className="border-b-[1px] border-grey-200 p-[16px] lg:p-[20px]">
                  <div className="bg-grey-100 p-[12px] rounded-[8px] flex gap-[4px]">
                    <div className="text-heading1 relative top-[20px] font-farro font-normal">
                      “
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <div className="relative group x-small">
                        <span className="text-primary-400 underline font-semibold">
                          What students think
                        </span>
                        <div className="absolute z-[1] select-none hidden group-hover:flex border border-grey-200 top-[22px] shadow-custom-1 whitespace-normal rounded-[8px] w-[320px] left-[-16px] md:left-0 bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:left-[30px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0">
                          <div className="flex items-center justify-between">
                            <span className="text-grey900 font-semibold">
                              Why should you trust our uni reviews?
                            </span>
                            <svg
                              className="cursor-pointer"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18 6L6 18"
                                stroke="#333333"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6 6L18 18"
                                stroke="#333333"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p className="x-small text-grey300 font-normal">
                            All our reviews are from real students, submitted
                            using their verified university email address.
                          </p>
                        </div>
                      </div>
                      <div className="relative x-small">
                        <div className="text-grey300 line-clamp-2">
                          {data?.review1Text}
                        </div>
                        <div className="absolute bottom-0 right-0 text-right w-[126px] bg-gradient12">
                          <span>... </span>
                          <Link
                            href={`/university-course-reviews/${data?.collegeTextKey}/${data?.collegeId}`}
                            className="text-blue-400 cursor-pointer hover:underline"
                          >
                            Read full review
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {data?.bestMatchCoursesList?.map(
                (courseData: any, index: any) => (
                  <div
                    className="flex flex-col gap-[16px] border-b-[1px] border-grey-200 p-[16px] lg:p-[20px] last:border-none"
                    key={index}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col gap-[8px]">
                        <Link
                          href={
                            process.env.PROJECT === "Whatuni"
                              ? `/degrees/${courseData?.courseTitleTextKey}/${data?.collegeTextKey}/cd/${courseData?.courseId}/${data?.collegeId}`
                              : `/courses/search/postgraduate/${data?.collegeTextKey}/${courseData?.courseTitleTextKey}/${courseData?.courseId}`
                          }
                        >
                          <div className="text-primary-400 font-semibold cursor-pointer hover:underline">
                            {courseData?.courseTitle}
                          </div>
                        </Link>
                        <div className="flex gap-[4px] text-grey-500">
                          {((courseData?.minUcasPoints || courseData?.maxUcasPoints) && process.env.PROJECT === "Whatuni") || (courseData?.availabilityDetails?.fees && process.env.PROJECT === "PGS") ? (
                            <div className="flex items-center justify-center uppercase gap-[2px] bg-grey-100 rounded-[4px] px-[8px] xs-small font-semibold">
                              {/* pgs euro icon */}
                              {process.env.PROJECT === "PGS" && courseData?.availabilityDetails?.fees ?(
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.66667 6.33333C9.66667 5.71968 9.16921 5.22222 8.55556 5.22222C7.94191 5.22222 7.44444 5.71968 7.44444 6.33333V9.11111C7.44444 9.72476 6.94698 10.2222 6.33333 10.2222H9.66667M6.33333 8H8.55556M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z"
                                    stroke="#5C656E"
                                    stroke-width="1.13"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg> 
                               ) : (
                                <>
                                 {process.env.PROJECT === "Whatuni" &&
                                  <Image
                                    className="hidden md:block"
                                    src="/static/assets/icons/search-result/calender-grey.svg"
                                    alt="Lecturers and Teaching"
                                    width={16}
                                    height={16}
                                  />}
                                </>
                              )}
                              {/* pgs euro icon */}
                              {process.env.PROJECT === "PGS" ? courseData?.availabilityDetails?.fees : (courseData?.minUcasPoints && courseData?.maxUcasPoints ? courseData?.minUcasPoints +"-"+ courseData?.maxUcasPoints : courseData?.minUcasPoints ? courseData?.minUcasPoints : courseData?.maxUcasPoints) + " ucas points" }
                              
                            </div>
                          ) : (
                            <></>
                          )}
                          {(courseData?.availabilityDetails?.duration ||
                          courseData?.availabilityDetails?.studyMode) && (
                            <div className="flex items-center justify-center uppercase gap-[2px] bg-grey-100 rounded-[4px] px-[8px] xs-small font-semibold">
                              <Image
                                className="hidden md:block"
                                src="/static/assets/icons/search-result/time-grey.svg"
                                alt="Lecturers and Teaching"
                                width={16}
                                height={16}
                              />
                              {courseData?.availabilityDetails?.duration} <> </>
                              {courseData?.availabilityDetails?.studyMode}
                            </div>
                          )}
                        </div>
                      </div>
                      <UserFavourite favourites={favourite} contentId={courseData?.courseId} contentName={data?.collegeDisplayName} contentType="COURSE"></UserFavourite>
                    </div>
                    {/* pgs descrption */}
                    {process.env.PROJECT === "PGS" &&
                    courseData?.courseSummary ? (
                      <div className="relative small text-grey500">
                        <div className="line-clamp-2">
                        <div dangerouslySetInnerHTML={{ __html:courseData?.courseSummary || '' }} />
                        </div>
                        <div className="absolute bg-gradient13 bg-white bottom-0 right-0 sm:left-[210px]">
                          <span>... </span>
                          <Link
                            href={`/courses/search/postgraduate/${data?.collegeTextKey}/${courseData?.courseTitleTextKey}/${courseData?.courseId}`}
                            className="text-blue-400 cursor-pointer hover:underline"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                    {/* pgs descrption */}

                    {process.env.PROJECT === "Whatuni"  && courseData?.modulesDesc? (
                      <ClickAndShow>
                        <div className="text-black x-small">
                          <div className="font-semibold">{courseData?.modulesInfo}</div>
                          <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
                            {courseData?.modulesDesc?.split('###').map((desc:any,index:any) => (
                               <li key={index}>{desc}</li>
                            ))}
                           
                          </ul>
                          <Link
                            href={`/degrees/${courseData?.courseTitleTextKey}/${data?.collegeTextKey}/cd/${courseData?.courseId}/${data?.collegeId}`}
                            className="flex items-center gap-[4px] w-fit text-primary-400 small font-semibold hover:underline"
                          >
                            View all modules
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.23441 2.63471C8.54683 2.32229 9.05336 2.32229 9.36578 2.63471L14.1658 7.43471C14.4782 7.74713 14.4782 8.25366 14.1658 8.56608L9.36578 13.3661C9.05336 13.6785 8.54683 13.6785 8.23441 13.3661C7.92199 13.0537 7.92199 12.5471 8.23441 12.2347L11.6687 8.80039L2.4001 8.80039C1.95827 8.80039 1.6001 8.44222 1.6001 8.00039C1.6001 7.55856 1.95827 7.20039 2.4001 7.20039H11.6687L8.23441 3.76608C7.92199 3.45366 7.92199 2.94712 8.23441 2.63471Z"
                                fill="#3460DC"
                              />
                            </svg>
                          </Link>
                        </div>
                      </ClickAndShow>
                    ) : (
                      <></>
                    )}

                    <div
                      className={`grid grid-cols-1 justify-items-stretch gap-[8px] grid-flow-row auto-cols-fr lg:grid-rows-1 lg:grid-flow-col
                        md:grid-cols-1 md:grid-flow-row"
                      }`}
                    >
                        {process.env.PROJECT === "PGS" && courseData?.enquiryDetails?.applyNowFlag === "Y" && (
                          <ApplyNow
                            enquiryProps={getEnquiryProps(data,courseData)}
                          />
                      )}
                      {courseData?.enquiryDetails?.prospectusFlag === "Y" && (
                        <Getprospectus
                          enquiryProps={getEnquiryProps(data,courseData)}
                        />
                      )}
                      {courseData?.enquiryDetails?.websiteFlag === "Y" && (
                        <Visitwebsite
                          enquiryProps={getEnquiryProps(data,courseData)}
                        />
                      )}
                      {courseData?.enquiryDetails?.websiteFlag === "Y" && (
                        <BookOpenDay
                        enquiryProps={getEnquiryProps(data,courseData)}
                        />
                      )}
                      {courseData?.enquiryDetails?.emailFlag === "Y" && (
                        <RequestInfo
                        enquiryProps={getEnquiryProps(data,courseData)}
                        />
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
            {data?.courseCount > 2 ? (
              <Link
                href={getPRPageURL(data?.collegeTextKey) }
                className="flex items-center mx-auto gap-[4px] text-primary-400 small font-semibold mt-[16px] hover:underline"
              >
                View {data?.courseCount - 2} related courses
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.23798 2.55048C8.55528 2.23317 9.06972 2.23317 9.38702 2.55048L14.262 7.42548C14.5793 7.74278 14.5793 8.25722 14.262 8.57452L9.38702 13.4495C9.06972 13.7668 8.55528 13.7668 8.23798 13.4495C7.92067 13.1322 7.92067 12.6178 8.23798 12.3005L11.726 8.8125L2.3125 8.8125C1.86377 8.8125 1.5 8.44873 1.5 8C1.5 7.55127 1.86377 7.1875 2.3125 7.1875H11.726L8.23798 3.69952C7.92067 3.38222 7.92067 2.86778 8.23798 2.55048Z"
                    fill="#4664DC"
                  />
                </svg>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    
      {/* <ResultSectionSkeleton/> */}

      {/* {openModal && <SearchResultReviewLightBox onClose={handleCloseModal} />} */}
    </>
  );
};

export default SrPageResultPod;
