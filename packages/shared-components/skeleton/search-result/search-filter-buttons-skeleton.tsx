import React from 'react'

const SearchFilterButtonsSkeleton = () => {
  return (
    <>
     <section className="bg-grey-100 px-[12px] py-[16px]">
        <div className="max-w-container mx-auto flex gap-[8px] small">
          {Array.from({ length: 7 }).map((_, index) => (
            <div className="flex gap-[8px]">
              <span className="skeleton skeleton-text-animated min-w-[140px] min-h-[40px] flex"></span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default SearchFilterButtonsSkeleton