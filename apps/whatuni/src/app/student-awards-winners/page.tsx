import React from "react";
import Wuscaherosection from "@packages/shared-components/common-utilities/wusca-landing/wuscaherosection";
import Wuscacontentsection from "@packages/shared-components/common-utilities/wusca-landing/wuscacontentsection";
import Wuscacategorygrid from "@packages/shared-components/common-utilities/wusca-landing/wuscacategorygrid";
import Tagcloudcomponents from "@packages/shared-components/home/tag-cloud/tagcloudcomponents";
import Ctabanner from "@packages/shared-components/article-details/cta-banner/cta-banner";
import Wuscauniquefeatures from "@packages/shared-components/common-utilities/wusca-landing/wuscauniquefeatures";
import Wuscareviewsection from "@packages/shared-components/common-utilities/wusca-landing/wuscareviewsection";
import Discovercomponents from "@packages/shared-components/home/discover/discovercomponents";
import { DiscoverCardData } from "@packages/shared-components/common-utilities/slider/discovercard";

// Discover cards for this page (12 cards)
const discoverCards: DiscoverCardData[] = [
  {
    label: "TOP 10",
    title: "University of the year",
    href: "",
    bgColor: "bg-blue-100",
    tagColor: "text-primary-500",
    tagBg: "bg-primary-50",
    image: "/static/assets/images/wusca/wusca_university.png",
  },
  {
    label: "TOP 10",
    title: "Career prospects",
    href: "",
    bgColor: "bg-orange-100",
    tagColor: "text-negative-dark",
    tagBg: "bg-orange-50",
    image: "/static/assets/images/wusca/wusca_career.png",
  },
  {
    label: "TOP 10",
    title: "Facilities",
    href: "",
    bgColor: "bg-green-200",
    tagColor: "text-positive-dark",
    tagBg: "bg-positive-light",
    image: "/static/assets/images/wusca/wusca_facilities.png",
  },
  {
    label: "TOP 10",
    title: "International",
    href: "",
    bgColor: "bg-grey-200",
    tagColor: "text-grey-500",
    tagBg: "bg-grey-100",
    image: "/static/assets/images/wusca/wusca_international.png",
  },
  {
    label: "TOP 10",
    title: "Lecturers and teaching quality",
    href: "",
    bgColor: "bg-blue-100",
    tagColor: "text-primary-500",
    tagBg: "bg-primary-50",
    image: "/static/assets/images/wusca/wusca_lecturers.png",
  },
  {
    label: "TOP 10",
    title: "Postgraduate",
    href: "",
    bgColor: "bg-orange-100",
    tagColor: "text-negative-dark",
    tagBg: "bg-orange-50",
    image: "/static/assets/images/wusca/wusca_postgraduate.png",
  },
  {
    label: "TOP 10",
    title: "Small or specialist institution",
    href: "",
    bgColor: "bg-green-200",
    tagColor: "text-positive-dark",
    tagBg: "bg-positive-light",
    image: "/static/assets/images/wusca/wusca_small_institution.png",
  },
  {
    label: "TOP 10",
    title: "Student life",
    href: "",
    bgColor: "bg-grey-200",
    tagColor: "text-grey-500",
    tagBg: "bg-grey-100",
    image: "/static/assets/images/wusca/wusca_student_life.png",
  },
  {
    label: "TOP 10",
    title: "Student support",
    href: "",
    bgColor: "bg-blue-100",
    tagColor: "text-primary-500",
    tagBg: "bg-primary-50",
    image: "/static/assets/images/wusca/wusca_students_support.png",
  },
  {
    label: "TOP 10",
    title: "Students' Union",
    href: "",
    bgColor: "bg-orange-100",
    tagColor: "text-negative-dark",
    tagBg: "bg-orange-50",
    image: "/static/assets/images/wusca/wusca_students_union.png",
  },
  {
    label: "TOP 10",
    title: "University halls",
    href: "",
    bgColor: "bg-green-200",
    tagColor: "text-positive-dark",
    tagBg: "bg-positive-light",
    image: "/static/assets/images/wusca/wusca_university_halls.png",
  },
  {
    label: "TOP 10",
    title: "Submission award",
    href: "",
    bgColor: "bg-grey-200",
    tagColor: "text-grey-500",
    tagBg: "bg-grey-100",
    image: "/static/assets/images/wusca/wusca_submission_award.png",
  },
];

// Mock data for unique features
const uniqueFeatures = [
  {
    title: "Verified reviews",
    description:
      "All reviewers provide their uni email address so we can check they're a genuine student.",
  },
  {
    title: "Thousands of reviews",
    description:
      "We have over 150,000 authentic student reviews across a huge range of unis and courses.",
  },
  {
    title: "Comprehensive reviews",
    description:
      "Our reviewers rank various aspects of uni life out of 5 so you can check what's important to you.",
  },
  {
    title: "Not just undergrads!",
    description:
      "We collect reviews from postgraduate students as well as undergraduates to help you at every stage.",
  },
  {
    title: "In-depth reviews",
    description:
      "Our high maximum character count allows students the freedom to leave detailed reviews of their uni.",
  },
  {
    title: "Year of study",
    description:
      "We ask students which year of uni they're in so you know what stage of their studies they're at.",
  },
];

const StudentAwardsWinnersPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Wuscaherosection />

      {/* Content Section */}
      <Wuscacontentsection />

      {/* Category Cards Section */}
      <section className="bg-white py-[40px] md:py-[64px]">
        <div className="max-w-container mx-auto md:px-[20px] xl:px-[0]">
          <Discovercomponents
            title="Best of the best 2025"
            subtitle=""
            showViewMore={false}
            wuscaLanding={true}
            cards={discoverCards}
          />

          {/* CTA Pod */}
          <Ctabanner
            title="WUSCA full rankings 2025"
            description="Check out the winners of the 2024 Whatuni Student Choice Awards"
            buttonName="View full table"
            bannerSrc="/static/assets/images/wusca/wusca_cta_image.png"
            bgColor="bg-blue-200"
          />
        </div>
      </section>

      {/* What Makes Unique Section */}
      <Wuscauniquefeatures
        heading="What makes the Whatuni Student Choice Awards unique?"
        subheading="We have the most comprehensive collection of verified university reviews in the UK, so you can browse thousands of reviews to help make your decision."
        features={uniqueFeatures}
      />

      {/* Review Your Uni Section */}
      <Wuscareviewsection />
    </>
  );
};

export default StudentAwardsWinnersPage;
