import React from "react";
import Resultcard from "@packages/shared-components/user-profile/activity/result-card/resultcard";

const resultMockData = [1, 2, 3, 4, 5].map(() => ({
  heading: "Enquired ON",
  date: "29 JUL 2024",
  university: "University of Bristol",
  description:
    "Hello, I read about the Nutrition and Exercise as Medicine with Foundation Year BSc (Hons) offered by University of Salford on Whatuni.com and would like to request more information about the course. Hello, I read about the Nutrition and Exercise as Medicine with Foundation Year BSc (Hons) offered by University of Salford on Whatuni.com and would like to reques",
  showHighlight: true,
  hasHearIcon: true,
  textLink: "University Info",
}));

const EnquiryPage = () => {
  return (
    <>
      <div className="h5 mb-[16px]">Enquiries</div>
      <Resultcard data={resultMockData} />
    </>
  );
};

export default EnquiryPage;
