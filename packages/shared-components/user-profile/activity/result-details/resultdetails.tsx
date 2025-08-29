import React from "react";
import Resultcard from "../result-card/resultcard";

interface ResultItem {
  heading: string;
  date: string;
  university: string;
  hasHearIcon: boolean;
  description: string;
  textLink?: string;
}

interface ResultProps {
  pageTitle: string;
  resultDataInfo: ResultItem[];
}

const ResultDetails = ({ pageTitle, resultDataInfo }: ResultProps) => {
  return (
    <>
      <div className="h5 mb-[16px]">{pageTitle}</div>
      <Resultcard data={resultDataInfo} />
    </>
  );
};

export default ResultDetails;
