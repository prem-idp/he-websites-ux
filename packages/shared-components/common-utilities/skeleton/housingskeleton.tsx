const HousingSkeleton = () => {
  const housing = [
    "At home",
    "University halls",
    "Shared house (private)",
    "Live alone (private)",
  ];

  return (
    <>
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center gap-[12px]">
          <div className="skeleton skeleton-text-animated !rounded-none !rounded-tl-[24px] !rounded-br-[24px] p-[12px] !w-[48px] !h-[48px] flex items-center justify-center">
            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[24px] !h-[24px] !rounded-none"></div>
          </div>
          <div className="skeleton skeleton-text-animated large_heading !w-[200px]"></div>
        </div>
        <div className="skeleton skeleton-text-animated descrip"></div>
        <div className="border-l-[8px] border-neutral-300 skeleton-text-animated">
          <div className="ml-[16px]">
            <div className="skeleton skeleton-text-animated small_heading !mb-[8px] !w-[500px]"></div>
            <div className="skeleton skeleton-text-animated descrip !w-[100px]"></div>
            <div className="flex flex-row flex-wrap gap-[8px]">
              {housing.map((item, index) => (
                <div className="form_radio flex relative" key={index}>
                  <div className="skeleton skeleton_btn skeleton-text-animated"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-grey-50 border border-neutral-300 rounded-[4px] p-[16px] flex flex-col text-neutral900">
          <div className="flex items-center gap-[12px]">
            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[16px] !h-[16px] !rounded-none"></div>
            <div className="skeleton skeleton-text-animated descript"></div>
          </div>
          <div>
            <div className="border-t border-neutral-300 pt-[12px] mt-[12px] grid grid-cols-1 items-center justify-between gap-[12px] md:grid-cols-2">
              <div>
                <div className="skeleton skeleton-text-animated small_heading !mb-[8px] !w-[200px]"></div>
                <div className="flex items-center gap-[8px]">
                  <div className="relative">
                    <div className="skeleton skeleton_btn skeleton-text-animated !w-[160px] !rounded-[4px]"></div>
                  </div>
                  <div className="relative">
                    <div className="skeleton skeleton_btn skeleton-text-animated !min-w-[111px] !rounded-[4px]"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="skeleton skeleton-text-animated small_heading !mb-[8px] !w-[100px]"></div>
                <div className="relative">
                  <div className="skeleton skeleton_btn skeleton-text-animated !rounded-[4px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-l-[2px] border-neutral-300 bg-grey-100 px-[16px] py-[10px]">
          <div className="flex items-center justify-between gap-[30px] w-full font-semibold small">
            <div className="skeleton skeleton-text-animated descript"></div>

            <div className="skeleton skeleton-square-img skeleton-text-animated !w-[24px] !h-[24px] !rounded-none"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HousingSkeleton;
