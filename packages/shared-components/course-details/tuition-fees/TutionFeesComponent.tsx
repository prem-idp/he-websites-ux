'use client';
import React, { useEffect } from 'react';


import { useState } from 'react'
import LeftPannelModal from '@packages/shared-components/course-details/Modal/LeftPannelModal';
import { poundCostCommaSeparation } from '@packages/lib/utlils/commonFunction';
import Tooltip from '../common-components/Tooltip';
import { CourseSection } from '../models/course.model';
import { DATA_SOURCE_PAGE_PATH } from '@packages/constants/whatuni.const';

interface FeesType {
  "feeType": string,
  "fee": string,
  "duration": string,
  "currency": string,
  "feeDesc": string,
  "state": string,
  "seq_no": number
}


interface TutionFeesComponentProps {
  tutionFees: FeesType[],
  sectionInfo: CourseSection
}

const TutionFeesComponent = ({ sectionInfo, tutionFees }: any) => {

  tutionFees = tutionFees?.length
    ? tutionFees.sort((a: any, b: any) => a.seq_no - b.seq_no).map((item: any, id: number) => ({ ...item, id }))
    : [];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFeesType, setSelectedFeesType] = useState(tutionFees[0]?.length > 0 ? tutionFees[0] : null);
  const [toolTips, setToolTips] = useState({ feesToolTip: '', regionTooltip: '' });

  useEffect(() => {
    updateFeesToolTip();
    updateRegionToolTip();
  }, [selectedFeesType]);

  const str1 = 'Source: UCAS/directly from the institution. Fees can vary – contact the institution for up-to-date info.';
  const str2 = 'Please note: fees do vary so please make sure you contact the institution for up to date information.';
  const strForInternational = 'This is the fee you pay if you are an International student.';
  const str4 = 'This is the fee you pay if you live within';
  const str5_6 = 'Please note, this fee has been confirmed.';
  const str5_7 = 'Please note, this is a with fee and subject to change.';
  const str8 = 'Please confirm the most up to date fee with the individual institution.';
  const str9 = "The amount you'll pay if you come to study here from a country outside the EU.";
  const str10 = "The amount you'll pay if you come to study here from somewhere in the EU.";

  function updateFeesToolTip() {
    let toolTipMsg = '';
    if (selectedFeesType?.fee)
      toolTipMsg = str1;
    setToolTips((prevState: any) => ({ ...prevState, feesToolTip: toolTipMsg }));
  }

  function updateRegionToolTip() {
    let toolTipMsg = '';
    if (selectedFeesType?.feeType?.toLowerCase()?.trim() === 'rest of world')
      toolTipMsg = strForInternational;
    else
      selectedFeesType?.feeType?.toLowerCase()?.trim() === 'eu' ? toolTipMsg = str4 + ' European Union.' : toolTipMsg = str4 + ' ' + selectedFeesType?.feeType + '.';

    if (selectedFeesType && selectedFeesType.state && (selectedFeesType?.feeType?.toLowerCase()?.trim() !== 'england')) {
      if (selectedFeesType?.state?.toLowerCase() === 'set')
        toolTipMsg = toolTipMsg + ' ' + str5_6;
      else
        toolTipMsg = toolTipMsg + ' ' + str5_7;

      if (selectedFeesType?.feeType?.toLowerCase()?.trim() !== 'channel islands' && selectedFeesType?.state?.toLowerCase() !== 'set')
        toolTipMsg = toolTipMsg + ' ' + str8;
    }
    setToolTips((prevState: any) => ({ ...prevState, regionTooltip: toolTipMsg }));
  }

  function togglemodal() {
    setIsOpen((prev) => !prev)
  }

  const changeFeesRegion = (item: any) => {
    if (selectedFeesType?.feeType === item?.feeType)
      return
    setSelectedFeesType(() => item[0]);
  }

  return (
    <>
      {isOpen && <LeftPannelModal
        matchKey={'feeType'}
        heading={'Location'}
        subHeading='Select student location'
        itemList={tutionFees}
        selectedItems={[selectedFeesType]}
        isOpen={isOpen}
        onClose={togglemodal}
        onApply={changeFeesRegion}
      />}
      <div id={sectionInfo?.sectionId} className='tuition-fees-container'>
        <div className="max-w-container mx-auto">
          <div className='tuition-fees-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
            <div className='h5 w-full md:w-[289px]'>{sectionInfo?.sectionName}</div>
            <div className='flex w-full lg:w-[calc(100%_-_309px)]'>
              <div className='card flex flex-col gap-[10px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>
                <div className='card-header'>
                  <div className='flex items-start md:items-center  gap-[16px] md:gap-[8px]'>
                    <div className='para font-semibold text-black'>Student living</div>
                    <div onClick={() => togglemodal()} className='flex items-center gap-[8px] para font-semibold text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>{selectedFeesType?.feeType}
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#4664DC" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* -- */}
                <div className="course-highlight__details w-full grid grid-cols-1 md:grid-cols-2 gap-[16px] bg-blue-50 rounded-[8px] p-[16px]">
                  <div className="course-highlight__option  flex flex-col items-start gap-[16px]">
                    <div className="flex flex-col gap-[4px] *:text-grey300">
                      {selectedFeesType?.fee ? <div className="para font-semibold text-black">
                        <span className='tooltip w-fit group/item para underline relative cursor-pointer pb-[6px] mb-[-6px]'>{poundCostCommaSeparation(+selectedFeesType?.fee)}
                          <Tooltip desc={toolTips.feesToolTip} />
                        </span> per year
                      </div> :
                        <div className="para font-semibold text-black">
                          Not currently available
                        </div>}
                      {selectedFeesType?.fee ? <div className="small text-black">Students from&nbsp;
                        <span className='tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]'>{selectedFeesType?.feeType?.toLowerCase() !== 'rest of world' ? selectedFeesType?.feeType : 'International'}
                          <Tooltip desc={toolTips.regionTooltip} />
                        </span>
                      </div> :
                        <div className="small text-black">
                          The uni hasn't provided this, please contact them for the mpst up-to date information
                        </div>}
                    </div>
                  </div>
                </div>
                {/* -- */}
                <div className='description'>
                  <p className='para font-normal'>{toolTips.regionTooltip}</p>
                </div>
                <div className='flex items-center gap-[4px] *:text-x-small'>
                  <div className='text-grey300'>DATA SOURCE:</div>
                  <span className='text-grey300'></span><a href={DATA_SOURCE_PAGE_PATH} className='text-primary-400 hover:underline'>{sectionInfo?.callToAction?.primaryCtaLabel}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutionFeesComponent;