"use client";
import React from "react";
import Image from "next/image";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Redirectlinkcomponent from "@packages/shared-components/common-utilities/redirect-link/redirectlinkcomponent";
import Interested from "@packages/shared-components/common-utilities/interested/interested";
import StudentRating from "@packages/shared-components/common-utilities/student-rating/student-rating";
import Advertiser from "@packages/shared-components/common-utilities/advertiser/advertiser";
import TabSwitchButton from "@packages/shared-components/common-utilities/tab-switch-button/tab-switch-button";
import RedirectionButton from "@packages/shared-components/common-utilities/redirect-button/redirection-button";
import Keystatscomponents from "@packages/shared-components/institution-profile/keystatscomponents";
import Reviewthumbgalleryslidercomponents from "@packages/shared-components/common-utilities/slider/reviewthumbgalleryslidercomponents";
import PopularSubject from "@packages/shared-components/common-utilities/popular-subject/popular-subject";
import Opendaysvirtualadvertcomponents from "@packages/shared-components/institution-profile/opendaysvirtualadvertcomponents";
import Ctabanner from "@packages/shared-components/article-details/cta-banner/cta-banner";
import { advertOpendaysData } from "@packages/constants/constants";

const page = () => {
  const skiplinkLabel = [
    {
      key: 1,
      pageName: "Why study here?",
      pageURL: "/why-study-here?",
    },
    {
      key: 2,
      pageName: "University details",
      pageURL: "/university-details",
    },
    {
      key: 3,
      pageName: "University life",
      pageURL: "/university-life",
    },
    {
      key: 4,
      pageName: "Outcomes",
      pageURL: "/outcomes",
    },
  ];
  const ratingData = [
    { title: "Overall rating", value: "4.2", extra: "20th" },
    { title: "Courses", value: "3.3", extra: "20th" },
    { title: "Halls", value: "4.5", extra: "20th" },
    { title: "City life", value: "4.1", extra: "20th" },
  ];

  return (
    <>
      {/* <ClearingPopup/> */}
      <Interested />
      <HeaderBanner />
      <TabSwitchButton />
      {/* Skip links  */}
      <section>
        <div className="max-w-container mx-auto py-0 pb-[32px] lg:py-[40px]">
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div className="min-w-[289px] flex flex-col relative max-w-[100%]">
              <Redirectlinkcomponent
                data={skiplinkLabel}
                activeLink={"Why study here?"}
              />
            </div>
            <div className="w-full flex flex-col flex-1 gap-[32px] lg:gap-[40px]">
              {/* page start from here */}
              <h1 className="h4 px-[16px] md:px-[20px] lg:px-0">
                Why study here?
              </h1>
              <Opendaysvirtualadvertcomponents
                title="Open days and virtual visits"
                advertData={advertOpendaysData}
                width={282}
              />
              {/* advertiser */}
              <Advertiser
                rating={ratingData}
                advertiserTitle={" Is [University name] a good place to study?"}
                advertiserDescription={
                  "Read honest reviews from real students at this uni"
                }
                showWuscaCard={true}
                showreviewCard={true}
                isWuscaBadge={true}
              />
              {/* advertiser */}
              <Reviewthumbgalleryslidercomponents />
              <Keystatscomponents keyStatsInnerData={true} />
              <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                <div className="text-heading5 font-farro font-bold">
                  Overview
                </div>
                <p>
                  Located in vibrant North London, Middlesex University is home
                  to over 14,500 students who study a comprehensive range of
                  undergraduate and postgraduate degrees, as well as short
                  courses and degree apprenticeships, across 13 subject areas.
                </p>
                <p>
                  Middlesex University caters to every individual and encourages
                  diversity. Faculty and support staff are on hand to facilitate
                  and support every single student in achieving their unique
                  ambitions and kickstarting their future, whether their dreams
                  be creative, purpose-driven, or entrepreneurial.
                </p>
                <div className="font-semibold">
                  10 Reasons to choose Middlesex University
                </div>
                <ul className="list-disc flex flex-col gap-[16px] pl-[20px]">
                  <li>
                    World-class courses: Specialist, practical courses designed
                    with input from industry experts.
                  </li>
                  <li>
                    Extensive industry links: Collaborations with over 1,000
                    industry and employer partners, including Google, Apple,
                    Amazon, and the NHS.
                  </li>
                  <li>
                    Prime North London location: The campus offers easy access
                    to all the social and professional opportunities of central
                    London.
                  </li>
                  <li>
                    World-class facilities: £200 million has been invested in
                    state-of-the-art facilities, including high-tech labs and
                    creative studios, ensuring access to the best resources
                  </li>
                  <li>
                    Funding and financial aid: Numerous scholarships and
                    financial support options available.
                  </li>
                  <li>
                    Comprehensive student support: Wide-ranging support services
                    include mental health resources, financial advice, and
                    award-winning academic support.
                  </li>
                  <li>
                    Award-winning employability service: Comprehensive career
                    support includes internships, part-time jobs, and
                    postgraduate employment opportunities.
                  </li>
                  <li>
                    Diverse and inclusive community: The university is
                    recognised for its commitment to equality, diversity, and
                    inclusion and was named 'University of the Year' at the
                    Queer Student Awards (2023).
                  </li>
                  <li>
                    Flexible learning options: Part-time and online learning
                    modes available.
                  </li>
                </ul>
              </div>
              <PopularSubject
                uniTitle="Courses at Portsmouth University"
                subjectTitle="Popular subjects"
              />
              <RedirectionButton />
            </div>
          </div>
        </div>
      </section>
      {/* Skip links END */}
    </>
  );
};

export default page;
