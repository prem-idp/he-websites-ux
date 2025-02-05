"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Subscribecomponents from "@packages/shared-components/common-utilities/subscribe-newsletter/subscribecomponents";
import SrPageNoResults from "@packages/shared-components/common-utilities/sr-page/no-results/srpage-noresult";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import SearchFilterButtons from "@packages/shared-components/common-utilities/search-filter-buttons/search-filter-buttons";
import Faqcomponents from "@packages/shared-components/common-utilities/faq/faqcomponents";
import Paginations from "@packages/shared-components/common-utilities/paginations/paginations";
import FeaturedVideoSection from "@packages/shared-components/common-utilities/sr-page/featured-video/featured";
import SearchLabels from "@packages/shared-components/common-utilities/sr-page/search-labels/serach-labels";
import SrPageResultPod from "@packages/shared-components/common-utilities/sr-page/result-pod/result-section";
import SortingFilter from "@packages/shared-components/common-utilities/sr-page/sorting-filter/sorting";
import ExploreArticles from "@packages/shared-components/common-utilities/sr-page/explore-article/explore-articel";
const SearchResult = () => {
  const breadcrumbData = [
    {
      url: "#",
      Imgurl: "/static/assets/icons/breadcrumbs-home-icon.svg",
    },
    {
      url: "#",
      label: "Home",
    },
    {
      url: "#",
      label: "Scholarships",
    },
    {
      url: "",
      label: "Search results",
    },
  ];

  // const faqData = [
  //   {
  //     title: "1",
  //     content:
  //       "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
  //   },
  //   {
  //     title: "2",
  //     content:
  //       "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
  //   },
  //   {
  //     title: "What type of support does Designership provide?",
  //     content:
  //       "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
  //   },
  //   {
  //     title: "How can I see my existing clients through Designership?",
  //     content:
  //       "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
  //   },
  //   {
  //     title: "How does Designership attract clients?",
  //     content:
  //       "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
  //   },
  //   {
  //     title: "What type of support does Designership provide?",
  //     content:
  //       "It’s incredibly important to us that you’re supported. Designership has a dedicated team to provide answers, advice, and context throughout your experience with Designership. Your feedback and input is a huge part of your growth.",
  //   },
  // ];

  return (
    <>
      {/* start breadcrumb and subject*/}
      <section className="px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto">
          {/* breadcrumb  */}
          <div className="px-[16px] xl:px-[0] md:p-[24px_0_8px] hidden md:block">
            <Breadcrumblayoutcomponent data={breadcrumbData} />
          </div>
          {/* breadcrumb  */}
          {/* start subject */}
          <div className="py-[16px]">
            <div className="h5 mb-[4px]">
              Top Law, Engineering & Architecture subjects for you
            </div>
            <p>000 universities offer 1563 courses</p>
          </div>
          {/* end subject */}
        </div>
      </section>
      {/* end breadcrumb and subject*/}

      <SearchFilterButtons />
      <SearchLabels />
      <section className="bg-white p-[16px] md:px-[20px] lg:pt-[16px] xl:px-0">
        <div className="max-w-container mx-auto">
          {/* start add your grades */}
          <div className="bg-blue-100 p-[16px] rounded-[8px] flex flex-col gap-[16px] lg:flex-row lg:justify-between">
            <div className="flex gap-[16px]">
              <div className="bg-blue-200 text-grey900 rounded-tl-[24px] rounded-br-[24px] p-[8px] w-[48px] h-[48px] flex items-center justify-center shrink-0">
                <Image
                  src="/static/assets/icons/search-result/calender-blue.svg"
                  alt="Calender"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="para-lg font-bold font-farro">
                  Add your grades
                </div>
                <div className="small">
                  Add your UCAS points to help tailor your search to find the
                  right uni for you
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center self-center gap-[8px] btn btn-primary px-[20px] py-[10px] w-full lg:w-fit">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 1.875C10.641 1.875 11.1607 2.39467 11.1607 3.03571V8.83929H16.9643C17.6053 8.83929 18.125 9.35895 18.125 10C18.125 10.641 17.6053 11.1607 16.9643 11.1607H11.1607V16.9643C11.1607 17.6053 10.641 18.125 10 18.125C9.35895 18.125 8.83929 17.6053 8.83929 16.9643V11.1607H3.03571C2.39467 11.1607 1.875 10.641 1.875 10C1.875 9.35895 2.39467 8.83928 3.03571 8.83928L8.83929 8.83929V3.03571C8.83929 2.39467 9.35895 1.875 10 1.875Z"
                  fill="#F9FAFB"
                />
              </svg>
              Add my grades
            </div>
          </div>
          <SrPageNoResults />
          <SortingFilter />
          <FeaturedVideoSection />
          <SrPageResultPod />
          <Paginations />
        </div>
      </section>

      <section className="bg-white px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto">
          <div className="h1 py-[40px]">Explore more about law</div>
          <div className="flex flex-col gap-[40px] md:gap-[80px] lg:pb-[16px]">
            <div className="flex flex-col item-center border-[1px] border-grey-200 rounded-[8px] lg:flex-row">
              <div className="w-full md:h-[193px] lg:h-[221px] lg:w-[392px] shrink-0">
                <Image
                  src="/static/assets/images/search-results/article1.png"
                  width={392}
                  height={221}
                  alt="Article"
                  className="w-full h-full object-cover rounded-t-[8px] lg:w-[392px] lg:rounded-l-[8px] lg:rounded-tr-none"
                />
              </div>
              <div className="p-[16px] shadow-custom-2 flex flex-col gap-[8px] text-grey300 lg:px-[24px] lg:py-[32px]">
                <div className="h4">Studying Law</div>
                <div className="small line-clamp-4">
                  A Law degree will teach students about issues that relate to
                  different areas of society; from business and the environment,
                  to human rights and trade. Students will develop key skills
                  like research, critical analysis and presentation, which will
                  prepare them to practice law. There are different strands of
                  law such as LLB, BA and BSc Law first-degree courses.
                  Graduates have the option of pursuing careers within law or in
                  other areas such as academia...
                </div>
                <Link
                  href=""
                  className="flex items-center gap-[4px] text-primary-400 small font-semibold hover:underline"
                >
                  View full guide
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 5.61377L12 10.6138L7 15.6138"
                      stroke="#4664DC"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex flex-col item-center border-[1px] border-grey-200 rounded-[8px] lg:flex-row">
              <div className="w-full md:h-[193px] lg:h-[221px] lg:w-[392px] shrink-0">
                <Image
                  src="/static/assets/images/search-results/article2.jpg"
                  width={392}
                  height={221}
                  alt="Article"
                  className="w-full h-full object-cover rounded-t-[8px] lg:w-[392px] lg:rounded-l-[8px] lg:rounded-tr-none"
                />
              </div>
              <div className="p-[16px] shadow-custom-2 flex flex-col gap-[8px] text-grey300 lg:px-[24px] lg:py-[32px]">
                <div className="h4">Studying in London</div>
                <div className="small line-clamp-4">
                  A Law degree will teach students about issues that relate to
                  different areas of society; from business and the environment,
                  to human rights and trade. Students will develop key skills
                  like research, critical analysis and presentation, which will
                  prepare them to practice law. There are different strands of
                  law such as LLB, BA and BSc Law first-degree courses.
                  Graduates have the option of pursuing careers within law or in
                  other areas such as academia...
                </div>
                <Link
                  href=""
                  className="flex items-center gap-[4px] text-primary-400 small font-semibold hover:underline"
                >
                  View full guide
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 5.61377L12 10.6138L7 15.6138"
                      stroke="#4664DC"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExploreArticles />

      <Faqcomponents />
      <Subscribecomponents />
    </>
  );
};

export default SearchResult;
