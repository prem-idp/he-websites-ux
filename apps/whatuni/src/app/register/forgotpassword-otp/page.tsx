"use client";
import React, { useState } from "react";
import ForgotpasswordOtp from "@packages/shared-components/common-utilities/register-new/forgotpassword-otp";
import Logo from "@packages/shared-components/common-utilities/register-new/logo";
import DeleteAccount from "@packages/shared-components/user-profile/delete-account/delete-account";

const ForgotpasswordOtpPage = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <>
      <section className="bg-grey-50 py-[24px] min-h-screen">
        <div className="flex flex-col gap-[24px] w-full mx-auto md:w-[598px]">
          <div className="p-[32px_16px] border-b-[1px] border-t-[1px] md:p-[32px] md:border md:border-b-[2px] md:border-grey-200 md:rounded-[8px] bg-white overflow-hidden">
            <ForgotpasswordOtp onConfirm={() => setShowDeletePopup(true)} />
          </div>
          <div className="flex px-[16px] gap-[16px] md:gap-[24px] justify-center items-center">
            <Logo />
          </div>
        </div>
      </section>
      {showDeletePopup && (
        <DeleteAccount
          accountPop={showDeletePopup}
          onAccountPop={setShowDeletePopup}
        />
      )}
    </>
  );
};

export default ForgotpasswordOtpPage;
