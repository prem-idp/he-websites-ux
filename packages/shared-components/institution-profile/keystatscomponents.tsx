import React from 'react'
import Image from 'next/image'
import keyStatsIcon1 from "../../../apps/whatuni/public/static/assets/icons/keystats_icon1.svg"
import keyStatsIcon2 from "../../../apps/whatuni/public/static/assets/icons/keystats_icon2.svg"
import keyStatsIcon3 from "../../../apps/whatuni/public/static/assets/icons/keystats_icon3.svg"

const Keystatscomponents = () => {
  return (
    <>
      <div className='keystats-container'>
            <div className='keystats-inner-card flex flex-col gap-[16px]'>
              <div className='h5 text-grey300'>Keystats</div>
              <div className='keystats-inner-row flex gap-[20px]'>
                <div className="course-highlight__option flex flex-1 items-start gap-[16px] bg-grey-600 p-[16px] rounded-[8px]">
                    <Image className='self-center' src={keyStatsIcon1} alt="Keystats Icon1" width="48" height="48" />
                    <div className="flex flex-col gap-[4px] *:text-white">
                      <div className="text-x-small font-semibold line-clamp-2 uppercase">RANKing</div>
                      <div className="h3">
                        10th
                       </div>
                       <div className="text-small font-normal line-clamp-1">Complete University Guide</div>
                    </div>
                </div>
                <div className="course-highlight__option flex flex-1 items-start gap-[16px] bg-grey-600 p-[16px] rounded-[8px]">
                    <Image className='self-center' src={keyStatsIcon2} alt="Keystats Icon1" width="48" height="48" />
                    <div className="flex flex-col gap-[4px] *:text-white">
                      <div className="text-x-small font-semibold line-clamp-2 uppercase">STUDENT POPULATION</div>
                      <div className="h3">16,145</div>
                      <div className="text-small font-normal line-clamp-1">Undergraduate students</div>
                    </div>
                </div>
                <div className="course-highlight__option flex flex-1 items-start gap-[16px] bg-grey-600 p-[16px] rounded-[8px]">
                    <Image className='self-center' src={keyStatsIcon3} alt="Keystats Icon1" width="48" height="48" />
                    <div className="flex flex-col gap-[4px] *:text-white">
                      <div className="text-x-small font-semibold line-clamp-2 uppercase">STUDENT OUTCOMES</div>
                      <div className="h3">68%</div>
                      <div className="text-small font-normal line-clamp-1">In job or further study</div>
                    </div>
                </div>
              </div>
              <div className='keystats-inner-row'>                
                <div className='flex flex-col md:flex-row justify-between gap-[16px] w-full *:text-small *:text-grey300'>
                  <div className='w-full flex flex-col justify-between gap-[4px]'>
                    <div className='*:flex *:flex-col gap-[16px] *:text-grey300 *:small flex items-center justify-between'>
                            <div className='items-start'>
                                <div className='h3'>88%</div>
                                <div className='line-clamp-1'>Full time</div>
                            </div>
                            <div className='items-end'>
                                <div className='h3'>12%</div>
                                <div className='line-clamp-1'>Part time</div>
                            </div>  
                    </div>
                    <div className=" progess-bar bg-primary-400 rounded-[8px] h-[8px] overflow-hidden">
                      <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 h-[8px]" style={{width: "80%"}}></div>
                    </div>
                  </div>
                  <div className='w-full flex flex-col justify-between gap-[4px]'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <span>Employment rate</span>
                      </div>
                      <span className='tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]'>89%
                      </span>
                    </div>
                    <div className=" progess-bar bg-primary-400 rounded-[8px] h-[8px] overflow-hidden">
                      <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 h-[8px] w-[40%]"></div>
                    </div>
                  </div>
                  <div className='w-full flex flex-col justify-between gap-[4px]'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <span>Employment rate</span>
                      </div>
                      <span className='tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]'>89%
                      </span>
                    </div>
                    <div className=" progess-bar bg-primary-400 rounded-[8px] h-[8px] overflow-hidden">
                      <div className="progess-bar__line transition-all duration-[3s] bg-primary-200 h-[8px] w-[40%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  )
}

export default Keystatscomponents