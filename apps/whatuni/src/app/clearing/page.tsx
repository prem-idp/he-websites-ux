"use client";
import React from "react";
import Image from "next/image";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Redirectlinkcomponent from "@packages/shared-components/common-utilities/redirect-link/redirectlinkcomponent";
import Interested from "@packages/shared-components/common-utilities/interested/interested";
import TabSwitchButton from "@packages/shared-components/common-utilities/tab-switch-button/tab-switch-button";
import Reviewthumbgalleryslidercomponents from "@packages/shared-components/common-utilities/slider/reviewthumbgalleryslidercomponents";
import Keystatscomponents from "@packages/shared-components/institution-profile/keystatscomponents";
import MessageCard from "@packages/shared-components/institution-profile/messagecard";
import Advertiser from "@packages/shared-components/common-utilities/advertiser/advertiser";
import keyStatsIcon1 from "../../../../../apps/whatuni/public/static/assets/icons/keystats_icon1.svg";
import keyStatsIcon2 from "../../../../../apps/whatuni/public/static/assets/icons/keystats_icon2.svg";
import keyStatsIcon3 from "../../../../../apps/whatuni/public/static/assets/icons/keystats_icon3.svg";
import CampusLocation from "@packages/shared-components/common-utilities/campus-location/campus-location";
import Opendaysvirtualadvertcomponents from "@packages/shared-components/institution-profile/opendaysvirtualadvertcomponents";
import { advertVirtualsData } from "@packages/constants/constants";

const page = () => {
  const skiplinkLabel = [
    {
      key: 1,
      pageName: "Virtual visits",
      pageURL: "#tabcontent1",
    },
    {
      key: 2,
      pageName: "What do students think?",
      pageURL: "#tabcontent2",
    },
    {
      key: 3,
      pageName: "Key stats",
      pageURL: "#tabcontent3",
    },
    {
      key: 4,
      pageName: "Clearing USPs",
      pageURL: "#tabcontent4",
    },
    {
      key: 5,
      pageName: "Overview",
      pageURL: "#tabcontent5",
    },
    {
      key: 6,
      pageName: "Our Clearing guide",
      pageURL: "#tabcontent6",
    },
    {
      key: 7,
      pageName: "What happens next?",
      pageURL: "#tabcontent7",
    },
    {
      key: 8,
      pageName: "A day in the life",
      pageURL: "#tabcontent8",
    },
    {
      key: 9,
      pageName: "Campus",
      pageURL: "#tabcontent9",
    },
  ];
  const ratingData = [
    { title: "Overall rating", value: "4.2", extra: "20th" },
    { title: "Courses", value: "3.3", extra: "20th" },
    { title: "Halls", value: "4.5", extra: "20th" },
    { title: "City life", value: "4.1", extra: "20th" },
  ];
  const ratingData1 = [
    { title: "Campus look and feel", value: "4.2", extra: "20th" },
    { title: "Location ", value: "3.3", extra: "20th" },
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
      <Interested />
      <HeaderBanner />
      <TabSwitchButton />
      {/* Skip links  */}
      <section>
        <div className="max-w-container mx-auto py-0 pb-[32px] lg:py-[40px]">
          <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[20px]">
            <div className="min-w-[289px] flex flex-col  relative max-w-[100%]">
              <Redirectlinkcomponent
                data={skiplinkLabel}
                activeLink={"Virtual visits"}
              />
            </div>
            <div className="w-full flex flex-col gap-[32px] lg:gap-[40px]">
              {/* page start from here */}
              {/* <h2 className="h5 md:text-heading5 px-[16px] md:px-[20px] lg:px-0">
                Virtual visits
              </h2> */}
              <div id="tabcontent1">
                <Opendaysvirtualadvertcomponents
                  title="Virtual visits"
                  advertData={advertVirtualsData}
                  width={282}
                />
              </div>
              <div id="tabcontent2">
                {/* advertiser */}
                <Advertiser
                  rating={ratingData}
                  advertiserTitle={
                    "Why students choose [Provider name] in Clearing"
                  }
                  advertiserDescription={
                    "Read honest reviews from real students at this uni"
                  }
                  showWuscaCard={true}
                  showreviewCard={true}
                  isWuscaBadge={false}
                />
                {/* advertiser */}
              </div>
              <div id="tabcontent3">
                <Reviewthumbgalleryslidercomponents />
              </div>
              <div id="tabcontent4">
                <Keystatscomponents
                  keyStatsInnerData={true}
                  keyStatsData={keyStatsData}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] md:gap-[20px] px-[16px] md:px-[20px] lg:px-0">
                <div className="flex items-center gap-[4px] p-[16px] bg-grey-50 border border-grey-200 rounded-[8px] small font-semibold">
                  <Image src="/static/assets/icons/green_tick_icon.svg" width={24} height={24} alt="Green Tick Icon" />
                  Scholarships available</div>
                <div className="flex items-center gap-[4px] p-[16px] bg-grey-50 border border-grey-200 rounded-[8px] small font-semibold">
                  <Image src="/static/assets/icons/red-delete-icon.svg" width={24} height={24} alt="Green Tick Icon" />
                  Accommodation available</div>
              </div>
              <div
                id="tabcontent5"
                className="flex flex-col gap-[32px] lg:gap-[40px]"
              >
                <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                  <div className="h5 md:text-heading5">
                    [Provider Name] Clearing overview
                  </div>
                  <p>
                    Located in vibrant North London, Middlesex University is
                    home to over 14,500 students who study a comprehensive range
                    of undergraduate and postgraduate degrees, as well as short
                    courses and degree apprenticeships, across 13 subject areas.
                  </p>
                  <p>
                    Middlesex University caters to every individual and
                    encourages diversity. Faculty and support staff are on hand
                    to facilitate and support every single student in achieving
                    their unique ambitions and kickstarting their future,
                    whether their dreams be creative, purpose-driven, or
                    entrepreneurial.
                  </p>
                  <div className="para font-semibold">
                    10 Reasons to choose [Provider Name] in Clearing
                  </div>
                  <ul className="list-disc flex flex-col gap-[16px] pl-[20px]">
                    <li>
                      World-class courses: Specialist, practical courses
                      designed with input from industry experts.
                    </li>
                    <li>
                      Extensive industry links: Collaborations with over 1,000
                      industry and employer partners, including Google, Apple,
                      Amazon, and the NHS.
                    </li>
                    <li>
                      Prime North London location: The campus offers easy access
                      to all the social and professional opportunities of
                      central London.
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
                      Comprehensive student support: Wide-ranging support
                      services include mental health resources, financial
                      advice, and award-winning academic support.
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
                <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                  <div className="h5 md:text-heading5">
                    Clearing fundamentals
                  </div>
                  <MessageCard
                    title={"Stay calm:"}
                    description={
                      "Don't rush your decision. Take this opportunity to find a place to study that's right for you. Get help from the people around you."
                    }
                  />
                  <MessageCard
                    title={"Do your research: "}
                    description={
                      "Think about where you want to study, the benefits of each institution, and how well each course will prepare you for your future career."
                    }
                  />
                  <MessageCard
                    title={"Be patient: "}
                    description={
                      "You should only add a Clearing choice on UCAS once you have spoken to the university and they have asked you to apply."
                    }
                  />
                </div>
              </div>
              <div
                id="tabcontent6"
                className="flex flex-col gap-[32px] lg:gap-[40px]"
              >
                <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                  <div className="h5 md:text-heading5">
                    [Provider Name] Clearing guide
                  </div>
                  <p>
                    Clearing is the system that matches applicants who don’t
                    have an offer with universities that still have places
                    available. You are able to use Clearing if you:
                  </p>
                  <ul className="list-disc flex flex-col gap-[16px] pl-[20px]">
                    <li>
                      Didn’t get the grades required for a conditional offer.
                    </li>
                    <li>Didn’t receive any offers.</li>
                    <li>Declined all the offers received.</li>
                    <li>
                      Achieved the grades required but have changed your mind
                      about where you want to study.
                    </li>
                    <li>Haven’t made any applications.</li>
                  </ul>

                  <p>
                    You'll be able to find universities with vacancies and
                    contact them directly to see if they will offer you a place.
                    The Clearing period runs from the start of July to the end
                    of September. If you’re waiting for A-level results you can
                    start using Clearing as soon as you receive your grades on
                    Thursday 15th August 2024. If you already have your grades,
                    you can start using Clearing from 5th July 2024. Although
                    the intensive Clearing activity happens on Results Day and
                    immediately afterwards, universities continue to advertise
                    available spaces until term starts.
                  </p>

                  <p>
                    Results Day can feel overwhelming, doing some research and
                    preparation ahead of the day will really help you feel in
                    control.
                  </p>
                  <ol className="list-decimal flex flex-col gap-[16px] pl-[20px]">
                    <li>
                      Do all your research beforehand so Results Day morning you
                      can get straight on the phone. Make a list of alternative
                      universities to contact.
                    </li>
                    <li>
                      Make sure you have all the information you need and a note
                      of relevant questions you might want to ask.
                    </li>
                    <li>
                      Make sure your phone is charged and have a charger to
                      hand, just in case.
                    </li>
                    <li>
                      Have a note pad and pen close by so you can take any
                      important notes down and come back to them later.
                    </li>
                    <li>
                      You will be talking a lot so have a drink or a bottle of
                      water to hand.
                    </li>
                  </ol>
                  <p>
                    We recommend getting an early night on Wednesday 14th
                    August, so you are feeling awake and refreshed for Results
                    Day on Thursday 15th August.
                  </p>
                </div>
                <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                  <div className="h5 md:text-heading5">
                    What happens next when you choose [Provider name] through
                    Clearing
                  </div>
                  <div className="para-lg font-semibold">Student finance</div>
                  <div className="para font-semibold">
                    Already applied for a loan but your details have changed due
                    to Clearing?
                  </div>
                  <p>
                    If you have already applied for your loan but your details
                    have changed, your application details will need to be
                    updated by logging in to your account from your provider.
                  </p>
                  <div className="para font-semibold">
                    Applying to university through Clearing but haven’t applied
                    for a loan yet?
                  </div>
                  <p>
                    You can still apply for a student loan. The funding body may
                    not be able to process your application in time for the
                    beginning of your course, but they will make sure you have
                    some money as close to your start date as possible.
                  </p>
                  <div className="para font-semibold">
                    Student maintenance loan
                  </div>
                  <p>
                    The online application process does take a while to
                    complete, and your parents or guardians need to complete
                    their parts too, so make sure you do it as early as
                    possible.
                  </p>
                  <div className="para font-semibold">
                    Clearing Accommodation
                  </div>
                  <p>
                    Once you have been offered a place at the University of
                    Plymouth, you will be put through to the Accommodation team
                    who will discuss your accommodation.
                  </p>
                  <p>
                    If you're a new first-year undergraduate applying through
                    clearing, the University of Plymouth guarantee to offer you
                    a place in halls (either University-managed or with an
                    accredited private halls provider) or in other suitable
                    student accommodation, provided you meet their terms and
                    conditions.  
                  </p>
                  <div className="para font-semibold">
                    I’d like to adjust my offer and choice to the University of
                    Plymouth, what should I do now?
                  </div>
                  <ul className="list-disc flex flex-col gap-[16px] pl-[20px]">
                    <li>
                      Check our Clearing course vacancies – see if your chosen
                      course, or a similar course that interests you, has
                      vacancies.
                    </li>
                    <li>
                      Register your interest – register your details now and get
                      access to the University’s priority line for a quicker
                      service on results day.
                    </li>
                    <li>
                      Adjust through UCAS – if you meet the conditions of the
                      course and there are vacancies, you must visit UCAS to
                      register your intention to adjust.
                    </li>
                    <li>
                      Receive confirmation – UCAS will send you details of your
                      change of course.
                    </li>
                  </ul>
                </div>
              </div>

              <div id="tabcontent7">
                {/* 360 degress  */}
                <div className="flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
                  <div className="h5 md:text-heading5">A day in the life</div>
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
              </div>
              <div id="tabcontent8" className="flex flex-col gap-[16px]">
                {/* advertiser */}
                <Advertiser
                  rating={ratingData1}
                  advertiserTitle={"Where is [University name] located?"}
                  advertiserDescription={""}
                  showWuscaCard={true}
                  showreviewCard={false}
                  isWuscaBadge={false}
                />
                <CampusLocation />
                {/* advertiser */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skip links END */}
    </>
  );
};

export default page;
