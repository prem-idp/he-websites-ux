"use client";
import React from "react";
import Image from "next/image";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Redirectlinkcomponent from "@packages/shared-components/common-utilities/redirect-link/redirectlinkcomponent";
import Interested from "@packages/shared-components/common-utilities/interested/interested";
import TabSwitchButton from "@packages/shared-components/common-utilities/tab-switch-button/tab-switch-button";
import RedirectionButton from "@packages/shared-components/common-utilities/redirect-button/redirection-button";
import Keystatscomponents from "@packages/shared-components/institution-profile/keystatscomponents";
import WuscaBadge from "@packages/shared-components/common-utilities/wusca-badge/wusca-badge";
import StudentRating from "@packages/shared-components/common-utilities/student-rating/student-rating";
import StudentReviews from "@packages/shared-components/common-utilities/student-reviews/student-reviews";
import Advertiser from "@packages/shared-components/common-utilities/advertiser/advertiser";
import keyStatsIcon1 from "../../../../../apps/whatuni/public/static/assets/icons/keystats_icon1.svg";
import keyStatsIcon2 from "../../../../../apps/whatuni/public/static/assets/icons/keystats_icon2.svg";
import keyStatsIcon3 from "../../../../../apps/whatuni/public/static/assets/icons/keystats_icon3.svg";
import KeyStatsCard from "@packages/shared-components/institution-profile/keystatscard";

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
    { title: "Career prospects ", value: "4.3", extra: "20th" },
    { title: "Work placements and internships", value: "4.3", extra: "20th" },
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
  ];
  return (
    <>
      <Interested />
      <HeaderBanner />
      <TabSwitchButton />

      {/* Skip links  */}
      <section>
        <div className="max-w-container mx-auto pt-0 pb-[40px] lg:py-[40px]">
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div className="min-w-[289px] flex flex-col  relative max-w-[100%]">
              <Redirectlinkcomponent
                data={skiplinkLabel}
                activeLink={"Outcomes"}
              />
            </div>
            <div className="w-full flex flex-col gap-[32px] lg:gap-[40px]">
              {/* page start from here      */}
              <h2 className="h4 px-[16px] md:px-[20px] lg:px-0">Outcomes</h2>
              <div className="flex flex-col gap-[16px]">
                {/* advertiser */}
                <Advertiser
                  rating={ratingData}
                  advertiserTitle={"Career prospects"}
                  advertiserDescription={""}
                  showWuscaCard={true}
                  showreviewCard={false}
                  isWuscaBadge={false}
                />
                {/* advertiser */}
                <div className="px-[16px] md:px-[20px] lg:px-0">
                  <KeyStatsCard keyStatsData={keyStatsData} />
                </div>
                <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                  <p>
                    Middlesex University has a strong track record of graduate
                    employability, and all courses are designed to equip
                    students with the skills that employers value.
                  </p>
                  <div className="font-semibold">Practical courses</div>
                  <p>
                    The university’s practical learning approach ensures
                    students graduate ready to step into the job market with
                    confidence.
                  </p>
                  <div className="font-semibold">Lifetime career support</div>
                  <p>
                    Lifetime career services support students and graduates
                    every step of the way, from internships to full-time
                    employment and beyond. Students can access support 24/7
                    through an online platform, or can make an appointment for
                    bespoke one-to-one careers advice.
                  </p>
                  <div className="font-semibold">
                    Global industry connections
                  </div>
                  <p>
                    The university works with its extensive network of industry
                    connections to organise international work placements and
                    study trips, as well as gather an impressive selection of
                    international academics and visiting industry speakers from
                    around the world into the classroom.
                  </p>
                  <p>
                    Many courses include global opportunities. For example,
                    business and law students are able to transfer between
                    international campuses. Meanwhile, creative students have
                    the chance to take part in France’s renowned journalism and
                    documentary filmmaking festival.
                  </p>
                  <p>
                    Industry partners include Google, Apple, Amazon, and the
                    NHS.
                  </p>
                  <div className="font-semibold">
                    Industry accredited courses
                  </div>
                  Middlesex University’s undergraduate courses are accredited by
                  a range of leading bodies, including CIPD, NMC and iED. These
                  accreditations prove to employers that students’ knowledge is
                  up-to-date and valuable, and make the university’s graduates a
                  popular choice across industry.
                </div>
              </div>

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
