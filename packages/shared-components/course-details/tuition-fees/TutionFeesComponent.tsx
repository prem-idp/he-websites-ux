'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react'
import Locationmodalcomponents from '@packages/shared-components/course-details/Modal/locationmodalcomponents';

interface FeesType {
  "feeType": string,
  "fee": string,
  "duration": string,
  "currency": string,
  "feeDesc": string,
  "state": string,
  "seq_no": number
}

const TutionFeesComponent = ({ tutionFees }: { tutionFees: FeesType[] }) => {

  tutionFees = tutionFees?.sort((a, b) => a.seq_no - b.seq_no);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFeesType, setSelectedFeesType] = useState(tutionFees[0]);
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
      {isOpen && <Locationmodalcomponents
        heading={'Location'}
        subHeading='Select student location'
        itemList={tutionFees}
        selectedItems={[selectedFeesType]}
        isOpen={isOpen}
        onClose={togglemodal}
        onApply={changeFeesRegion}
      />}
      <div className='tuition-fees-container'>
        <div className="max-w-container mx-auto">
          <div className='tuition-fees-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
            <div className='h5 w-full md:w-[289px]'>Tuition fees</div>
            <div className='flex w-full lg:w-[calc(100%_-_309px)]'>
              <div className='card flex flex-col gap-[10px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>
                <div className='card-header'>
                  <div className='flex items-start md:items-center  gap-[16px] md:gap-[8px]'>
                    <div className='para font-semibold text-black'>Student living</div>
                    <div onClick={() => togglemodal()} className='flex items-center gap-[8px] para font-semibold text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>{selectedFeesType.feeType}
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#4664DC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* -- */}
                <div className="course-highlight__details w-full grid grid-cols-1 md:grid-cols-2 gap-[16px] bg-blue-50 rounded-[8px] p-[16px]">
                  <div className="course-highlight__option  flex flex-col items-start gap-[16px]">
                    <div className="flex flex-col gap-[4px] *:text-grey300">
                      <div className="para font-semibold text-black">
                        <span className='tooltip w-fit group/item para underline relative cursor-pointer pb-[6px] mb-[-6px]'>{selectedFeesType?.fee}
                          {toolTips.feesToolTip && <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                            shadow-custom-12 mt-[8px] absolute top-[17px] right-auto left-[-40px] lg:left-[-146px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[16%] lg:after:left-[50%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                          >
                            {/* <span className="small font-semibold tooltip-head">
                                      Why do we need your dummy text?
                                    </span> */}
                            <p className="x-small font-normal">
                              {toolTips.feesToolTip}
                            </p>
                          </div>}
                        </span> per year</div>
                      <div className="small text-black">Students from&nbsp;
                        <span className='tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]'>{selectedFeesType.feeType?.toLowerCase() !== 'rest of world' ? selectedFeesType.feeType : 'International'}
                          {toolTips.regionTooltip && <div className="tooltip-wrap flex-col w-[266px] md:w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                                shadow-custom-12 mt-[8px] absolute top-[17px] right-auto left-[-40px] lg:left-[-146px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px] after:left-[16%] lg:after:left-[50%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                          >
                            {/* <span className="font-semibold tooltip-head">
                              Why do we need your dummy text?
                            </span> */}
                            <p className="x-small">
                              {toolTips.regionTooltip}
                            </p>
                          </div>}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* -- */}
                <div className='description'>
                  <p className='para font-normal'>{toolTips.regionTooltip}</p>
                </div>
                <div className='flex items-center gap-[4px] *:text-x-small'>
                  <div className='text-grey300'>DATA SOURCE:</div>
                  <span className='text-grey300'>UCAS /</span><Link href='#' className='text-primary-400 hover:underline'>IDP Connect</Link>
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