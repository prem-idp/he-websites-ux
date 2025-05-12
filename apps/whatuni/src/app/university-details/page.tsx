"use client";
import React from "react";
import Link from "next/link";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Redirectlinkcomponent from "@packages/shared-components/common-utilities/redirect-link/redirectlinkcomponent";
import TabSwitchButton from "@packages/shared-components/common-utilities/tab-switch-button/tab-switch-button";
import Interested from "@packages/shared-components/common-utilities/interested/interested";
import Opendaysvirtualadvertcomponents from "@packages/shared-components/institution-profile/opendaysvirtualadvertcomponents";
import Ctabanner from "@packages/shared-components/article-details/cta-banner/cta-banner";
import RedirectionButton from "@packages/shared-components/common-utilities/redirect-button/redirection-button";
import Advertiser from "@packages/shared-components/common-utilities/advertiser/advertiser";
import CampusLocation from "@packages/shared-components/common-utilities/campus-location/campus-location";
import PopularSubject from "@packages/shared-components/common-utilities/popular-subject/popular-subject";
import Findoutmore from "@packages/shared-components/article-details/findoutmore/findout-more";
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
    { title: "Facilities rating", value: "4.3", extra: "20th" },
  ];
  const ratingData2 = [
    { title: "Location", value: "4.3", extra: "20th" },
    { title: "Halls", value: "4.3", extra: "20th" },
    { title: "Value", value: "4.3", extra: "20th" },
    { title: "Internet and Wifi", value: "4.3", extra: "20th" },
    { title: "Room allocation", value: "4.3", extra: "20th" },
    { title: "Safety", value: "4.3", extra: "20th" },
  ];
  const ratingData3 = [
    { title: "Campus look and feel", value: "4.3", extra: "20th" },
    { title: "Location ", value: "4.3", extra: "20th" },
  ];
  const ratingData4 = [
    { title: "Courses", value: "4.3", extra: "20th" },
    { title: "Course content", value: "4.3", extra: "20th" },
    { title: "Lecturers and teaching quality", value: "4.3", extra: "20th" },
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
                activeLink={"University details"}
              />
            </div>
            <div className="w-full flex flex-col flex-1 gap-[32px] lg:gap-[40px]">
              {/* page start from here      */}
              <h2 className="h4 px-[16px] md:px-[20px] lg:px-0">
                University details
              </h2>
              {/* advertiser */}
              <Advertiser
                rating={ratingData}
                advertiserTitle={"[University name] facilities"}
                showreviewCard={true}
              />
              {/* advertiser */}
              <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
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
              <Opendaysvirtualadvertcomponents
                istitleVisible={false}
                advertData={advertOpendaysData}
                width={282}
              />

              <div className="flex flex-col gap-[16px]">
                {/* advertiser */}
                <Advertiser
                  rating={ratingData2}
                  advertiserTitle={"[University name] accommodation"}
                  showreviewCard={true}
                />
                {/* advertiser */}
                <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                  <p>
                    Middlesex University is one of the few universities in
                    London which boasts its own on-campus
                    <Link href="#" className="text-primary-400 underline">
                      accommodation
                    </Link>
                    . University-owned halls of residence are a popular choice
                    with first-year students, with rooms starting at £160 per
                    week. Residential support and guidance is available to any
                    student, whether they choose to live in a property owned by
                    the university, shared with other universities, or rent
                    privately.
                  </p>
                </div>
                <Findoutmore />
              </div>
              {/* advertiser */}
              <Advertiser
                rating={ratingData3}
                advertiserTitle={"Where is [University name] located?"}
                showreviewCard={false}
              />
              {/* advertiser */}
              <CampusLocation />
              <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                <div className="text-heading5 font-farro font-bold">
                  What scholarships and funding are available?
                </div>
                <p>
                  Middlesex University offers a variety of scholarships and
                  financial support options, including:
                </p>
                <ul className="list-disc flex flex-col gap-[16px] pl-[20px]">
                  <li>
                    <Link href="#" className="text-primary-400 hover:underline">
                      MDX Student Starter Kit
                    </Link>
                    , providing tech and a grant worth up to £1,000 for new UK
                    undergraduate students joining in September 2024
                  </li>
                  <li>
                    <Link href="#" className="text-primary-400 hover:underline">
                      MDX Excellence Scholarship
                    </Link>
                    , awarding £2,000 per academic year (up to £6,000) to
                    students with outstanding academic potential
                  </li>
                  <li>
                    <Link href="#" className="text-primary-400 hover:underline">
                      Care Leaver and Estranged Student Bursaries
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary-400 hover:underline">
                      Living Costs Fund
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-primary-400 hover:underline">
                      Emergency funds
                    </Link>
                  </li>
                </ul>
                <div className="font-semibold">Learning Materials</div>
                <p>
                  All students receive free personal learning materials,
                  including core textbooks as e-books, free access to Adobe
                  Creative Suite, and free printing for course-related
                  materials.
                </p>
                <p>
                  The laptop loan scheme ensures all students have access to a
                  personal laptop.
                </p>
                <div className="font-semibold">Financial advice</div>
                <p>
                  The student welfare team can provide advice on financial,
                  practical or legal challenges, like advice on debt, housing
                  costs, or students’ rights.
                </p>
              </div>
              <Ctabanner
                title={"Find a scholarship"}
                description={
                  "Find out more about the accommodation and facilities in person at the uni"
                }
                buttonName={"Find a scholarship"}
                bannerSrc={"/static/assets/images/ip/green-cta-banner.png"}
                bgColor={"bg-green-200"}
              />
              {/* advertiser */}
              <Advertiser
                rating={ratingData4}
                advertiserTitle={
                  "Whatuni Student Choice awards lecturer and teacher ratings"
                }
                showreviewCard={false}
              />
              {/* advertiser */}
              <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                <p>
                  Middlesex University boasts close to 145 years of experience
                  in career-driven teaching, ensuring learners graduate with a
                  real advantage when it comes to entering the workplace.
                  Innovative teaching methods and high graduate employment rates
                  prepare students for success in the real world.
                </p>
                <p>
                  In the Teaching Excellence Framework (2023), Middlesex
                  University received an overall Silver rating, which noted the
                  very high quality of student outcomes.
                </p>
                <p>
                  Course content and curricula are constantly reviewed in line
                  with modern industry standards, ensuring students receive an
                  up-to-the-minute and well-rounded education that will hold its
                  value for years to come. All courses at Middlesex University
                  are designed with extensive input from industry experts,
                  providing all the essential knowledge and skills needed for
                  students to embark on successful careers after graduation.
                </p>
                <p>
                  Students learn from experts and professionals, and practise
                  their knowledge in the real world from the start of their
                  course – whether by tackling briefs set by creative agencies
                  to visiting the offices of top finance companies. An extensive
                  range of work placement opportunities and the provision of
                  world-class equipment and facilities further ensure the
                  employability of Middlesex University’s graduates.
                </p>
              </div>
              <Ctabanner
                title={"Get prospectus"}
                description={
                  "Interested? Order a prospectus to find out more about the uni and the courses on offer."
                }
                buttonName={"Get prospectus"}
                bannerSrc={"/static/assets/images/ip/grey-cta-banner.png"}
                bgColor={"bg-grey-200"}
              />
              <PopularSubject uniTitle="" subjectTitle="Popular subjects" />
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
