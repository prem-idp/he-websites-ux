'use client'
import Courseoptionscomponents from '@packages/shared-components/course-details/course-options/courseoptionscomponents';
import Courseinfocomponents from '@packages/shared-components/course-details/course-info/CourseInfoComponent';
import Jumptocomponents from '@packages/shared-components/course-details/jump-to/jumptocomponents';
import Modulescomponents from '@packages/shared-components/course-details/modules/ModulesComponent';
import EntryrequirementsComponent from '@packages/shared-components/course-details/entery-requirements/EntryrequirementsComponent';
import TutionFeesComponent from '@packages/shared-components/course-details/tuition-fees/TutionFeesComponent';
import Popularalevelsubjectcomponents from '@packages/shared-components/course-details/popular-a-level-subjects/popularalevelsubjectcomponents';
import Latestreviewscomponents from '@packages/shared-components/course-details/latest-reviews/LatestReviewsComponent';
import UniInfoComponent from '@packages/shared-components/course-details/uni-info/UniInfoComponent';
import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents';
import SimilarCourseComponent from '@packages/shared-components/course-details/similar-course/SimilarCourseComponent';
import Courseheaderinfocomponents from '@packages/shared-components/course-details/course-header-info/courseheaderinfocomponents';
import Yearofentrycomponents from '@packages/shared-components/course-details/year-of-entry/yearofentrycomponents';
import Othercoursesmaylikecomponents from '@packages/shared-components/course-details/other-courses-you-may-like/othercoursesmaylikecomponents';

// import Reviewfiltermodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewfiltermodalcomponents';
// import Reviewgallerymodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewgallerymodalcomponents';
import { useState } from 'react';
export default function Cdpageclient({ children,data,jsonResponse }: any) {
    const [fetcheddata, setFetcheddata] = useState({ ...data });
    console.log(fetcheddata,"fetcheddtafetcheddtafetcheddtafetcheddtafetcheddta")
    return (
        <>
            <Courseheaderinfocomponents data={fetcheddata} />
            <Yearofentrycomponents />
            <Courseoptionscomponents data={fetcheddata} />
            <Jumptocomponents data={data} />
            {fetcheddata?.sectionsList?.map(({ sectionName, sectionId }: { sectionName: string, sectionId: string }) => {
                switch (sectionId) {
                    case 'courseInfo': return <div key={sectionId}>{children}</div>;
                    case 'modules': return <Modulescomponents key={sectionId} {...{ sectionName, sectionId }} {...fetcheddata} />;
                    case 'entryRequirements': return <EntryrequirementsComponent key={sectionId} {...{ sectionName, sectionId }} {...fetcheddata} />;
                    case 'popularALevelSubjects': return <Popularalevelsubjectcomponents key={sectionId} {...{ sectionName, sectionId }} {...fetcheddata} />;
                    case 'tutionFees': return <TutionFeesComponent key={sectionId} {...{ sectionName, sectionId }} {...fetcheddata} />;
                    case 'latestReviews': return <Latestreviewscomponents key={sectionId} fetcheddata={fetcheddata} jsonResponse={jsonResponse}/>;
                    case 'uniInfo': return <UniInfoComponent key={sectionId} {...{ sectionName, sectionId }} {...fetcheddata} />;
                }
            })}
            <Othercoursesmaylikecomponents />
            <SimilarCourseComponent {...data} />
            {process.env.PROJECT === "Whatuni" &&
                <Findacoursecomponents />
            }
        </>
    )
}