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
import Keystatscomponents from "@packages/shared-components/institution-profile/keystatscomponents";
import Reviewthumbgalleryslidercomponents from "@packages/shared-components/common-utilities/slider/reviewthumbgalleryslidercomponents";
import PopularSubjectSlider from "@packages/shared-components/common-utilities/popular-subject-slider/popular-subject-slider";
import Costoflivingratingcomponents from "@packages/shared-components/institution-profile/costoflivingratingcomponents";
import Opendaysvirtualadvertcomponents from "@packages/shared-components/institution-profile/opendaysvirtualadvertcomponents";

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
                activeLink={"Why study here?"}
              />
            </div>
            <div className="w-full flex flex-col flex-1 gap-[40px]">
              {/* page start from here */}
              <h1>Why study here</h1>

              <Opendaysvirtualadvertcomponents />
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

              <Ctabanner
                title={"Student Cost of Living Calculator"}
                description={
                  "From accommodation to groceries, it breaks down uni living costs to help plan your budget with confidence"
                }
                buttonName={"Calculate my budget now"}
                bannerSrc={"/static/assets/images/ip/budget-cta-banner.png"}
                bgColor={"bg-blue-200"}
              />
              <Ctabanner
                title={"Get prospectus"}
                description={
                  "Interested? Order a prospectus to find out more about the uni and the courses on offer."
                }
                buttonName={"Get prospectus"}
                bannerSrc={"/static/assets/images/ip/grey-cta-banner.png"}
                bgColor={"bg-grey-200"}
              />
              <Ctabanner
                title={"Find a scholarship"}
                description={
                  "Find out more about the accommodation and facilities in person at the uni"
                }
                buttonName={"Find a scholarship"}
                bannerSrc={"/static/assets/images/ip/green-cta-banner.png"}
                bgColor={"bg-green-200"}
              />
              <div className="border border-grey-200 bg-grey-50 rounded-[8px] overflow-hidden">
                  <StudentRating />
              </div>
              <Ctabanner
                title={"See your future with your own eyes"}
                description={
                  "Visit a university on a free open day and find out if it's the right place for you and your plans."
                }
                buttonName={"Book my spot now"}
                bannerSrc={"/static/assets/images/ip/yellow-cta-banner.png"}
                bgColor={"bg-orange-200"}
              />

              {/* <Keystatscomponents /> */}
              <Reviewthumbgalleryslidercomponents />
              <Keystatscomponents />
              <Costoflivingratingcomponents />
              {/* <Reviewthumbgalleryslidercomponents /> */}
              <Findoutmore />

              <div className="border border-grey-200 bg-grey-50 rounded-[8px] overflow-hidden">
                  <StudentRating />
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="para-lg font-semibold">Campus location</div>
                <Image src="/static/assets/images/campus-location.jpg" width="907" height="283" alt="campus-location"/>
              </div>

              <Pullquote />

              <div className="flex flex-col">
                <p className="mb-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <p className="mb-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <p className="mb-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <p className="mb-[14px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="text-heading5 font-bold font-farro">Courses at Portsmouth University</div>
                <div className="text-para-lg font-semibold">Popular subjects</div>
                <PopularSubjectSlider />
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
