'use client';

import React from 'react';
import { useState } from 'react';
import LatestReviewComponent from '../common-components/latestreviewComponent';
import OverallRating from './OverallRating';
import LeftPannelModal from '../Modal/LeftPannelModal';
import { CourseSection } from '../models/course.model';

interface LatestReviewsComponentProps {
  fetcheddata: any,

  sectionInfo: CourseSection
}

const LatestReviewsComponent = ({ fetcheddata, sectionInfo }: LatestReviewsComponentProps) => {

 

  return (
    <>
      <div id={sectionInfo?.sectionId} className='latest-reviews-container'>
        <div className="max-w-container mx-auto">
          <div className='latest-reviews-card-container flex flex-col lg:flex-row justify-between gap-[20px] py-[40px]'>
            <div className='h5 w-full md:w-[289px] px-[16px] md:px-[20px] xl:px-[0]'>{sectionInfo?.sectionName}</div>
            <div className='flex flex-col gap-[24px] w-full lg:w-[calc(100%_-_309px)]'>
              <OverallRating fetcheddata={fetcheddata}/>
              <LatestReviewComponent heading='Latest animation reviews'  jsonResponse={fetcheddata} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestReviewsComponent;