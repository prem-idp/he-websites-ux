import React from "react";
import TabSwitchButtonSkeleton from "../skeleton/ip/tab-switch-button-skeleton";

const TabSwitchButton = ({ tabSwitchButtonData, reviewCount = false }: any) => {

  return (
    <>
      <section className="bg-white border-b border-grey-200 overflow-x-auto snap-x snap-mandatory px-[16px] py-[8px] md:px-[20px] xl:px-0 lg:overflow-hidden">
        <div className="max-w-container mx-auto">
          <div className="flex gap-[8px] whitespace-nowrap lg:flex-wrap">
            {tabSwitchButtonData?.map((item: any, index: number) => (
              <a href="#" className={`btn btn-black-outline ${item.isActive ? "bg-grey300 text-white" : ""}`} key={index}>
                {item.name}
                 <span className="bg-negative-default text-white rounded-[24px] p-[2px] ml-[8px]"> 
                  00
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* <TabSwitchButtonSkeleton/> */}
    </>
  );
};

export default TabSwitchButton;
