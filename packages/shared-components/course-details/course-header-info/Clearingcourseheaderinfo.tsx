import React, {useState,useEffect,useRef} from 'react'
import Image from 'next/image'
import Callnowbutton from '@/app/components/cards/interaction-button/callnow'
import Clearingvisitewebsite from '@/app/components/cards/interaction-button/clearingvisitewebsite'

const Clearingcourseheaderinfo = () => {
      const [isSticky, setIsSticky] = useState(false);
      const containerRef = useRef(null);
      useEffect(() => {
          const handleScroll = () => {
          const scrollTop = window.scrollY;     
          const stickyThreshold = 330;
          setIsSticky(scrollTop > stickyThreshold);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); 
      }, []);
  return (
    <>
    <div className='cd-uni-info-container'>
      <div className='max-w-container mx-auto'>
        <div className='cd-uniinfo-card-container flex flex-col gap-[24px] py-[24px] px-[16px] md:px-[20px] lg:px-[0]'>
                  {/* -- */}
                  <div className='uniresults-inner flex flex-col md:flex-row md:gap-[24px]'>
                      <div className='uniresults-left'>
                        <div className="univ__logo bg-white p-[4px] w-[120px] rounded-[8px] shadow-custom-4 overflow-hidden hidden md:block">
                          <Image className='w-full' src="/assets/images/myhc_252670.jpg" alt="uni logo" width={112} height={112}  />
                        </div>
                      </div>
                      <div className='uniresults-right flex flex-col flex-1 gap-[16px]'>
                          <div className='uni-info-card flex flex-col gap-[8px] md:gap-0'>
                            <div className='clearing-tag xs-small font-bold text-positive-dark bg-green-200 uppercase w-fit rounded-[4px] p-[0_8px] mb-[8px]'>Clearing</div>
                            <div className='flex flex-col-reverse md:flex-row gap-[16px] md:gap-0  justify-between items-start h5 text-grey300'>
                              <span>Animation BA (Hons)</span>
                                {/* <span className="favorite group items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
                                <div className="heart min-w-[40px] w-[40px] h-[40px] bg-white border border-blue-500 rounded-[24px] flex items-center justify-center cursor-pointer hover:bg-blue-100">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
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
                              </span> */}
                            </div>
                          <div className='flex flex-col gap-[8px]'>
                             <a href="#" className='block w-fit para-lg font-semibold text-primary-400 hover:text-primary-500 hover:underline'>Norwich University of the Arts</a>
                            <div className='flex'>
                              <div className='rating-pod flex items-center gap-[8px]'>
                                <div className='rating-card flex items-center gap-[8px]'>
                                  <span className="reviewLink small text-grey300">Student rating</span>
                                  <div className='flex gap-[4px]'>
                                    <div className='tooltip'>
                                      <div className='flex gap-[2px]'>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                        </svg>
                                      </div>
                                    </div>
                                    <span className='small text-grey300'>(4.6)</span>
                                  </div>
                                </div>
                                <a href="#" className='reviewLink block small text-primary-400 hover:text-primary-500 hover:underline'>View reviews</a>
                              </div>
                            </div>
                            <div className='chance-acceptance flex gap-[8px]'>
                              <div className='x-small font-semibold text-grey300 uppercase'>chance of acceptance:</div>
                              <div className='flex gap-[4px]'>
                                <div className='x-small font-semibold text-success-700 uppercase'>VERY LIKELY</div>                                
                                <div className='flex gap-[2px] items-center *:w-[10px] *:h-[8px] *:bg-success-500'>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                  <div></div>
                                </div>
                              </div>
                              <div className="tooltip w-fit group/item small underline relative cursor-pointer pb-[6px] mb-[-6px]">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clipRule="evenodd" d="M14 7.5C14 11.366 10.866 14.5 7 14.5C3.13401 14.5 0 11.366 0 7.5C0 3.63401 3.13401 0.5 7 0.5C10.866 0.5 14 3.63401 14 7.5ZM7.00001 4.875C6.67724 4.875 6.39415 5.04931 6.24154 5.31314C5.99956 5.73144 5.4643 5.87438 5.046 5.63241C4.62769 5.39043 4.48475 4.85517 4.72673 4.43686C5.17928 3.65453 6.02729 3.125 7.00001 3.125C8.44976 3.125 9.62501 4.30025 9.62501 5.75C9.62501 6.89294 8.89456 7.86528 7.87501 8.22563V8.375C7.87501 8.85825 7.48326 9.25 7.00001 9.25C6.51676 9.25 6.12501 8.85825 6.12501 8.375V7.5C6.12501 7.01675 6.51676 6.625 7.00001 6.625C7.48326 6.625 7.87501 6.23325 7.87501 5.75C7.87501 5.26675 7.48326 4.875 7.00001 4.875ZM7 11.875C7.48325 11.875 7.875 11.4832 7.875 11C7.875 10.5168 7.48325 10.125 7 10.125C6.51675 10.125 6.125 10.5168 6.125 11C6.125 11.4832 6.51675 11.875 7 11.875Z" fill="#64748B"/>
                                </svg>
                                <div className="tooltip-wrap flex-col w-[320px] px-[12px] py-[12px] bg-white text-grey300 border border-grey-200 rounded-[8px] 
                                                          shadow-custom-12 mt-[8px] absolute top-[14px] right-[-16px] left-auto md:right-auto md:left-[-50px] lg:left-[-158px] z-[1] gap-[4px] after:w-[10px] after:h-[10px] after:absolute after:top-[-6px]  after:left-[91%] md:after:left-[16%] lg:after:left-[50%] after:bg-white after:z-[0] after:border after:border-grey-200 after:border-b-0 after:border-r-0 after:translate-[-50%] after:rotate-45 hidden group-hover/item:flex after:content-['']"
                                    >
                                      <span className="font-semibold tooltip-head">
                                        Why do we need your dummy text?
                                      </span>
                                      <p className="x-small">
                                        We use this information to help assess the reach of
                                        our products. This is completely optional.
                                      </p>
                                    </div>
                                </div>  
                            </div>  
                            <p className='small text-grey300'>Want to know what it's like to study this course at uni? We've got all the key info, from entry requirements to the modules on offer. If that all sounds good, why not check out reviews from real students or even book onto an upcoming open day?</p>                        
                          </div>
                          </div>
                          {/* Sticky Section */}
                          <div className={`uniresults-content-right flex items-end ${isSticky ? "fixed top-0 left-0 w-full bg-white shadow-custom-4 z-[4] transition-all p-[16px]" : ""
    }`}
  >
                            <div className='flex flex-col md:flex-row gap-[8px] w-full lg:w-fit lg:ml-[auto]'>
                              <Clearingvisitewebsite />
                              <Callnowbutton />
                            </div>
                        </div> 
                      </div>    
              
                  </div>
                  {/* -- */}
                </div>
      </div>
    </div>
  </>
  )
}

export default Clearingcourseheaderinfo