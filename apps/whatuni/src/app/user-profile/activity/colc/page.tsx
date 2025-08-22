import React from "react";
import Enquiries from "@/app/user-profile/activity/component/result-details/result-details";

const page = () => {
  const colcEnquiries = [
    {
      date: "cost of living",
      university: "Student cost of living calculator results 1",
      description: "11th September 2024",
      hasUniversityInfo: false,
      hasHearIcon: false,
      hasOpenDay: false,
    },
    {
      date: "cost of living",
      university: "Student cost of living calculator results 2",
      description: "11th September 2024",
      hasUniversityInfo: false,
      hasHearIcon: false,
      hasOpenDay: false,
    },
    {
      date: "cost of living",
      university: "Student cost of living calculator results 3",
      description: "11th September 2024",
      hasUniversityInfo: false,
      hasHearIcon: false,
      hasOpenDay: false,
    },
    {
      date: "cost of living",
      university: "Student cost of living calculator results 4",
      description: "11th September 2024",
      hasUniversityInfo: false,
      hasHearIcon: false,
      hasOpenDay: false,
    },
    {
      date: "cost of living",
      university: "Student cost of living calculator results 5",
      description: "11th September 2024",
      hasUniversityInfo: false,
      hasHearIcon: false,
      hasOpenDay: false,
      textLink: "View results",
    },
  ];

  return (
    <>
      <Enquiries
        titles={"Cost of living calculator"}
        enquiries={colcEnquiries}
      />
    </>
  );
};

export default page;
