import React from 'react'

const Yearofentrycomponents = () => {
  return (
    <>
        <section className='year-of-entry-container bg-grey300'>
            <div className='max-w-container mx-auto'>
                <div className='overflow-x-scroll scrollbar-hidden'>
                    <div className='year-of-entry form_radio flex items-center gap-[8px] py-[8px] px-[16px] md:px-[20px] lg:px-[0] w-[436px] md:w-fit'>
                        <div className='para font-semibold text-white'>Year of Entry: 
                            {/* <span>Clearing 2024</span> */}
                            </div>                        
                        <div className='form-radio-group flex flex-row gap-[6px] md:gap-[8px]'>
                            <div className="col flex relative">
                                <input type="radio" name="yoe" className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="2024-2025" />
                                <label htmlFor="2024-2025" className="check-label x-small font-semibold text-white bg-transparent hover:bg-white border border-text-white rounded-[22px] px-[12px] py-[4px]">2024-2025</label>                          
                            </div>
                            <div className="col flex relative">
                                <input type="radio" name="yoe" className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="2025-2026" />
                                <label htmlFor="2025-2026" className="check-label x-small font-semibold text-white bg-transparent hover:bg-white  border border-text-white rounded-[22px] px-[12px] py-[4px]">2025-2026</label>                            
                            </div>
                            <div className="col flex relative">
                                <input type="radio" name="yoe" className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none" id="2026-2027" />
                                <label htmlFor="2026-2027" className="check-label x-small font-semibold text-white bg-transparent hover:bg-white  border border-text-white rounded-[22px] px-[12px] py-[4px]">2026-2027</label>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    </>
  )
}

export default Yearofentrycomponents

