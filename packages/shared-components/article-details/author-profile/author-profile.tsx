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
              targetSelector: "#title-element",
            },
            {
              entryId: data?.author?.sys?.id,
              fieldId: "middleName",
              targetSelector: "#title-element",
            },
            {
              entryId: data?.author?.sys?.id,
              fieldId: "lastName",
              targetSelector: "#title-element",
            },
            {
              entryId: data?.author?.sys?.id,
              fieldId: "firstName",
              targetSelector: "#title-element",
            },
            {
              entryId: data?.author?.sys?.id,
              fieldId: "audienceGroup",
              targetSelector: "#description-element",
            },
            {
              entryId: data?.author?.sys?.id,
              fieldId: "image",
              targetSelector: "#image-element",
            },
          ]}
        />
      )}
      <div className="flex flex-col lg:flex-row lg:gap-[20px]">
        <div className="border-t-[1px] lg:border-y-[1px] border-grey-200 py-[16px] min-w-[289px] max-w-[100%]">
          <div className="flex gap-[16px]">
            {data?.author?.image?.imgUpload?.url && (
              <Image
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
                  className="hover:underline"
                  href="#"
                >{`${data?.author?.firstName ?? ""}${data?.author?.middleName ?? ""}${data?.author?.lastName ?? ""}`}</Link>
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
