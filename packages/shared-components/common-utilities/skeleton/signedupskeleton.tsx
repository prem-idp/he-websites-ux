import React from "react";

const SignedupSkeleton = () => {
  return (
    <>
      <div className="signedup w-full flex flex-col self-start px-[16px] md:px-[24px] pt-[40px] pb-[16px] md:pb-[24px] gap-[16px]">
        <div className="success_continer flex items-center bg-neutral-100 rounded-[6px] px-[16px] py-[16px] gap-[8px] border border-neutral-300">
          <div className="skeleton skeleton-square-img skeleton-text-animated !w-[16px] !h-[16px] !rounded-none"></div>
          <div className="skeleton skeleton-text-animated descrip"></div>
        </div>
        <div className="thanks_card flex flex-col gap-[4px]">
          <div className="skeleton skeleton-text-animated small_heading !w-[100px]"></div>
          <div className="skeleton skeleton-text-animated descrip"></div>
        </div>

        <form className="signedup_form w-full h-full flex flex-col gap-[24px] md:gap-[36px]">
          <div className="form_container flex flex-col gap-[16px] bg-grey-50 px-[16px] py-[16px]">
            <div className="form_radio flex flex-col gap-[8px]">
              <div className="skeleton skeleton-text-animated heading"></div>
              <div className="form-radio-group flex flex-col gap-[10px]">
                <div className="col flex items-center gap-[12px]">
                  <div className="radio_card">
                    <div className="skeleton skeleton-circle-img skeleton-text-animated !w-[16px] !h-[16px] !m-0"></div>
                  </div>
                  <div className="skeleton skeleton-text-animated descrip !w-[100px] !m-0"></div>
                </div>
                <div className="col flex items-center gap-[12px]">
                  <div className="radio_card">
                    <div className="skeleton skeleton-circle-img skeleton-text-animated !w-[16px] !h-[16px] !m-0"></div>
                  </div>
                  <div className="skeleton skeleton-text-animated descrip !w-[100px] !m-0"></div>
                </div>
                <div className="col flex items-center gap-[12px]">
                  <div className="radio_card">
                    <div className="skeleton skeleton-circle-img skeleton-text-animated !w-[16px] !h-[16px] !m-0"></div>
                  </div>
                  <div className="skeleton skeleton-text-animated descrip !w-[100px] !m-0"></div>
                </div>
                <div className="col flex items-center gap-[12px]">
                  <div className="radio_card">
                    <div className="skeleton skeleton-circle-img skeleton-text-animated !w-[16px] !h-[16px] !m-0"></div>
                  </div>
                  <div className="skeleton skeleton-text-animated descrip !w-[100px] !m-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-[24px]">
            <div className="submit_btn w-full">
              <div className="skeleton skeleton_btn skeleton-text-animated"></div>
            </div>
            <div className="small font-semibold text-grey300">
              <div className="skeleton skeleton-text-animated descrip !w-[175px]"></div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignedupSkeleton;
