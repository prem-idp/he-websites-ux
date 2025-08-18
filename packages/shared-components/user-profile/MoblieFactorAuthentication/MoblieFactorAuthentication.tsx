import React from "react";

const MoblieFactorAuthentication = () => {
  return (
    <div className="flex justify-center py-[56px]">
      <div className="flex items-center flex-col gap-[32px] w-[550px] max-w-[100%] border rounded-[4px] border-grey-300 p-[24px] bg-white">
        <div className="flex flex-col gap-[4px] w-[320px] max-w-[100%] text-center items-center">
          <div className="h2 pl-[2px] w-full whitespace-nowrap overflow-hidden text-ellipsis ">
            Just making sure...
          </div>
          <span className="text-x-small">
            To download your data we require two factor authentication so we can
            verify it is really you
          </span>
        </div>
        <div className="flex flex-col gap-[8px] ">
          <div className="flex flex-col gap-[4px] items-center">
            <div className="h6">Two factor authentication</div>
            <span className="text-x-small">
              Type your phone number and we will send you a code
            </span>
          </div>
          <div className="flex"></div>

          <span className="text-x-small">
            This is to protect you from anyone trying to steal your data/login
            details
          </span>
          <button className="btn btn-primary"> Verify</button>
        </div>
      </div>
    </div>
  );
};

export default MoblieFactorAuthentication;
