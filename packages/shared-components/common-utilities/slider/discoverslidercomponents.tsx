"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {FreeMode, Navigation, Pagination} from 'swiper/modules';
import Discovercard from '../cards/discover/discovercard';

const Discoverslidercomponents1 = () => {

// Toggle Menu
const [isMobile, setIsMobile] = useState(false);
const [isOpen, setIsOpen] = useState(false);
const mobileToggleOpen = () => {
  setIsOpen(!isOpen);
};

useEffect(() => {
const handleResize = () => {
  setIsMobile(window.innerWidth <= 991);
};
handleResize();
window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
}, []);    
  
  return (
    <> 
    
    {isMobile ? (
    <div className='slider-container'>
   <Swiper
   pagination={true}
   breakpoints={{
     320: {
       slidesPerView: 1,
       spaceBetween: 8,
     },
     768: {
       slidesPerView: 2,
       spaceBetween: 16,
     },
   }}
   modules={[FreeMode, Pagination]}
   className="MultiSwiper">
         <SwiperSlide>
         <div className="discover">
           <Link href="" className='block bg-blue-100 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'>
               <div className='discover-card flex justify-between gap-[8px]'>
                   <div className="flex flex-col justify-between p-[20px] pr-[0]">
                       <div className='w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>courses</div>
                       <h5 className='font-bold'>Looking for courses?</h5>
                   </div>
                   <Image src="/assets/images/discover/discover-feature-image1x3x.png" width="186" height="200"  alt='discover'/>
               </div>
           </Link>                                                  
       </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="discover">
           <Link href="" className='block bg-secondary-200 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'>    
                   <div className='discover-card flex justify-between gap-[8px]'>
                   <div className="flex flex-col justify-between p-[20px] pr-[0]">
                       <div className='w-fit uppercase font-bold x-small text-positive-dark bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>universities</div>
                       <h5 className='font-bold'>Pick your perfect uni</h5>
                   </div>
                   <Image src="/assets/images/discover/discover-feature-image2x3x.png" width="186" height="200"  alt='discover'/>
               </div>
           </Link>
           </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="discover">
           <Link href="" className='block bg-tertiary-100 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'> 
               <div className='discover-card flex justify-between gap-[8px]'>
                   <div className="flex flex-col justify-between p-[20px] pr-[0]">
                       <div className='w-fit uppercase font-bold x-small text-negative-dark bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>career</div>
                       <h5 className='font-bold'>Take our careers quiz</h5>
                   </div>
                   <Image src="/assets/images/discover/discover-feature-image3x3x.png" width="186" height="200"  alt='discover'/>
               </div>
           </Link>
           </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="discover">
           <Link href="" className='block bg-blue-100 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'>    
               <div className='discover-card flex justify-between gap-[8px]'>
                   <div className="flex flex-col justify-between p-[20px] pr-[0]">
                       <div className='w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>Subject guides</div>
                       <h5 className='font-bold'>Find out what to study</h5>
                   </div>
                   <Image src="/assets/images/discover/discover-feature-image1x3x.png" width="186" height="200"  alt='discover'/>
               </div>
           </Link>
           </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="discover">
           <Link href="" className='block bg-secondary-200 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'>    
               <div className='discover-card flex justify-between gap-[8px]'>
                   <div className="flex flex-col justify-between p-[20px] pr-[0]">
                       <div className='w-fit uppercase font-bold x-small text-positive-dark bg-positive-light  white/[.6] px-[6px] py-[2px] rounded-[4px]'>open days</div>
                       <h5 className='font-bold'>Find an open day</h5>
                   </div>
                   <Image src="/assets/images/discover/discover-feature-image2x3x.png" width="186" height="200"  alt='discover'/>
               </div>
           </Link>
           </div>
         </SwiperSlide>
         <SwiperSlide>
         <div className="discover">
           <Link href="" className='block bg-tertiary-100 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'>    
               <div className='discover-card flex justify-between gap-[8px]'>
                   <div className="flex flex-col justify-between p-[20px] pr-[0]">
                       <div className='w-fit uppercase font-bold x-small text-negative-dark bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>app</div>
                       <h5 className='font-bold'>Download the app</h5>
                   </div>
                   <Image src="/assets/images/discover/discover-feature-image3x3x.png" width="186" height="200"  alt='discover'/>
               </div>
           </Link>
           </div>
         </SwiperSlide>
       </Swiper>
       </div>
    ) : (
            <div className='discover grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[20px]'>
              <div className="discover">
                <Link href="" className='block bg-blue-100 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'>
                    <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>courses</div>
                            <h5 className='font-bold'>Looking for courses?</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image1x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>                                                  
                </div>
              <div className="discover">
                <Link href="" className='block bg-secondary-200 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'>    
                        <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-positive-dark bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>universities</div>
                            <h5 className='font-bold'>Pick your perfect uni</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image2x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>
                </div>
              <div className="discover">
                <Link href="" className='block bg-tertiary-100 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'> 
                    <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-negative-dark bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>career</div>
                            <h5 className='font-bold'>Take our careers quiz</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image3x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>
                </div>
              <div className="discover">
                <Link href="" className='block bg-blue-100 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'>    
                    <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>Subject guides</div>
                            <h5 className='font-bold'>Find out what to study</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image1x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>
                </div>
              <div className="discover">
                <Link href="" className='block bg-secondary-200 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'>    
                    <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-positive-dark bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>open days</div>
                            <h5 className='font-bold'>Find an open day</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image2x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>
                </div>
              <div className="discover">
                <Link href="" className='block bg-tertiary-100 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden'>    
                    <div className='discover-card flex justify-between gap-[8px]'>
                        <div className="flex flex-col justify-between p-[20px] pr-[0]">
                            <div className='w-fit uppercase font-bold x-small text-negative-dark bg-white/[.6] px-[6px] py-[2px] rounded-[4px]'>app</div>
                            <h5 className='font-bold'>Download the app</h5>
                        </div>
                        <Image src="/assets/images/discover/discover-feature-image3x3x.png" width="186" height="200"  alt='discover'/>
                    </div>
                </Link>
                </div>
            </div>
    )}
       
          
    </>
  );
};

export default Discoverslidercomponents1;
