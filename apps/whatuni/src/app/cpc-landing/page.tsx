import React from 'react'
import Seasonlandingcomponents from '@packages/shared-components/common-utilities/season-landing-video/Seasonlandingvideocomponents'
import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents'
import Subjectstatscomponents from '@packages/shared-components/CPC-landing/subject-stats/Subjectstatscomponents'
import { searchLandingData,  statsSubjectData, statsRegionData, popularUniData, popularCourseData, openDaysData, searchWULandingData} from '@packages/constants/constants';
import Faqcomponents from '@packages/shared-components/common-utilities/faq/faqcomponents'
import Othercoursesmaylikecomponents from '@packages/shared-components/common-utilities/other-courses-you-may-like/othercoursesmaylikecomponents'
import Seasonlandingvideoskeleton from '@packages/shared-components/common-utilities/skeleton/Seasonlandingvideoskeleton'
import Contentwithimagebannerskeleton from '@packages/shared-components/common-utilities/skeleton/Contentwithimagebannerskeleton'
import Eligibilitycriteriacardskeleton from '@packages/shared-components/common-utilities/skeleton/eligibilitycriteriacardskeleton';
import Statscpclandingskeleton from '@packages/shared-components/common-utilities/skeleton/Statscpclandingskeleton';
import Articlegridcomponents from '@packages/shared-components/home/article-grid/articlegridcomponents';
import CPCpopularskeleton from '@packages/shared-components/common-utilities/skeleton/CPCpopularskeleton';


const landingPage = () => {
  const bgColor="white";
  const bgColor1="grey-50";
  const bgColor2="green-100";
  const bgColor3="blue-100";
  return (
    <>
      <Seasonlandingcomponents />
      <Seasonlandingvideoskeleton />
      <Findacoursecomponents {...searchLandingData} bgColor={bgColor2}/>
      <Contentwithimagebannerskeleton /> 
      <Findacoursecomponents {...searchWULandingData} bgColor={bgColor3}/>
      <Subjectstatscomponents {...statsSubjectData} />
      <Statscpclandingskeleton />
      <CPCpopularskeleton />
      <Othercoursesmaylikecomponents {...popularUniData} bgColor={bgColor} />
      <Othercoursesmaylikecomponents {...popularCourseData} bgColor={bgColor1} />
      <Othercoursesmaylikecomponents {...openDaysData} bgColor={bgColor} openDays={true} />
      <Subjectstatscomponents {...statsRegionData} />
      <Faqcomponents />
    </>
  )
}

export default landingPage
