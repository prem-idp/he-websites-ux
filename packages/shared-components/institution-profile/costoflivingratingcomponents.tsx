import React from 'react'
import Image from 'next/image'
import costofPintIcon from "../../../apps/whatuni/public/static/assets/icons/cost_of_pint_icon.svg"

const Costoflivingratingcomponents = () => {
  return (
    <>
        <div className='costliving-rating-container'>
            <div className='costliving-rating-inner-card flex flex-col gap-[16px]'>
              <div className='para-lg text-grey300 font-semibold'>Cost of living</div>
              <div className='costliving-rating-inner-row flex gap-[20px]'>
                    <div className="course-highlight__option flex flex-col md:flex-row flex-1 justify-between md:items-center gap-[16px] bg-grey-600 p-[16px] rounded-[8px]">
                        <div className="flex flex-col gap-[4px] *:text-white">
                            <div className="text-para font-semibold line-clamp-2">Average cost of living</div>
                            <div className="h4">£1,612-£1890pcm</div>
                        </div>
                        <div className="flex flex-col gap-[4px] *:text-white">
                            <div className="text-para font-semibold line-clamp-2">Cost of a pint</div>
                            <div className='flex items-start gap-[4px]'>
                            <Image className='mt-[4px]' src={costofPintIcon} alt="Keystats Icon1" width="25" height="26" />
                            <div className="h4">£5.23</div>
                            </div>                            
                        </div>
                        <div className="flex flex-col w-full md:w-[178px] gap-[4px] p-[12px] rounded-[8px] bg-white *:text-grey300">
                            <div className="text-para font-semibold line-clamp-2">Cost of living rating</div>
                            <div className="flex items-center gap-[8px]">
                                <div className="flex items-center gap-[4px]">
                                    <Image alt="Rating icon" loading="lazy" width="24" height="24" src="/static/assets/icons/blue-star-icon.svg" />
                                    <span className="text-heading6 font-farro font-bold">4.2</span></div><span className="small">20th</span>
                                </div>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Costoflivingratingcomponents