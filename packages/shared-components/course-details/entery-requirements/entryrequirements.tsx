import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Entryrequirementcard from './entryrequirementcard'
import Clearingentryrequirementcard from './clearingentryrequirementcard'

const Entryrequirements = ({ onOpenModal }:any) => {
  return (
    <>
      <div className='entryreq-container' id="skiplink3"> 
        <div className="max-w-container mx-auto">
            <div className='entryreq-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
                <div className='h5 w-full md:w-[289px]'>Entry requirements</div>
                <div className='flex w-full lg:w-[calc(100%_-_309px)]'>
                  <Entryrequirementcard onOpenModal={onOpenModal} />
                  {/* <Clearingentryrequirementcard onOpenModal={onOpenModal} /> */}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Entryrequirements
