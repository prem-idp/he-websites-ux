'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { PercentageBar } from '../common-components/PercentageBar';
import { CourseSection } from '../models/course.model';

interface PopularALevelSubjectsComponentProps extends CourseSection {
  popularSubjects: any;
}

const Popularalevelsubjectcomponents = ({ sectionId, sectionName, popularSubjects }: PopularALevelSubjectsComponentProps) => {

  const { subjects } = popularSubjects;

  return (
    <>
      <div id={sectionId} className='popsub-alevel-container'>
        <div className="max-w-container mx-auto">
          <div className='popsub-alevel-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
            <div className='h5 w-full md:w-[289px]'>{sectionName}</div>
            <div className='flex flex-col gap-[16px] md:gap-[24px] w-full lg:w-[calc(100%_-_309px)]'>

              {subjects?.map((subjectGroup: any, index: any) => <div key={index} className='card flex flex-col gap-[16px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>
                <div className='card-header flex flex-col gap-[8px]'>
                  <div className='h6 text-black'>{subjectGroup?.name}</div>
                  <p className='para text-black'>{subjectGroup?.description}</p>
                </div>
                {subjectGroup?.a_level_subjects?.map((subject: any, idx: number) => <PercentageBar key={idx} {...subject} />)}
                <div className='flex items-center gap-[4px] *:text-x-small'>
                  <div className='text-grey300'>DATA SOURCE:</div>
                  <Link href='#' className='uppercase text-primary-400 hover:underline'>{popularSubjects?.data_source}</Link>
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