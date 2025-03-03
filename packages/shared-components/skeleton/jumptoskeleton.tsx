import React from 'react'

const Jumptoskeleton = () => {
  return (
    <div className='jumpto-container bg-grey-50'> 
        <div className="max-w-container mx-auto">
            <div className='jumpto-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
            <div className='h5 w-full md:w-[289px]'><div className="skeleton skeleton-text skeleton-text-animated large_heading !w-[200px]"></div></div>
                <div className='flex flex-col gap-[8px] w-full lg:w-[calc(100%_-_309px)]'>
                    <div className='flex flex-col gap-[24px]'>
                         <ul className='flex flex-col gap-[4px]'>
                         <li className='flex items-center gap-[4px]'>
                            <div className="skeleton skeleton-text skeleton-text-animated description !w-[120px]"></div>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                            <div className="skeleton skeleton-text skeleton-text-animated description !w-[100px]"></div>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                            <div className="skeleton skeleton-text skeleton-text-animated description !w-[160px]"></div>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                            <div className="skeleton skeleton-text skeleton-text-animated description !w-[100px]"></div>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                          <div className="skeleton skeleton-text skeleton-text-animated description !w-[130px]"></div>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                          <div className="skeleton skeleton-text skeleton-text-animated description !w-[200px]"></div>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                          <div className="skeleton skeleton-text skeleton-text-animated description !w-[80px]"></div>
                          </li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
      )
}

export default Jumptoskeleton