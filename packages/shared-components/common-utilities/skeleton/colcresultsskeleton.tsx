import React from "react";

const ColcResultsSkeleton = () => {
  return (
    <>
      <div className="max-w-container mx-auto">
        <div className="results_container flex flex-col lg:flex-row md:gap-[40px] lg:gap-[20px] md:px-[20px] lg:px-[0] pb-[40px] md:py-[40px]">
          <section className="results_card flex flex-col  w-full md:rounded-t-[8px] overflow-hidden">
            <div className="bg-neutral-100 edit_results_card flex flex-row-reverse md:flex-row justify-between items-center gap-[24px] px-[16px] md:px-[24px] py-[24px] md:py-[12px]">
              <div className="results_img w-[133px] md:w-[97px]">
                <div className="skeleton skeleton-square-img skeleton-text-animated !w-[97px] !h-[129px] !rounded-none"></div>
              </div>
              <div className="results_edit flex flex-col gap-[16px] md:gap-[0] md:flex-row  justify-between items-start md:items-center w-full">
                <div className="flex flex-col">
                  <div className="skeleton skeleton-text-animated small_heading !w-[200px]"></div>
                  <div className="skeleton skeleton-text-animated descrip !w-[200px]"></div>
                </div>
                <div className="edit_answers">
                  <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[153px]"></div>
                </div>
              </div>
            </div>
            <div className="cost_living_container flex flex-col gap-[24px] px-[16px] md:px-[24px] py-[24px] bg-white rounded-b-[8px] overflow-hidden md:border md:border-neutral-300 md:shadow-custom-3">
              <div className="average_cost_card flex flex-col gap-[16px]">
                <div className="skeleton skeleton-text-animated page_heading"></div>
                <div className="average_cost_breakdown flex flex-col rounded-[8px] border-[3px] border-neutral-300">
                  <div className="flex justify-between gap-[24px] px-[16px] py-[16px] bg-neutral-100">
                    <div className="skeleton skeleton-text-animated page_heading !w-[100px]"></div>
                    <div className="skeleton skeleton-text-animated page_heading !w-[100px]"></div>
                  </div>
                  <div className="flex flex-col gap-[8px] px-[16px] py-[8px] md:py-[16px] bg-neutral-100">
                    <div className="skeleton skeleton-text-animated heading !w-[300px]"></div>

                    <div className="flex flex-wrap md:flex-nowrap justify-between gap-[16px]">
                      <div className="flex flex-col gap-[4px] basis-[47%] md:basis-[20%]">
                        <div className="skeleton skeleton-text-animated descrip"></div>
                        <div className="skeleton skeleton-text-animated descrip"></div>
                      </div>
                      <div className="flex flex-col gap-[4px] basis-[47%] md:basis-[20%]">
                        <div className="skeleton skeleton-text-animated descrip"></div>
                        <div className="skeleton skeleton-text-animated descrip"></div>
                      </div>
                      <div className="flex flex-col gap-[4px] basis-[47%] md:basis-[20%]">
                        <div className="skeleton skeleton-text-animated descrip"></div>
                        <div className="skeleton skeleton-text-animated descrip"></div>
                      </div>
                      <div className="flex flex-col gap-[4px] basis-[47%] md:basis-[20%]">
                        <div className="skeleton skeleton-text-animated descrip"></div>
                        <div className="skeleton skeleton-text-animated descrip"></div>
                      </div>
                      <div className="flex flex-col gap-[4px] basis-[47%] md:basis-[20%]">
                        <div className="skeleton skeleton-text-animated descrip"></div>
                        <div className="skeleton skeleton-text-animated descrip"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex px-[16px] py-[16px] bg-neutral-50 rounded-b-[8px]">
                    <div className="flex flex-col gap-[4px] basis-[50%]">
                      <div className="skeleton skeleton-text-animated heading !w-[100px]"></div>
                      <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                    </div>
                    <div className="flex flex-col gap-[4px] basis-[50%] validation-negative">
                      <div className="skeleton skeleton-text-animated heading !w-[100px]"></div>
                      <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="your_cost_card flex flex-col gap-[16px]">
                <div className="skeleton skeleton-text-animated small_heading"></div>

                <div className="your_cost_of_living flex flex-col gap-[16px] md:gap-[8px] md:flex-row md:items-center justify-between ">
                  <div className="flex items-center gap-[8px] cursor-pointer">
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[94px]"></div>
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[53px]"></div>
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[72px]"></div>
                  </div>
                  <div className="relative">
                    <div className="skeleton skeleton_btn skeleton-text-animated !w-[247px] !rounded-[4px]"></div>
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion-item-caption flex gap-[8px] justify-between py-[16px] pl-[16px] pr-[16px] md:pr-[24px] bg-grey-100">
                    <div className="flex items-center gap-[8px] ">
                      <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    {/* accordion start */}
                    <div className="accordion-header flex flex-col justify-center min-h-[56px] py-[8px] md:py-[16px] pl-[16px] pr-[16px] md:pr-[24px] border-t-0 border-b border-grey-200 hover:bg-primary-50 first:border-t">
                      <div className="flex w-full gap-[8px] justify-between">
                        <div className="accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]">
                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                          <div className="skeleton skeleton-text-animated descrip"></div>
                        </div>
                        <div className="flex items-center gap-[24px]">
                          <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>

                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                        </div>
                      </div>
                      <div className="accordion-body hidden mt-[16px] mb-[8px] md:mb-[0]"></div>
                    </div>
                    {/* accordion start */}

                    {/* accordion start */}
                    <div className="accordion-header flex flex-col justify-center min-h-[56px] py-[8px] md:py-[16px] pl-[16px] pr-[16px] md:pr-[24px] border-t-0 border-b border-grey-200 hover:bg-primary-50 first:border-t">
                      <div className="flex w-full gap-[8px] justify-between">
                        <div className="accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]">
                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                          <div className="skeleton skeleton-text-animated descrip"></div>
                        </div>
                        <div className="flex items-center gap-[24px]">
                          <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>

                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                        </div>
                      </div>
                      <div className="accordion-body hidden mt-[16px] mb-[8px] md:mb-[0]"></div>
                    </div>
                    {/* accordion start */}

                    {/* accordion start */}
                    <div className="accordion-header flex flex-col justify-center min-h-[56px] py-[8px] md:py-[16px] pl-[16px] pr-[16px] md:pr-[24px] border-t-0 border-b border-grey-200 hover:bg-primary-50 first:border-t">
                      <div className="flex w-full gap-[8px] justify-between">
                        <div className="accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]">
                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                          <div className="skeleton skeleton-text-animated descrip"></div>
                        </div>
                        <div className="flex items-center gap-[24px]">
                          <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>

                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                        </div>
                      </div>
                      <div className="accordion-body hidden mt-[16px] mb-[8px] md:mb-[0]"></div>
                    </div>
                    {/* accordion start */}
                    {/* accordion start */}
                    <div className="accordion-header flex flex-col justify-center min-h-[56px] py-[8px] md:py-[16px] pl-[16px] pr-[16px] md:pr-[24px] border-t-0 border-b border-grey-200 hover:bg-primary-50 first:border-t">
                      <div className="flex w-full gap-[8px] justify-between">
                        <div className="accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]">
                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                          <div className="skeleton skeleton-text-animated descrip"></div>
                        </div>
                        <div className="flex items-center gap-[24px]">
                          <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>

                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                        </div>
                      </div>
                      <div className="accordion-body hidden mt-[16px] mb-[8px] md:mb-[0]"></div>
                    </div>
                    {/* accordion start */}
                    {/* accordion start */}
                    <div className="accordion-header flex flex-col justify-center min-h-[56px] py-[8px] md:py-[16px] pl-[16px] pr-[16px] md:pr-[24px] border-t-0 border-b border-grey-200 hover:bg-primary-50 first:border-t">
                      <div className="flex w-full gap-[8px] justify-between">
                        <div className="accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]">
                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                          <div className="skeleton skeleton-text-animated descrip"></div>
                        </div>
                        <div className="flex items-center gap-[24px]">
                          <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>

                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                        </div>
                      </div>
                      <div className="accordion-body hidden mt-[16px] mb-[8px] md:mb-[0]"></div>
                    </div>
                    {/* accordion start */}
                    {/* accordion start */}
                    <div className="accordion-header flex flex-col justify-center min-h-[56px] py-[8px] md:py-[16px] pl-[16px] pr-[16px] md:pr-[24px] border-t-0 border-b border-grey-200 hover:bg-primary-50 first:border-t">
                      <div className="flex w-full gap-[8px] justify-between">
                        <div className="accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]">
                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                          <div className="skeleton skeleton-text-animated descrip"></div>
                        </div>
                        <div className="flex items-center gap-[24px]">
                          <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>

                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                        </div>
                      </div>
                      <div className="accordion-body hidden mt-[16px] mb-[8px] md:mb-[0]"></div>
                    </div>
                    {/* accordion start */}
                    {/* accordion start */}
                    <div className="accordion-header flex flex-col justify-center min-h-[56px] py-[8px] md:py-[16px] pl-[16px] pr-[16px] md:pr-[24px] border-t-0 border-b border-grey-200 hover:bg-primary-50 first:border-t">
                      <div className="flex w-full gap-[8px] justify-between">
                        <div className="accord_uni_list flex items-center gap-[6px] md:w-[calc(100%_-_200px)]">
                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                          <div className="skeleton skeleton-text-animated descrip"></div>
                        </div>
                        <div className="flex items-center gap-[24px]">
                          <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>

                          <span className="cursor-pointer">
                            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[20px] !h-[18px] !rounded-none"></div>
                          </span>
                        </div>
                      </div>
                      <div className="accordion-body hidden mt-[16px] mb-[8px] md:mb-[0]"></div>
                    </div>
                    {/* accordion start */}
                    <nav aria-label="navigation">
                      <div className="pagination flex justify-center items-center gap-[8px] px-[24px] pt-[24px]">
                        <div className="skeleton skeleton-square-img skeleton-text-animated !w-[34px] !h-[37px] !rounded-[4px]"></div>
                        <div className="skeleton skeleton-square-img skeleton-text-animated !w-[34px] !h-[37px] !rounded-[4px]"></div>
                        <div className="skeleton skeleton-square-img skeleton-text-animated !w-[34px] !h-[37px] !rounded-[4px]"></div>
                        <div className="skeleton skeleton-square-img skeleton-text-animated !w-[34px] !h-[37px] !rounded-[4px]"></div>
                        <div className="skeleton skeleton-square-img skeleton-text-animated !w-[34px] !h-[37px] !rounded-[4px]"></div>
                        <div className="skeleton skeleton-square-img skeleton-text-animated !w-[34px] !h-[37px] !rounded-[4px]"></div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <aside className="promotion_pod w-full lg:hidden md:pt-[40px]">
              <div className="advert_card w-full lg:min-w-[392px] lg:w-[392px] min-h-[226px] lg:min-h-[403px] flex flex-col md:flex-row justify-between md:items-start items-center gap-[24px] md:rounded-[8px] bg-blue-200 px-[24px] pt-[24px]">
                <div className="advert_header_card flex flex-col gap-[16px]">
                  <div className="advert_content_card flex flex-col gap-[4px]">
                    <h4 className="md:text-heading4 lg:text-heading5">
                      Unlock your uni journey with the Whatuni app.
                    </h4>
                    <p className="small font-normal">
                      Access university rankings, student reviews, and
                      everything you need to make informed choices—all in one
                      place!
                    </p>
                  </div>
                  <ul className="flex flex-row gap-[16px]">
                    <li>
                      <a href="#" aria-label="App Store">
                        <img
                          src="/assets/imgs/app_store.svg"
                          alt=""
                          width="120"
                          height="40"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Google Play">
                        <img
                          src="/assets/imgs/google_play_store.svg"
                          alt=""
                          width="135"
                          height="40"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="advert_media_card min-w-[204px] w-[204px] flex md:self-end">
                  <img
                    className="block md:hidden w-full md:rounded-[8px]"
                    src="/assets/imgs/colc/promotion_app_img_v1.png"
                    alt=""
                    width="392"
                    height="403"
                  />
                  <img
                    className="hidden md:block lg:hidden w-full"
                    src="/assets/imgs/colc/promotion_app_img.png"
                    alt=""
                    width="612"
                    height="606"
                  />
                </div>
              </div>
            </aside>
          </section>
          <aside className="promotion_pod w-full lg:min-w-[392px] lg:w-[392px] min-h-[226px] lg:min-h-[403px] hidden lg:block">
            <div className="advert_card flex flex-col justify-between gap-[24px] rounded-[8px] bg-neutral-200 px-[24px] pt-[24px]">
              <div className="advert_header_card flex flex-col gap-[16px]">
                <div className="advert_content_card flex flex-col gap-[4px]">
                  <div className="skeleton skeleton-text-animated small_heading"></div>
                  <div className="skeleton skeleton-text-animated descrip"></div>
                </div>
                <div className="flex flex-row gap-[16px]">
                  <div className="skeleton skeleton-square-img skeleton-text-animated !w-[120px] !h-[40px] !rounded-none"></div>
                  <div className="skeleton skeleton-square-img skeleton-text-animated !w-[135px] !h-[40px] !rounded-none"></div>
                </div>
              </div>
              <div className="advert_media_card lg:h-[178px] lg:overflow-hidden mx-auto">
                <div className="skeleton skeleton-square-img skeleton-text-animated !w-[204px] !h-[168px] !rounded-none"></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default ColcResultsSkeleton;
