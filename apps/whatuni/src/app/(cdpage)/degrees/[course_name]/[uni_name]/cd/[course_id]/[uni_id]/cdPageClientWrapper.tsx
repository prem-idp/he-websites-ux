'use client'
import dynamic from 'next/dynamic'
const UniInfoComponent =dynamic(()=>import("@packages/shared-components/course-details/uni-info/UniInfoComponent"),{ssr:false});
import Courseoptionscomponents from '@packages/shared-components/course-details/course-options/courseoptionscomponents';
import Courseinfocomponents from '@packages/shared-components/course-details/course-info/CourseInfoComponent';
import Jumptocomponents from '@packages/shared-components/course-details/jump-to/jumptocomponents';
import Modulescomponents from '@packages/shared-components/course-details/modules/ModulesComponent';
import EntryrequirementsComponent from '@packages/shared-components/course-details/entery-requirements/EntryrequirementsComponent';
import TutionFeesComponent from '@packages/shared-components/course-details/tuition-fees/TutionFeesComponent';
import Popularalevelsubjectcomponents from '@packages/shared-components/course-details/popular-a-level-subjects/popularalevelsubjectcomponents';
import Latestreviewscomponents from '@packages/shared-components/course-details/latest-reviews/LatestReviewsComponent';
// import UniInfoComponent from '@packages/shared-components/course-details/uni-info/UniInfoComponent';
import Findacoursecomponents from '@packages/shared-components/course-details/findacourse/findacoursecomponents';
import SimilarCourseComponent from '@packages/shared-components/course-details/similar-course/SimilarCourseComponent';
import Othercoursesmaylikecomponents from '@packages/shared-components/course-details/other-courses-you-may-like/othercoursesmaylikecomponents';
// import Reviewfiltermodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewfiltermodalcomponents';
// import Reviewgallerymodalcomponents from '@packages/shared-components/common-utilities/modal/review-lightbox/reviewgallerymodalcomponents';
import { useState, useEffect } from 'react';
// import Othercoursesmaylikecomponents from "@packages/shared-components/course-details/other-courses-you-may-like"
export default function Cdpageclient({ children,courseContent, data, prams_slug }: any) {

    //console.log("this is the cdpageclientwrapper")
    const [fetcheddata, setFetcheddata] = useState({ ...data });
    const [selectedavilability, setSelectedavailability] = useState(data?.courseInfo?.availability[0]);
    const [startfetch,setStartfetch]=useState(false);
    const [renderKey, setRenderKey] = useState(0);

    useEffect(() => {
        setRenderKey(prev => prev + 1); // Force re-render
    }, [fetcheddata]);

    //console.log(fetcheddata, "fetcheddtafetcheddtafetcheddtafetcheddtafetcheddta")

  useEffect(() => {
    async function clientFetch() {
      try {
        const searchParams = new URLSearchParams({
          courseId: String(prams_slug?.course_id || ""),
          affiliateId: String(process.env.AFFILATE_ID || ""),
          collegeId: String(prams_slug?.uni_id || ""),
        });
        const url = `https://p5bgb22g76.execute-api.eu-west-2.amazonaws.com/dev-dom-search-bff/v1/search/getCourseDetails?${searchParams.toString()}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {

            "Content-Type": "application/json",
            "x-api-key": 'YVT9Di0P4s36MgrXWjIjZ34JgOyQgljN3nNtL9nc',
          },
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const clientfetcheddata = await response.json();
        setFetcheddata((prevData: any) => ({ ...prevData, ...clientfetcheddata }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (startfetch) {
      clientFetch();
    }
    else {
      setStartfetch(true)
    }

  }, [selectedavilability]);

  return (

    <div>
      <Courseoptionscomponents data={fetcheddata} setFetcheddata={setFetcheddata} selectedavilability={selectedavilability} setSelectedavailability={setSelectedavailability} />
       <Jumptocomponents sectionsList={courseContent?.sectionsList} />
      <>
        {courseContent?.sectionsList?.map((sectionContent: any) => {
          const { sectionId } = sectionContent;
          let componentToRender;
          switch (sectionId) {
            case 'course-info':
              componentToRender = <div key={renderKey}>{children}</div>;
              break;
            case 'modules':
              componentToRender = <Modulescomponents sectionInfo={sectionContent} {...fetcheddata} />;
              break;
            case 'entry-requirements':
              componentToRender = <EntryrequirementsComponent key={renderKey} sectionInfo={sectionContent} {...fetcheddata} />;
              break;
            case 'popular-a-level-subjects':
              componentToRender = <Popularalevelsubjectcomponents key={renderKey} sectionInfo={sectionContent} {...fetcheddata} />;
              break;
            case 'tuition-fees':
              componentToRender = <TutionFeesComponent key={renderKey} sectionInfo={sectionContent} {...fetcheddata} />;
              break;
            case 'latest-reviews':
              componentToRender = <Latestreviewscomponents sectionInfo={sectionContent} fetcheddata={fetcheddata} />;
              break;
            case 'uni-info':
              componentToRender = <UniInfoComponent sectionInfo={sectionContent} {...fetcheddata} />;
              break;
            default:
              componentToRender = null;
              return// Optional: Handle unknown cases
          }
          return (
            <div id={sectionId} key={sectionId}>
              {componentToRender}
            </div>
          );
        })}
      </>


    </div>
  )
}