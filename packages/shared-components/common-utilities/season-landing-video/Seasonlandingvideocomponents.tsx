"use client";
import React from 'react';
import Link from 'next/link';
import Video from '@packages/shared-components/common-utilities/videos/video';
import Searchcomponents from '@packages/shared-components/home/home-search/Searchcomponents';

const Seasonlandingcomponents = () => {
  return (
    <>
      <section className="season-landing-container bg-primary-100">
        <div className="max-w-container mx-auto">
          <div className="season-landing-card flex flex-col gap-[32px] lg:gap-[24px] md:px-[20px]  md:py-[24px] xl:px-[0]">
            <div className="video-container flex flex-col lg:flex-row gap-[20px] md:gap-[32px] lg:gap-[40px]">
              <div className="video-inner-left relative w-full lg:w-[598px] min-h-[210px] md:min-h-[300x] bg-grey-400 md:rounded-[8px] md:overflow-hidden">
                <Video />
              </div>
              <div className="video-inner-right flex flex-col flex-1 justify-center  px-[16px] md:px-[0] max-md:pb-[24px]">
                <div className='flex flex-col gap-[16px]'>
                  <div className='flex flex-col gap-[4px]'>
                    <div className='text-heading-lg md:text-heading-xl font-farro font-bold' aria-labelledby="header" aria-label="heading">
                      Heading
                    </div>
                    <p className="para-lg" aria-label="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Praesent a risus dolor sit amet, consectetur adipiscing elit.
                          Praesent a risus
                    </p>
                  </div>
                  <Link href="#" className="flex items-center gap-[6px] w-fit bg-primary-400 hover:bg-primary-500 text-white rounded-[20px] font-semibold text-small px-[20px] py-[10px] cursor-pointer">
                    Learn more
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.55556 1.55554L15 6.99999M15 6.99999L9.55555 12.4444M15 6.99999L1 6.99999" stroke="#fff" strokeWidth="1.67"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <Searchcomponents />
        </div>
      </div>  
      </section>
    </>
  );
};

export default Seasonlandingcomponents;
