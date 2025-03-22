"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FeaturedSkeleton from "@packages/shared-components/skeleton/search-result/featured-skeleton";
import Video from "@packages/shared-components/common-utilities/videos/Video";

interface FeaturedProviderDetailsProps {
  featuredData: any;
}

const FeaturedVideoSection: React.FC<FeaturedProviderDetailsProps> = ({
  featuredData,
}) => {
  const handleNavigation = (navigationUrl: any) => {
    try {
      if (navigationUrl.includes("whatuni.com"))
        window.open(navigationUrl, "_self");
      else window.open(navigationUrl, "_blank");
    } catch (error) {
      console.error("Navigation failed:", error);
    }
  };
  return (
    <>
      <div
        className="bg-grey-600 rounded-[8px] p-[16px] flex flex-col gap-[24px] md:flex-row lg:p-[24px]"
        onClick={() => handleNavigation(featuredData?.navigationUrl)}
      >
        <div className="flex flex-col gap-[8px] w-full order-2 lg:order-1">
          <div className="w-[64px] h-[64px] p-[4px] rounded-[4px] bg-white shadow-custom-4 hidden lg:block">
            <Image
              src={
                featuredData?.collegeLogoPath
                  ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${featuredData?.collegeLogoPath}`
                  : "/static/assets/icons/search-result/kent.png"
              }
              alt="University logo"
              width={56}
              height={56}
            />
          </div>
          <div className="text-green200 font-bold x-small uppercase">
            Featured
          </div>
          {featuredData?.profileHeadlineUrl ? (
            <Link href={featuredData?.profileHeadlineUrl} target="_blank" onClick={(event)=> stopNavigating(event)}>
              <div className="text-grey-50 h6">{featuredData?.headline}</div>
            </Link>
          ) : (
            <></>
          )}
          <div className="text-grey-50 small line-clamp-1">
            {featuredData?.tagline}
          </div>
          <div className="flex items-center gap-[8px] text-grey-50 small">
            <div className="flex items-center gap-[4px]">
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
              {featuredData?.exactRating}
            </div>
            <Link
              href={`/university-course-reviews/${featuredData?.collegeName}/${featuredData?.collegeId}`}
              className="hover:underline"
            >
              {featuredData?.reviewCount} reviews
            </Link>
          </div>
          <Link
            href="#"
            className="flex items-center gap-[4px] w-fit text-white font-semibold underline"
            onClick={() => handleNavigation({ featuredData: featuredData })}
          >
            {featuredData?.navigationText}
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
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <div className="w-full shrink-0 flex self-center  rounded-[8px] overflow-hidden relative order-1 md:w-[310px] md:min-h-[158px] lg:w-[391px] lg:min-h-[200px] lg:order-2">
          {featuredData?.mediaType?.toLowerCase() === "video" ? (
            <>
              <Video featuredData={featuredData}/>
            </>
          ) : (
            <>
              <div className="w-full relative rounded-[8px] overflow-hidden flex justify-center">
                <Image
                  src={
                    featuredData?.mediaPath
                      ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${featuredData?.mediaPath}`
                      : "/static/assets/images/search-results/thumbnail.png"
                  }
                  alt="Image"
                  width={391}
                  height={200}
                />
              </div>
            </>
          )}
        </div>
      </div>
      {/* <FeaturedSkeleton /> */}
    </>
  );
};

export default FeaturedVideoSection;
