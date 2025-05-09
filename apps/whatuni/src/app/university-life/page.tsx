"use client";
import React from "react";
import Image from "next/image";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Redirectlinkcomponent from "@packages/shared-components/common-utilities/redirect-link/redirectlinkcomponent";
import Ctabanner from "@packages/shared-components/article-details/cta-banner/cta-banner";
import Findoutmore from "@packages/shared-components/article-details/findoutmore/findout-more";
import Pullquote from "@packages/shared-components/article-details/pull-quote/pull-quote";
import Interested from "@packages/shared-components/common-utilities/interested/interested";
import WuscaBadge from "@packages/shared-components/common-utilities/wusca-badge/wusca-badge";
import StudentRating from "@packages/shared-components/common-utilities/student-rating/student-rating";
import StudentReviews from "@packages/shared-components/common-utilities/student-reviews/student-reviews";
import TabSwitchButton from "@packages/shared-components/common-utilities/tab-switch-button/tab-switch-button";
import RedirectionButton from "@packages/shared-components/common-utilities/redirect-button/redirection-button";

import Costoflivingratingcomponents from "@packages/shared-components/institution-profile/costoflivingratingcomponents";
import Advertiser from "@packages/shared-components/common-utilities/advertiser/advertiser";

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
    { title: "Public transport ", value: "4.3", extra: "20th" },
    { title: "Diversity ", value: "4.3", extra: "20th" },
    { title: "Safety", value: "4.3", extra: "20th" },
    { title: "Part time work ", value: "4.3", extra: "20th" },
  ];
  return (
    <>
      <Interested />
      <HeaderBanner />
      <TabSwitchButton />

      {/* Skip links  */}
      <section>
        <div className="max-w-container mx-auto py-0 pb-[40px] lg:py-[40px]">
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div className="min-w-[289px] flex flex-col  relative max-w-[100%]">
              <Redirectlinkcomponent
                data={skiplinkLabel}
                activeLink={"University life"}
              />
            </div>
            <div className="w-full flex flex-col gap-[32px] lg:gap-[40px]">
              {/* page start from here      */}
              <h1 className="h4 px-[16px] md:px-[20px] lg:px-0">
                University life
              </h1>
              <div className="flex flex-col gap-[16px]">
                {/* 360 degress  */}
                <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                  <h2 className="h4">A day in the life</h2>
                  <span className="rounded-[8px] overflow-hidden">
                    <Image
                      src="/static/assets/images/ip/temp-360deg.png"
                      height={567}
                      width={907}
                      alt="temp-360"
                    />
                  </span>
                </div>
                {/* 360 degress  */}

                <Ctabanner
                  title={"See your future with your own eyes"}
                  description={
                    "Visit a university on a free open day and find out if it's the right place for you and your plans."
                  }
                  buttonName={"Book my spot now"}
                  bannerSrc={"/static/assets/images/ip/yellow-cta-banner.png"}
                  bgColor={"bg-orange-200"}
                />
              </div>
              <div className="flex flex-col gap-[16px]">
                {/* advertiser */}
                <Advertiser
                  rating={ratingData}
                  advertiserTitle={"What is [City name] like?"}
                  advertiserDescription={false}
                  showWuscaCard={true}
                  showreviewCard={true}
                  isWuscaBadge={false}
                />
                {/* advertiser */}
                <div className="px-[16px] md:px-[20px] lg:px-0">
                  <p>
                    Middlesex University campus is a short tube ride from
                    central London, offering easy access to world-class
                    cultural, social, and professional opportunities.
                  </p>
                  <p>
                    Students can explore the dynamic neighbourhoods of Camden’s
                    Lock Market and Tottenham for food, drink, and shopping
                    experiences, alongside clubs (including Drumsheds) and
                    premiership sports teams. North London combines the
                    excitement of city life with the tranquillity of suburban
                    living.
                  </p>
                  <p>
                    North London is also a great place to build connections and
                    gain experience for a future career. From Google to Meta,
                    the area is home to national and multinational companies, so
                    students are in the right place to land placements,
                    internships and graduate jobs.
                  </p>
                </div>

                <Findoutmore />
                <Costoflivingratingcomponents />
                <Ctabanner
                  title={"Student Cost of Living Calculator"}
                  description={
                    "From accommodation to groceries, it breaks down uni living costs to help plan your budget with confidence"
                  }
                  buttonName={"Calculate my budget now"}
                  bannerSrc={"/static/assets/images/ip/budget-cta-banner.png"}
                  bgColor={"bg-blue-200"}
                />
              </div>
              <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                <div className="h5">Clubs and societies</div>
                <p>
                  Middlesex University boasts over 85 clubs and societies. From
                  sports to arts and niche hobbies, there’s a group for everyone
                  to join. If students don't see their passion represented, the
                  students’ union can help them to set up their own society,
                  ensuring a vibrant and active student life.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                {/* advertiser */}
                <Advertiser
                  rating={ratingData}
                  advertiserTitle={"How is the student union?"}
                  advertiserDescription={false}
                  showWuscaCard={true}
                  showreviewCard={false}
                  isWuscaBadge={false}
                />
                {/* advertiser */}
                <div className="px-[16px] md:px-[20px] lg:px-0">
                  <p>
                    The Middlesex University Students' Union (MDXSU) is central
                    to student life, representing the interests of the student
                    body, organising events, and providing a platform for voices
                    to be heard.
                  </p>
                  <p>
                    MDXSU ensures the university experience is engaging and
                    supportive, fostering a strong student community.
                  </p>
                </div>
              </div>
              <RedirectionButton btnState={true} />
            </div>
          </div>
        </div>
      </section>
      {/* Skip links END */}
    </>
  );
};

export default page;
