import React from "react";
import Image from "next/image";
import Reviewscomponents from "@packages/shared-components/home/reviews/reviewscomponents";

const ReviewSection = () => {
  return (
    <div className="border border-grey-200 bg-grey-50 rounded-[8px] overflow-hidden">
      <div className="bg-primary-50 flex flex-col gap-[16px] p-[16px]">
        <div className="flex items-center gap-[4px]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5127 19.85L16.8527 19.61L16.1127 18.11C15.8527 17.59 15.4427 17.59 15.1827 18.11L14.4427 19.61L12.7827 19.85C12.2127 19.93 12.0827 20.33 12.4927 20.73L13.6927 21.9L13.4127 23.55C13.3127 24.12 13.6527 24.36 14.1627 24.09L15.6527 23.31L17.1327 24.09C17.6427 24.36 17.9827 24.12 17.8827 23.55L17.6027 21.9L18.8027 20.73C19.2127 20.32 19.0827 19.93 18.5127 19.85ZM24.5627 2H18.0827C17.8127 2 17.5627 2.15 17.4327 2.39L13.0227 10.4C13.8627 10.19 14.7427 10.06 15.6427 10.06C17.4627 10.06 19.1827 10.52 20.6927 11.32L25.2127 3.11C25.4927 2.61 25.1327 2 24.5627 2Z"
              fill="#FFD700"
            />
            <path
              d="M14.5228 3.82L13.8728 2.64C13.7428 2.4 13.4928 2.25 13.2228 2.25H6.74282C6.17282 2.25 5.82282 2.86 6.09282 3.35L10.4428 11.25L14.5228 3.82ZM15.6528 11.91C10.6628 11.91 6.61282 15.96 6.61282 20.95C6.61282 25.95 10.6628 30 15.6528 30C20.6428 30 24.6928 25.95 24.6928 20.96C24.6928 15.96 20.6428 11.92 15.6528 11.91ZM15.6528 26.28C12.7128 26.28 10.3228 23.9 10.3228 20.95C10.3228 18.01 12.7028 15.62 15.6528 15.62C18.5928 15.62 20.9828 18 20.9828 20.95C20.9828 23.9 18.5928 26.28 15.6528 26.28Z"
              fill="#FFD700"
            />
          </svg>

          <span className="para-lg font-semibold">
            Whatuni Student Choice Awards 2025
          </span>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-[16px]">
          <div className="flex items-center gap-[8px]">
            <Image src="/static/assets/images/gold-university-of-the-year.png" alt="gold-university-of-the-year" width="135" height="117"/>
            <div className="flex flex-col gap-[4px] grow">
              <div className="bg-positive-default text-white uppercase rounded-[4px] x-small font-bold px-[8px] w-fit">Winner</div>
              <div className="flex items-center gap-[8px]">
                <span className="text-heading2 font-farro font-bold">1st</span>
                <span className="small">/ 101</span>
              </div>
              <a href="#" className="small font-semibold underline">University of the Year</a>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <Image src="/static/assets/images/gold-university-of-the-year.png" alt="gold-university-of-the-year" width="135" height="117"/>
            <div className="flex flex-col gap-[4px] grow">
              <div className="bg-positive-default text-white uppercase rounded-[4px] x-small font-bold px-[8px] w-fit">Winner</div>
              <div className="flex items-center gap-[8px]">
                <span className="text-heading2 font-farro font-bold">1st</span>
                <span className="small">/ 101</span>
              </div>
              <a href="#" className="small font-semibold underline">Halls and student accommodation</a>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <Image src="/static/assets/images/bronze-student-life.png" alt="bronze-student-life" width="135" height="117"/>
            <div className="flex flex-col gap-[4px] grow">
              <div className="bg-positive-default text-white uppercase rounded-[4px] x-small font-bold px-[8px] w-fit">THird place</div>
              <div className="flex items-center gap-[8px]">
                <span className="text-heading2 font-farro font-bold">3rd</span>
                <span className="small">/ 101</span>
              </div>
              <a href="#" className="small font-semibold underline">Student life</a>
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <Image src="/static/assets/images/gold-university-of-the-year.png" alt="gold-university-of-the-year" width="135" height="117"/>
            <div className="flex flex-col gap-[4px] grow">
              <div className="bg-positive-default text-white uppercase rounded-[4px] x-small font-bold px-[8px] w-fit">Winner</div>
              <div className="flex items-center gap-[8px]">
                <span className="text-heading2 font-farro font-bold">1st</span>
                <span className="small">/ 101</span>
              </div>
              <a href="#" className="small font-semibold underline">University of the Year</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px] p-[16px]">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex items-center gap-[4px]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.337 4.75813C14.8605 3.14719 17.1395 3.14719 17.663 4.75813L19.5331 10.514C19.7672 11.2344 20.4386 11.7222 21.1961 11.7222H27.2481C28.942 11.7222 29.6462 13.8897 28.2759 14.8853L23.3797 18.4426C22.7668 18.8878 22.5104 19.6771 22.7445 20.3975L24.6147 26.1533C25.1381 27.7643 23.2943 29.1039 21.924 28.1082L17.0278 24.5509C16.4149 24.1057 15.5851 24.1057 14.9722 24.5509L10.076 28.1082C8.70569 29.1039 6.8619 27.7643 7.38533 26.1533L9.25551 20.3975C9.48959 19.6771 9.23315 18.8878 8.62031 18.4426L3.72412 14.8853C2.35377 13.8897 3.05804 11.7222 4.75189 11.7222H10.8039C11.5614 11.7222 12.2328 11.2344 12.4669 10.514L14.337 4.75813Z"
                fill="#333333"
              />
            </svg>
            <span className="para-lg font-semibold"> Student ratings </span>
          </div>
          <div className="xs-small font-semibold uppercase">
            Source:
            <span className="text-primary-400">
              Whatuni student choice awards
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="flex flex-col">
            <div className="small font-semibold line-clamp-1">
              Overall rating
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <Image
                  src="/static/assets/icons/blue-star-icon.svg"
                  width="24"
                  height="24"
                  alt="Rating icon"
                />
                <span className="text-heading6 font-farro font-bold">4.2</span>
              </div>
              <span className="small">20th</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="small font-semibold line-clamp-1">Courses</div>
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <Image
                  src="/static/assets/icons/blue-star-icon.svg"
                  width="24"
                  height="24"
                  alt="Rating icon"
                />
                <span className="text-heading6 font-farro font-bold">3.3</span>
              </div>
              <span className="small">20th</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="small font-semibold line-clamp-1">Halls</div>
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <Image
                  src="/static/assets/icons/blue-star-icon.svg"
                  width="24"
                  height="24"
                  alt="Rating icon"
                />
                <span className="text-heading6 font-farro font-bold">4.5</span>
              </div>
              <span className="small">20th</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="small font-semibold line-clamp-1">City life</div>
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[4px]">
                <Image
                  src="/static/assets/icons/blue-star-icon.svg"
                  width="24"
                  height="24"
                  alt="Rating icon"
                />
                <span className="text-heading6 font-farro font-bold">4.1</span>
              </div>
              <span className="small">20th</span>
            </div>
          </div>
        </div>
        <div className="border-b border-grey-200 h-[1px]"></div>

        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex items-center gap-[4px]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7.0625C3 5.26757 4.45507 3.8125 6.25 3.8125H17.625C19.4199 3.8125 20.875 5.26757 20.875 7.0625V13.5625C20.875 15.3574 19.4199 16.8125 17.625 16.8125H14.375L9.5 21.6875V16.8125H6.25C4.45507 16.8125 3 15.3574 3 13.5625V7.0625Z"
                fill="#333333"
              />
              <path
                d="M24.125 10.3125V16.0625C24.125 18.2716 22.3341 20.0625 20.125 20.0625H15.7212L12.8503 22.9334C13.305 23.1754 13.824 23.3125 14.375 23.3125H17.625L22.5 28.1875V23.3125H25.75C27.5449 23.3125 29 21.8574 29 20.0625V13.5625C29 11.7676 27.5449 10.3125 25.75 10.3125H24.125Z"
                fill="#333333"
              />
            </svg>
            <span className="para-lg font-semibold">
              What do students say?
            </span>
          </div>
          <div className="xs-small font-semibold uppercase">
            Source:
            <span className="text-primary-400">
              Whatuni student choice awards
            </span>
          </div>
        </div>
        <Reviewscomponents />
      </div>
    </div>
  );
};

export default ReviewSection;
