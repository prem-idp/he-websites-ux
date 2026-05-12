import React from "react";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import Wuscarankingsherosection from "@packages/shared-components/common-utilities/wusca-landing/wuscarankingsherosection";
import WuscaWinnerShowcase from "@packages/shared-components/common-utilities/wusca-landing/wuscawinnershowcase";
import WuscaResultPod from "@packages/shared-components/common-utilities/wusca-landing/wuscaresultpod";
import Wuscareviewsection from "@packages/shared-components/common-utilities/wusca-landing/wuscareviewsection";
import Reviewslidercomponents from "@packages/shared-components/common-utilities/slider/reviewslidercomponents";
import Wuscarankingfilterwithtitle from "@packages/shared-components/common-utilities/wusca-landing/wuscarankingfilterwithtitle";
import Wuscarankingexplorecategorieswrapper from "@packages/shared-components/common-utilities/wusca-landing/wuscarankingexplorecategorieswrapper";
// Breadcrumb data
const breadcrumbData = [
  { label: "Home", url: "/" },
  { label: "WUSCA", url: "/student-awards-winners" },
  { label: "Best of the best 2026", url: "#" },
  { label: "Best" },
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
  { label: "Small or specialist" },
  { label: "Student life" },
  { label: "Student support" },
  { label: "Students' Union" },
];

// Winner showcase data (1st place)
const winnerData = {
  universityName: "University of Portsmouth",
  rank: "1st",
  rating: 4.6,
  reviewCount: 400,
  badge: "SOUTH EAST ENGLAND",
  description:
    "Morbi facilisis, ligula sit amet fermentum feugiat, est elit fringilla purus, id fermentum lacus mauris vitae diam. In cursus porta ipsum, eget consectetur nisi sodales at. Curabitur dapibus mauris feugiat enim rutrum, in dictum tellus scelerisque. Cras lacus leo, bibendum in tortor id, laoreet sodales metus. Integer pretium tincidunt dolor, vel fermentum est cursus at. Nullam ex erat, auctor sed leo sit amet, venenatis rutrum diam. Aliquam a dui eu nunc hendrerit varius et sit amet erat. Quisque feugiat velit fringilla est malesuada, imperdiet convallis sapien efficitur. Quisque vestibulum leo sem, eu lobortis felis lobortis fermentum. Praesent lectus ligula, tempor at gravida vel, tempor vel nisi. Donec ultricies urna dolor, sed tristique sem scelerisque at. Sed a mi eu dui hendrerit interdum in et velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt ac odio a blandit. Cras lacus leo, bibendum in tortor id, laoreet sodales metus. Integer pretium tincidunt dolor, vel fermentum est cursus at. Nullam ex erat, auctor sed leo sit amet, venenatis rutrum diam.",
  heroImages: [
    "/static/assets/images/wusca/wusca_winner_image.jpg",
    "/static/assets/images/wusca/wusca_winner_image.jpg",
    "/static/assets/images/wusca/wusca_winner_image.jpg",
    "/static/assets/images/wusca/wusca_winner_image.jpg",
    "/static/assets/images/wusca/wusca_winner_image.jpg",
  ],
  logo: "/static/assets/images/wusca/wusca_winner_logo.png",
  reviewBreakdown: [
    { star: 5, percentage: 70 },
    { star: 4, percentage: 20 },
    { star: 3, percentage: 7 },
    { star: 2, percentage: 2 },
    { star: 1, percentage: 1 },
  ],
  lovedMostBadges: [
    "Community",
    "Facilities",
    "Support",
    "Campus",
    "Culture",
    "Innovation",
    "Inclusivity",
    "Traditions",
    "Engagement",
    "Events",
  ],
};

// Result pods data (2nd - 10th)
const resultPods = [
  {
    rank: "2nd",
    universityName: "University of Kent",
    rating: 4.5,
    reviewCount: 400,
    badge: "RUNNER UP",
    description:
      "Morbi facilisis, ligula sit amet fermentum feugiat, est elit fringilla purus, id fermentum lacus mauris vitae diam. In cursus porta ipsum, eget consectetur nisi sodales at. Curabitur dapibus mauris feugiat enim rutrum, in dictum tellus scelerisque. Cras lacus leo, bibendum in tortor id, laoreet sodales metus. Integer pretium tincidunt dolor, vel fermentum est cursus at. Nullam ex erat, auctor sed leo sit amet, venenatis rutrum diam. Aliquam a dui eu nunc hendrerit varius et sit amet erat. Quisque feugiat velit fringilla est malesuada, imperdiet convallis sapien efficitur. Quisque vestibulum leo sem, eu lobortis felis lobortis fermentum. Praesent lectus ligula, tempor at gravida vel, tempor vel nisi. Donec ultricies urna dolor, sed tristique sem scelerisque at. Sed a mi eu dui hendrerit interdum in et velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt ac odio a blandit.",
    campusImage: "/static/assets/images/wusca/wusca_hero_banner_image.jpg",
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    lovedMostBadges: [
      "Courses",
      "Courses",
      "Courses",
      "Courses",
      "Courses",
      "Courses",
    ],
  },
  {
    rank: "3rd",
    universityName: "University of Bangor",
    rating: 4.5,
    reviewCount: 400,
    badge: "RUNNER UP",
    description:
      "Morbi facilisis, ligula sit amet fermentum feugiat, est elit fringilla purus, id fermentum lacus mauris vitae diam. In cursus porta ipsum, eget consectetur nisi sodales at. Curabitur dapibus mauris feugiat enim rutrum, in dictum tellus scelerisque. Cras lacus leo, bibendum in tortor id, laoreet sodales metus. Integer pretium tincidunt dolor, vel fermentum est cursus at. Nullam ex erat, auctor sed leo sit amet, venenatis rutrum diam. Aliquam a dui eu nunc hendrerit varius et sit amet erat. Quisque feugiat velit fringilla est malesuada, imperdiet convallis sapien efficitur. Quisque vestibulum leo sem, eu lobortis felis lobortis fermentum. Praesent lectus ligula, tempor at gravida vel, tempor vel nisi. Donec ultricies urna dolor, sed tristique sem scelerisque at. Sed a mi eu dui hendrerit interdum in et velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt ac odio a blandit.",
    campusImage: "/static/assets/images/wusca/wusca_hero_banner_image.jpg",
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    lovedMostBadges: [
      "Careers",
      "Safety",
      "Nightlife",
      "Societies",
      "Wellbeing",
      "Facilities",
    ],
  },
  {
    rank: "4th",
    universityName: "University of Hertfordshire",
    rating: 4.4,
    reviewCount: 400,
    badge: "UNIVERSITY OF THE YEAR",
    description:
      "Morbi facilisis, ligula sit amet fermentum feugiat, est elit fringilla purus, id fermentum lacus mauris vitae diam. In cursus porta ipsum, eget consectetur nisi sodales at. Curabitur dapibus mauris feugiat enim rutrum, in dictum tellus scelerisque. Cras lacus leo, bibendum in tortor id, laoreet sodales metus. Integer pretium tincidunt dolor, vel fermentum est cursus at. Nullam ex erat, auctor sed leo sit amet, venenatis rutrum diam. Aliquam a dui eu nunc hendrerit varius et sit amet erat. Quisque feugiat velit fringilla est malesuada, imperdiet convallis sapien efficitur. Quisque vestibulum leo sem, eu lobortis felis lobortis fermentum. Praesent lectus ligula, tempor at gravida vel, tempor vel nisi. Donec ultricies urna dolor, sed tristique sem scelerisque at. Sed a mi eu dui hendrerit interdum in et velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt ac odio a blandit.",
    campusImage: "/static/assets/images/wusca/wusca_hero_banner_image.jpg",
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    lovedMostBadges: [
      "Campus",
      "Lecturers",
      "Careers",
      "Campus",
      "Lecturers",
      "Careers",
    ],
  },
  {
    rank: "5th",
    universityName: "Northumbria University",
    rating: 4.4,
    reviewCount: 400,
    badge: "UNIVERSITY OF THE YEAR",
    description:
      "Morbi facilisis, ligula sit amet fermentum feugiat, est elit fringilla purus, id fermentum lacus mauris vitae diam. In cursus porta ipsum, eget consectetur nisi sodales at. Curabitur dapibus mauris feugiat enim rutrum, in dictum tellus scelerisque. Cras lacus leo, bibendum in tortor id, laoreet sodales metus. Integer pretium tincidunt dolor, vel fermentum est cursus at. Nullam ex erat, auctor sed leo sit amet, venenatis rutrum diam. Aliquam a dui eu nunc hendrerit varius et sit amet erat. Quisque feugiat velit fringilla est malesuada, imperdiet convallis sapien efficitur. Quisque vestibulum leo sem, eu lobortis felis lobortis fermentum. Praesent lectus ligula, tempor at gravida vel, tempor vel nisi. Donec ultricies urna dolor, sed tristique sem scelerisque at. Sed a mi eu dui hendrerit interdum in et velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt ac odio a blandit.",
    campusImage: "/static/assets/images/wusca/wusca_hero_banner_image.jpg",
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    lovedMostBadges: [
      "Courses",
      "Lecturers",
      "Campus",
      "Courses",
      "Lecturers",
      "Campus",
    ],
  },
  {
    rank: "6th",
    universityName: "De Montfort University",
    rating: 4.3,
    reviewCount: 400,
    badge: "RUNNER UP 2025",
    description:
      "Morbi facilisis, ligula sit amet fermentum feugiat, est elit fringilla purus, id fermentum lacus mauris vitae diam. In cursus porta ipsum, eget consectetur nisi sodales at. Curabitur dapibus mauris feugiat enim rutrum, in dictum tellus scelerisque. Cras lacus leo, bibendum in tortor id, laoreet sodales metus. Integer pretium tincidunt dolor, vel fermentum est cursus at. Nullam ex erat, auctor sed leo sit amet, venenatis rutrum diam. Aliquam a dui eu nunc hendrerit varius et sit amet erat. Quisque feugiat velit fringilla est malesuada, imperdiet convallis sapien efficitur. Quisque vestibulum leo sem, eu lobortis felis lobortis fermentum. Praesent lectus ligula, tempor at gravida vel, tempor vel nisi. Donec ultricies urna dolor, sed tristique sem scelerisque at. Sed a mi eu dui hendrerit interdum in et velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt ac odio a blandit.",
    campusImage: "/static/assets/images/wusca/wusca_hero_banner_image.jpg",
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    lovedMostBadges: [
      "Facilities",
      "Student support",
      "Nightlife",
      "Facilities",
      "Student support",
      "Nightlife",
    ],
  },
  {
    rank: "7th",
    universityName: "Nottingham Trent University",
    rating: 4.3,
    reviewCount: 400,
    badge: "RUNNER UP 2025",
    description:
      "Morbi facilisis, ligula sit amet fermentum feugiat, est elit fringilla purus, id fermentum lacus mauris vitae diam. In cursus porta ipsum, eget consectetur nisi sodales at. Curabitur dapibus mauris feugiat enim rutrum, in dictum tellus scelerisque. Cras lacus leo, bibendum in tortor id, laoreet sodales metus. Integer pretium tincidunt dolor, vel fermentum est cursus at. Nullam ex erat, auctor sed leo sit amet, venenatis rutrum diam. Aliquam a dui eu nunc hendrerit varius et sit amet erat. Quisque feugiat velit fringilla est malesuada, imperdiet convallis sapien efficitur. Quisque vestibulum leo sem, eu lobortis felis lobortis fermentum. Praesent lectus ligula, tempor at gravida vel, tempor vel nisi. Donec ultricies urna dolor, sed tristique sem scelerisque at. Sed a mi eu dui hendrerit interdum in et velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt ac odio a blandit.",
    campusImage: "/static/assets/images/wusca/wusca_hero_banner_image.jpg",
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    lovedMostBadges: [
      "Careers",
      "Lecturers",
      "Nightlife",
      "Societies",
      "Wellbeing",
      "Facilities",
    ],
  },
  {
    rank: "8th",
    universityName: "Edge Hill University",
    rating: 4.2,
    reviewCount: 400,
    badge: "UNIVERSITY OF THE YEAR",
    description:
      "Morbi facilisis, ligula sit amet fermentum feugiat, est elit fringilla purus, id fermentum lacus mauris vitae diam. In cursus porta ipsum, eget consectetur nisi sodales at. Curabitur dapibus mauris feugiat enim rutrum, in dictum tellus scelerisque. Cras lacus leo, bibendum in tortor id, laoreet sodales metus. Integer pretium tincidunt dolor, vel fermentum est cursus at. Nullam ex erat, auctor sed leo sit amet, venenatis rutrum diam. Aliquam a dui eu nunc hendrerit varius et sit amet erat. Quisque feugiat velit fringilla est malesuada, imperdiet convallis sapien efficitur. Quisque vestibulum leo sem, eu lobortis felis lobortis fermentum. Praesent lectus ligula, tempor at gravida vel, tempor vel nisi. Donec ultricies urna dolor, sed tristique sem scelerisque at. Sed a mi eu dui hendrerit interdum in et velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt ac odio a blandit.",
    campusImage: "/static/assets/images/wusca/wusca_hero_banner_image.jpg",
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    lovedMostBadges: [
      "Courses",
      "Lecturers",
      "Safety",
      "Courses",
      "Lecturers",
      "Safety",
    ],
  },
  {
    rank: "9th",
    universityName: "University of East Anglia, UEA",
    rating: 4.2,
    reviewCount: 400,
    badge: "OVERALL WINNER",
    description:
      "Morbi facilisis, ligula sit amet fermentum feugiat, est elit fringilla purus, id fermentum lacus mauris vitae diam. In cursus porta ipsum, eget consectetur nisi sodales at. Curabitur dapibus mauris feugiat enim rutrum, in dictum tellus scelerisque. Cras lacus leo, bibendum in tortor id, laoreet sodales metus. Integer pretium tincidunt dolor, vel fermentum est cursus at. Nullam ex erat, auctor sed leo sit amet, venenatis rutrum diam. Aliquam a dui eu nunc hendrerit varius et sit amet erat. Quisque feugiat velit fringilla est malesuada, imperdiet convallis sapien efficitur. Quisque vestibulum leo sem, eu lobortis felis lobortis fermentum. Praesent lectus ligula, tempor at gravida vel, tempor vel nisi. Donec ultricies urna dolor, sed tristique sem scelerisque at. Sed a mi eu dui hendrerit interdum in et velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt ac odio a blandit.",
    campusImage: "/static/assets/images/wusca/wusca_hero_banner_image.jpg",
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    lovedMostBadges: [
      "Student support",
      "Accommodation",
      "Lecturers",
      "Student support",
      "Accommodation",
      "Lecturers",
    ],
  },
  {
    rank: "10th",
    universityName: "Coventry University",
    rating: 4.2,
    reviewCount: 400,
    badge: "RUNNER UP 2024",
    description:
      "Morbi facilisis, ligula sit amet fermentum feugiat, est elit fringilla purus, id fermentum lacus mauris vitae diam. In cursus porta ipsum, eget consectetur nisi sodales at. Curabitur dapibus mauris feugiat enim rutrum, in dictum tellus scelerisque. Cras lacus leo, bibendum in tortor id, laoreet sodales metus. Integer pretium tincidunt dolor, vel fermentum est cursus at. Nullam ex erat, auctor sed leo sit amet, venenatis rutrum diam. Aliquam a dui eu nunc hendrerit varius et sit amet erat. Quisque feugiat velit fringilla est malesuada, imperdiet convallis sapien efficitur. Quisque vestibulum leo sem, eu lobortis felis lobortis fermentum. Praesent lectus ligula, tempor at gravida vel, tempor vel nisi. Donec ultricies urna dolor, sed tristique sem scelerisque at. Sed a mi eu dui hendrerit interdum in et velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tincidunt ac odio a blandit.",
    campusImage: "/static/assets/images/wusca/wusca_hero_banner_image.jpg",
    logo: "/static/assets/images/uni_logo_tile1.jpg",
    lovedMostBadges: [
      "Courses",
      "Student support",
      "Student support",
      "Courses",
      "Student support",
      "Nightlife",
    ],
  },
];

// Category cards for "Explore more award categories"
const categoryCards = [
  {
    label: "TOP 10",
    title: "University of the year",
    href: "/student-awards-winners/wusca-rankings",
    bgColor: "bg-blue-100",
    tagColor: "text-primary-500",
    tagBg: "bg-primary-50",
    image: "/static/assets/images/wusca/wusca_university.png",
  },
  {
    label: "TOP 10",
    title: "Career prospects",
    href: "/student-awards-winners/wusca-rankings",
    bgColor: "bg-orange-100",
    tagColor: "text-negative-dark",
    tagBg: "bg-orange-50",
    image: "/static/assets/images/wusca/wusca_career.png",
  },
  {
    label: "TOP 10",
    title: "Facilities",
    href: "/student-awards-winners/wusca-rankings",
    bgColor: "bg-green-200",
    tagColor: "text-positive-dark",
    tagBg: "bg-positive-light",
    image: "/static/assets/images/wusca/wusca_facilities.png",
  },
  {
    label: "TOP 10",
    title: "International",
    href: "/student-awards-winners/wusca-rankings",
    bgColor: "bg-grey-200",
    tagColor: "text-grey-500",
    tagBg: "bg-grey-100",
    image: "/static/assets/images/wusca/wusca_international.png",
  },
];

const BestUnisPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-blue-100 px-[16px] md:px-[20px] xl:px-[0] pt-[24px] hidden lg:block">
        <div className="max-w-container mx-auto">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
      </div>

      {/* Hero Section */}
      <Wuscarankingsherosection
        title="Best of the best 2026"
        badgeImage="/static/assets/images/wusca/wusca_best_uni_hero_image.png"
      />

      {/* Sticky Category Filter + Title Section */}
      <Wuscarankingfilterwithtitle
        categories={categoryTabs}
        title="University of the year 2024 – all UK"
        description="Want to know what our student reviewers thought about a university? Then you've come to the right place! Check out the ranking table below to see how all the unis [in region] in the Whatuni Student Choice Awards stacked up for the massively exciting University of the Year category."
        quickLinks={[{ label: "Previous years rankings", href: "#" }]}
      />

      {/* Winner Showcase + Reviews */}
      <section className="bg-grey-50 px-[16px] md:px-[20px] xl:px-[0] pt-[40px] md:pt-[64px] pb-[0]">
        <div className="max-w-container mx-auto flex flex-col gap-[24px]">
          {/* 1st Place Winner Showcase */}
          <WuscaWinnerShowcase {...winnerData} />

          {/* Review Cards Slider (reusing existing home page component) */}
          <Reviewslidercomponents maxSlidesPerView={3} totalCards={7} />
        </div>
      </section>

      {/*  Result Pods */}
      <section className="bg-grey-50 px-[16px] md:px-[20px] xl:px-[0] py-[40px] md:py-[64px]">
        <div className="max-w-container mx-auto flex flex-col gap-[24px]">
          {resultPods.map((pod, index) => (
            <WuscaResultPod key={index} {...pod} />
          ))}
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

export default BestUnisPage;
