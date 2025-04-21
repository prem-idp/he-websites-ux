import React from 'react'

const Jumptocomponents = () => {
  return (
    <div className='jumpto-container bg-grey-50'> 
        <div className="max-w-container mx-auto">
            <div className='jumpto-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
            <div className='h5 w-full md:w-[289px]'>Jump to</div>
                <div className='flex flex-col gap-[8px] w-full lg:w-[calc(100%_-_309px)]'>
                    <div className='flex flex-col gap-[24px]'>
                         <ul className='flex flex-col gap-[4px]'>
                         <li className='flex items-center gap-[4px]'>
                            <span className='text-grey para'>-</span>
                            <a href='#skiplink1' className='small text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>Course info</a>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                            <span className='text-grey para'>-</span>
                            <a href='#skiplink2' className='small text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>Modules</a>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                            <span className='text-grey para'>-</span>
                            <a href='#skiplink3' className='small text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>Entry requirements</a>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                            <span className='text-grey para'>-</span>
                            <a href='#skiplink4' className='small text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>Tuition fees</a>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                            <span className='text-grey para'>-</span>
                            <a href='#skiplink5' className='small text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>Latest reviews</a>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                            <span className='text-grey para'>-</span>
                            <a href='#skiplink6' className='small text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>Popular A-level subjects</a>
                          </li>
                          <li className='flex items-center gap-[4px]'>
                            <span className='text-grey para'>-</span>
                            <a href='#skiplink7' className='small text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>Uni info</a>
                          </li>
                         </ul>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Jumptocomponents