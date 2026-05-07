import React from "react";
import Wuscarankingsherosection from "@packages/shared-components/common-utilities/wusca-landing/wuscarankingsherosection";
import Wuscacategoryfiltertabs from "@packages/shared-components/common-utilities/wusca-landing/wuscacategoryfiltertabs";
import Wuscarankinglistitem from "@packages/shared-components/common-utilities/wusca-landing/wuscarankinglistitem";
import Ctabanner from "@packages/shared-components/article-details/cta-banner/cta-banner";
import Wuscareviewsection from "@packages/shared-components/common-utilities/wusca-landing/wuscareviewsection";
import Wuscarankingcategorygrid from "@packages/shared-components/common-utilities/wusca-landing/wuscarankingcategorygrid";
import Tagcloudcomponents from "@packages/shared-components/home/tag-cloud/tagcloudcomponents";

// Breadcrumb data
const breadcrumbData = [
  { label: "Home", url: "/" },
  { label: "WUSCA", url: "/student-awards-winners" },
  { label: "University of the year", url: "#" },
  { label: "All UK" },
];

// Category filter tabs
const categoryTabs = [
  {
    label: "All UK",
    isDropdown: true,
    dropdownOptions: [
      "All UK",
      "East Midlands",
      "Eastern England",
      "London",
      "North East England",
      "North West England",
      "Scotland",
      "South East England",
      "South West England",
      "Wales",
      "West Midlands",
      "Yorkshire and Humberside",
    ],
  },
  { label: "University of the year", active: true },
  { label: "Career prospects" },
  { label: "Facilities" },
  { label: "International" },
  { label: "Lecturers and teaching quality" },
  { label: "Postgraduate" },
  { label: "Small or specialist institution" },
  { label: "Student life" },
  { label: "Student support" },
];

// Mock ranking data - first set (1-10)
const rankingsFirstSet = [
  {
    rank: "1st",
    movement: "10",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "University of Portsmouth",
    rating: 4.6,
    category: "University of the year",
  },
  {
    rank: "2nd",
    movement: "6",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "University of Kent",
    rating: 4.5,
    category: "University of the year",
  },
  {
    rank: "3rd",
    movement: "1",
    movementDirection: "down" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "Roehampton University",
    rating: 4.5,
    category: "University of the year",
  },
  {
    rank: "4th",
    movement: "5",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "University of Bangor",
    rating: 4.4,
    category: "University of the year",
  },
  {
    rank: "5th",
    movement: "8",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "University of Hertfordshire",
    rating: 4.4,
    category: "University of the year",
  },
  {
    rank: "6th",
    movement: "3",
    movementDirection: "down" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "University of Chichester",
    rating: 4.4,
    category: "University of the year",
  },
  {
    rank: "7th",
    movement: "3",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "Swansea University",
    rating: 4.3,
    category: "University of the year",
  },
  {
    rank: "8th",
    movement: "19",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "DeMontfort University",
    rating: 4.3,
    category: "University of the year",
  },
  {
    rank: "9th",
    movement: "8",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "Edgehill University",
    rating: 4.2,
    category: "University of the year",
  },
  {
    rank: "10th",
    movement: "24",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "University of Glasgow",
    rating: 4.2,
    category: "University of the year",
  },
];

// Mock ranking data - second set (11-20)
const rankingsSecondSet = [
  {
    rank: "11th",
    movement: "10",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "Teeside University",
    rating: 4.6,
    category: "University of the year",
  },
  {
    rank: "12th",
    movement: "6",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "University of Bedfordshire",
    rating: 4.5,
    category: "University of the year",
  },
  {
    rank: "13th",
    movement: "1",
    movementDirection: "down" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "University of Sunderland",
    rating: 4.5,
    category: "University of the year",
  },
  {
    rank: "14th=",
    movement: "5",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "Canterbury Christchurch University",
    rating: 4.4,
    category: "University of the year",
  },
  {
    rank: "14th=",
    movement: "8",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "Northumbria University",
    rating: 4.4,
    category: "University of the year",
  },
  {
    rank: "16th",
    movement: "3",
    movementDirection: "down" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "University of Surrey",
    rating: 4.4,
    category: "University of the year",
  },
  {
    rank: "17th",
    movement: "3",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "Nottingham Trent University",
    rating: 4.3,
    category: "University of the year",
  },
  {
    rank: "18th",
    movement: "19",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "Oxford University",
    rating: 4.3,
    category: "University of the year",
  },
  {
    rank: "19th",
    movement: "8",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "University of East Anglia",
    rating: 4.2,
    category: "University of the year",
  },
  {
    rank: "20th",
    movement: "24",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    name: "Coventry University",
    rating: 4.2,
    category: "University of the year",
  },
];

// Category cards for "Explore more award categories"
const categoryCards = [
  {
    title: "University of the year",
    badge: "TOP 10",
    bgColor: "bg-blue-100",
    badgeBgColor: "bg-primary-50",
    badgeTextColor: "text-primary-500",
    image: "/static/assets/images/wusca/wusca_university.png",
  },
  {
    title: "Career prospects",
    badge: "TOP 10",
    bgColor: "bg-orange-100",
    badgeBgColor: "bg-orange-50",
    badgeTextColor: "text-negative-dark",
    image: "/static/assets/images/wusca/wusca_career.png",
  },
  {
    title: "Facilities",
    badge: "TOP 10",
    bgColor: "bg-green-200",
    badgeBgColor: "bg-positive-light",
    badgeTextColor: "text-positive-dark",
    image: "/static/assets/images/wusca/wusca_facilities.png",
  },
  {
    title: "International",
    badge: "TOP 10",
    bgColor: "bg-grey-200",
    badgeBgColor: "bg-grey-100",
    badgeTextColor: "text-grey-500",
    image: "/static/assets/images/wusca/wusca_international.png",
  },
  {
    title: "Lecturers and teaching quality",
    badge: "TOP 10",
    bgColor: "bg-blue-100",
    badgeBgColor: "bg-primary-50",
    badgeTextColor: "text-primary-500",
    image: "/static/assets/images/wusca/wusca_lecturers.png",
  },
  {
    title: "Postgraduate",
    badge: "TOP 10",
    bgColor: "bg-orange-100",
    badgeBgColor: "bg-orange-50",
    badgeTextColor: "text-negative-dark",
    image: "/static/assets/images/wusca/wusca_postgraduate.png",
  },
];

const WuscaRankingsPage = () => {
  return (
    <>
      {/* Hero Section with Breadcrumbs */}
      <Wuscarankingsherosection
        title="Overall rankings 2025"
        breadcrumbs={breadcrumbData}
      />

      {/* Category Filters + Title Section */}
      <section className="bg-white px-[16px] md:px-[20px] xl:px-[112px] py-[24px]">
        <div className="max-w-container mx-auto flex flex-col gap-[24px]">
          {/* Category Filter Tabs */}
          <Wuscacategoryfiltertabs categories={categoryTabs} />

          {/* Title + Description + Quick Links */}
          <div className="flex flex-col justify-center gap-[16px]">
            <h2 className="font-farro font-bold text-heading5 md:text-heading4 text-grey-900">
              University of the year 2024 – all UK
            </h2>
            <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[80px] items-start w-full">
              <p className="font-inter font-normal text-small text-grey300 lg:max-w-[580px]">
                Want to know what our student reviewers thought about a
                university? Then you&apos;ve come to the right place! Check out
                the ranking table below to see how all the unis [in region] in
                the Whatuni Student Choice Awards stacked up for the massively
                exciting University of the Year category.
              </p>
              <div className="flex flex-col gap-[4px] shrink-0">
                <span className="x-small font-bold text-grey-900 uppercase">
                  QUICK LINKS
                </span>
                <a
                  href="#"
                  className="small font-normal text-primary-400 hover:underline"
                >
                  Previous years rankings
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings Section - grey-50 background */}
      <section className="bg-grey-50 px-[16px] md:px-[20px] xl:px-[112px] py-[24px] md:py-[32px]">
        <div className="max-w-container mx-auto flex flex-col gap-[24px]">
          {/* Search Bar */}
          <div>
            <div className="relative w-full md:w-[343px]">
              <svg
                className="absolute left-[16px] top-1/2 -translate-y-1/2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 14L10.5 10.5M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z"
                  stroke="#767676"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Find a university below"
                className="w-full h-[40px] pl-[40px] pr-[16px] border border-neutral-300 rounded-[32px] text-small text-grey300 placeholder:text-grey-500 bg-white shadow-[0px_4px_6px_-1px_rgba(16,24,40,0.1),0px_2px_4px_-2px_rgba(16,24,40,0.1)] focus:outline-none focus:border-primary-400"
              />
            </div>
          </div>

          {/* Rankings List - First Set (1-10) */}
          <div className="flex flex-col border border-grey-200 rounded-[8px] bg-white">
            {rankingsFirstSet.map((item, index) => (
              <Wuscarankinglistitem key={index} {...item} />
            ))}
          </div>

          {/* CTA Banner - Mid page */}
          <div className="px-[0]">
            <Ctabanner
              title="Check out the best of the best"
              description="Find out which unis won each WUSCA category"
              buttonName="See the winners"
              bannerSrc="/static/assets/images/wusca/wusca_ranking_cta_logo.png"
              bgColor="bg-blue-200"
              variant="compact"
            />
          </div>

          {/* Rankings List - Second Set (11-20) */}
          <div className="flex flex-col border border-grey-200 rounded-[8px] bg-white">
            {rankingsSecondSet.map((item, index) => (
              <Wuscarankinglistitem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Make Your Voice Heard */}
      <Wuscareviewsection />

      {/* Explore More Award Categories */}
      <section className="bg-grey-50 py-[40px] md:py-[64px]">
        <div className="max-w-container mx-auto px-[16px] md:px-[20px] xl:px-[0]">
          <h2 className="font-farro font-bold text-heading2 text-grey300 mb-[26px] md:mb-[32px]">
            Explore more award categories
          </h2>
          <Wuscarankingcategorygrid cards={categoryCards} />

          {/* Tag Cloud */}
          <Tagcloudcomponents />
        </div>
      </section>
    </>
  );
};

export default WuscaRankingsPage;
