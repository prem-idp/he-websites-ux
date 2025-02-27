'use client';

import React from 'react';
import { useState } from 'react';
import Subjectmodalcomponents from '@packages/shared-components/course-details/Modal/subjectmodalcomponents';
import ReviewComponent from '../common-components/ReviewComponent';
import OverallRating from './OverallRating';
import LeftPannelModal from '../Modal/LeftPannelModal';

interface LatestReviewsComponentProps {
  section: any
}

const LatestReviewsComponent = ({ section }: LatestReviewsComponentProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<any>();

  function toggleModal() {
    setIsOpen((prev) => !prev);
  }

  const changeFeesRegion = (item: any) => {
    if (selectedSubject?.feeType === item?.feeType)
      return
    setSelectedSubject(() => item[0]);
  }

  return (
    <>
      {(isOpen) && <LeftPannelModal
        matchKey='subjectName'
        heading='Subjects'
        subHeading='Select a subject'
        itemList={[]}
        selectedItems={[selectedSubject]}
        isOpen={isOpen}
        onClose={toggleModal}
        onApply={changeFeesRegion}
      />}
      <div className='latest-reviews-container'>
        <div className="max-w-container mx-auto">
          <div className='latest-reviews-card-container flex flex-col lg:flex-row justify-between gap-[20px] py-[40px]'>
            <div className='h5 w-full md:w-[289px] px-[16px] md:px-[20px] xl:px-[0]'>Latest reviews</div>
            <div className='flex flex-col gap-[24px] w-full lg:w-[calc(100%_-_309px)]'>
              <OverallRating />
              <ReviewComponent heading='Latest animation reviews' toggleModal={toggleModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestReviewsComponent;