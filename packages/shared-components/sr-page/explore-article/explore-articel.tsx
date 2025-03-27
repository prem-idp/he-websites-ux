"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ExploreArticles =  ({ exploreSectionProps } : any) => {
  const subjectComponentData = exploreSectionProps?.subjectComponentData
  const cityComponentData = exploreSectionProps?.cityComponentData
  const richContentTitle = subjectComponentData?.moduleComponentsCollection?.items?.[0]?.fieldComponentsCollection?.items?.[0]?.richContentTitle || cityComponentData?.pageTitle
  const richContent = subjectComponentData?.moduleComponentsCollection?.items?.[0]?.fieldComponentsCollection?.items?.[0]?.richContent?.json?.content?.[0]?.content?.[0]?.value || cityComponentData?.shortDescription
  const imageUrl = subjectComponentData?.moduleComponentsCollection?.items?.[0]?.fieldComponentsCollection?.items?.[0]?.homeMediaCollection?.items[0]?.image?.url  || cityComponentData?.bannerImageCollection?.items?.[0]?.imgUpload?.url
  return (
    <>
      <div className="flex flex-col item-center border-[1px] border-grey-200 rounded-[8px] lg:flex-row cursor-pointer" onClick={()=> window.open(subjectComponentData?.pageUrl || cityComponentData?.urlSlug,"_self")}>
        <div className="w-full md:h-[193px] lg:h-[221px] lg:w-[392px] shrink-0">
          <Image
            src={imageUrl}
            width={392}
            height={221}
            alt="Article"
            className="w-full h-full object-cover rounded-t-[8px] lg:w-[392px] lg:rounded-l-[8px] lg:rounded-tr-none"
          />
        </div>
        <div className="p-[16px] shadow-custom-2 flex flex-col gap-[8px] text-grey300 lg:px-[24px] lg:py-[32px]">
          <div className="h4">{richContentTitle}</div>
          <div className="small line-clamp-4">
           {richContent}
          </div>
          <Link
            href={subjectComponentData?.pageUrl || cityComponentData?.urlSlug || ""}
            className="flex items-center gap-[4px] w-fit text-primary-400 small font-semibold hover:underline"
          >
            View full guide
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 5.61377L12 10.6138L7 15.6138"
                stroke="#4664DC"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExploreArticles;
