import React from "react";
import StudentReviews from "@packages/shared-components/common-utilities/student-reviews/student-reviews";
import WuscaBadgeSkeleton from "./wusca-badge-skeleton";
import StudentRatingSkeleton from "./student-rating-skeleton";
import StudentReviewsSkeleton from "./student-reviews-skeleton";

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
          <StudentRatingSkeleton data={rating} />
          {showreviewCard && <StudentReviewsSkeleton />}
        </div>
      </div>
      {/* reviews */}
    </>
  );
};


export default AdvertiserSkeleton