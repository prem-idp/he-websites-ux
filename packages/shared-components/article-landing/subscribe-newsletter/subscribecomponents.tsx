import Ctabutton from '@/app/components/cards/interaction-button/ctabutton'
import Subscribebtn from '@/app/components/cards/interaction-button/subscribebtn'
import Link from 'next/link'
import React from 'react'
Link

const Subscribecomponents = () => {
  return (
    <div className='subscribe-container bg-primary-50'> 
    <div className="max-w-container mx-auto">
        <div className='subscribe-card-container flex flex-col md:items-center gap-[24px] px-[16px] md:px-[20px] py-[40px] md:py-[64px]'>
            <div className='subscribe-header flex flex-col gap-[4px]'>
                <div className="h2 font-bold md:text-center">Subscribe to our newsletter</div>
                <p className='font-normal small md:text-center'>Get the latest updates with hints, tips and guidance for your journey to university - from application to enrolment.</p>
            </div>
            <div className='successfull_cont w-full md:w-[714px] flex  gap-[8px] bg-positive-light border border-positive-dark rounded-[6px] p-[16px]'>                
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 11L7 15L17 5" stroke="#106519" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className='flex flex-grow small font-semibold text-positive-dark'>Thanks, we’ll be in touch soon</div>
                    <div className='close_icon cursor-pointer'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 15L15 5M5 5L15 15" stroke="#106519" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            <div className='subscribe-form-control w-full lg:w-[714px]'>
                <input type="text" className="form-control w-full focus:outline-none p-[11px_10px_11px_24px] small text-grey-900 placeholder:text-grey-700  border border-grey-200 rounded-[30px] shadow-custom-1 hover:border-primary-400" aria-label="email address field" placeholder="Enter Enter your email address" />
                <div className='error mt-[8px]'>
                    <p className='x-small font-regular text md:text-center text-negative-default'>Please enter a valid email address</p>
                </div>
            </div>
            <div className="col form_check relative">
                <div className='flex items-start gap-[12px]'>
                    <div className='checkbox_card'>
                        <input type="checkbox" className="form-checkbox hidden" id="newsletters" />
                        <label htmlFor='newsletters' className='flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border border-grey-400 my-[2px] group-checked:bg-primary-400'>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z" fill="white" stroke="white" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </label>
                    </div>
                    <label htmlFor="newsletters" className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]">
                        I confirm I am over 16 and agree to the <Link href="" className='text-primary-400 hover:text-primary-500 hover:underline' title="">terms and conditions</Link> and <Link href="" className='text-primary-400 hover:text-primary-500 hover:underline' title="">privacy notice</Link>
                    </label>
                </div>
                <div className='error  mt-[8px]'>
                <p className='x-small font-regular text md:text-center text-negative-default'>Please agree to our terms and conditions and privacy notice</p>
                </div>                            
            </div>
            <Subscribebtn />
          </div>
    </div>
  </div>
  )
}

export default Subscribecomponents