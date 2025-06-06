import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents'
import { findacourseData, tabDataDegree } from '@packages/constants/constants';
import React from 'react'
import TabSwitchButton from '@packages/shared-components/common-utilities/tab-switch-button/tab-switch-button';
import PopularDegree from '@packages/shared-components/common-utilities/popular-degree/popular-degree';
import DegreeSubject from '@packages/shared-components/common-utilities/degree-subject/degree-subject';
import Articlesnippetcomponents from '@packages/shared-components/common-utilities/article-snippet/articlesnippetcomponents';
import Subscribecomponents from '@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents'
import Advicecomponents from '@packages/shared-components/home/advice/advicecomponents'
import DegreeSubjectSkeleton from '@packages/shared-components/common-utilities/skeleton/degree-subject-skeleton';

const page = () => {
  const reviewText = "This is a really long review about the product. It has many details and descriptions, discussing various features, pros, and cons. Users should find this review very informative and helpful in making their purchase decision. We want to make sure that even long reviews can be displayed nicely without overflowing the layout, allowing users to expand them if they need more details. This sentence just makes it longer.";

  return (
    <>
      <Findacoursecomponents {...findacourseData} bgColor="primary-100" removebtnDropdown={false} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent" />
      <TabSwitchButton tabSwitchButtonData={tabDataDegree}/>
      <Articlesnippetcomponents />
      <PopularDegree />
      <DegreeSubject />
      {/* <DegreeSubjectSkeleton /> */}
      <Advicecomponents />
      <Subscribecomponents />
    </>
  )
}

export default page