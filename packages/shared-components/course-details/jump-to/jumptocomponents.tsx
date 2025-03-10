'use client';
interface SectionsList {
  sectionId: string,
  sectionName: string
}

const JumpToComponents = ({ sectionsList }: { sectionsList: SectionsList[] }) => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='jumpto-container bg-grey-50'>
      <div className="max-w-container mx-auto">
        <div className='jumpto-card-container flex flex-col lg:flex-row justify-between gap-[20px] px-[16px] md:px-[20px] xl:px-[0] py-[40px]'>
          <div className='h5 w-full md:w-[289px]'>Jump to</div>
          <div className='flex flex-col gap-[8px] w-full lg:w-[calc(100%_-_309px)]'>
            <div className='flex flex-col gap-[24px]'>
              <ul className='flex flex-col gap-[4px]'>
                {sectionsList?.map((val, index: any) => (
                  <li key={index} className='flex items-center gap-[4px]'>
                    <span className='text-grey para'>-</span>
                    <button onClick={() => handleScroll(val?.sectionId)} className='small text-primary-400 hover:text-primary-500 hover:underline cursor-pointer'>{val?.sectionName}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JumpToComponents;