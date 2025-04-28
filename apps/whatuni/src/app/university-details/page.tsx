"use client";
import React from "react";
import Image from "next/image";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Redirectlinkcomponent from "@packages/shared-components/common-utilities/redirect-link/redirectlinkcomponent";
import TabSwitchButton from "@packages/shared-components/common-utilities/tab-switch-button/tab-switch-button";
import Interested from "@packages/shared-components/common-utilities/interested/interested";
import Opendaysvirtualadvertcomponents from "@packages/shared-components/institution-profile/opendaysvirtualadvertcomponents";
import Ctabanner from "@packages/shared-components/article-details/cta-banner/cta-banner";
import RedirectionButton from "@packages/shared-components/common-utilities/redirect-button/redirection-button";
import PopularSubjectSlider from "@packages/shared-components/common-utilities/popular-subject-slider/popular-subject-slider";
import Advertiser from "@packages/shared-components/common-utilities/advertiser/advertiser";
import CampusLocation from "@packages/shared-components/common-utilities/campus-location/campus-location";

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
    { title: "Overall rating", value: "4.2", extra: "20th" },
    { title: "Courses", value: "3.3", extra: "20th" },
    { title: "Halls", value: "4.5", extra: "20th" },
    { title: "City life", value: "4.1", extra: "20th" },
  ];
  return (
    <>
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
                activeLink={"University details"}
              />
            </div>
            <div className="w-full flex flex-col flex-1 gap-[40px]">
              {/* page start from here      */}
              <h1 className="h4">Univesity details</h1>
              {/* advertiser */}
              <Advertiser
                rating={ratingData}
                advertiserTitle={"[University name] facilities"}
              />
              {/* advertiser */}
              <div className="flex flex-col gap-[16px]">
                <p>
                  The university’s Hendon campus is leafy, sustainable, and
                  safe, but still holds the buzz of a London university.
                </p>
                <p>
                  In recent years, Middlesex University has invested over £200
                  million into its world-class facilities, equipment, and study
                  resources, including:
                </p>
                <ul className="list-disc flex flex-col gap-[16px] pl-[20px]">
                  <li>£23m health, sport, and science facility, built in</li>
                  <li>
                    collaboration with Saracens Rugby Club Augmented-reality
                  </li>
                  <li>teaching equipment for nursing and midwifery students</li>
                  <li>Animation motion-capture suite Financial markets lab</li>
                  <li>
                    Specialist chambers and courtroom in Hendon Town Hall The
                  </li>
                  <li>
                    Grove, an £80m industry-standard creative facility,
                    including
                  </li>
                  <li>3D workshops and TV studios</li>
                </ul>
                <p>
                  Students also enjoy a full range of unique and inspirational
                  spaces for study and socialising, including the impressive
                  Sheppard Library, open 24/7.
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <p>
                  The university’s Hendon campus is leafy, sustainable, and
                  safe, but still holds the buzz of a London university.
                </p>
                <p>
                  In recent years, Middlesex University has invested over £200
                  million into its world-class facilities, equipment, and study
                  resources, including:
                </p>
                <ul className="list-disc flex flex-col gap-[16px] pl-[20px]">
                  <li>£23m health, sport, and science facility, built in</li>
                  <li>
                    collaboration with Saracens Rugby Club Augmented-reality
                  </li>
                  <li>teaching equipment for nursing and midwifery students</li>
                  <li>Animation motion-capture suite Financial markets lab</li>
                  <li>
                    Specialist chambers and courtroom in Hendon Town Hall The
                  </li>
                  <li>
                    Grove, an £80m industry-standard creative facility,
                    including
                  </li>
                  <li>3D workshops and TV studios</li>
                </ul>
                <p>
                  Students also enjoy a full range of unique and inspirational
                  spaces for study and socialising, including the impressive
                  Sheppard Library, open 24/7.
                </p>
              </div>
              <Opendaysvirtualadvertcomponents istitleVisible={false} />
              <CampusLocation />
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
              <PopularSubjectSlider />
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
