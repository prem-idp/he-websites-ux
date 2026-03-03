"use client";
import React, { useState } from "react";
import Image from "next/image";
import Registration from "@packages/shared-components/common-utilities/register/registration";
import {
  CloseBlackIcon,
  HeartBlueIcon,
  InfoBlackIcon,
  SettingsBlueIcon,
  UsereBlueIcon,
} from "../media-utilities/mediautilities";

const AccountMerging = () => {
  const [open, setOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  return (
    <>
      {showBanner && (
        <div className="bg-orange-200 py-[12px] shadow-custom-2">
          <div className="container max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0]">
            <div className="flex justify-between gap-[16px] small font-semibold ">
              <div className="space-y-[16px] md:flex md:items-center md:gap-[16px] md:space-y-0">
                <div className="flex gap-[8px]">
                  <span>
                    <InfoBlackIcon />
                  </span>
                  <div className="md:w-[515px] lg:w-auto">
                    Sign in once. Your account works across Whatuni, The
                    Complete University Guide & Postgraduate Search.
                  </div>
                </div>
                <button
                  className="btn btn-primary btn-small w-full md:w-auto"
                  onClick={() => setOpen(true)}
                >
                  How it works
                </button>
              </div>
              <button onClick={() => setShowBanner(false)}>
                <CloseBlackIcon />
              </button>
            </div>
          </div>
        </div>
      )}
      {open && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-shadow flex items-center justify-center z-50">
          <div className="relative bg-white shadow-custom-6 w-full md:w-[512px] p-[16px] md:p-[24px] rounded-[8px] mx-[16px]">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-[16px] p-[4px] right-[16px] cursor-pointer"
            >
              <Image
                alt="close icon"
                width={14}
                height={14}
                src="/static/assets/icons/modal_close.svg"
              />
            </button>
            <div className="overflow-y-auto max-h-[calc(100vh_-_150px)] scrollbar-hidden md:max-h-[calc(100vh_-_100px)]">
              <div className="flex flex-col gap-[16px] md:gap-[24px]">
                <div className="flex flex-col gap-[16px] md:gap-[24px]">
                  <div className="text-heading6 font-semibold min-w-[245px] font-farro">
                    How your account works across our sites
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    <div className="flex gap-[8px]">
                      <div className="w-[44px] h-[44px] shrink-0 rounded-[22px_0_22px_0] bg-primary-200 flex items-center justify-center">
                        <UsereBlueIcon />
                      </div>
                      <div className="[&>p]:text-small [&>p:first-child]:font-semibold">
                        <p>One account, three sites</p>
                        <p>
                          Use the same login on{" "}
                          <span className="text-primary-400">
                            <a href="">Whatuni</a>{" "}
                          </span>
                          ,
                          <span className="text-primary-400">
                            {" "}
                            <a href="">Complete University Guide</a>
                          </span>{" "}
                          and
                          <span className="text-primary-400">
                            {" "}
                            <a href=""> Postgraduate Search</a>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-[8px]">
                      <div className="w-[44px] h-[44px] shrink-0 rounded-[22px_0_22px_0] bg-primary-200 flex items-center justify-center">
                        <HeartBlueIcon />
                      </div>
                      <div className="[&>p]:text-small [&>p:first-child]:font-semibold">
                        <p>Seamless saving</p>
                        <p>
                          Favourites, enquiries and preferences travel with you.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-[8px]">
                      <div className="w-[44px] h-[44px] shrink-0 rounded-[22px_0_22px_0] bg-primary-200 flex items-center justify-center">
                        <SettingsBlueIcon />
                      </div>
                      <div className="[&>p]:text-small [&>p:first-child]:font-semibold">
                        <p>One preferences centre</p>
                        <p>Manage emails all in one place</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] border-t border-grey-200 pt-[24px]">
                  <div className="font-semibold">
                    Frequently asked questions
                  </div>
                  <div className="[&>p]:text-small [&>p:first-child]:font-semibold">
                    <p>Will I need to sign in again on other sites?</p>
                    <p>Usually no - your session carries over.</p>
                  </div>
                  <div className="[&>p]:text-small [&>p:first-child]:font-semibold">
                    <p>What about my data?</p>
                    <p>
                      Your settings and consents stay under your control: you
                      can change them anytime.
                    </p>
                  </div>
                  <div className="[&>p]:text-small [&>p:first-child]:font-semibold">
                    <p>Already have an account elsewhere?</p>
                    <p>We’ll help you link it when you sign in.</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="btn btn-primary-outline btn-medium">
                    Open preferences
                  </button>
                  <button className="btn btn-primary btn-medium">
                    Ok, got it
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Registration isAccountMerging={true} />
    </>
  );
};

export default AccountMerging;
