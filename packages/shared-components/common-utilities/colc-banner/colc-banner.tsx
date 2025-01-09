"use server";
import React from "react";
import { BannersQuery } from "@packages/lib/graphQL/cocl-landing";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";
import { homePageComponentQueryFormation } from "@packages/lib/graphQL/fetch-function";
import Image from "next/image";
const ColcBanner = async ({
  routename,
  contentModelName,
  internalName,
}: any) => {
  const query = homePageComponentQueryFormation(
    internalName,
    BannersQuery,
    routename,
    contentModelName
  );
  const jsondata = (await graphQlFetchFunction(query))?.data?.contentData
    ?.items[0]?.bodyContentCollection?.items[0]?.mediaCardsCollection?.items[0];
  return (
    <>
      {jsondata && (
        <section className="bg-blue-100">
          <div className="max-w-container mx-auto">
            <div className="flex flex-col-reverse md:flex-row justify-between gap-[16px] p-[16px]  md:p-[24px_20px] lg:py-0 xl:px-0 min-h-[194px]">
              <div className="flex flex-col flex-grow gap-[16px] self-center md:self-end lg:p-[16px_0_38px]">
                <div className="flex flex-col gap-[4px]">
                  <h1 className="text-heading1 md:text-heading-xl">
                    {jsondata?.title}
                  </h1>
                  <p className="small">
                    {jsondata?.longDescription} Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Adipisci, maxime quidem
                    quaerat aspernatur doloribus aliquid magni minus
                  </p>
                </div>
                {routename === "/advice" && (
                  <div className="bg-white rounded-[32px] p-[16px] border border-neutral300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:p-[10px]">
                    <div className="flex flex-col gap-x-[10px] justify-between md:flex-row">
                      <div className="relative grow">
                        <input
                          type="text"
                          className="form-control w-full focus:outline-none pb-[16px] small text-black placeholder:text-gray-500 md:py-[10px] border-b border-neutral200 md:border-none"
                          aria-label="enter keyword"
                          placeholder="Text goes here"
                        />
                      </div>
                      <div className="pt-[16px] md:pt-[0]">
                        <button
                          type="submit"
                          className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] md:w-[114px]"
                        >
                          <Image
                            src="/static/assets/icons/search_icon.svg"
                            width="18"
                            height="18"
                            alt="Search icon"
                          />
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex self-end justify-center w-full shrink-0 md:w-[219px] lg:w-[392px] pt-[12px]">
                {jsondata?.image?.imgUpload?.url && (
                  <Image
                    src={jsondata?.image?.imgUpload?.url}
                    width={routename === "/advice" ? 205 : 150}
                    height={routename === "/advice" ? 260 : 150}
                    priority
                    alt={jsondata?.image?.imgAltText}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ColcBanner;
