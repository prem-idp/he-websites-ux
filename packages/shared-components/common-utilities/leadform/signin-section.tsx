import React from "react";
import SocialSigninButtons from "../register-new/social-signin-buttons";

type SignInSectionProps = {
  heading?: string;
  description?: React.ReactNode;
};

const SignInSection = ({
  heading = "Sign in or create an account",
  description = (
    <>
      One account. Three websites. All the support you need to make your
      university choice. Sign up to Whatuni, Complete University Guide and
      Postgraduate Search now.{" "}
      <a href="#" className="text-primary-400">
        Sign in
      </a>{" "}
      if you have an account
    </>
  ),
}: SignInSectionProps) => (
  <div className="border-t border-b border-grey-200 py-[32px] px-0 md:px-[16px] flex flex-col gap-[24px]">
    <div className="flex flex-col gap-[8px] text-center">
      <h2 className="text-heading6 font-farro font-bold">{heading}</h2>
      <p className="text-small">{description}</p>
    </div>
    <SocialSigninButtons />
  </div>
);

export default SignInSection;
