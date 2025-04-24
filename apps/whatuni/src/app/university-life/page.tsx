"use client";
import React from "react";
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
  return (
    <>
      <Interested />
      <HeaderBanner />
      <TabSwitchButton />

      {/* Skip links  */}
      <section>
        <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0] py-[40px]">
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div className="min-w-[289px] flex flex-col  relative max-w-[100%]">
              <Redirectlinkcomponent
                data={skiplinkLabel}
                activeLink={"University life"}
              />
            </div>
            <div className="w-full flex flex-col gap-[40px]">
              {/* page start from here      */}
              <div className="h1">univesity life</div>

              <Ctabanner
                title={"See your future with your own eyes"}
                description={
                  "Visit a university on a free open day and find out if it's the right place for you and your plans."
                }
                buttonName={"Book my spot now"}
                bannerSrc={"/static/assets/images/ip/yellow-cta-banner.png"}
                bgColor={"bg-orange-200"}
              />

              {/* reviews */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col gap-[8px]">
                  <div className="text-heading5 font-farro font-bold">
                    Is [University name] a good place to study?
                  </div>
                  <p>Read honest reviews from real students at this uni</p>
                </div>
                <div className="border border-grey-200 bg-grey-50 rounded-[8px] overflow-hidden">
                  <WuscaBadge />
                  <StudentRating />
                  <StudentReviews />
                </div>
              </div>
              {/* reviews */}
              <div>
                <p>
                  Middlesex University campus is a short tube ride from central
                  London, offering easy access to world-class cultural, social,
                  and professional opportunities.
                </p>
                <p>
                  Students can explore the dynamic neighbourhoods of Camden’s
                  Lock Market and Tottenham for food, drink, and shopping
                  experiences, alongside clubs (including Drumsheds) and
                  premiership sports teams. North London combines the excitement
                  of city life with the tranquillity of suburban living.
                </p>
                <p>
                  North London is also a great place to build connections and
                  gain experience for a future career. From Google to Meta, the
                  area is home to national and multinational companies, so
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

              <div>
                <div className="h5">Clubs and societies</div>
                <p>
                  Middlesex University boasts over 85 clubs and societies. From
                  sports to arts and niche hobbies, there’s a group for everyone
                  to join. If students don't see their passion represented, the
                  students’ union can help them to set up their own society,
                  ensuring a vibrant and active student life.
                </p>
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
