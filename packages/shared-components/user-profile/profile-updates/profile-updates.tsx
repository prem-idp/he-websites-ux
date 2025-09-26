import Image from "next/image";
import React, { useState } from "react";

const ProfileUpdates = ({ children }: any) => {
  // const [imagepath, setImagePath] = useState(
  //   "/static/assets/icons/user-profile/avatar.png"
  // );
  const [uploadpop, setUploadPop] = useState(false);
  return (
    <div className="w-full flex shadow-custom-1 mb-[3px]">
      <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0]">
        <div className="flex flex-col gap-[32px] items-center justify-center pt-[32px] pb-[12px]">
          <div className="flex flex-col gap-[16px] items-center justify-center relative">
            <div
              onClick={() => {
                setUploadPop(true);
              }}
              className="select-none relative cursor-pointer"
            >
              <span className="relative size-[96px] flex overflow-hidden rounded-full">
                <Image
                  alt="profile"
                  src="/static/assets/icons/user-profile/user-profile.png"
                  width={96}
                  height={96}
                />

                <span className="absolute left-[0] flex items-center justify-center size-[96px] top-[0] bg-grey-600 bg-opacity-70 rounded-full">
                  <Image
                    src="/static/assets/icons/user-profile/camera-icon.svg"
                    width={20}
                    height={20}
                    alt="camera"
                  />
                </span>
              </span>
              <span className="absolute bottom-[0] size-[24px] right-[0]">
                <Image
                  src="/static/assets/icons/user-profile/plus-blue-icon.svg"
                  width={24}
                  height={24}
                  alt="camera"
                />
              </span>
            </div>
            {uploadpop ? (
              <div className="select-none before:absolute before:content-[''] before:-z-[-1] before:left-[0] before:right-[0] before:md:right-auto before:mx-[auto]  before:md:left-[50px] before:size-[16px] before:bg-white before:rotate-45 before:top-[-8px] left[-50px] md:left-[50px] absolute top-[105px] min-w-[300px] md:min-w-[316px] shadow-custom-3 p-[12px] bg-white rounded-[8px] flex flex-col gap-[12px]">
                <div className="flex flex-col gap-[8px]">
                  <span className="x-small font-semibold">
                    Upload your profile photo
                  </span>

                  <div>
                    <input
                      type="file"
                      id="file uploader"
                      // onChange={(event) => {
                      //   if (event.target.files && event.target.files[0]) {
                      //     setImagePath(event.target.files[0].name);
                      //   }
                      // }}
                      className="hidden"
                    />
                    <div className="flex gap-[8px] items-center relative border bg-grey-100 h-[34px] border-grey-300 rounded-full">
                      <label
                        htmlFor="file uploader"
                        className="font-semibold small text-primary-400 bg-white h-[34px] border border-primary-400 rounded-full
                       px-[10px] py-[6px] cursor-pointer"
                      >
                        Choose file
                      </label>
                      <span className="text-x-small truncate truncate max-w-[150px]">
                        No file chosen
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[8px] items-center justify-end">
                  <button
                    onClick={() => {
                      setUploadPop(false);
                    }}
                    className="hover:underline btn-xsmall btn text-primary-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setUploadPop(false);
                    }}
                    className="btn btn-primary btn-xsmall"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : null}

            <div className="h3 text-black">Daniel Finnegan</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdates;
