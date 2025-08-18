import React from "react";
import Link from "next/link";
import CheckboxComponent from "@packages/shared-components/common-utilities/form-variations/CheckboxComponent";

const DeleteAccount = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-shadow flex items-center justify-center z-50">
      <div className="bg-white shadow-custom-6 w-full md:w-[512px] p-[24px] rounded-[8px] mx-[16px]">
        <div className="flex items-center justify-end mt-[-8px] mr-[-8px]">
          <svg
            width="10"
            height="10"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-grey-400"
              d="M1 13L13 1M1 1L13 13"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="review-modal-container flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <div className="h4">We're sorry to see you go!</div>
            <p>
              Please read the following important information before you
              proceed.
            </p>
          </div>
          {/* / */}
          <div className="">
            <span>Attention</span>
            <div>
              <p>
                If you confirm your request, your data from IDP, Whatuni and
                Postgraduate Search will be removed from our central systems and
                your accounts will be deactivated. This will include deleting
                your account from the Whatuni App.
              </p>
              <p>
                If you delete your account and request prospectus [and a list of
                actions, which will lead to a new registration] within 48 hours,
                a new account will be created.
              </p>
            </div>
          </div>
          {/* Logo */}
          <div></div>
          {/* divider  */}
          <span className="border-t border-grey-300"></span>
          {/* END divider  */}

          <div>
            <div className="h5">Are you sure you wish to proceed?</div>
            <p>
              Instead of leaving us, would you like to opt out of our marketing
              communications?
            </p>
            <span>
              If you wish to opt out of marketing related to this app, please
              unsubscribe
            </span>
            <button>Unsubscribe</button>
          </div>
          {/* divider  */}
          <span className="border-t border-grey-300"></span>
          {/* END divider  */}

          <div>
            <div className="h5">Reasons behind deleting your accounts</div>
            <p>
              Let us know why you want to delete your account so we can know if
              there's anything better we can do in the future (optional)
            </p>
            <div className="">
              <label htmlFor=""></label>
              <select name="" id="">
                <optin>Please choose</optin>
              </select>
            </div>
          </div>

          {/* divider  */}
          <span className="border-t border-grey-300"></span>
          {/* END divider  */}
          <div>
            <div className="h5">
              Please review our privacy notice regarding the right to erasure or
              personal information
            </div>
            <div className="">
              <CheckboxComponent
                title={""}
                description={
                  <>
                    I have read and understood the
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
                id={"checkbox-2"}
              />
            </div>
          </div>
          {/*  */}
          <button className="btn btn-primary">Delete my account</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
