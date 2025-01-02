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

const ComponentPage = async () => {
  return (
    <div className="article_landing">
      <ColcBanner routename="" />
      <Articlesnippetcomponents />
      <Articlelinkcomponents />
      <Scholarshipunicomponents />
      <Eligibilitycriteriacomponents />
      <Faqcomponents />
      <Advicecomponents />
      <Subscribecomponents />
    </div>
  );
};

export default ComponentPage;
