import React from "react";
import StudentRating from "@packages/shared-components/common-utilities/student-rating/student-rating";
import StudentReviews from "@packages/shared-components/common-utilities/student-reviews/student-reviews";
import WuscaBadgeSkeleton from "./wusca-badge-skeleton";

const AdvertiserSkeleton =  ({
  rating,
  advertiserTitle,
  advertiserDescription,
  isWuscaBadge,
  showWuscaCard = false,
  showreviewCard,
  showTitle = true,
}: any) => {
  return (
    <>
      {/* reviews */}
      <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
        <div className="flex flex-col gap-[8px]">
        <div className="skeleton skeleton-text-animated page_heading !w-[50%]"></div>
        <div className="skeleton skeleton-text-animated descrip"></div>	
        </div>
        <div className="border border-grey-200 bg-grey-50 rounded-[8px] overflow-hidden">
          {isWuscaBadge && <WuscaBadgeSkeleton wuscaCard={showWuscaCard} />}
          <StudentRating data={rating} />
          {showreviewCard && <StudentReviews />}
        </div>
      </div>
      {/* reviews */}
    </>
  );
};


export default AdvertiserSkeleton