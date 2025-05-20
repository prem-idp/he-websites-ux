import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Clearingvisitewebsite from '../interaction-button/clearingvisitewebsite'
import Callnowbutton from '../interaction-button/callnow'
import Getprospectus from '../interaction-button/getprospectus'
import Visitwebsite from '../interaction-button/visitwebsite'
import BookOpenDay from '../interaction-button/bookopenday'
import RequestInfo from '../interaction-button/requestinfo'

const Othercoursesmaylikecard = ({seasonWusca, uniName, courseName, openDays, opendaysType}:any) => {
  return (
    <div className={`card flex flex-col bg-white border border-grey-200 ${seasonWusca ? "":"lg:hover:border-primary-400"} rounded-[8px] shadow-custom-2 overflow-hidden`}>
        <div className='card-header relative min-h-[190px] bg-grey-200'>
            <Image src="/static/assets/images/article_image1.jpg" width="392" height="221" className='block w-full h-auto min-h-[185px]' alt='Article_image' />
                <div className='absolute z-[1] top-[16px] left-[16px] rounded-[8px] overflow-hidden'>
                    <Image src='/static/assets/images/uni_logo_tile1.jpg' width="64" height="64" alt="University logo" />
                </div>
                {seasonWusca ? (
                    <>
                    <div className="absolute left-[16px] bottom-[16px] x-small font-bold text-grey-500 bg-grey-100 p-[0_8px] rounded-[4px] z-0">IN-PERSON</div>
                    </>
                ):(
                    <>
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
                    </>
                )}
        </div>
        {seasonWusca ? (                 
            <>   
            {openDays ? (
                <>
                <div className='flex'>
                    <div className='opd-calendar bg-grey-100 border-r border-grey-200'>
                        <div className='flex flex-col items-center p-[16px_18px]'>
                            <div className='small font-semibold'>NOV</div>
                            <div className='h2 font-bold'>12</div>
                            <div className='small font-semibold'>2024</div>
                        </div>
                    </div>
                    <div className='card-body flex flex-1 flex-col justify-between gap-[16px] p-[16px] min-h-[192px]'>
                        <div className='flex flex-col gap-[8px] w-full'>
                            {/* <div className='clearing-tag xs-small font-bold text-positive-dark bg-green-200 uppercase w-fit rounded-[4px] p-[0_8px]'>Clearing</div> */}
                            <div className='card-title font-farro para-lg font-bold text-grey300 line-clamp-1'>{uniName}</div>
                            <div className='flex flex-col gap-[8px]'>
                                <div className='card-subtitle small font-semibold line-clamp-1'>{opendaysType}</div>
                                <div className=''>
                                    <div className='x-small text-grey-900'>Main campus, CV23 8DY</div>
                                    <div className='flex items-center gap-[4px]'>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 3.77778V6L7.66667 7.66667M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#333333" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span className='xs-small font-semibold text-grey300'>08:30-16:30</span>
                                        </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[8px]'>
                                <div>
                                    <div className='para small font-semibold line-clamp-1'>WUSCA overall ranking</div>
                                    <div className='rating-pod flex items-center gap-[8px]'>
                                        <div className='rating-card flex items-center gap-[4px]'>
                                            <Image src="/static/assets/icons/blue-star-icon.svg" width="24" height="24" alt="Rating icon" />
                                            <span className='font-normal small text-grey300'>4.6 / 5</span>
                                        </div>
                                        <span className='block font-normal small text-grey-700'>20th</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex gap-[8px] w-full ${seasonWusca ? "flex-col ":"flex-col md:flex-row"}`}>
                            <BookOpenDay />
                            {/* <Clearingvisitewebsite /> */}
                            {/* <Callnowbutton />  */}
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full p-[16px] border-t border-t-grey-200'>
                    <Link href="#" className='small font-semibold text-primary-400 text-center block hover:underline'>View XX open days</Link>
                </div>
                </>
            ):(
            <>
            <div className='card-body flex flex-col justify-between gap-[16px] p-[16px] min-h-[192px]'>
                    <div className='flex flex-col gap-[8px] w-full'>
                        <div className='clearing-tag xs-small font-bold text-positive-dark bg-green-200 uppercase w-fit rounded-[4px] p-[0_8px]'>Clearing</div>
                        <div className='card-title font-farro para-lg font-bold text-grey300 line-clamp-1'>{uniName}</div>
                        <div className='flex flex-col gap-[8px]'>
                            <div className='card-subtitle small font-semibold line-clamp-1'>{courseName}</div>
                            <div className="flex items-center flex-wrap gap-[8px] x-small font-semibold uppercase">
                                <div className="bg-neutral100 text-neutral600 p-[3px_10px] rounded-[4px]">REGION / CITY</div>
                                <div className="bg-neutral100 text-neutral600 p-[3px_10px] rounded-[4px]">NExt open day: TUE 30 NOV</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <div>
                                <div className='para small font-semibold line-clamp-1'>WUSCA overall ranking</div>
                                <div className='rating-pod flex items-center gap-[8px]'>
                                    <div className='rating-card flex items-center gap-[4px]'>
                                        <Image src="/static/assets/icons/blue-star-icon.svg" width="24" height="24" alt="Rating icon" />
                                        <span className='font-normal small text-grey300'>4.6 / 5</span>
                                    </div>
                                    <span className='block font-normal small text-grey-700'>20th</span>
                                </div>
                            </div>
                            <div>
                                <div className='para small font-semibold line-clamp-1'>Complete University Guide ranking</div>
                                <div className='rating-pod flex items-center gap-[8px]'>
                                    <div className='rating-card flex items-center gap-[4px]'>
                                        <Image src="/static/assets/icons/blue-star-icon.svg" width="24" height="24" alt="Rating icon" />
                                        <span className='font-normal small text-grey300'>4.6 / 5</span>
                                    </div>
                                    <span className='block font-normal small text-grey-700'>20th</span>
                                </div>
                            </div>
                            <div>
                                <div className='para small font-semibold line-clamp-1'>WUSCA Lecturers and teaching quality ranking</div>
                                <div className='rating-pod flex items-center gap-[8px]'>
                                    <div className='rating-card flex items-center gap-[4px]'>
                                        <Image src="/static/assets/icons/blue-star-icon.svg" width="24" height="24" alt="Rating icon" />
                                        <span className='font-normal small text-grey300'>4.6 / 5</span>
                                    </div>
                                    <span className='block font-normal small text-grey-700'>20th</span>
                                </div>
                            </div>
                            <div>
                                <div className='para small font-semibold line-clamp-1'>WUSCA career prospects ranking</div>
                                <div className='rating-pod flex items-center gap-[8px]'>
                                    <div className='rating-card flex items-center gap-[4px]'>
                                        <Image src="/static/assets/icons/blue-star-icon.svg" width="24" height="24" alt="Rating icon" />
                                        <span className='font-normal small text-grey300'>4.6 / 5</span>
                                    </div>
                                    <span className='block font-normal small text-grey-700'>20th</span>
                                </div>
                            </div>
                            <div>
                                <div className='para small font-semibold line-clamp-1'>WUSCA student life ranking</div>
                                <div className='rating-pod flex items-center gap-[8px]'>
                                    <div className='rating-card flex items-center gap-[4px]'>
                                        <Image src="/static/assets/icons/blue-star-icon.svg" width="24" height="24" alt="Rating icon" />
                                        <span className='font-normal small text-grey300'>4.6 / 5</span>
                                    </div>
                                    <span className='block font-normal small text-grey-700'>20th</span>
                                </div>
                            </div>
                            <div>
                                <div className='para small font-semibold line-clamp-1'>WUSCA student support ranking</div>
                                <div className='rating-pod flex items-center gap-[8px]'>
                                    <div className='rating-card flex items-center gap-[4px]'>
                                        <Image src="/static/assets/icons/blue-star-icon.svg" width="24" height="24" alt="Rating icon" />
                                        <span className='font-normal small text-grey300'>4.6 / 5</span>
                                    </div>
                                    <span className='block font-normal small text-grey-700'>20th</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex gap-[8px] w-full ${seasonWusca ? "flex-col ":"flex-col md:flex-row"}`}>
                        {}
                        <Getprospectus />
                        <Visitwebsite />
                        <BookOpenDay />
                        <RequestInfo />
                        {/* <Clearingvisitewebsite /> */}
                        {/* <Callnowbutton /> */}
                        {/* <Clearingvisitewebsite /> */}
                        {/* <Callnowbutton /> */}
                        {/* <Clearingvisitewebsite />
                        <Callnowbutton /> */}
                    </div>
                </div>
                <div className='flex justify-center items-center w-full p-[16px] border-t border-t-grey-200'>
                    <Link href="#" className='small font-semibold text-primary-400 text-center block hover:underline'>View XX courses</Link>
                </div>
            </>)}   
            </> 
        ) : (
            <div className='card-body flex flex-col justify-between gap-[52px] p-[16px] min-h-[192px]'>
            <div className='flex flex-col gap-[8px] w-full'>
                <div className='card-title font-farro para-lg font-bold text-grey300 line-clamp-2'>Modern History with a Placement Year BA (Hons)</div>
                <div className='para small font-semibold line-clamp-1'>University of East Anglia UEA</div>
                <div className='rating-pod flex items-center gap-[8px]'>
                    <div className='rating-card flex items-center gap-[4px]'>
                        <Image src="/static/assets/icons/blue-star-icon.svg" width="24" height="24" alt="Rating icon" />
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
        ) }  

    </div>
  )
}

export default Othercoursesmaylikecard