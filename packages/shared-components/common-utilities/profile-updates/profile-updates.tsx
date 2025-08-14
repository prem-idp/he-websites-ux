import React from "react";

const ProfileUpdates = ({ children }: any) => {
  return (
    <div className="w-full flex shadow-custom-1">
      <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0]">
        <div className="flex flex-col gap-[32px] items-center justify-center pt-[32px] pb-[12px]">
          <div className="flex flex-col justify-center">
            <div className=""></div>
            <div className="h3">Daniel Finnegan</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdates;
