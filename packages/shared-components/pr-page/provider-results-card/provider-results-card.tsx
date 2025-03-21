"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

//import Paginations from "@packages/shared-components/common-utilities/paginations/paginations";
import RequestInfo from "@packages/shared-components/common-utilities/cards/interaction-button/requestinfo";
import Getprospectus from "@packages/shared-components/common-utilities/cards/interaction-button/getprospectus";
import Visitwebsite from "@packages/shared-components/common-utilities/cards/interaction-button/visitwebsite";
import BookOpenDay from "@packages/shared-components/common-utilities/cards/interaction-button/bookopenday";
import UserFavourite from "@packages/shared-components/common-utilities/user-favourite/user-favourite";
import Link from "next/link";
import { AuthUser, getCurrentUser } from "@aws-amplify/auth";

interface ProviderResultsCardProps {
  searchResultlist: any[]; // Adjust type as needed
  children?: any
}

interface Favourite {
  fav_id: string;
  fav_type: string;
  fav_date?: string;
  final_choice_id?: string | null;
  choice_position?: number | null;
}

const ProviderResultsCard: React.FC<ProviderResultsCardProps> = ({ searchResultlist = [], children }) => {

  const searchParams = useSearchParams();
  const selectedSubject = searchParams?.has("subject") ? searchParams?.get("subject") : "";
  // State to track which cards' modules are visible
  const [visibleModules, setVisibleModules] = useState<boolean[]>(
    new Array(searchResultlist.length).fill(false) // Initially, all are closed
  );

  // Toggle function for a specific card's modules
  const toggleModuleVisibility = (index: number) => {
    setVisibleModules((prev) =>
      prev.map((state, i) => (i === index ? !state : state)) // Toggle only the clicked card
    );
  };

  const [user, setUserData] = useState<AuthUser | null>(null);
  const [expandedIndexes, setExpandedIndexes] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (idx: number) => {
    setExpandedIndexes((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const providerCard = searchResultlist.map((items, index) => (
    <div
      key={index}
      // className="flex flex-col rounded-[16px] overflow-hidden bg-white shadow-custom-3 border border-grey-200 w-full md:max-w-[calc(50%_-_10px)] xl:max-w-[385px]"
      className="flex flex-col rounded-[16px] overflow-hidden bg-white shadow-custom-3 border border-grey-200"
    >
      <div className={`flex justify-end p-[16px] ${items.siteCode === "PGS_WEB" ? "bg-positive-light" : "bg-blue-100"}`}>
        {/* <span className="favorite group items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer"> */}
        <UserFavourite contentId={+items?.courseId} contentName={items?.title} contentType="COURSE" />
        {/* </span> */}
      </div>
      <div className="flex p-[16px] flex-col gap-[16px] h-full justify-between">
        <div className="flex flex-col gap-[16px] md:min-h-[240px]">
          <Link href={items?.cdpagesurl} className="h6 hover:underline cursor-pointer text-blue-400">
            {items.title}
          </Link>
          <ul className="flex flex-wrap gap-[4px]">
            {items.points && (
              <li className="flex gap-[2px] bg-grey-100 text-grey-500 uppercase font-semibold xs-small px-[8px] rounded-[4px]">
                <Image
                  alt="calender icon"
                  width="16"
                  height="16"
                  src="../static/assets/icons/search-result/calender-grey.svg"
                />
                {items.points}
              </li>
            )}
            {items.tagLocation && (
              < li className="flex gap-[2px] bg-grey-100 text-grey-500 font-semibold uppercase xs-small px-[8px] rounded-[4px]">
                <Image
                  alt="timer icon"
                  width="16"
                  height="16"
                  src="../static/assets/icons/search-result/time-grey.svg"
                />
                {items.tagLocation}
              </li>
            )}
          </ul>

          {items.fullCourse && (
            <span className="text-blue-400 font-semibold small">
              {items.fullCourse}
            </span>
          )}

          {items.siteCode === "PGS_WEB" ? (
            <>
              {items?.courseSummary && items.courseSummary.trim() !== "" && (
                <>
                  <p className="small text-grey500 break-all">
                    {expandedIndexes[index] ? items?.courseSummary : items?.courseSummary?.slice(0, 150) + "..."}
                    <span className="cursor-pointer select-none small text-blue-500" onClick={() => toggleReadMore(index)}>
                      {expandedIndexes[index] ? "Read less" : "Read more"}
                    </span>
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <span
                onClick={() => toggleModuleVisibility(index)}
                className={`text-blue-400 select-none font-semibold small cursor-pointer transition-all delay-0 duration-300 ease-linear pl-[20px] relative before:absolute before:content-[''] before:w-[11px] before:h-[2px] before:bg-blue-400 before:rounded-[2px] before:left-[2px] before:top-[10px] after:absolute after:content-[''] after:w-[11px] after:h-[2px] after:bg-blue-400 after:rounded-[2px] after:left-[2px] after:top-[10px] ${visibleModules[index] ? '' : 'after:rotate-90'} after:transition-all after:delay-0 after:duration-300 after:ease-linear`}
              >
                Modules
              </span>

              {/* Modules List */}
              {items?.modulesList && (
                <ul className="p-[0_16px_0_18px] flex flex-col gap-[8px] list-disc">
                  {visibleModules[index] &&
                    items.modulesList.split("###").map((desc: any, listIndex: number) => (
                      <li className="text-grey300 small break-all" key={listIndex}>
                        {desc}
                      </li>
                    ))}
                </ul>
              )}

              {/* "See all modules" Link */}
              {visibleModules[index] && (
                <span className="text-blue-400 hover:underline select-none font-semibold small cursor-pointer">
                  <Link href={items?.cdpagesurl}>See all modules</Link>
                </span>
              )}
            </>
          )}
        </div>

        <div className="w-full flex flex-col gap-[8px]">
          {items.hasProspectus &&
            <Getprospectus
              enquiryProps={{
                courseId: items?.courseId,
                collegeId: items?.collegeId,
                subOrderItemId: items?.subOrderItemId,
                sponsoredListingFlag: items?.sponsoredListingFlag,
                manualBoostingFlag: items?.manualBoostingFlag,
                orderItemId: items?.orderItemId,
                collegeName: items?.collegeTextKey,
                pageName: items?.pageName,
                selectedSubject: { selectedSubject },
                qualCode: items?.qualCode
              }} />}
          {items.hasWebsite &&
            <Visitwebsite
              enquiryProps={{
                courseId: items?.courseId,
                collegeId: items?.collegeId,
                subOrderItemId: items?.subOrderItemId,
                sponsoredListingFlag: items?.sponsoredListingFlag,
                manualBoostingFlag: items?.manualBoostingFlag,
                orderItemId: items?.orderItemId,
                pageName: items?.pageName,
                qualCode: items?.qualCode,
              }} />}
          {items.hasOpendayFlag &&
            <BookOpenDay
              enquiryProps={{
                courseId: items?.courseId,
                collegeId: items?.collegeId,
                subOrderItemId:
                  items?.subOrderItemId,
                sponsoredListingFlag: items?.sponsoredListingFlag,
                manualBoostingFlag: items?.manualBoostingFlag,
                orderItemId:
                  items?.orderItemId,
                collegeName: items?.collegeTextKey,
                pageName: items?.pageName,
                selectedSubject: { selectedSubject },
                qualCode: items?.qualCode,
              }} />}
          {items.hasEmail &&
            <RequestInfo
              enquiryProps={{
                courseId: items?.courseId,
                collegeId: items?.collegeId,
                subOrderItemId: items?.subOrderItemId,
                sponsoredListingFlag: items?.sponsoredListingFlag,
                manualBoostingFlag: items?.manualBoostingFlag,
                orderItemId: items?.orderItemId,
                collegeName: items?.collegeTextKey,
                pageName: items?.pageName,
                selectedSubject: { selectedSubject },
                qualCode: items?.qualCode,
              }} />}
        </div>
      </div>
    </div >
  ));
  return (
    <>
      {/* Provider Result card list  */}
      <section className="bg-grey-50">
        <div className="max-w-container px-[6px] md:px-[24px] xl:px-[0] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-[24px] px-[10px] gap-[20px]">
            {providerCard}
          </div>
          <div className="py-[40px]">
            {/* <Paginations /> */}
            {children}
          </div>
        </div>
      </section>
      {/* Provider Result card list END */}
    </>
  );
};

export default ProviderResultsCard;
