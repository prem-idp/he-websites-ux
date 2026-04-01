import React, { useState } from "react";
import Image from "next/image";
import { EmailGreenIcon } from "../../../../apps/whatuni/src/app/media-utilities/mediautilities";
import Link from "next/link";
import RegisterSuccess from "./registersuccess";

const SigninBenefits = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleContinue = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return <RegisterSuccess />;
  }

  return (
    <div className="flex flex-col gap-[24px] text-center small">
      <div className="w-[44px] h-[44px] mx-auto shrink-0 rounded-[22px_0_22px_0] bg-green-200 flex items-center justify-center">
        <EmailGreenIcon />
      </div>
      <div className="space-y-[8px]">
        <h5>Always stay up to date</h5>
        <div>
          Get helpful updates tailored to your student journey sent straight to
          you.
        </div>
        <ul className="space-y-[4px]">
          <li>✔ UCAS & application reminders</li>
          <li>✔ Course alerts based on your interests</li>
          <li>✔ Tips from students & experts</li>
        </ul>
      </div>
      <div className="space-y-[16px]">
        {/* Button */}
        <button
          type="button"
          className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
          onClick={handleContinue}
        >
          Continue
          <Image
            src="/static/assets/icons/right_white_arrow.svg"
            width={17}
            height={14}
            alt="arrow icon"
          />
        </button>
        <Link
          href="#"
          className="block w-fit mx-auto py-[8px] text-primary-400 hover:text-primary-500 hover:underline font-semibold"
        >
          Skip
        </Link>
      </div>
    </div>
  );
};

export default SigninBenefits;
