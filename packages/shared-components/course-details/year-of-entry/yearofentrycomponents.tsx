'use client'
import React from 'react'
import {useState} from "react";
const Yearofentrycomponents = () => {
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const years = ["2024-2025", "2025-2026", "2026-2027"];
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
                          
                            {years.map((year) => (
                           <div key={year} className="col flex relative">
                         <button
                    onClick={() => setSelectedYear(year)}
                    className={`check-label x-small font-semibold px-[12px] py-[4px] rounded-[22px] border border-text-white ${
                      selectedYear === year
                        ? "bg-white text-black"
                        : "bg-transparent text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {year}
                  </button>
                </div>
              ))}
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    </>
  )
}

export default Yearofentrycomponents

