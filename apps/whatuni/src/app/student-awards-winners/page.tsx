import React from "react";
import Wuscaherosection from "@packages/shared-components/common-utilities/wusca-landing/wuscaherosection";
import Wuscacontentsection from "@packages/shared-components/common-utilities/wusca-landing/wuscacontentsection";
import Wuscacategorygrid from "@packages/shared-components/common-utilities/wusca-landing/wuscacategorygrid";
import Tagcloudcomponents from "@packages/shared-components/home/tag-cloud/tagcloudcomponents";
import Ctabanner from "@packages/shared-components/article-details/cta-banner/cta-banner";
import Wuscauniquefeatures from "@packages/shared-components/common-utilities/wusca-landing/wuscauniquefeatures";
import Wuscareviewsection from "@packages/shared-components/common-utilities/wusca-landing/wuscareviewsection";

// Mock data for category cards
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
  {
    title: "Small or specialist institution",
    badge: "TOP 10",
    bgColor: "bg-green-200",
    badgeBgColor: "bg-positive-light",
    badgeTextColor: "text-positive-dark",
    image: "/static/assets/images/wusca/wusca_small_institution.png",
  },
  {
    title: "Student life",
    badge: "TOP 10",
    bgColor: "bg-grey-200",
    badgeBgColor: "bg-grey-100",
    badgeTextColor: "text-grey-500",
    image: "/static/assets/images/wusca/wusca_student_life.png",
  },
  {
    title: "Student support",
    badge: "TOP 10",
    bgColor: "bg-blue-100",
    badgeBgColor: "bg-primary-50",
    badgeTextColor: "text-primary-500",
    image: "/static/assets/images/wusca/wusca_students_support.png",
  },
  {
    title: "Students' Union",
    badge: "TOP 10",
    bgColor: "bg-orange-100",
    badgeBgColor: "bg-orange-50",
    badgeTextColor: "text-negative-dark",
    image: "/static/assets/images/wusca/wusca_students_union.png",
  },
  {
    title: "University halls",
    badge: "TOP 10",
    bgColor: "bg-green-200",
    badgeBgColor: "bg-positive-light",
    badgeTextColor: "text-positive-dark",
    image: "/static/assets/images/wusca/wusca_university_halls.png",
  },
  {
    title: "Submission award",
    badge: "TOP 10",
    bgColor: "bg-grey-200",
    badgeBgColor: "bg-grey-100",
    badgeTextColor: "text-grey-500",
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
        <div className="max-w-container mx-auto px-[0] md:px-[0] xl:px-[0]">
          <h2 className="font-farro font-bold text-heading2 text-grey300 mb-[26px] md:mb-[32px] px-[16px] md:px-[20px] xl:px-[0]">
            Best of the best 2025
          </h2>
          <Wuscacategorygrid cards={categoryCards} />

          {/* Tag Cloud */}
          <Tagcloudcomponents />

          {/* CTA Pod */}
          <div className="mt-[32px] px-[16px] md:px-[20px] xl:px-[0]">
            <Ctabanner
              title="WUSCA full rankings 2025"
              description="Check out the winners of the 2024 Whatuni Student Choice Awards"
              buttonName="View full table"
              bannerSrc="/static/assets/images/wusca/wusca_cta_image.png"
              bgColor="bg-blue-200"
              variant="compact"
            />
          </div>
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
