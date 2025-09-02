import React from "react";
import OpendaysSliderComponents from "../OpendaysSliderComponents/OpendaysSliderComponents";

const OpendaysSREliteComponents = ({
  title,
  description,
  data,
  bgColor,
  openDays,
  featureOpd,
}: any) => {
  return (
    <>
      <div className={`other-courses-container bg-${bgColor}`}>
        <div className="max-w-container mx-auto">
          <div className="other-courses-card-container px-[0] py-[32px] md:py-[40px]">
            <div className="other-courses-header  flex flex-col gap-[4px] px-[16px] md:px-[20px] xl:px-[0] mb-[16px] md:mb-[16px]">
              <div className="h5 font-bold">Open days for you</div>
              {description && (
                <p className="small text-grey300">{description}</p>
              )}
            </div>
            <div className="other-courses-course-container ">
              <div className="other-courses-inner-wrap">
                <OpendaysSliderComponents
                  data={data}
                  bgColor={bgColor}
                  openDays={openDays}
                  featureOpd={featureOpd}
                />
                <div className="flex justify-center mt-[16px] lg:mt-[24px]">
                  <a
                    href="#"
                    className="flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]"
                  >
                    View more open days
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6"
                        stroke="#3460DC"
                        strokeWidth="1.48148"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpendaysSREliteComponents;
