"use server";
import React from "react";
const CourseBox = ({ data }: any) => {
  return (
    <>
      {data.map((item: any, index: any) => (
        <div className="bg-gray-100 p-[16px] mt-[20px]" key={index + 1}>
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col">
              <div className="text-x-small uppercase font-semibold text-success-500 leading-[16px]">
                In clearing
              </div>
              <a
                href="#"
                className="text-para font-semibold text-primary-500 leading-[24px] mb-[10px] hover:underline"
              >
                {item.courseTitle}
              </a>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="grid grid-cols-2 gap-[15px] font-normal text-gray-400 md:gap-x-[40px] md:gap-y-0 md:grid-cols-3">
                  <div>
                    <div>UCAS points</div>
                    <div>80</div>
                  </div>
                  <div>
                    <div>UCAS code</div>
                    <div>{item.ucasCode}</div>
                  </div>
                  <div>
                    <div>Start date </div>
                    <div>SEP</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:items-end lg:justify-end gap-[8px] pt-[20px] lg:pt-0">
              <a
                href="#"
                className="bg-primary-500 text-white text-center uppercase px-[16px] py-[10px] text-xs-small font-bold rounded-[24px] grow w-full md:text-small md:grow-0 md:w-auto"
              >
                Visit website
              </a>
              <a
                href="#"
                className="bg-orange-400 text-white text-center uppercase px-[16px] py-[10px] text-xs-small font-bold rounded-[24px] grow w-full md:text-small md:grow-0 md:w-auto"
              >
                Call now
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseBox;
