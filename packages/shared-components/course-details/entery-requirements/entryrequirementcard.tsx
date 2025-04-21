import React from 'react'

const Entryrequirementcard = ({ onOpenModal }:any) => {
  return (
    <div className='card flex flex-col gap-[10px] w-full border border-grey-200 rounded-[8px] bg-white p-[16px] md:p-[24px]'>
<div className='card-header'>
  <div className='flex items-start md:items-center  gap-[16px] md:gap-[8px]'>
    <div className='para font-semibold text-black'>Exam type:</div>
    <div onClick={onOpenModal} className='flex items-center gap-[8px] para font-semibold text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>A level 
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1.38477L6 6.38477L1 1.38477" stroke="#4664DC" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</div>
{/* -- */}
<div className="course-highlight__details w-full grid grid-cols-1 md:grid-cols-2 gap-[16px] bg-primary-50 rounded-[8px] p-[16px]">
    <div className="course-highlight__option  flex flex-col items-start gap-[16px]">                      
      <div className="flex flex-col gap-[4px] *:text-grey300">
        <div className="para font-semibold text-black">A level: AAB</div>
        <p className="small text-black">104 - 120 Grades/points required</p>
      </div>
    </div>
  </div>
  {/* -- */}
  <div className='description'>
    <p className='para font-normal'>Although many of our students do come in with top grades and   high UCAS points, these aren’t necessarily essential for entry. We typically ask for a minimum of 104 UCAS points, but we   understand that talented artists, designers and makers can have a wide range of relevant strengths and skills beyond formal   qualifications. We’re just as interested in exploring your portfolio as we are in seeing your grades.
    </p>                        
</div>  
</div>
  )
}

export default Entryrequirementcard


