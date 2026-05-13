import React from "react";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import Wuscarankingsherosection from "@packages/shared-components/common-utilities/wusca-landing/wuscarankingsherosection";
import Wuscarankingfilterwithtitle from "@packages/shared-components/common-utilities/wusca-landing/wuscarankingfilterwithtitle";
import Wuscarankinglistitem from "@packages/shared-components/common-utilities/wusca-landing/wuscarankinglistitem";
import Ctabanner from "@packages/shared-components/article-details/cta-banner/cta-banner";
import Wuscareviewsection from "@packages/shared-components/common-utilities/wusca-landing/wuscareviewsection";
import Wuscarankingexplorecategorieswrapper from "@packages/shared-components/common-utilities/wusca-landing/wuscarankingexplorecategorieswrapper";

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
    logo: "/static/assets/images/uni_logo_tile1.png",
    name: "University of Portsmouth",
    rating: 4.6,
    category: "University of the year",
  },
  {
    rank: "2nd",
    movement: "6",
    movementDirection: "up" as const,
    logo: "/static/assets/images/uni_logo_tile2.jpg",
    name: "University of Kent",
    rating: 4.5,
    category: "University of the year",
  },
  {
    rank: "3rd",
    movement: "1",
    movementDirection: "down" as const,
    logo: "/static/assets/images/uni_logo_tile3.png",
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
    label: "TOP 10",
    title: "University of the year",
    href: "#",
    bgColor: "bg-blue-100",
    tagColor: "text-primary-500",
    tagBg: "bg-primary-50",
    image: "/static/assets/images/wusca/wusca_university.png",
  },
  {
    label: "TOP 10",
    title: "Career prospects",
    href: "#",
    bgColor: "bg-orange-100",
    tagColor: "text-negative-dark",
    tagBg: "bg-orange-50",
    image: "/static/assets/images/wusca/wusca_career.png",
  },
  {
    label: "TOP 10",
    title: "Facilities",
    href: "#",
    bgColor: "bg-green-200",
    tagColor: "text-positive-dark",
    tagBg: "bg-positive-light",
    image: "/static/assets/images/wusca/wusca_facilities.png",
  },
  {
    label: "TOP 10",
    title: "International",
    href: "#",
    bgColor: "bg-grey-200",
    tagColor: "text-grey-500",
    tagBg: "bg-grey-100",
    image: "/static/assets/images/wusca/wusca_international.png",
  },
  {
    label: "TOP 10",
    title: "Lecturers and teaching quality",
    href: "#",
    bgColor: "bg-blue-100",
    tagColor: "text-primary-500",
    tagBg: "bg-primary-50",
    image: "/static/assets/images/wusca/wusca_lecturers.png",
  },
  {
    label: "TOP 10",
    title: "Postgraduate",
    href: "#",
    bgColor: "bg-orange-100",
    tagColor: "text-negative-dark",
    tagBg: "bg-orange-50",
    image: "/static/assets/images/wusca/wusca_postgraduate.png",
  },
];

const WuscaRankingsPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-blue-100 px-[16px] md:px-[20px] xl:px-[0] pt-[24px] hidden lg:block">
        <div className="max-w-container mx-auto">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
      </div>

      {/* Hero Section */}
      <Wuscarankingsherosection title="Overall rankings 2025" />

      {/* Sticky Category Filter + Title Section */}
      <Wuscarankingfilterwithtitle
        categories={categoryTabs}
        title="University of the year 2024 – all UK"
        description="Want to know what our student reviewers thought about a university? Then you've come to the right place! Check out the ranking table below to see how all the unis [in region] in the Whatuni Student Choice Awards stacked up for the massively exciting University of the Year category."
        quickLinks={[{ label: "Previous years rankings", href: "#" }]}
      />

      {/* Rankings Section - grey-50 background */}
      <section className="bg-grey-50 px-[16px] md:px-[20px] xl:px-[0] py-[40px]">
        <div className="max-w-container mx-auto flex flex-col gap-[16px] md:gap-[24px]">
          {/* Search Bar */}
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
              className="w-full h-[40px] pl-[40px] pr-[16px] border border-neutral-300 rounded-[32px] text-small text-grey300 placeholder:text-grey-500 bg-white shadow-custom-5 focus:outline-none focus:border-primary-400"
            />
          </div>
          <div>
            <div className="flex gap-[16px] uppercase x-small font-semibold p-[12px_16px] md:hidden">
              <div className="w-[60px]">Rank</div>
              <div>University</div>
            </div>

            {/* Rankings List - First Set (1-10) */}
            <div className="flex flex-col border border-grey-200 bg-white">
              {rankingsFirstSet.map((item, index) => (
                <Wuscarankinglistitem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* CTA Banner - Mid page */}
          <div className="mx-[-16px] md:mx-[-20px] lg:mx-0">
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
          <div className="flex flex-col border border-grey-200 bg-white">
            {rankingsSecondSet.map((item, index) => (
              <Wuscarankinglistitem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Make Your Voice Heard */}
      <Wuscareviewsection />

      {/* Explore More Award Categories */}
      <Wuscarankingexplorecategorieswrapper
        title="Explore more award categories"
        cards={categoryCards}
      />
    </>
  );
};

export default WuscaRankingsPage;
