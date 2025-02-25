'use client'
import Courseoptionscomponents from '@packages/shared-components/course-details/course-options/courseoptionscomponents';
import Courseinfocomponents from '@packages/shared-components/course-details/course-info/courseinfocomponents';
import Jumptocomponents from '@packages/shared-components/course-details/jump-to/jumptocomponents';
import Modulescomponents from '@packages/shared-components/course-details/modules/modulescomponents';
import Entryrequirements from '@packages/shared-components/course-details/entery-requirements/entryrequirements';
import Tuitionfeescomponents from '@packages/shared-components/course-details/tuition-fees/tuitionfeescomponents';
import Popularalevelsubjectcomponents from '@packages/shared-components/course-details/popular-a-level-subjects/popularalevelsubjectcomponents';
import Latestreviewscomponents from '@packages/shared-components/course-details/latest-reviews/latestreviewscomponents';
import Uniinfocomponents from '@packages/shared-components/course-details/uni-info/uniinfocomponents';
import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents';
import Similarcoursecomponents from '@packages/shared-components/course-details/similar-course/similarcoursecomponents';
import Courseheaderinfocomponents from '@packages/shared-components/course-details/course-header-info/courseheaderinfocomponents';
import Yearofentrycomponents from '@packages/shared-components/course-details/year-of-entry/yearofentrycomponents';
import Othercoursesmaylikecomponents from '@packages/shared-components/course-details/other-courses-you-may-like/othercoursesmaylikecomponents';
import Reviewfiltermodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewfiltermodalcomponents';
import Reviewgallerymodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewgallerymodalcomponents';
import { useState } from 'react';
export default function Cdpageclient({data}:any){
    const [fetcheddata,setFetcheddata]=useState({...data})
    // console.log(fetcheddata,"fetcheeddata state ")
    return(
<>
        <Courseheaderinfocomponents data={fetcheddata}/>
        <Yearofentrycomponents />
        <Courseoptionscomponents data={fetcheddata}/> 
        <Jumptocomponents />
        <Courseinfocomponents  />
        <Modulescomponents />
        <Entryrequirements/>
        <Popularalevelsubjectcomponents />
        <Tuitionfeescomponents />
        <Latestreviewscomponents />
        <Uniinfocomponents />
        <Othercoursesmaylikecomponents />
        <Similarcoursecomponents />
        <Findacoursecomponents />
</>
    )
}