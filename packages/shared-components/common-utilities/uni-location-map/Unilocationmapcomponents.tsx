import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Unilocationmapcomponents = () => {
  return (
    <>
            {/* -- */}
                  <div className='flex flex-col md:flex-row border border-grey-200 rounded-b-[8px] md:rounded-r-[8px] overflow-hidden'>
                    <div className='card-map w-full md:w-[288px] md:min-w-[288px] lg:w-[758px] lg:min-w-[758px]'>
                      <Image className='block w-full object-cover md:h-full lg:h-auto' layout='fixed' src="/static/assets/images/location-map.jpg" width={758} height={316} alt="Map"/>
                    </div>
                    <div className='course-card flex flex-col flex-1 gap-[16px] bg-white p-[16px] md:p-[24px] w-full'>                  
                      <div className='flex flex-col gap-[16px] justify-between h-full'>
                        <div className='flex flex-col gap-[8px]'>
                          <div className='h5 text-grey300'>Norwich University of the Arts</div>
                          <div className="flex flex-col *:text-small *:text-grey300">
                            <span>Richmond Road</span> 
                            <span>Bradford</span> 
                            <span>BD7 1DP</span> 
                            <span>United Kingdom</span>
                          </div>
                          <div className="flex items-start gap-[8px]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                              <span className="flex flex-col lg:flex-row items-start gap-[4px] small">Nearest train station:
                                <span>Frizinghall&nbsp;1.2 miles away</span>
                              </span>
                          </div>
                        </div>
                        <div className="course-highlight__details w-full flex bg-blue-50 rounded-[4px] p-[16px]">
                          <div className="course-highlight__option  flex flex-col items-start gap-[16px]">                      
                            <div className="flex flex-col">
                              <div className="para font-semibold text-black">Thinking of studying in Norwich?</div>
                              <p className="small text-black">Check out our</p>
                              <Link href="" className='small text-primary-500 hover:text-primary-500 hover:underline' title=''>Norwich City guide</Link>
                            </div>
                          </div>
                      </div>
                      </div>
                    </div>  
                  </div>
                  {/* -- */}
    </>
  )
}

export default Unilocationmapcomponents