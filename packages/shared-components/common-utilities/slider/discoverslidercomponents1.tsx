"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination} from 'swiper/modules';

const Discoverslidercomponents1 = () => {
  
  return (
    <> 
        <div className="slider-container">
        <div className="discover-card">
                <Link href="#" className='block bg-primary-100 rounded-[8px] overflow-hidden'>
                    <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>courses</div>
                            <h5 className='font-bold'>Looking for courses?</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image1x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>                                                  
            </div>
        </div>
    </>
  );
};

export default Discoverslidercomponents1;
