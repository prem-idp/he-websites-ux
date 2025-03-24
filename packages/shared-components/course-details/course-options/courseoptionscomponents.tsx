'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Courseinfomodalcomponents from "@packages/shared-components/course-details/Modal/courseinfomodalcomponents"
import { useState } from 'react'
const Courseoptionscomponents = ({ data, setFetcheddata, setSelectedavailability, selectedavilability ,courseContent}: any) => {
    // console.log(courseContent,"1231")
  const [isOpen, setIsOpen] = useState(false)
  function togglemodal() {

    setIsOpen((prev) => !prev)
  }
  
  const getCourseInfoCTA = (courseContent: any) => {
    const courseInfo = courseContent?.sectionsList?.find(
      (item: any) => item.internalName === "courseInfo"
    );
    return courseInfo;
  }
  return (
    <>
      {<Courseinfomodalcomponents isOpen={isOpen} onClose={togglemodal} data={data} setSelectedavailability={setSelectedavailability} setFetcheddata={setFetcheddata} selectedavilability={selectedavilability}/>}
      <section className='bg-primary-50 border-b border-primary-100'>
        <div className="max-w-container mx-auto">
          <div className='card-container flex flex-col gap-[24px] py-[24px] px-[16px] md:px-[20px] lg:px-[0]'>
            <div className='card-header flex flex-col lg:flex-row gap-[24px] md:gap-[16px] items-start justify-between'>
              <div className='flex flex-col md:flex-row items-start md:items-center  gap-[16px] md:gap-[8px]'>
                <div className='h5 text-black'>Different course options</div>
                {data?.courseInfo?.availability?.length > 0 &&
                  <button type='button' onClick={() => togglemodal()} className='flex items-center gap-[8px] para font-semibold text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'> {data?.courseInfo?.availability?.length || 0} options available
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#4664DC" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                }
              </div>
              <div className='flex items-center gap-[4px] *:text-x-small *:font-normal'>
                <div className='text-grey300'>DATA SOURCE:</div>
                <Link target={getCourseInfoCTA(courseContent)?.callToAction?.primaryCtaTarget.toLowerCase() === "open in new tab" ? "_blank" : " _self"}
            rel={getCourseInfoCTA(courseContent)?.callToAction?.primaryCtaTarget.toLowerCase() === "open in new tab" ? "_blank" : " _self"}  href={getCourseInfoCTA(courseContent)?.callToAction?.primaryCtaUrl} className='text-primary-400 uppercase hover:text-primary-500 hover:underline'>{getCourseInfoCTA(courseContent)?.callToAction?.primaryCtaLabel}</Link>
              </div>
            </div>
            <div className='card-body'>
              <div className="course-highlight__details grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[16px_24px] md:gap-[24px_54px]">
                <div className="course-highlight__option flex flex-col items-start gap-[16px]">
                  <Image src="/static/assets/icons/course-details/qualification_icon.svg" alt="academic-cap" width={32} height={32} />
                  <div className="flex flex-col gap-[4px] *:text-grey300">
                    <div className="para font-semibold">Qualification</div>
                    <p className="para font-normal">{selectedavilability?.qualification}</p>
                  </div>
                </div>
                <div className="course-highlight__option flex flex-col items-start gap-[16px]">
                  <Image src="/static/assets/icons/course-details/location_icon.svg" alt="academic-cap" width={32} height={32} />
                  <div className="flex flex-col gap-[4px] *:text-grey300">
                    <div className="para font-semibold">Location</div>
                    <p className="para font-normal">{selectedavilability?.venueName}</p>
                  </div>
                </div>
                <div className="course-highlight__option flex flex-col items-start gap-[16px]">
                  <Image src="/static/assets/icons/course-details/study_mode_icon.svg" alt="academic-cap" width={32} height={32} />
                  <div className="flex flex-col gap-[4px] *:text-grey300">
                    <div className="para font-semibold">Study mode</div>
                    <p className="para font-normal">{selectedavilability?.studyModeDesc}</p>
                  </div>
                </div>
                <div className="course-highlight__option flex flex-col items-start gap-[16px]">
                  <Image src="/static/assets/icons/course-details/start_date_icon.svg" alt="academic-cap" width={32} height={32} />
                  <div className="flex flex-col gap-[4px] *:text-grey300">
                    <div className="para font-semibold">Start date </div>
                    <p className="para font-normal">{selectedavilability?.startDateMonth}</p>
                  </div>
                </div>
                <div className="course-highlight__option flex flex-col items-start gap-[16px]">
                  <Image src="/static/assets/icons/course-details/duration_icon.svg" alt="academic-cap" width={32} height={32} />
                  <div className="flex flex-col gap-[4px] *:text-grey300">
                    <div className="para font-semibold">Duration</div>
                    <p className="para font-normal">{selectedavilability?.durationDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Courseoptionscomponents;