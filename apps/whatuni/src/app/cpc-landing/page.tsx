import ColcBanner from '@packages/shared-components/common-utilities/colc-banner/colc-banner'
import Seasonlandingcomponents from '@packages/shared-components/common-utilities/season-landing-video/Seasonlandingvideocomponents'
import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents'
import Subjectstatscomponents from '@packages/shared-components/CPC-landing/subject-stats/Subjectstatscomponents'
import React from 'react'
import { searchLandingData } from '@packages/constants/constants';
import Faqcomponents from '@packages/shared-components/common-utilities/faq/faqcomponents'

const landingPage = () => {
  return (
    <>
      <Seasonlandingcomponents />
      <Findacoursecomponents {...searchLandingData} />
      <Subjectstatscomponents />
      <Faqcomponents />
    </>
  )
}

export default landingPage
