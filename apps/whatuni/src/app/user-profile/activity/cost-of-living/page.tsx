import React from "react";
import Resultcard from "@packages/shared-components/user-profile/activity/result-card/resultcard";

const resultMockData = [1, 2, 3, 4, 5].map(() => ({
  heading: "cost of living",
  date: "",
  university: "Student cost of living calculator results 1",
  description: "11th September 2024",
  textLink: "View results",
}));

const CostOfLivingPage = () => {
  return (
    <>
      <div className="h5 mb-[16px]">Cost of living calculator</div>
      <Resultcard data={resultMockData} />
    </>
  );
};

export default CostOfLivingPage;
