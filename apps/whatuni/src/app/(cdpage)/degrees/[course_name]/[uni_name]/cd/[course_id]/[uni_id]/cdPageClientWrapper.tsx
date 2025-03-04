'use client'
import dynamic from 'next/dynamic'
const UniInfoComponent = dynamic(() => import("@packages/shared-components/course-details/uni-info/UniInfoComponent"), { ssr: false });
import Courseoptionscomponents from '@packages/shared-components/course-details/course-options/courseoptionscomponents';
import Courseinfocomponents from '@packages/shared-components/course-details/course-info/CourseInfoComponent';
import JumpToComponents from '@packages/shared-components/course-details/jump-to/jumptocomponents';
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
export default function Cdpageclient({ children, courseContent, data, jsonResponse, prams_slug }: any) {

    //console.log("this is the cdpageclientwrapper")
    const [fetcheddata, setFetcheddata] = useState({ ...data });
    const [selectedavilability, setSelectedavailability] = useState(data?.courseInfo?.availability[0]);
    const [startfetch, setStartfetch] = useState(false);
    const [renderKey, setRenderKey] = useState(0);

    useEffect(() => {
        setRenderKey(prev => prev + 1); // Force re-render
    }, [fetcheddata]);
    useEffect(() => {
        async function clientFetch() {
            try {
                //console.log("Fetching data from client side...");
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
                // setFetcheddata(clientfetcheddata);
                //console.log("Client-side fetched data:", data);
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

    //console.log(fetcheddata, "fetcheddtafetcheddtafetcheddtafetcheddtafetcheddta")
    return (

        <div>
            <div >
                <Courseoptionscomponents data={fetcheddata} setFetcheddata={setFetcheddata} selectedavilability={selectedavilability} setSelectedavailability={setSelectedavailability} />
            </div>
            <JumpToComponents sectionsList={courseContent?.sectionsList} />

            <>
                {courseContent?.sectionsList?.map((sectionContent: { sectionName: string, sectionId: string, [key: string]: any }) => {
                    return <div key={sectionContent?.sectionId}>{(() => {
                        switch (sectionContent?.sectionId) {
                            case 'course-info': return <div key={renderKey}>{children}</div>;
                            case 'modules': return <Modulescomponents  {...sectionContent} {...fetcheddata} />;
                            case 'entry-requirements': return <EntryrequirementsComponent key={renderKey} {...sectionContent} {...fetcheddata} />;
                            case 'popular-a-level-subjects': return <Popularalevelsubjectcomponents key={renderKey}  {...sectionContent} {...fetcheddata} />;
                            case 'tuition-fees': return <TutionFeesComponent key={renderKey} {...sectionContent} {...fetcheddata} />;
                            case 'latest-reviews': return <Latestreviewscomponents component fetcheddata={fetcheddata} jsonResponse={jsonResponse} />;
                            case 'uni-info': return <UniInfoComponent  {...sectionContent} {...fetcheddata} />;
                        }
                    })()}</div>
                })}
            </>
            <Othercoursesmaylikecomponents />
            <SimilarCourseComponent {...data} />
            {process.env.PROJECT === "Whatuni" &&
                <Findacoursecomponents />
            }
        </div>
    )
}