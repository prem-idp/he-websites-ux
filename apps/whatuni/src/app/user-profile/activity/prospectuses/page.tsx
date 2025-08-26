import React from "react";
import Resultcard from "@packages/shared-components/user-profile/activity/result-card/resultcard";

const resultMockData = [1, 2, 3, 4, 5].map((i) => ({
  heading: "ORDERED ON",
  date: "29 JUL 2024",
  university: "University of Bristol",
  description: "Undergraduate prospectus",
  hasHearIcon: true,
  textLink: "University Info",
  activeHeart: i == 2 ? true : false,
}));

const ProspectusesPage = () => {
  return (
    <>
      <div className="h5 mb-[16px]">Prospectuses</div>
      <Resultcard data={resultMockData} />
    </>
  );
};

export default ProspectusesPage;
