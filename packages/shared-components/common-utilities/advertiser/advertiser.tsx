import React from "react";
import WuscaBadge from "@packages/shared-components/common-utilities/wusca-badge/wusca-badge";
import StudentRating from "@packages/shared-components/common-utilities/student-rating/student-rating";
import StudentReviews from "@packages/shared-components/common-utilities/student-reviews/student-reviews";

const Advertiser = ({
  advertiserTitle,
  advertiserDescription,
  showWuscaCard = false,
  showreviewCard,
  showTitle = true,
}: any) => {
  return (
    <>
      {/* reviews */}
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <div className="text-heading5 font-farro font-bold">
            {advertiserTitle}
          </div>
          {advertiserDescription && <p> {advertiserDescription} </p>}
        </div>
        <div className="border border-grey-200 bg-grey-50 rounded-[8px] overflow-hidden">
          <WuscaBadge wuscaCard={showWuscaCard} />
          <StudentRating />
          {showreviewCard && <StudentReviews />}
        </div>
      </div>
      {/* reviews */}
    </>
  );
};

export default Advertiser;
