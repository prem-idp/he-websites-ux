"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ClickAndShow from "@packages/shared-components/common-utilities/click-show/click-show";
import Getprospectus from "@packages/shared-components/common-utilities/cards/interaction-button/getprospectus";
import Visitwebsite from "@packages/shared-components/common-utilities/cards/interaction-button/visitwebsite";
import BookOpenDay from "@packages/shared-components/common-utilities/cards/interaction-button/bookopenday";
import RequestInfo from "@packages/shared-components/common-utilities/cards/interaction-button/requestinfo";
import { getCurrentUser } from "@aws-amplify/auth";
import ResultSectionSkeleton from "@packages/shared-components/skeleton/search-result/result-section-skeleton";
import {getUserFavourites,addRemoveFavourites } from "@packages/lib/server-actions/server-action";
import ApplyNow from "@packages/shared-components/common-utilities/cards/interaction-button/applynow";

interface SrPageResultPodProps {
  searchResultsData: any[];
  subject:any;
}
interface FavoriteState {
  favoriteFlag: boolean;
  isLoading: boolean;
}

const SrPageResultPod: React.FC<SrPageResultPodProps> = ({
  searchResultsData,subject
}) => {
  const [userData, setUserData] = useState({});
 const [favouritesList, setFavouritesList] = useState([]);
  useEffect(() => {
    async function checkUser() {
      try{
      const user = await getCurrentUser();
      console.log(user)
      setUserData(user);  
      if (user && typeof window !== 'undefined') {
        console.log("fav call", await getUserFavourites())
       const favList = await getUserFavourites();
       //setFavouritesList(favList); 
       console.log("FAV LIST", favList)
      }
    } catch(error) {
       console.log(error)
    }
    }
    checkUser();
  }, [favouritesList]); 
  const [favoriteState, setFavoriteState] = useState<FavoriteState>({
    favoriteFlag: false,
    isLoading: false
  });
  const [isfavouritesClicked, setIsfavouritesClicked] = useState(false);
  const universityPodClick = (navigationUrl: any) => {
    window.open(navigationUrl, "_self");
  };
  //
  const handleFavourite = async(collegeId: any,collegeName:any,e: React.FormEvent) => {
    e.stopPropagation();
    if (userData === null ||  userData === "") {
      console.log("not logged")
      return;
    }
    setIsfavouritesClicked(!isfavouritesClicked);
    setFavoriteState(prev => ({ ...prev, isLoading: true }));
    try {
      const payload = {
        contentType: "INSTITUTION",
        contentId: collegeId,
        contentName: collegeName,
        inputFlag: true
      };
      const data = await addRemoveFavourites([payload]);
      console.log("FAV data", data)
      setIsfavouritesClicked(!isfavouritesClicked);
      if (data.success) {
        setFavoriteState(prev => ({
          ...prev,
          favoriteFlag: !prev.favoriteFlag
        }));
        if (!favoriteState.favoriteFlag) {
          //showSuccessMessage('Added to favorites');s
        }
      } else if (data.message === 'Limit exceeded') {
        // Handle limit exceeded case
       // showLimitExceededMessage();
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setFavoriteState(prev => ({ ...prev, isLoading: false }));
    }
  };


  const onClose = () => {
    setIsfavouritesClicked(!isfavouritesClicked);
  };

  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalName: any) => {
    setOpenModal(modalName);
  };
  const handleCloseModal = () => {
    setOpenModal(null);
  };

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
                  </Link>
                  {/* {item.sponsored ? (
                    <div className="bg-grey-100 text-grey-500 uppercase rounded-[4px] px-[8px] xs-small font-semibold">
                      sponsored
                    </div>
                  ) : null} */}
                </div>
                <div
                  onClick={(event)=> handleFavourite(data?.collegeId,data?.collegeDisplayName,event)}
                  className="heart w-[40px] h-[40px] bg-white x-small border border-blue-500 rounded-[24px] flex items-center justify-center cursor-pointer hover:bg-blue-100 relative"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                      stroke="#4664DC"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="absolute z-[1] select-none flex border border-grey-200 top-[43px] shadow-custom-1 whitespace-normal rounded-[8px] w-[320px] right-0 bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:right-[18px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0 hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-grey900 font-semibold">
                        We have added this to your comparison
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
                    <Link
                      href=""
                      className="flex items-center gap-[4px] w-fit text-primary-400 hover:underline"
                    >
                      View all comparison
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
                </div>
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
                {data?.reviewCount ? (
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
                ) : (
                  <></>
                )}
                <div className="flex items-center gap-[4px] font-bold uppercase xs-small">
                  {data?.adminVenue ? (
                    <div className="bg-grey-100 text-grey-500 px-[8px] rounded-[4px]">
                      {data?.adminVenue}
                    </div>
                  ) : (
                    <></>
                  )}
                  {data?.distanceInMiles ? (
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
                  ) : (
                    <></>
                  )}
                </div>
                {data?.wuscaRanking ? (
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
                ) : (
                  <></>
                )}
                {data?.wuscaBadges ? (
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
                    <div className="bg-primary-400 px-[8px] rounded-[4px]">
                      + 2 more
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
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
            />
          </div>
          <div className="flex flex-col grow">
            <div className="bg-white border border-grey-200 rounded-b-[16px] shadow-custom-3 md:rounded-tr-[16px]">
              {data?.review1Text ? (
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
              ) : (
                <></>
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
                          href={process.env.PROJECT === "Whatuni" ? `/degrees/${courseData?.courseTitleTextKey}/${data?.collegeTextKey}/cd/${courseData?.courseId}/${data?.collegeId}` : `/courses/search/postgraduate/${data?.collegeTextKey}/${courseData?.courseTitleTextKey}/${courseData?.courseId}`}
                        >
                          <div className="text-primary-400 font-semibold cursor-pointer hover:underline">
                            {courseData?.courseTitle}
                          </div>
                        </Link>
                        <div className="flex gap-[4px] text-grey-500">
                          {courseData?.minUcasPoints ? (
                            <div className="flex items-center justify-center uppercase gap-[2px] bg-grey-100 rounded-[4px] px-[8px] xs-small font-semibold">
                              {/* pgs euro icon */}
                              {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.66667 6.33333C9.66667 5.71968 9.16921 5.22222 8.55556 5.22222C7.94191 5.22222 7.44444 5.71968 7.44444 6.33333V9.11111C7.44444 9.72476 6.94698 10.2222 6.33333 10.2222H9.66667M6.33333 8H8.55556M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z" stroke="#5C656E" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
                              {/* pgs euro icon */}
                              <Image
                                className="hidden md:block"
                                src="/static/assets/icons/search-result/calender-grey.svg"
                                alt="Lecturers and Teaching"
                                width={16}
                                height={16}
                              />
                              {courseData?.minUcasPoints}-
                              {courseData?.maxUcasPoints} ucas points
                            </div>
                          ) : (
                            <></>
                          )}
                          {courseData?.availabilityDetails?.duration ||
                          courseData?.availabilityDetails?.studyMode ? (
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
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div className="heart shrink-0 w-[40px] h-[40px] bg-white x-small border border-primary-400 rounded-[24px] flex items-center justify-center hover:bg-blue-100 hover:cursor-pointer relative">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                            stroke="#4664DC"
                            strokeWidth="1.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="absolute z-[1] select-none flex border border-grey-200 top-[44px] shadow-custom-1 whitespace-normal rounded-[8px] w-[320px] right-0 bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:right-[18px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0 hidden">
                          <div className="flex items-center justify-between">
                            <span className="text-grey900 font-semibold">
                              We have added this to your comparison
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
                          <Link
                            href=""
                            className="flex items-center gap-[4px] w-fit text-primary-400 hover:underline"
                          >
                            View all comparison
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
                      </div>
                    </div>
                    {/* pgs descrption */}
                    {process.env.PROJECT === "PGS" && courseData?.courseSummary? (
                    <div className="relative small text-grey500">
                      <div className="line-clamp-2">
                      courseData?.courseSummary
                      </div>
                      <div className="absolute bg-gradient13 bg-white bottom-0 right-0 sm:left-[210px]">
                        <span>... </span>
                        <Link
                          href=""
                          className="text-blue-400 cursor-pointer hover:underline"
                        >
                          Read More
                        </Link>
                      </div>
                    </div> ) : <></>}
                    {/* pgs descrption */}
                    
                    { process.env.PROJECT === "Whatuni" && courseData?.modulesInfo ? (
                      <ClickAndShow>
                        <div className="text-black x-small">
                          <div className="font-semibold">Year 1</div>
                          <ul className="list-disc pl-[20px] flex flex-col gap-[4px]">
                            <li>Becoming a Criminologist</li>
                            <li>Introduction to Law and its Study</li>
                            <li>Social Research in Practice</li>
                            <li>Criminology in Late Modernity</li>
                            <li>Criminal Law</li>
                          </ul>
                          <Link
                            href=""
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
                      {courseData?.enquiryDetails?.prospectusFlag === "Y" ? (
                        <Getprospectus
                          enquiryProps={{
                            courseId: courseData?.courseId,
                            collegeId: data?.collegeId,
                            subOrderItemid:
                              courseData?.enquiryDetails?.subOrderItemId,
                            sponsoredListingFlag: data?.sponsoredListingFlag,
                            manualBoostingFlag: data?.manualBoostingFlag,
                            orderItemId:
                              courseData?.enquiryDetails?.orderItemId,
                            collegeName:data?.collegeTextKey,
                            pageName:"browsemoneypageresults"
                          }}
                        />
                      ) : (
                        <></>
                      )}
                      {courseData?.enquiryDetails?.websiteFlag === "Y" ? (
                        <Visitwebsite
                          enquiryProps={{
                            courseId: courseData?.courseId,
                            collegeId: data?.collegeId,
                            subOrderItemid:
                              courseData?.enquiryDetails?.subOrderItemId,
                            sponsoredListingFlag: data?.sponsoredListingFlag,
                            manualBoostingFlag: data?.manualBoostingFlag,
                            orderItemId:
                              courseData?.enquiryDetails?.orderItemId,
                            pageName:"browsemoneypageresults"
                          }}
                        />
                      ) : (
                        <></>
                      )}
                      {courseData?.enquiryDetails?.websiteFlag === "Y" ? (
                        <BookOpenDay
                          enquiryProps={{
                            courseId: courseData?.courseId,
                            collegeId: data?.collegeId,
                            subOrderItemid:
                              courseData?.enquiryDetails?.subOrderItemId,
                            sponsoredListingFlag: data?.sponsoredListingFlag,
                            manualBoostingFlag: data?.manualBoostingFlag,
                            orderItemId:
                              courseData?.enquiryDetails?.orderItemId,
                            collegeName:data?.collegeTextKey,
                            pageName:"browsemoneypageresults"
                          }}
                        />
                      ) : (
                        <></>
                      )}
                      {courseData?.enquiryDetails?.emailFlag === "Y" ? (
                        <RequestInfo
                          enquiryProps={{
                            courseId: courseData?.courseId,
                            collegeId: data?.collegeId,
                            subOrderItemid:
                              courseData?.enquiryDetails?.subOrderItemId,
                            sponsoredListingFlag: data?.sponsoredListingFlag,
                            manualBoostingFlag: data?.manualBoostingFlag,
                            orderItemId:
                              courseData?.enquiryDetails?.orderItemId,
                            collegeName:data?.collegeTextKey,
                            pageName:"browsemoneypageresults"
                          }}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
            {data?.courseCount > 2 ? (
              <Link
                href={`/degree-courses/csearch?subject=${subject}&university=${data?.collegeTextKey}`}
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
      {isfavouritesClicked && (
        <div className="modal modal-container relative top-0 right-0 bottom-0 z-[5]">
          <div
            onClick={onClose}
            className="backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white"
          ></div>
          <div className="modal-box shadow-custom-6 w-[343px] md:w-[512px] p-[24px] bg-white rounded-[8px] fixed top-[30%] translate-y-[30%] left-0 right-0 mx-auto">
            <div
              onClick={onClose}
              className="modal_close flex items-center justify-center absolute top-[16px] right-[16px] z-[1] cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="stroke-grey-400"
                  d="M1 13L13 1M1 1L13 13"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="review-modal-container flex flex-col gap-[16px]]">
              <div className="mb-[4px] para-lg font-semibold">
                Maximum number of favourites
              </div>
              <p className="small text-grey-500">
                You can only favourite a max of 30 unis and courses. Remove a
                selection to add another
              </p>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-primary w-fit mt-[24px] ml-auto"
              >
                Ok, got it
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <ResultSectionSkeleton/> */}

      {/* {openModal && <SearchResultReviewLightBox onClose={handleCloseModal} />} */}
    </>
  );
};

export default SrPageResultPod;
