import React from "react";
import ResultDetails from "@packages/shared-components/user-profile/activity/result-details/resultdetails";

const resultMockData = [1, 2, 3, 4, 5].map(() => ({
  heading: "cost of living",
  date: "",
  university: "Student cost of living calculator results 1",
  description: "11th September 2024",
  showHighlight: false,
  hasHearIcon: false,
  textLink: "View results",
}));

const CostOfLivingPage = () => {
  return (
    <>
      <ResultDetails
        pageTitle={"Cost of living calculator"}
        resultDataInfo={resultMockData}
      />
    </>
  );
};

export default CostOfLivingPage;
