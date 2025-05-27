import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents'
import { findacourseData } from '@packages/constants/constants';
import React from 'react'

const page = () => {
  return (
    <>
      <Findacoursecomponents {...findacourseData} bgColor="primary-100"/>
    </>
  )
}

export default page