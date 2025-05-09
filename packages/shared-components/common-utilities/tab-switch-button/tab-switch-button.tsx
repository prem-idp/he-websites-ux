import React from "react";

const TabSwitchButton = () => {
  return (
    <section className="bg-white border-b border-grey-200 overflow-x-auto snap-x snap-mandatory px-[16px] py-[8px] md:px-[20px] xl:px-0 lg:overflow-hidden">
      <div className="max-w-container mx-auto">
        <div className="flex gap-[8px] whitespace-nowrap lg:flex-wrap">
          <a href="#" className="btn btn-black-outline bg-grey300 text-white">
            University info
          </a>
          <a href="#" className="btn btn-black-outline">
            Courses
          </a>
          <a href="#" className="btn btn-black-outline">
            Open days
          </a>
          <a href="#" className="btn btn-black-outline">
            Scholarships
          </a>
          <a href="#" className="btn btn-black-outline">
            Reviews
            <span className="bg-negative-default text-white rounded-[24px] p-[2px] ml-[8px]">
              768
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TabSwitchButton;
