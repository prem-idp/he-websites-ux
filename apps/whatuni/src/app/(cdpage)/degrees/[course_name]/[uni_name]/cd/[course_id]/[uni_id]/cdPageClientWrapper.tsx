'use client'
import dynamic from 'next/dynamic'
const UniInfoComponent = dynamic(() => import("@packages/shared-components/course-details/uni-info/UniInfoComponent" /* webpackChunkName:'uniinfo' */));
const Courseoptionscomponents = dynamic(() => import('@packages/shared-components/course-details/course-options/courseoptionscomponents' /* webpackChunkName:"courseoptions" */));
const JumpToComponents = dynamic(() => import('@packages/shared-components/course-details/jump-to/jumptocomponents' /* webpackChunkName:"jumptocomponents" */));
const Modulescomponents = dynamic(() => import('@packages/shared-components/course-details/modules/ModulesComponent' /* webpackChunkName:"modules" */));
const EntryrequirementsComponent = dynamic(() => import('@packages/shared-components/course-details/entery-requirements/EntryrequirementsComponent' /* webpackChunkName:"entryrequirements" */));
const TutionFeesComponent = dynamic(() => import('@packages/shared-components/course-details/tuition-fees/TutionFeesComponent' /* webpackChunkName:"tutionfees" */));
const Popularalevelsubjectcomponents = dynamic(() => import('@packages/shared-components/course-details/popular-a-level-subjects/popularalevelsubjectcomponents' /*webpackChunkName:"popularsubject"*/));
const Latestreviewscomponents = dynamic(() => import('@packages/shared-components/course-details/latest-reviews/LatestReviewsComponent'/* webpackChunkName:"latestreview" */));
const Courseinfocomponents = dynamic(() => import('@packages/shared-components/course-details/course-info/CourseInfoComponent' /* webpackChunkName:"CourseInfoComponent" */));
const ReviewPannelComponent = dynamic(() => import('@packages/shared-components/common-utilities/modal/review-lightbox/ReviewPannel' /* webpackChunkName:"CourseInfoComponent" */));
import { useState, useEffect, useRef } from 'react';
export default function Cdpageclient({ courseContent, data, prams_slug }: any) {

  const [fetcheddata, setFetcheddata] = useState({ ...data });
  const [selectedavilability, setSelectedavailability] = useState(data?.courseInfo?.availability?.length > 0 ? data?.courseInfo?.availability[0] : null);
  const [startfetch, setStartfetch] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setRenderKey(prev => prev + 1);
  }, [fetcheddata]);


  useEffect(() => {
    async function clientFetch() {
      setLoading(true)
      try {
        const searchParams = new URLSearchParams({
          courseId: String(prams_slug?.course_id || ""),
          affiliateId: String(process.env.AFFILATE_ID || ""),
          collegeId: String(prams_slug?.uni_id || ""),
        });
        const url = `${process.env.NEXT_PUBLIC_DOMSERVICE_API_DOMAIN}/dev-dom-search-bff/v1/search/getCourseDetails?${searchParams.toString()}`;
        const response = await fetch(url, {
          method: "GET",
          headers: {

            "Content-Type": "application/json",
           "x-api-key": `${process.env.NEXT_PUBLIC_DOMSERVICE_X_API_KEY}`,
          },
          cache: "force-cache",
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const clientfetcheddata = await response.json();
        setFetcheddata((prevData: any) => ({ ...prevData, ...clientfetcheddata }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false)
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

      <Courseoptionscomponents data={fetcheddata} setFetcheddata={setFetcheddata} selectedavilability={selectedavilability} setSelectedavailability={setSelectedavailability} courseContent={courseContent} />
      <JumpToComponents sectionsList={courseContent?.sectionsList} data={fetcheddata} />
      <>
        {courseContent?.sectionsList?.map((sectionContent: any) => {
          const { sectionId } = sectionContent;

          let componentToRender;
          switch (sectionId) {
            case "courseinfo":
              if (!data?.courseInfo) return null;
              componentToRender = <Courseinfocomponents key={renderKey} data={data} sectionInfo={sectionContent} loading={loading} />;
              break;
            case 'modules':
              if (!data?.modules?.length) return null;
              componentToRender = <Modulescomponents sectionInfo={sectionContent} {...fetcheddata} />;
              break;
            case 'entryrequirements':
              if (!data?.entryRequirements) return null;
              componentToRender = <>
                {loading ? <p> EntryrequirementsComponent Loading...</p> :
                  <EntryrequirementsComponent key={renderKey} sectionInfo={sectionContent} {...fetcheddata} />
                }
              </>
              break;
            case 'popularalevelsubjects':
              if (!data?.popularALevelSubjects?.length) return null;
              componentToRender = <>
                {loading ? <p> Popularalevelsubjectcomponents Loading...</p> :
                  <Popularalevelsubjectcomponents key={renderKey} sectionInfo={sectionContent} {...fetcheddata} />
                }
              </>
              break;

            case 'tutionfees':
              if (!data?.tutionFees?.length) return null;
              componentToRender = <>
                {loading ? <p> TutionFeesComponent Loading...</p> :
                  <TutionFeesComponent key={renderKey} sectionInfo={sectionContent} {...fetcheddata} />
                }
              </>
              break;
            case 'latestreviews':
              if (!data?.latestReviews?.length && !data?.reviewBreakdown?.length) return null
              componentToRender = <Latestreviewscomponents sectionInfo={sectionContent} fetcheddata={fetcheddata} />;
              break;
            case 'uniinfo':
              if (!data?.uniInfo) return null;
              componentToRender = <UniInfoComponent sectionInfo={sectionContent} {...fetcheddata} />;
              break;
            default:
              componentToRender = null;
              return;
          }

          return (
            <div id={sectionId} key={sectionId}>
              {componentToRender}
            </div>
          );
        })}
      </>
      {false && <ReviewPannelComponent />}
    </div>
  )
}