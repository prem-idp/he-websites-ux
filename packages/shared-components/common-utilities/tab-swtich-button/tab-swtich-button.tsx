import React from "react";

const TabSwitchButton = () => {
  return (
    <section className="bg-white border-b border-grey-200 overflow-x-auto snap-x snap-mandatory px-[16px] py-[8px] md:px-[20px] xl:px-0">
      <div className="max-w-container mx-auto">
        <div className="flex gap-[8px] whitespace-nowrap">
          <button
            type="button"
            className="btn btn-black-outline active:bg-grey300 active:text-white"
          >
            University info
          </button>
          <button type="button" className="btn btn-black-outline">
            Courses
          </button>
          <button type="button" className="btn btn-black-outline">
            Open days
          </button>
          <button type="button" className="btn btn-black-outline">
            Scholarships
          </button>
          <button type="button" className="btn btn-black-outline">
            Reviews
            <span className="bg-negative-default text-white rounded-[24px] p-[2px] ml-[8px]">
              768
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TabSwitchButton;
