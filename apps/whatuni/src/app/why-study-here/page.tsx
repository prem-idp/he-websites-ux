"use client";
import React from "react";
import Image from "next/image";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Redirectlinkcomponent from "@packages/shared-components/common-utilities/redirect-link/redirectlinkcomponent";
import Findoutmore from "@packages/shared-components/article-details/findoutmore/findout-more";
import Pullquote from "@packages/shared-components/article-details/pull-quote/pull-quote";
import Interested from "@packages/shared-components/common-utilities/interested/interested";
import StudentRating from "@packages/shared-components/common-utilities/student-rating/student-rating";
import Advertiser from "@packages/shared-components/common-utilities/advertiser/advertiser";
import TabSwitchButton from "@packages/shared-components/common-utilities/tab-switch-button/tab-switch-button";
import RedirectionButton from "@packages/shared-components/common-utilities/redirect-button/redirection-button";
import Keystatscomponents from "@packages/shared-components/institution-profile/keystatscomponents";
import Reviewthumbgalleryslidercomponents from "@packages/shared-components/common-utilities/slider/reviewthumbgalleryslidercomponents";
import PopularSubject from "@packages/shared-components/common-utilities/popular-subject/popular-subject";
import Costoflivingratingcomponents from "@packages/shared-components/institution-profile/costoflivingratingcomponents";
import Opendaysvirtualadvertcomponents from "@packages/shared-components/institution-profile/opendaysvirtualadvertcomponents";
import keyStatsIcon1 from "../../../../../apps/whatuni/public/static/assets/icons/keystats_icon1.svg";
import keyStatsIcon2 from "../../../../../apps/whatuni/public/static/assets/icons/keystats_icon2.svg";
import keyStatsIcon3 from "../../../../../apps/whatuni/public/static/assets/icons/keystats_icon3.svg";
import ClearingPopup from "@packages/shared-components/common-utilities/popups/clearing";

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
  const keyStatsData = [
    {
      icon: keyStatsIcon1,
      label: "Ranking",
      value: "10th",
      description: "Complete University Guide",
    },
    {
      icon: keyStatsIcon2,
      label: "Student Population",
      value: "16,145",
      description: "Undergraduate students",
    },
    {
      icon: keyStatsIcon3,
      label: "Student Outcomes",
      value: "68%",
      description: "In job or further study",
    },
  ];

  return (
    <>
      {/* <ClearingPopup/> */}
      <Interested />
      <HeaderBanner />
      <TabSwitchButton />
      {/* Skip links  */}
      <section>
        <div className="max-w-container mx-auto px-[16px] md:px-[20px] xl:px-[0] py-[40px]">
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div className="min-w-[289px] flex flex-col  relative max-w-[100%]">
              <Redirectlinkcomponent
                data={skiplinkLabel}
                activeLink={"Why study here?"}
              />
            </div>
            <div className="w-full flex flex-col flex-1 gap-[40px]">
              {/* page start from here */}
              <h1>Why study here</h1>
              <Opendaysvirtualadvertcomponents title="Open days and virtual visits" />
              {/* advertiser */}
              <Advertiser
                advertiserTitle={" Is [University name] a good place to study?"}
                advertiserDescription={
                  "Read honest reviews from real students at this uni"
                }
                showWuscaCard={true}
              />
              {/* advertiser */}
              <div className="border border-grey-200 bg-grey-50 rounded-[8px] overflow-hidden">
                <StudentRating />
              </div>
              {/* <Keystatscomponents /> */}
              <Reviewthumbgalleryslidercomponents />
              <Keystatscomponents keyStatsData={keyStatsData} />
              <Costoflivingratingcomponents />
              {/* <Reviewthumbgalleryslidercomponents /> */}
              <Findoutmore />

              <div className="border border-grey-200 bg-grey-50 rounded-[8px] overflow-hidden">
                <StudentRating />
              </div>
            
              <Pullquote />

              <div className="flex flex-col gap-[16px]">
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
              <PopularSubject />
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
