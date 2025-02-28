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

import Othercoursesmaylikecomponents from '@packages/shared-components/course-details/other-courses-you-may-like/othercoursesmaylikecomponents';
// import Reviewfiltermodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewfiltermodalcomponents';
// import Reviewgallerymodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewgallerymodalcomponents';

import { useState ,useEffect} from 'react';
export default function Cdpageclient({ children,data,jsonResponse ,prams_slug}: any) {

    console.log("this is the cdpageclientwrapper")
    const [fetcheddata, setFetcheddata] = useState({ ...data });
   const [selectedavilability,setSelectedavailability]=useState(data?.courseInfo?.availability[0]);
   useEffect(() => {
    async function clientFetch() {
      try {
        console.log("Fetching data from client side...");
  
        const searchParams = new URLSearchParams({
          courseId: String(prams_slug?.course_id || ""),
          affiliateId: String(process.env.AFFILATE_ID || ""),
        });
        const url = `https://p5bgb22g76.execute-api.eu-west-2.amazonaws.com/dev-dom-search-bff/v1/search/getCourseDetails?${searchParams.toString()}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "siteCode": String(process.env.NEXT_PUBLIC_SITE_CODE || ""),
            "Content-Type": "application/json",
            "x-api-key":'YVT9Di0P4s36MgrXWjIjZ34JgOyQgljN3nNtL9nc',
          },
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setFetcheddata(data);
        console.log("Client-side fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    clientFetch();
  }, [selectedavilability]);
    
    console.log(fetcheddata,"fetcheddtafetcheddtafetcheddtafetcheddtafetcheddta")
    return (
        <>
         
            <Courseoptionscomponents data={fetcheddata} setFetcheddata={setFetcheddata} selectedavilability={selectedavilability} setSelectedavailability={setSelectedavailability}/>
            <Jumptocomponents data={data} />
            {fetcheddata?.sectionsList?.map(({ sectionName, sectionId}: { sectionName: string, sectionId: string }) => {
                switch (sectionId) {
                    case 'courseInfo': return <div key={sectionId}>{children}</div>;
                    case 'modules': return <Modulescomponents key={sectionId} {...{ sectionName, sectionId }} {...fetcheddata} />;
                    case 'entryRequirements': return <EntryrequirementsComponent key={sectionId} {...{ sectionName, sectionId }} {...fetcheddata} />;
                    case 'popularALevelSubjects': return <Popularalevelsubjectcomponents key={sectionId} {...{ sectionName, sectionId }} {...fetcheddata} />;
                    case 'tutionFees': return <TutionFeesComponent key={sectionId} {...{ sectionName, sectionId }} {...fetcheddata} />;
                    case 'latestReviews': return <Latestreviewscomponents componentKey={sectionId} fetcheddata={fetcheddata} jsonResponse={jsonResponse}/>;
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