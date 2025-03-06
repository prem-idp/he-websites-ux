'use client'
import dynamic from 'next/dynamic'
const UniInfoComponent = dynamic(() => import("@packages/shared-components/course-details/uni-info/UniInfoComponent"));
const Courseoptionscomponents = dynamic(() => import('@packages/shared-components/course-details/course-options/courseoptionscomponents'));
const JumpToComponents = dynamic(() => import('@packages/shared-components/course-details/jump-to/jumptocomponents'));
const Modulescomponents = dynamic(() => import('@packages/shared-components/course-details/modules/ModulesComponent'));
const EntryrequirementsComponent = dynamic(() => import('@packages/shared-components/course-details/entery-requirements/EntryrequirementsComponent'));
const TutionFeesComponent = dynamic(() => import('@packages/shared-components/course-details/tuition-fees/TutionFeesComponent'));
const Popularalevelsubjectcomponents = dynamic(() => import('@packages/shared-components/course-details/popular-a-level-subjects/popularalevelsubjectcomponents'));
const Latestreviewscomponents = dynamic(() => import('@packages/shared-components/course-details/latest-reviews/LatestReviewsComponent'));
import { useState, useEffect } from 'react';
export default function Cdpageclient({ children, courseContent, data, prams_slug }: any) {


  const [fetcheddata, setFetcheddata] = useState({ ...data });
  const [selectedavilability, setSelectedavailability] = useState(data?.courseInfo?.availability[0]);
  const [startfetch, setStartfetch] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [fetcheddata]);  


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
      <JumpToComponents sectionsList={courseContent?.sectionsList} />
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