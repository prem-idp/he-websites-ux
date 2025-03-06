'use client';

import React, { useState } from 'react';
import LeftPannelModal from '@packages/shared-components/course-details/Modal/LeftPannelModal';
import { CourseSection } from '../models/course.model';

interface EntryrequirementsComponentProps extends CourseSection {
  entryRequirements: any[];
}

const EntryrequirementsComponent = ({ sectionId, sectionName, entryRequirements }: EntryrequirementsComponentProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedEntryReq, setSelectedEntryReq] = useState(entryRequirements[0]);

  function togglemodal() {
    setIsOpen((prev) => !prev)
  }

  const changeEntryReq = (item: any) => {
    if (selectedEntryReq?.examType === item?.examType)
      return
    setSelectedEntryReq(() => item[0]);
  }

  return (
    <>
      {isOpen && <LeftPannelModal
        matchKey={'examType'}
        heading='Exam type'
        subHeading='Select a exam type'
        itemList={entryRequirements}
        selectedItems={[selectedEntryReq]}
        isOpen={isOpen}
        onClose={togglemodal}
        onApply={changeEntryReq}
      />}
      <div id={sectionId} className='entryreq-container'>
        <div className="max-w-container mx-auto">
          <div className='entryreq-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
            <div className='h5 w-full md:w-[289px]'>{sectionName}</div>
            <div className='flex w-full lg:w-[calc(100%_-_309px)]'>
              <div className='card flex flex-col gap-[10px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>
                <div className='card-header'>
                  <div className='flex items-start md:items-center  gap-[16px] md:gap-[8px]'>
                    <div className='para font-semibold text-black'>Exam type:</div>
                    <div onClick={() => togglemodal()} className='flex items-center gap-[8px] para font-semibold text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>{selectedEntryReq?.examType}
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#4664DC" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="course-highlight__details w-full grid grid-cols-1 md:grid-cols-2 gap-[16px] bg-primary-50 rounded-[8px] p-[16px]">
                  <div className="course-highlight__option  flex flex-col items-start gap-[16px]">
                    <div className="flex flex-col gap-[4px] *:text-grey300">
                      <div className="para font-semibold text-black">{selectedEntryReq?.examType}</div>
                      {selectedEntryReq?.grades && <p className="small text-black">{selectedEntryReq?.grades} Grades/points required</p>}
                    </div>
                  </div>
                </div>

                <div className='description'>
                  <p className='para font-normal'>{selectedEntryReq?.Details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EntryrequirementsComponent;
