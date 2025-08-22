"use client";
import React, { useState } from "react";
import Link from "next/link";
import CheckboxComponent from "@packages/shared-components/common-utilities/form-variations/CheckboxComponent";
import Image from "next/image";

interface DeleteAccountProps {
  accountPop: boolean;
  onAccountPop: (value: boolean) => void;
}
const DeleteAccount = ({ accountPop, onAccountPop }: DeleteAccountProps) => {
  const [confirmpopup, setConfirmPopup] = useState<boolean>(false);
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-shadow flex items-center justify-center z-50">
      <div className="relative bg-white shadow-custom-6 w-full md:w-[575px] px-[16px] pb-[16px] pt-[40px] md:p-[40px] rounded-[8px] mx-[16px]">
        <button
          onClick={() => onAccountPop(false)}
          className="absolute top-[16px] right-[16px] cursor-pointer"
        >
          <Image
            alt="close icon"
            width={20}
            height={20}
            src="/static/assets/icons/close_icon.svg"
          />
        </button>
        <div className="overflow-y-auto max-h-[calc(100vh_-_150px)] md:max-h-[calc(100vh_-_100px)]">
          {/* set 1 */}
          {!confirmpopup && (
            <div className="review-modal-container flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <div className="h4">We're sorry to see you go!</div>
                <p>
                  Please read the following important information before you
                  proceed.
                </p>
              </div>
              {/* / */}
              <div className="flex items-start border border-orange-400 bg-orange-50 p-[16px] rounded-[8px] gap-[8px]">
                <Image
                  width={20}
                  height={20}
                  alt="attention icon"
                  src="/static/assets/icons/user-profile/alert-icon-orange.svg"
                />

                <div className="flex flex-col gap-[4px] text-small text-tertiary-600">
                  <span className="font-semibold">Attention</span>
                  <div className="flex flex-col gap-[16px]">
                    <span className="small">
                      If you confirm your request, your data from IDP, Whatuni
                      and Postgraduate Search will be removed from our central
                      systems and your accounts will be deactivated. This will
                      include deleting your account from the Whatuni App.
                    </span>
                    <span className="small">
                      If you delete your account and request prospectus [and a
                      list of actions, which will lead to a new registration]
                      within 48 hours, a new account will be created.
                    </span>
                  </div>
                </div>
              </div>
              {/* Logo */}
              <div className="w-full items-center flex justify-start gap-[10px]">
                <button>
                  <Image
                    width={90}
                    height={50}
                    alt="idp logo"
                    src="/static/assets/icons/IDP_Logo.svg"
                  />
                </button>
                <button>
                  <Image
                    width={45}
                    height={48}
                    alt="Whatuni Logo"
                    src="/static/assets/images/whatuni-logo.svg"
                  />
                </button>
                <button>
                  <Image
                    width={130}
                    height={34}
                    alt="POSTGRADUATE_SEARCH"
                    src="https://images.ctfassets.net/szez98lehkfm/6Z2XBvZNThCE23P5umA60L/69f5f95d023ed4bea44d349251e1991b/POSTGRADUATE_SEARCH_RGB.svg"
                  />
                </button>
              </div>
              {/* divider  */}
              <span className="border-t border-grey-300"></span>
              {/* END divider  */}

              <div className="flex items-start flex-col gap-[8px]">
                <div className="h5">Are you sure you wish to proceed?</div>
                <p>
                  Instead of leaving us, would you like to opt out of our
                  marketing communications?
                </p>
                <span className="text-grey-400">
                  If you wish to opt out of marketing related to this app,
                  please unsubscribe
                </span>
                <button className="flex font-semibold para items-center gap-[10px] text-primary-400">
                  Unsubscribe
                  <Image
                    height={10}
                    alt="right arrow"
                    width={14}
                    src="/static/assets/icons/arrow-right.svg"
                  />
                </button>
              </div>
              {/* divider  */}
              <span className="border-t border-grey-300"></span>
              {/* END divider  */}

              <div className="flex items-start flex-col gap-[8px]">
                <div className="h5">Reasons behind deleting your accounts</div>
                <p>
                  Let us know why you want to delete your account so we can know
                  if there's anything better we can do in the future (optional)
                </p>
                <div className="w-full flex flex-col text-grey300 gap-[4px]">
                  <label
                    className="font-semibold text-grey300"
                    htmlFor="reason-leaving"
                  >
                    Reason for leaving
                  </label>
                  <select
                    className="w-full dropdown-grey dropdown-regular"
                    name="Reason for leaving"
                    id="reason-leaving"
                  >
                    <option selected>Please choose</option>
                    <option>Review our privacy 1</option>
                    <option>Review our privacy 2</option>
                    <option>Review our privacy 3</option>
                    <option>Review our privacy 4</option>
                    <option>Review our privacy 5</option>
                  </select>
                </div>
              </div>

              {/* divider  */}
              <span className="border-t border-grey-300"></span>
              {/* END divider  */}
              <div className="flex items-start flex-col gap-[8px]">
                <div className="h6">
                  Please review our privacy notice regarding the right to
                  erasure or personal information
                </div>
                <div className="flex flex-col gap-[16px]">
                  <CheckboxComponent
                    title={""}
                    descriptionStyle={"para"}
                    description={
                      <>
                        I have read and understood the {""}
                        <Link
                          className="text-primary-400 cursor-pointer pr-[4px]"
                          href="#"
                        >
                          Privacy Notice
                        </Link>
                        relating to the deletion of personal infomation
                      </>
                    }
                    id={"checkbox-1"}
                  />
                  <CheckboxComponent
                    title={""}
                    description={
                      "I understand that my details associated with this email address will be removed from IDP, Whatuni, Whatuni App and Postgraduate Search"
                    }
                    descriptionStyle={"para"}
                    id={"checkbox-2"}
                  />
                </div>
              </div>
              {/*  */}
              <button
                onClick={() => setConfirmPopup(true)}
                className="btn btn-primary"
              >
                Delete my account
              </button>
            </div>
          )}

          {/* set 2 */}
          {confirmpopup && (
            <div className="review-modal-container flex flex-col">
              <div className="w-full mb-[16px] flex gap-[8px] bg-green-100 border border-positive-dark rounded-[6px] p-[16px]">
                <Image
                  alt="tick icon"
                  width={20}
                  height={20}
                  src="/static/assets/icons/green_tick_icon.svg"
                />
                <div className="flex flex-grow small font-semibold text-positive-dark">
                  Your data will be erased as soon as possible
                </div>
              </div>
              <div className="flex items-start flex-col gap-[8px]">
                <div className="h4">Your next steps</div>
                <span className="font-semibold para-lg text-positive-default">
                  Your data will be erased within 30 days
                </span>
                <p>
                  You will receive an email to confirm that your data has been
                  erased within 30 days. If you change your mind after your data
                  has been deleted, you will be able to create a new account.
                </p>
              </div>
              {/* divider  */}
              <span className="border-t border-grey-300 my-[24px]"></span>
              <button
                onClick={() => onAccountPop(false)}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
