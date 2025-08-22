import React from "react";
import ResultDetails from "@packages/shared-components/user-profile/activity/result-details/resultdetails";

const resultMockData = [1, 2, 3, 4, 5].map(() => ({
  heading: "BOOKED ON",
  date: "29 JUL 2024",
  university: "University of Bristol",
  description: "Open day 11th September 2024",
  showHighlight: false,
  hasHearIcon: true,
  textLink: "University Info",
}));

const ProspectusesPage = () => {
  return (
    <>
      <ResultDetails
        pageTitle={"Prospectuses"}
        resultDataInfo={resultMockData}
      />
    </>
  );
};

export default ProspectusesPage;
