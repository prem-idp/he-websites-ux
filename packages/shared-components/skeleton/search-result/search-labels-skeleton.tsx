import React from "react";

const SearchLabelsSkeleton = () => {
  return (
    <>
      <section className="overflow-x-auto snap-x snap-mandatory bg-white px-[16px] py-[10px] xl:px-0 lg:py-[8px]">
        <div className="max-w-container mx-auto">
          <ul className="flex items-start gap-[8px]">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className="min-w-[100px]">
                <span className="skeleton skeleton-text-animated !rounded-[4px] min-h-[30px] flex"></span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SearchLabelsSkeleton;
