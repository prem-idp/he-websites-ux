'use client';

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import LeftPannelModal from '@packages/shared-components/course-details/Modal/LeftPannelModal';
import Tooltip from '../common-components/Tooltip';
import { ordinarySuffix, poundCostCommaSeparation } from '@packages/lib/utlils/commonFunction'
import { DATA_SOURCE_PAGE_PATH } from '@packages/constants/whatuni.const';

const tooltipsMapper = [
  {
    internalName: "Course info - WUSCA Ranking",
    key: "wuscaRanking"
  },
  {
    internalName: "Course info - CUG Ranking",
    key: "cugRanking"
  },
  {
    internalName: "Course info - CUG Subject Ranking",
    key: "cugSubjectRanking"
  },
  {
    internalName: "Course info - Drop-out rate",
    key: "dropOutRate"
  },
  {
    internalName: "Course info - Employment rate",
    key: "employmentRate"
  },
  {
    internalName: "Course info - Average salary",
    key: "averageSalary"
  },
  {
    internalName: "Course info - UK graduate salary",
    key: "ukAverageSalary"
  }
];

interface KeyStatsComponentProps {
  subjectArea: any,
  uniRankings: any,
  tooltipList: any,
  dataSource: any
}

const KeyStatsComponent = ({ subjectArea, uniRankings, tooltipList, dataSource }: KeyStatsComponentProps) => {
  console.log(uniRankings,"uniRankingsuniRankings")
  const [selectedSubject, setSelectedSubject] = useState(subjectArea?.[0] || null);
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipContent, setTooltipContent] = useState<any>(tooltipList);

  useEffect(() => {
    let tempTooltipContent: any = {};
    tooltipList?.forEach((tooltipContent: any) => {
      for (let i of tooltipsMapper) {
        if (tooltipContent?.internalName?.toLowerCase() === i.internalName?.toLowerCase()) {
          tempTooltipContent[i.key] = tooltipContent;
          break;
        }
      }
    });
    setTooltipContent(() => tempTooltipContent);
  }, [tooltipList]);

  function toggleModal() {
    setIsOpen((prev) => !prev)
  }

  const changeFeesRegion = (item: any) => {
    if (selectedSubject?.subjectName === item?.subjectName)
      return
    setSelectedSubject(() => item[0]);
  }

  function getStatsImgPath(rank: string) {
    const pathPrefix = '/static/assets/icons/course-details/';
    switch (true) {
      case rank.toLowerCase().includes('complete university guide ranking'):
        return {
          "imgUrl": (pathPrefix + 'cug_ranking_stats_icon.svg'),
          "heading": tooltipContent?.cugRanking?.sectionTitle,
          "desc": tooltipContent?.cugRanking?.shortDescription
        };
      case rank.toLowerCase().includes('wusca'):
        return {
          "imgUrl": (pathPrefix + 'wusca_ranking_stats_icon.svg'),
          "heading": tooltipContent?.wuscaRanking?.sectionTitle,
          "desc": tooltipContent?.wuscaRanking?.shortDescription
        };
      default:
        return {
          "imgUrl": (pathPrefix + 'cug_subject_stats_icon.svg'),
          "heading": tooltipContent?.cugSubjectRanking?.sectionTitle,
          "desc": tooltipContent?.cugSubjectRanking?.shortDescription
        };
    }
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
        onClose={toggleModal}
        onApply={changeFeesRegion}
      />}
      <div className='px-[16px] md:px-[20px] xl:px-[0]'>
        <div className='keystats-container bg-grey-600 p-[24px] md:p-[32px] flex flex-col gap-[32px] rounded-[8px]'>
          <div className='keystats-inner-row flex flex-col gap-[8px]'>
            <div className='keystats-inner-header flex flex-col md:flex-row items-start md:items-center justify-between  gap-[16px] md:gap-[8px]'>
              <div className='h4 text-white'>Key stats</div>
              <div onClick={() => toggleModal()} className='flex items-center gap-[8px] para font-semibold text-white underline cursor-pointer'>{selectedSubject?.subjectName}
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#fff" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className='keystats-body grid grid-cols-1 md:grid-cols-3 gap-[16px]'>
              {uniRankings?.length && uniRankings.map((rank: any, idx: number) => <div key={idx} className="course-highlight__option flex items-start gap-[8px]">
                <Image src={getStatsImgPath(rank?.ranking)?.imgUrl} alt="academic-cap" width={32} height={32} />
                <div className="flex flex-col gap-[4px] *:text-white">
                  <div className="para-lg font-semibold line-line-clamp-2">{rank?.ranking}</div>
                  <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">
                    {rank?.totalRank ? (rank?.rank + "/" + rank?.totalRank) : ordinarySuffix(rank?.rank)}
                    <Tooltip heading={getStatsImgPath(rank?.ranking)?.heading} desc={getStatsImgPath(rank?.ranking)?.desc} />
                  </div>
                </div>
              </div>)}
            </div>
          </div>
          <div className='keystats-inner-row flex flex-col gap-[8px]'>
            <div className='keystats-inner-header flex flex-col gap-[16px] md:gap-[8px]'>
              <div className='h4 text-white'>{selectedSubject?.subjectName}</div>
              <div className='flex flex-col md:flex-row justify-between gap-[16px] w-full *:text-small *:text-white'>
                {!!selectedSubject?.dropOutRate && <div className='w-full flex flex-col justify-between gap-[4px]'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <span>Drop-out rate</span>
                    </div>
                    <span className='tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]'>
                      {selectedSubject?.dropOutRate}%
                      <Tooltip heading={tooltipContent?.dropOutRate?.sectionTitle} desc={tooltipContent?.dropOutRate?.shortDescription} />
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
                      <Tooltip heading={tooltipContent?.employmentRate?.sectionTitle} desc={tooltipContent?.employmentRate?.shortDescription} />
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
                  <div className="para-lg font-semibold line-line-clamp-2">{selectedSubject?.subjectName} graduate salary at this uni</div>
                  <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">£{poundCostCommaSeparation(selectedSubject?.salary6MonthsAtUni)}
                    <Tooltip heading={tooltipContent?.averageSalary?.sectionTitle} desc={tooltipContent?.averageSalary?.shortDescription} />
                  </div>
                </div>
              </div>}
              {!!selectedSubject?.salary6Months && <div className="course-highlight__option flex items-start">
                <div className="flex flex-col gap-[4px] *:text-white">
                  <div className="para-lg font-semibold line-line-clamp-2">UK {selectedSubject?.subjectName} graduate salary</div>
                  <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">£{poundCostCommaSeparation(selectedSubject?.salary6Months)}
                    <Tooltip heading={tooltipContent?.ukAverageSalary?.sectionTitle} desc={tooltipContent?.ukAverageSalary?.shortDescription} />
                  </div>
                </div>
              </div>}
            </div>
          </div>}
          <div className='keystats-inner-row'>
            <div className='flex items-center gap-[4px] *:text-x-small *:font-semibold *:tracking-[1px]'>
              <div className='text-white'>SOURCE:</div>
              <a href={DATA_SOURCE_PAGE_PATH} className='uppercase text-white underline'>{dataSource?.primaryCtaLabel}</a>
              {/* <a href={DATA_SOURCE_PAGE_PATH} className='uppercase text-white underline'>UCAS / HESA</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyStatsComponent;