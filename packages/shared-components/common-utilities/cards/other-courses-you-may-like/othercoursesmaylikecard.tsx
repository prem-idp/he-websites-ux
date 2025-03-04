import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Clearingvisitewebsite from '../interaction-button/clearingvisitewebsite'
import Callnowbutton from '../interaction-button/callnow'

const Othercoursesmaylikecard = () => {
  return (
    <Link href="" className='card flex flex-col bg-white border border-grey-200 lg:hover:border-primary-400 rounded-[8px] shadow-custom-2 overflow-hidden'>
        <div className='card-header relative min-h-[190px] bg-grey-200'>
            <Image src="/assets/images/article_image1.jpg" width="392" height="221" className='block w-full h-auto min-h-[185px]' alt='Article_image' />
                <div className='absolute z-[1] top-[16px] left-[16px] rounded-[8px] overflow-hidden'>
                    <Image src='/assets/images/uni_logo_tile1.jpg' width="64" height="64" alt="University logo" />
                </div>
                <div className='absolute top-[16px] right-[16px] z-[1]'>
                    <span className="favorite group items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
                        <div className="heart min-w-[40px] w-[40px] h-[40px] bg-white border border-blue-500 rounded-[24px] flex items-center justify-center cursor-pointer hover:bg-blue-100">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                                stroke="#4664DC"
                                strokeWidth="1.67"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
                        </div>                                  
                    </span>
                </div>
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-0'></div>
        </div>   
        <div className='card-body flex flex-col justify-between gap-[52px] p-[16px] min-h-[192px]'>
            <div className='flex flex-col gap-[8px] w-full'>
                <div className='card-title font-farro para-lg font-bold text-grey300 line-clamp-2'>Modern History with a Placement Year BA (Hons)</div>
                <div className='para small font-semibold line-clamp-1'>University of East Anglia UEA</div>
                <div className='rating-pod flex items-center gap-[8px]'>
                    <div className='rating-card flex items-center gap-[4px]'>
                        <Image src="/assets/icons/blue-star-icon.svg" width="24" height="24" alt="Rating icon" />
                        <span className='font-normal small text-grey300'>4.6</span>
                    </div>
                    <span className='reviewLink block font-normal small text-primary-400 hover:text-primary-500 hover:underline'>400 reviews</span>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[8px] w-full'>
                <Clearingvisitewebsite />
                <Callnowbutton />
            </div>
        </div>
    </Link>
  )
}

export default Othercoursesmaylikecard