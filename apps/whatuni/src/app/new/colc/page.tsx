"use server";
import Link from "next/link";
import React from "react";
import Advicecomponents from "@packages/shared-components/home/advice/advicecomponents";
import Faqcomponents from "@packages/shared-components/common-utilities/faq/faqcomponents";
import Eligibilitycriteriacomponents from "@packages/shared-components/article-landing/eligibility-criteria/eligibilitycriteriacomponents";
import Scholarshipunicomponents from "@packages/shared-components/article-landing/scholarship-universities/scholarshipunicomponents";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";
import Articlelinkcomponents from "@packages/shared-components/common-utilities/article-link/articlelinkcomponents";
import Articlesnippetcomponents from "@packages/shared-components/common-utilities/article-snippet/articlesnippetcomponents";
import ColcBanner from "@packages/shared-components/common-utilities/colc-banner/colc-banner";
import Wuscascomponents from "@packages/shared-components/home/wuscas/wuscascomponents";
import Testimonialcomponents from "@packages/shared-components/home/testimonials/testimonialcomponents";
const page = async () => {
  return (
    <div className="article_landing">
      <ColcBanner />
      <Wuscascomponents />
      <Eligibilitycriteriacomponents />
      <Testimonialcomponents heading={"Testimonial"} subheading="Subheading" />
      <Testimonialcomponents heading={"Testimonial"} subheading="Subheading" />
      <Advicecomponents />
      <Subscribecomponents />
    </div>
  );
};

export default page;
