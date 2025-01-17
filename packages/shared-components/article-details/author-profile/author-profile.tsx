import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentfulInspectorManager } from "@packages/lib/contentful-preview/ContentfulInspector";
const Authorprofile = ({ data, preview }: any) => {
  console.dir(data?.author, "form the author profile");
  return (
    <>
      {preview && (
        <ContentfulInspectorManager
          fields={[
            {
              entryId: data?.author?.sys?.id,
              fieldId: "firstName",
              targetSelector: "#Author-Name",
            },
            {
              entryId: data?.author?.sys?.id,
              fieldId: "middleName",
              targetSelector: "#Author-Name",
            },
            {
              entryId: data?.author?.sys?.id,
              fieldId: "lastName",
              targetSelector: "#Author-Name",
            },

            {
              entryId: data?.author?.sys?.id,
              fieldId: "audienceGroup",
              targetSelector: "#audienceGroup",
            },
            {
              entryId: data?.author?.image?.sys?.id,
              fieldId: "imgUpload",
              targetSelector: "#imgUpload",
            },
            {
              entryId: data?.bannerImageCollection?.items[0]?.sys?.id,
              fieldId: "imgUpload",
              targetSelector: "#imgUpload",
            },
          ]}
        />
      )}
      <div className="flex flex-col lg:flex-row lg:gap-[20px]">
        <div className="border-t-[1px] lg:border-y-[1px] border-grey-200 py-[16px] min-w-[289px] max-w-[100%]">
          <div className="flex gap-[16px]">
            {data?.author?.image?.imgUpload?.url && (
              <Image
                id="imgUpload"
                className="w-[40px] h-[40px] rounded-[30px] object-cover"
                src={data?.author?.image?.imgUpload?.url}
                width="40"
                height="40"
                alt={data?.author?.image?.imgAltText ?? "profile-image"}
              />
            )}
            <div className="flex flex-col">
              <span className="text-blue-400 small font-medium">
                <Link
                  id="Author-Name"
                  className="hover:underline"
                  href="#"
                >{`${data?.author?.firstName ?? ""}${data?.author?.middleName ?? ""}${data?.author?.lastName ?? ""}`}</Link>
              </span>
              <span
                id="audienceGroup"
                className="text-grey300 small font-normal"
              >
                {data?.author?.audienceGroup}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          {data?.bannerImageCollection?.items[0]?.imgUpload?.url && (
            <Image
              id="imgUpload"
              src={data?.bannerImageCollection?.items[0]?.imgUpload?.url}
              width="907"
              height="511"
              className="block w-full h-auto"
              alt={
                data?.bannerImageCollection?.items[0]?.imgAltText ??
                "Article_image"
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Authorprofile;
