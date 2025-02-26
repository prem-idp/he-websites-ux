import React from "react";

const ResultSectionSkeleton = () => {
  const unicard = [
    {
      showprospect: true,
      showvisit: true,
      showBooking: true,
      showRequest: true,
      showImage: true,
      sponsored: true,
      course: [
        {
          buttonCount: 4,
        },
        {
          buttonCount: 4,
        },
      ],
    },
    {
      showprospect: false,
      showvisit: false,
      showBooking: false,
      showRequest: false,
      showImage: false,
      course: [
        {
          buttonCount: 0,
        },
        {
          buttonCount: 0,
        },
      ],
    },
    {
      showprospect: true,
      showvisit: true,
      showBooking: false,
      showRequest: true,
      showImage: false,
      course: [
        {
          buttonCount: 3,
        },
        {
          buttonCount: 3,
        },
      ],
    },
    {
      showprospect: false,
      showvisit: true,
      showBooking: false,
      showRequest: true,
      showImage: false,
      course: [
        {
          buttonCount: 2,
        },
        {
          buttonCount: 2,
        },
      ],
    },
    {
      showprospect: false,
      showvisit: false,
      showBooking: false,
      showRequest: true,
      showImage: false,
      course: [
        {
          buttonCount: 1,
        },
        {
          buttonCount: 1,
        },
      ],
    },
  ];
  return (
    <>
      {/* skeleton */}
      {unicard.map((item, index) => (
        <div
          className="flex flex-col mt-[8px] md:mt-[24px] md:flex-row"
          key={index}
        >
          <div className="w-full h-[292px] relative bg-neutral-100 shrink-0 rounded-t-[16px] md:rounded-l-[16px] md:rounded-tr-none md:w-[280px] md:h-[316px] lg:w-[500px] lg:h-[376px]">
            <div className="absolute top-0 left-0 p-[16px] w-full h-full lg:p-[24px] flex flex-col justify-between rounded-t-[16px] md:rounded-l-[16px] md:rounded-tr-none">
              <div className="flex justify-between">
                <div className="flex items-start gap-[8px] grow">
                  <div className="w-[64px] h-[64px] p-[4px] rounded-[4px] bg-neutral-300 shadow-custom-4"></div>
                  {item.sponsored ? (
                    <div className="skeleton skeleton-text-animated !rounded-[4px] min-h-[20px] !w-[20%]"></div>
                  ) : null}
                </div>
                <div className="bg-neutral-200 w-[40px] h-[40px]  x-small border border-neutral-300  rounded-[24px] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                      stroke="#d4d4d4"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] text-white">
                <div className="h5  hover:underline">
                  <div className="skeleton skeleton-text-animated large_heading !w-[50%]"></div>
                </div>
                <div className="x-small font-semibold">
                  <div className="skeleton skeleton-text-animated descrip !w-[30%]"></div>
                </div>
                <div className="flex items-center gap-[8px] text-grey-50 small">
                  <div className="flex items-end gap-[2px] w-[10%]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                        fill="#d4d4d4"
                      />
                    </svg>
                    <div className="skeleton skeleton-text-animated descrip !w-[50%]"></div>
                  </div>
                  <div className="skeleton skeleton-text-animated descrip !w-[30%]"></div>
                </div>
                <div className="flex items-center gap-[4px] font-bold uppercase xs-small">
                  <div className="skeleton skeleton-text-animated !rounded-[4px] min-h-[20px] !w-[15%] px-[8px]"></div>
                  <div className="skeleton skeleton-text-animated !rounded-[4px] min-h-[20px] !w-[40%] flex items-center justify-center gap-[2px] px-[8px]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.929 10.0711C10.5878 10.4122 9.98482 11.0152 9.41426 11.5858C8.63321 12.3668 7.36696 12.3669 6.58591 11.5859C6.02667 11.0266 5.43232 10.4323 5.07111 10.0711C3.45351 8.45346 3.45351 5.83081 5.07111 4.2132C6.68872 2.5956 9.31137 2.5956 10.929 4.2132C12.5466 5.83081 12.5466 8.45346 10.929 10.0711Z"
                        stroke="#d4d4d4"
                        strokeWidth="1.13"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.55335 7.14214C9.55335 8 8.85791 8.69544 8.00005 8.69544C7.14218 8.69544 6.44675 8 6.44675 7.14214C6.44675 6.28427 7.14218 5.58884 8.00005 5.58884C8.85791 5.58884 9.55335 6.28427 9.55335 7.14214Z"
                        stroke="#d4d4d4"
                        strokeWidth="1.13"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="skeleton skeleton-text-animated descrip"></div>
                  </div>
                </div>
                <div className="skeleton skeleton-text-animated descrip !w-[20%] x-small underline"></div>
                <div className="flex items-center gap-[4px] font-bold uppercase xs-small">
                  <div className="skeleton skeleton-text-animated !rounded-[4px] min-h-[20px] !w-[40%] flex items-center gap-[2px] px-[8px]"></div>
                  <div className="skeleton skeleton-text-animated !rounded-[4px] min-h-[20px] !w-[20%] px-[8px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow">
            <div className="bg-white border border-grey-100 rounded-b-[16px] shadow-custom-3 md:rounded-tr-[16px]">
              <div className="border-b-[1px] border-grey-200 p-[16px] lg:p-[20px]">
                <div className="bg-grey-100 p-[12px] rounded-[8px] flex gap-[4px]">
                  <div className="text-grey-300 text-heading1 relative top-[20px] font-farro font-normal">
                    “
                  </div>
                  <div className="flex flex-col gap-[4px]  w-full">
                    <div className="relative group x-small">
                      <div className="skeleton skeleton-text-animated descrip !w-[20%] !mt-0"></div>
                    </div>
                    <div className="relative x-small">
                      <div className="text-grey300 line-clamp-2">
                        <div className="skeleton skeleton-text-animated descrip"></div>
                        <div className="skeleton skeleton-text-animated descrip"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {item.course.map((chitem, index) => (
                <div
                  className="flex flex-col gap-[16px] border-b-[1px] border-grey-200 p-[16px] lg:p-[20px] last:border-none"
                  key={index}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-[8px]">
                      <div className="skeleton skeleton-text-animated descrip"></div>
                      <div className="flex gap-[4px] text-grey-500">
                        <div className="flex items-center justify-center uppercase gap-[2px] bg-grey-100 rounded-[4px] px-[8px] xs-small font-semibold min-h-[22px]">
                        <div className="skeleton skeleton-square-img skeleton-text-animated !w-[16px] !h-[16px] !rounded-none"></div>

                          <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                        </div>
                        <div className="flex items-center justify-center uppercase gap-[2px] bg-grey-100 rounded-[4px] px-[8px] xs-small font-semibold min-h-[22px]">
                        <div className="skeleton skeleton-circle-img skeleton-text-animated !w-[16px] !h-[16px]"></div>

                          <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-neutral-200 w-[40px] h-[40px]  x-small border border-neutral-300  rounded-[24px] flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.02513 5.05027C2.65829 6.41711 2.65829 8.63318 4.02513 10L10 15.9749L15.9749 10C17.3417 8.63318 17.3417 6.41711 15.9749 5.05027C14.608 3.68344 12.392 3.68344 11.0251 5.05027L10 6.07544L8.97487 5.05027C7.60804 3.68344 5.39196 3.68344 4.02513 5.05027Z"
                          stroke="#d4d4d4"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-[4px]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 1.875C10.641 1.875 11.1607 2.39467 11.1607 3.03571V8.83929H16.9643C17.6053 8.83929 18.125 9.35895 18.125 10C18.125 10.641 17.6053 11.1607 16.9643 11.1607H11.1607V16.9643C11.1607 17.6053 10.641 18.125 10 18.125C9.35895 18.125 8.83929 17.6053 8.83929 16.9643V11.1607H3.03571C2.39467 11.1607 1.875 10.641 1.875 10C1.875 9.35895 2.39467 8.83928 3.03571 8.83928L8.83929 8.83929V3.03571C8.83929 2.39467 9.35895 1.875 10 1.875Z"
                        fill="#d4d4d4"
                      />
                    </svg>
                    <div className="skeleton skeleton-text-animated descrip mt-0 !w-[100px]"></div>
                  </div>
                  <div
                    className={`grid grid-cols-1 justify-items-stretch gap-[8px] auto-cols-fr xl:grid-rows-1 xl:grid-flow-col         
                        `}
                  >
                    <div className="skeleton skeleton_btn skeleton-text-animated"></div>

                    <div className="skeleton skeleton_btn skeleton-text-animated"></div>

                    <div className="skeleton skeleton_btn skeleton-text-animated"></div>

                    <div className="skeleton skeleton_btn skeleton-text-animated"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center mx-auto gap-[4px] text-primary-400 small font-semibold mt-[16px] hover:underline">
              <div className="skeleton skeleton-text-animated descrip !w-[200px]"></div>

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.23798 2.55048C8.55528 2.23317 9.06972 2.23317 9.38702 2.55048L14.262 7.42548C14.5793 7.74278 14.5793 8.25722 14.262 8.57452L9.38702 13.4495C9.06972 13.7668 8.55528 13.7668 8.23798 13.4495C7.92067 13.1322 7.92067 12.6178 8.23798 12.3005L11.726 8.8125L2.3125 8.8125C1.86377 8.8125 1.5 8.44873 1.5 8C1.5 7.55127 1.86377 7.1875 2.3125 7.1875H11.726L8.23798 3.69952C7.92067 3.38222 7.92067 2.86778 8.23798 2.55048Z"
                  fill="#d4d4d4"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResultSectionSkeleton;
