'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import LeftPannelModal from '@packages/shared-components/course-details/Modal/LeftPannelModal';
import Tooltip from './Tooltip';
import { ordinarySuffix, poundCostCommaSeparation } from '@packages/lib/utlils/commonFunction'

const KeyStatsComponent = ({ subjectArea, uniRankings }: any) => {

  const [selectedSubject, setSelectedSubject] = useState(subjectArea[0]);
  const [isOpen, setIsOpen] = useState(false)
  function togglemodal() {
    setIsOpen((prev) => !prev)
  }

  const changeFeesRegion = (item: any) => {
    if (selectedSubject?.subjectName === item?.subjectName)
      return
    setSelectedSubject(() => item[0]);
  }

  return (
    <>
      {(isOpen && !!subjectArea) && <LeftPannelModal
        matchKey='subjectName'
        heading='Subjects'
        subHeading='Select a subject'
        itemList={subjectArea}
        selectedItems={[selectedSubject]}
        isOpen={isOpen}
        onClose={togglemodal}
        onApply={changeFeesRegion}
      />}
      <div className='keystats-container bg-grey-600 p-[24px] md:p-[32px] flex flex-col gap-[32px] rounded-[8px]'>
        <div className='keystats-inner-row flex flex-col gap-[8px]'>
          <div className='keystats-inner-header flex flex-col md:flex-row items-start md:items-center justify-between  gap-[16px] md:gap-[8px]'>
            <div className='h4 text-white'>Key stats</div>
            <div onClick={() => togglemodal()} className='flex items-center gap-[8px] para font-semibold text-white underline cursor-pointer'>{selectedSubject?.subjectName}
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#fff" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div className='keystats-body grid grid-cols-1 md:grid-cols-3 gap-[16px]'>
            {!!uniRankings?.length && uniRankings.map((rank: any, idx: number) => <div key={idx} className="course-highlight__option flex items-start gap-[8px]">
              <Image src="/static/assets/icons/course-details/wusca_ranking_stats_icon.svg" alt="academic-cap" width="32" height="32" />
              <div className="flex flex-col gap-[4px] *:text-white">
                <div className="para-lg font-semibold">{rank?.ranking}</div>
                <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">
                  {rank?.totalRank ? (rank?.rank + "/" + rank?.totalRank) : ordinarySuffix(rank?.rank)}
                  <Tooltip heading={rank?.toolTipHeading} desc={rank?.source} />
                </div>
              </div>
            </div>)}
          </div>
        </div>
        <div className='keystats-inner-row flex flex-col gap-[8px]'>
          <div className='keystats-inner-header flex flex-col gap-[16px] md:gap-[8px]'>
            <div className='h4 text-white'>Animation</div>
            <div className='flex flex-col md:flex-row justify-between gap-[16px] w-full *:text-small *:text-white'>
              {!!selectedSubject?.dropOutRate && <div className='w-full flex flex-col justify-between gap-[4px]'>
                <div className='flex items-center justify-between'>
                  <div>
                    <span>Drop-out rate</span>
                  </div>
                  <span className='tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]'>
                    {selectedSubject?.dropOutRate}%
                    <Tooltip heading={'CUG Subject Ranking?'} desc={'Source: Complete University Guide 2025.'} />
                  </span>
                </div>
                <div className=" progess-bar bg-primary-400 rounded-[8px] h-[8px] overflow-hidden">
                  <div style={{ width: selectedSubject?.dropOutRate + "%" }} className="progess-bar__line transition-all duration-[3s] bg-primary-200 h-[8px]"></div>
                </div>
              </div>}
              {!!selectedSubject?.graduatesPercent && <div className='w-full flex flex-col justify-between gap-[4px]'>
                <div className='flex items-center justify-between'>
                  <div>
                    <span>Employment rate</span>
                  </div>
                  <span className='tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]'>{selectedSubject?.graduatesPercent}%
                    <Tooltip heading={'CUG Subject Ranking?'} desc={'Source: Complete University Guide 2025.'} />
                  </span>
                </div>
                <div className=" progess-bar bg-primary-400 rounded-[8px] h-[8px] overflow-hidden">
                  <div style={{ width: selectedSubject?.graduatesPercent + "%" }} className="progess-bar__line transition-all duration-[3s] bg-primary-200 h-[8px]"></div>
                </div>
              </div>}
            </div>
          </div>
        </div>
        {!!(selectedSubject?.salary6Months || selectedSubject?.salary6MonthsAtUni) && <div className='keystats-inner-row flex flex-col gap-[8px]'>
          <div className='keystats-inner-header flex flex-col gap-[16px] md:gap-[8px]'>
            <div className='h4 text-white'>Average salary</div>
          </div>
          <div className='keystats-body grid grid-cols-1 md:grid-cols-2 gap-[16px]'>
            {!!selectedSubject?.salary6MonthsAtUni && <div className="course-highlight__option flex items-start">
              <div className="flex flex-col gap-[4px] *:text-white">
                <div className="para-lg font-semibold">{selectedSubject?.subjectName} graduate salary at this uni</div>
                <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">{poundCostCommaSeparation(+selectedSubject?.salary6MonthsAtUni)}
                  <Tooltip heading={'CUG Subject Ranking?'} desc={'Source: Complete University Guide 2025.'} />
                </div>
              </div>
            </div>}
            {!!selectedSubject?.salary6Months && <div className="course-highlight__option flex items-start">
              <div className="flex flex-col gap-[4px] *:text-white">
                <div className="para-lg font-semibold">UK {selectedSubject?.subjectName} graduate salary</div>
                <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">{poundCostCommaSeparation(+selectedSubject?.salary6Months)}
                  <Tooltip heading={'CUG Subject Ranking?'} desc={'Source: Complete University Guide 2025.'} />
                </div>
              </div>
            </div>}
          </div>
        </div>}
        <div className='keystats-inner-row'>
          <div className='flex items-center gap-[4px] *:text-x-small *:font-semibold *:tracking-[1px]'>
            <div className='text-white'>SOURCE:</div>
            <Link href='/degrees/jsp/search/kisdataStatic.jsp' className='uppercase text-white underline'>UNISTATS,</Link>
            <Link href='/degrees/jsp/search/kisdataStatic.jsp' className='uppercase text-white underline'>UCAS / HESA</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyStatsComponent;