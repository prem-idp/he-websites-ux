"use client";
import React from "react";
import Image from "next/image";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Redirectlinkcomponent from "@packages/shared-components/common-utilities/redirect-link/redirectlinkcomponent";
import Video from "@packages/shared-components/common-utilities/videos/video";
import Advertiser from "@packages/shared-components/common-utilities/advertiser/advertiser";
import CampusLocation from "@packages/shared-components/common-utilities/campus-location/campus-location";

const page = () => {
  const skiplinkLabel = [
    {
      key: 1,
      pageName: "Overview",
      pageURL: "#tabContent1",
    },
    {
      key: 2,
      pageName: "Facilities",
      pageURL: "#tabContent2",
    },
    {
      key: 3,
      pageName: "Teaching excellence",
      pageURL: "#tabContent3",
    },
    {
      key: 4,
      pageName: "Scholarships",
      pageURL: "#tabContent4",
    },
    {
      key: 5,
      pageName: "Custom section",
      pageURL: "#tabContent5",
    },
    {
      key: 6,
      pageName: "Contact us",
      pageURL: "#tabContent6",
    },
    {
      key: 7,
      pageName: "Other academic departments",
      pageURL: "#tabContent7",
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
      <HeaderBanner />
      {/* Skip links  */}
      <section>
        <div className="max-w-container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[20px]">
            <div className="min-w-[289px] flex flex-col  relative max-w-[100%]">
              <Redirectlinkcomponent
                data={skiplinkLabel}
                activeLink={"Why study here?"}
              />
            </div>
            <div className="w-full flex flex-col flex-1 gap-[32px] lg:gap-[40px]">
              {/* page start from here */}
              <div className="rich-subject-container flex flex-col gap-[40px]">
                {/* -- */}
                <div
                  id="tabContent1"
                  className="rich-subject-inner-wrap flex flex-col gap-[16px] px-[16px] md:px-[20px] xl:px-0"
                >
                  <div className="h5 text-grey300">Overview</div>
                  <div className="video-card relative w-full min-h-[210px] md:min-h-[300x] bg-grey-400 md:rounded-[8px] md:overflow-hidden">
                    <Video />
                  </div>
                  <div className="rich-subject-content flex flex-col gap-[24px]">
                    <p>
                      Cranfield is a specialist postgraduate university that is
                      a global leader for education and transformational
                      research in technology and management.
                    </p>
                    <p>
                      We are home to many world-class, large-scale facilities
                      which enhance our teaching and research. We are one of the
                      few universities in the world to have its own airport -
                      our global research airport offers a unique environment
                      for transformational research. Our living laboratory is a
                      testbed for transformative technologies and new approaches
                      to deliver enhanced social, economic and environmental
                      outcomes in urban, transport and infrastructure systems.
                    </p>
                    <div className="para font-semibold text-grey300">
                      About School of Aerospace, Transport and Manufacturing
                      (SATM)
                    </div>
                    <p>
                      Our Master’s programmes attract students from around the
                      world, drawn by the combination of academic excellence,
                      strong industry focus and our unique facilities. We have
                      been providing world-class postgraduate education and
                      training for over 75 years. The School of Aerospace,
                      Transport and Manufacturing can trace its heritage back to
                      the first courses to run at Cranfield, their modern-day
                      equivalents are Aerospace Vehicle Design MSc and Thermal
                      Power MSc. The school prides itself in graduating students
                      that are ready to tackle the emerging needs of industry
                      that go on to join our influential alumni network where
                      our graduates can be found in senior positions around the
                      world.
                    </p>
                  </div>
                </div>
                {/* -- */}
                {/* -- */}
                <div
                  id="tabContent2"
                  className="rich-subject-inner-wrap flex flex-col gap-[16px] px-[16px] md:px-[20px] xl:px-0"
                >
                  <div className="h5 text-grey300">Facilities</div>
                  <div className="video-card relative w-full min-h-[210px] md:min-h-[300x] bg-grey-400 md:rounded-[8px] md:overflow-hidden">
                    <Video />
                  </div>
                  <div className="rich-subject-content flex flex-col gap-[24px]">
                    <p>
                      Our history and heritage in aircraft research and design
                      over the last 70 years is extending into the future with
                      new capabilities in aircraft electrification, unmanned
                      aerial vehicle technology and urban mobility. We are one
                      of the few universities in the world to have its own
                      airport.
                    </p>
                    <p>
                      Our aerospace courses cover all aspects of aircraft design
                      from structures, materials, avionics, gas turbine engines
                      to aerospace dynamics. Alongside this we have courses that
                      specialise in computational engineering from CFD,
                      Computational Software, Data Analytics, AI and Robotics
                      which can be applied across all engineering sectors.
                    </p>
                    <p>
                      We have a number of facilities unique to the university
                      sector, ranging from our global research airport including
                      the UK’s first Digital Air Traffic Control Centre, our own
                      aircraft with academic flying staff that operate our
                      National Flying Laboratory. In addition to our National
                      Wind Tunnel and Gas Turbine test facilities, high
                      performance computing cluster, robotics test cells and
                      autonomous systems laboratories. We continue to make
                      substantial investment highlighted by our Aerospace
                      Integration Research Centre and the world-leading Digital
                      Aviation Research and Technology Centre (DARTec)
                      spearheading the UK’s research into digital aviation
                      technology which houses our 737-400 in the Hangar
                      Laboratory. Many of our facilities are used by students
                      throughout their time with us, as part of our teaching to
                      help embed the classroom knowledge to hands-on practical
                      sessions as part of your project work.
                    </p>
                  </div>
                </div>
                {/* -- */}
                {/* -- */}
                <div
                  id="tabContent3"
                  className="rich-subject-inner-wrap flex flex-col gap-[16px] px-[16px] md:px-[20px] xl:px-0"
                >
                  <div className="h5 text-grey300">Teaching excellence</div>
                  <div className="video-card relative w-full min-h-[210px] md:min-h-[300x] bg-grey-400 md:rounded-[8px] md:overflow-hidden">
                    <Video />
                  </div>
                  <div className="rich-subject-content flex flex-col gap-[24px]">
                    <p>
                      Cranfield has over 65 years’ experience in transport,
                      including the aviation, automotive, motorsport, military
                      and marine sectors. We are one of the few universities in
                      the world to have its own airport – our global research
                      airport offers a unique environment for transformational
                      research.
                    </p>
                    <p>
                      In an increasingly interconnected world, our award-winning
                      research and teaching is helping to define the future of
                      global transport. We specialise in understanding the whole
                      environment in which transport operates: the vehicles,
                      infrastructure, businesses and logistics as well as the
                      human aspects of operating, managing and using transport.
                      Home to our internationally recognised
                      Automotive/Motorsport Engineering and Air Transport
                      Management MScs.
                    </p>
                    <p>
                      Our world-class facilities include high-performance wind
                      tunnels, an off-road vehicle dynamics facility, a crash
                      impact test centre (one of just two FIA (Federation
                      Internationale de l’Automobile) approved test centres in
                      the world) and our accident investigation laboratory,
                      which is dedicated to our work in aviation, marine and
                      rail safety and the only accident investigation laboratory
                      of its type outside the United States.
                    </p>
                  </div>
                </div>
                {/* -- */}
                {/* -- */}
                <div
                  id="tabContent4"
                  className="rich-subject-inner-wrap flex flex-col gap-[16px] px-[16px] md:px-[20px] xl:px-0"
                >
                  <div className="h5 text-grey300">Scholarships</div>
                  <div className="video-card relative w-full min-h-[210px] md:min-h-[300x] bg-grey-400 md:rounded-[8px] md:overflow-hidden">
                    <Video />
                  </div>
                  <div className="rich-subject-content flex flex-col gap-[24px]">
                    <p>
                      Cranfield has a distinctive approach to manufacturing
                      research, education and training. We combine expertise in
                      design, technology and management, along with research
                      into materials sciences, all with a focus on
                      manufacturing.
                    </p>
                    <p>
                      A broad range of subjects are available whether you have
                      an interest in digital manufacturing (industry 4.0) and
                      management to help develop the factories of the future, to
                      developing unique materials, design and production process
                      to shape the products of the future
                    </p>
                    <p>
                      We have exceptional facilities many of which are unique in
                      the university sector. These include ‘clean rooms’, high
                      temperature coatings and materials characterisation
                      facilities, composite manufacturing and impact testing
                      facilities including the FIA-approved Cranfield Impact
                      Centre. Our welding laboratory features robotic,
                      automated, and advanced arc welding equipment, high
                      powered laser systems and a record-breaking hyperbaric
                      welding chamber. We have also developed virtual and
                      augmented reality facilities alongside the ability to
                      simulate manufacturing systems and maintenance/repair
                      operations.
                    </p>
                  </div>
                </div>
                {/* -- */}
                <div id="tabContent5">
                  <Advertiser
                    advertiserTitle={"Where is [University name] located?"}
                    rating={ratingData}
                    advertiserDescription={""}
                    showWuscaCard={false}
                  />
                </div>
                <div id="tabContent6">
                  <CampusLocation />
                </div>
                {/* -- */}
                <div
                  id="tabContent7"
                  className="explore-subject-card flex flex-col gap-[16px] px-[16px] md:px-[20px] xl:px-0"
                >
                  <div className="h5 text-grey300">
                    Other academic departments
                  </div>
                  {/* -explore subject card- */}
                  <div className="flex flex-col item-center border-[1px] border-grey-200 rounded-[8px] md:flex-row">
                    <div className="w-full min-h-[140px] md:w-[259px] shrink-0">
                      <Image
                        src="/static/assets/images/search-results/article1.png"
                        width={259}
                        height={146}
                        alt="Article"
                        className="w-full h-full object-cover rounded-t-[8px] lg:w-[392px] lg:rounded-l-[8px] md:rounded-tr-none"
                      />
                    </div>
                    <div className="flex flex-col flex-1 gap-[16px] text-grey300 p-[16px] shadow-custom-2">
                      <div className="para font-semibold text-grey300">
                        Department name
                      </div>
                      <div className="small text-grey300 line-clamp-4">
                        Cranfield University is one of the world’s leading
                        universities for defence, security and forensic
                        education, research and consultancy. Our academics’
                        expertise ranges from energetics and forensic sciences
                        to internationa academics’ expertise ranges from
                        energetics and forensic sciences to internationa one of
                        the world’s leading universities for defence, security
                        and forensic education
                      </div>
                    </div>
                  </div>
                  {/* -explore subject card- */}
                  {/* -explore subject card- */}
                  <div className="flex flex-col item-center border-[1px] border-grey-200 rounded-[8px] md:flex-row overflow-hidden">
                    <div className="w-full min-h-[146px] md:w-[259px] shrink-0 bg-grey-200"></div>
                    <div className="flex flex-col flex-1 gap-[16px] text-grey300 p-[16px] shadow-custom-2">
                      <div className="para font-semibold text-grey300">
                        Department name
                      </div>
                      <div className="small text-grey300 line-clamp-4">
                        Cranfield University is one of the world’s leading
                        universities for defence, security and forensic
                        education, research and consultancy. Our academics’
                        expertise ranges from energetics and forensic sciences
                        to internationa academics’ expertise ranges from
                        energetics and forensic sciences to internationa one of
                        the world’s leading universities for defence, security
                        and forensic education
                      </div>
                    </div>
                  </div>
                  {/* -explore subject card- */}
                  {/* -explore subject card- */}
                  <div className="flex flex-col item-center border-[1px] border-grey-200 rounded-[8px] md:flex-row">
                    <div className="w-full min-h-[140px] md:w-[259px] shrink-0">
                      <Image
                        src="/static/assets/images/search-results/article2.jpg"
                        width={259}
                        height={146}
                        alt="Article"
                        className="w-full h-full object-cover rounded-t-[8px] lg:w-[392px] lg:rounded-l-[8px] md:rounded-tr-none"
                      />
                    </div>
                    <div className="flex flex-col flex-1 gap-[16px] text-grey300 p-[16px] shadow-custom-2">
                      <div className="para font-semibold text-grey300">
                        Department name
                      </div>
                      <div className="small text-grey300 line-clamp-4">
                        Cranfield University is one of the world’s leading
                        universities for defence, security and forensic
                        education, research and consultancy. Our academics’
                        expertise ranges from energetics and forensic sciences
                        to internationa academics’ expertise ranges from
                        energetics and forensic sciences to internationa one of
                        the world’s leading universities for defence, security
                        and forensic education
                      </div>
                    </div>
                  </div>
                  {/* -explore subject card- */}
                </div>
                {/* -- */}
              </div>
              {/* page end from here */}
            </div>
          </div>
        </div>
      </section>
      {/* Skip links END */}
    </>
  );
};

export default page;
