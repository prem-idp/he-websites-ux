'use client';

import React from 'react';
import { PercentageBar } from '../common-components/PercentageBar';
import { CourseSection } from '../models/course.model';
import { DATA_SOURCE_PAGE_PATH } from '@packages/constants/whatuni.const';

interface PopularALevelSubjectsComponentProps {
  popularSubjects: any,
  sectionInfo: CourseSection
}

const Popularalevelsubjectcomponents = ({ sectionInfo, popularALevelSubjects }: any) => {
  console.log(popularALevelSubjects,"popularSubjectspopularSubjects")


  return (
    <>
      <div id={sectionInfo?.sectionId} className='popsub-alevel-container'>
        <div className="max-w-container mx-auto">
          <div className='popsub-alevel-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
            <div className='h5 w-full md:w-[289px]'>{sectionInfo?.sectionName}</div>
            <div className='flex flex-col gap-[16px] md:gap-[24px] w-full lg:w-[calc(100%_-_309px)]'>

              {popularALevelSubjects?.map((subjectGroup: any, index: any) => <div key={index} className='card flex flex-col gap-[16px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>
                <div className='card-header flex flex-col gap-[8px]'>
                  <div className='h6 text-black'>{subjectGroup?.name}</div>
                  <p className='para text-black'>{subjectGroup?.description}</p>
                </div>
                {subjectGroup?.aLevelSubjects?.map((subject: any, idx: number) => <PercentageBar key={idx} {...subject} />)}
                <div className='flex items-center gap-[4px] *:text-x-small'>
                  <div className='text-grey300'>DATA SOURCE:</div>
                  <a href={DATA_SOURCE_PAGE_PATH} className='uppercase text-primary-400 hover:underline'>{sectionInfo?.callToAction?.primaryCtaLabel}</a>
                </div>
              </div>)}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popularalevelsubjectcomponents