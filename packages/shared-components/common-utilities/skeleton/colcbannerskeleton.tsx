const ColcBannerSkeleton = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-[16px] p-[16px] md:p-[0_20px_26px_20px] lg:py-0 xl:px-0 min-h-[194px]">
            <div className="w-full flex flex-col flex-grow gap-[16px] self-center lg:p-[16px_0_38px]">
              <div className="flex flex-col gap-[4px]">
                <div className="skeleton skeleton-text-animated large_heading !mb-[4px] !w-[70%]"></div>
                <div className="skeleton skeleton-text-animated large_heading !mb-[4px] !w-[40%]"></div>
                <div className="skeleton skeleton-text-animated descript !w-[100%]"></div>
                <div className="skeleton skeleton-text-animated descript !w-[40%]"></div>
              </div>
              {/* -- Search section */}
                <div className="bg-white rounded-[32px] p-[16px] border border-grey600 shadow-custom-1 md:pl-[24px] md:p-[10px]">
                  <div className="flex flex-col items-stretch md:flex-row md:items-center">
                    <div className="relative mb-[24px] md:mb-[0] shrink-0">
                      <div className="skeleton skeleton-text skeleton-text-animated descript mr-0 w-full md:w-[160px] md:mr-[16px]"></div>
                    </div>
                    <div className="w-full relative border-y-[1px] border-neutral200 grow md:border-l md:border-y-0">
                      <div className="flex items-center my-[12px] md:my-[0]">
                        <div className="w-full skeleton skeleton-text skeleton-text-animated descript px-[0] md:mx-[16px]"></div>
                      </div>
                    </div>
                    <div className="w-full relative grow md:border-l border-neutral200">
                      <div className="flex items-center my-[12px] md:my-[0]">
                        <div className="w-full skeleton skeleton-text skeleton-text-animated descript px-[0] md:mx-[16px]"></div>
                      </div>
                    </div>
                    <div className="pt-[2px] md:pt-[0]">
                      <div className="skeleton skeleton_btn skeleton-text-animated w-full  px-[24px] py-[10px] md:min-w-[114px] !my-0"></div>
                    </div>
                  </div>
                </div>
              {/* -- Search section */}
            </div>
            <div className="flex self-end justify-center w-full shrink-0 md:w-[219px] lg:w-[392px] pt-[12px]">
              <div className="skeleton skeleton-square-img skeleton-text-animated !w-[205px] !h-[260px] !rounded-none"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ColcBannerSkeleton;
