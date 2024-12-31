import React from "react";
import Image from "next/image";

const Authorprofile = ({ data }: any) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[20px]">
      <div className="border-t-[1px] lg:border-y-[1px] border-grey-200 py-[16px] min-w-[289px] max-w-[100%]">
        <div className="flex gap-[16px]">
          {data?.author?.image?.imgUpload?.url && (
            <Image
              className="w-[40px] h-[40px] rounded-[30px] object-cover"
              src={data.author.image.imgUpload.url}
              width="40"
              height="40"
              alt={data?.author?.image?.imgAltText ?? "profile pic"}
            />
          )}
          <div className="flex flex-col">
            <span className="text-blue-400 small font-medium">
              {data?.author?.firstName}
            </span>
            <span className="text-grey300 small font-normal">
              {data?.author?.audienceGroup}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full">
        {data?.bannerImageCollection?.items[0]?.imgUpload?.url && (
          <Image
            src={data.bannerImageCollection.items[0].imgUpload.url}
            width="907"
            height="511"
            className="block w-full h-auto"
            alt={data?.bannerImageCollection?.items[0]}
          />
        )}
      </div>
    </div>
  );
};

export default Authorprofile;
