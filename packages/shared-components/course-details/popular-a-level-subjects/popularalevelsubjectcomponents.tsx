'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

interface PopularALevelSubjectsComponentProps {
  popularSubjects: any;
}

const Popularalevelsubjectcomponents = ({ popularSubjects }: PopularALevelSubjectsComponentProps) => {

  const { subjects } = popularSubjects;

  return (
    <>
      <div className='popsub-alevel-container'>
        <div className="max-w-container mx-auto">
          <div className='popsub-alevel-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
            <div className='h5 w-full md:w-[289px]'>Popular A-level subjects</div>
            <div className='flex flex-col gap-[16px] md:gap-[24px] w-full lg:w-[calc(100%_-_309px)]'>

              {subjects?.map((subjectGroup: any,index:any) => <div key={index} className='card flex flex-col gap-[16px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>
                <div className='card-header flex flex-col gap-[8px]'>
                  <div className='h6 text-black'>{subjectGroup?.name}</div>
                  <p className='para text-black'>{subjectGroup?.description}</p>
                </div>
                {subjectGroup?.a_level_subjects?.map((subject: any,index:any) => <div key={index} className='w-full flex flex-col gap-[8px]'>
                  <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                    <div className='w-fit md:w-[205px] order-1 md:order-none small text-grey300'>{subject?.name}</div>
                    <div className="progess-bar flex items-center order-3 md:order-none w-full bg-grey-200 rounded-[2px] h-[4px]">
                      <div className={`progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[4px] h-[8px] w-[${subject?.percentage}%]`}></div>
                    </div>
                    <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>{subject?.percentage}%</div>
                  </div>
                </div>)}

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