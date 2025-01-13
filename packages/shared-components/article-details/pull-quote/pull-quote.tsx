import React from 'react'

const Pullquote = () => {
  return (
<div className="border-x-8 border-blue-200 p-[16px] bg-blue-50 text-grey300 flex flex-col gap-[8px]">
      <p>
        <q className='pull-quotes text-heading6 font-farro  font-noraml'>
        Empowering our students goes beyond the classroom; it's about fostering the skills, resilience,
        and curiosity that will propel them into a world of endless
      </q>
       </p>
          <div className="flex flex-col gap-[4px]">
              <span className="x-small font-semibold font-inter ">Name</span>
              <span className="x-small font-normal font-inter">Role</span>
          </div>
</div>
  )
}

export default Pullquote