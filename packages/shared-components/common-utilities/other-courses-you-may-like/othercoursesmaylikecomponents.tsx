import Othercoursesslidercomponents from "@packages/shared-components/common-utilities/slider/othercoursesslidercomponents";
import React from "react";

const Othercoursesmaylikecomponents = ({
  title,
  description,
  data,
  bgColor,
  openDays,
  userFavourites,
  uniFavourites,
}: any) => {
  return (
    <div className={`other-courses-container bg-${bgColor}`}>
      <div className="max-w-container mx-auto">
        <div className="other-courses-card-container px-[0] py-[32px] md:py-[40px]">
          <div
            className={`other-courses-header  flex flex-col gap-[4px] px-[16px] md:px-[20px] xl:px-[0] ${userFavourites ? "mb-[16px] md:mb-[16px]" : "mb-[26px] md:mb-[32px]"}`}
          >
            {userFavourites ? (
              <div className="h5 font-bold">{title}</div>
            ) : (
              <div className="h2 font-bold">{title}</div>
            )}

            {description && <p className="small text-grey300">{description}</p>}
          </div>
          <div className="other-courses-course-container ">
            <div className="other-courses-inner-wrap">
              <Othercoursesslidercomponents
                data={data}
                bgColor={bgColor}
                openDays={openDays}
                userFavourites={userFavourites}
                uniFavourites={uniFavourites}
              />
              <div className="flex justify-center mt-[16px] lg:mt-[24px]">
                <a
                  href="#"
                  className="flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]"
                >
                  View more courses
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
  );
};

export default Othercoursesmaylikecomponents;
