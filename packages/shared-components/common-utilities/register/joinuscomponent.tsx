import React from "react";
import SocialSigninButtons from "@packages/shared-components/common-utilities/register/social-signin-buttons";
import RegisterForm from "@packages/shared-components/common-utilities/register/registerform";

const JoinusComponent = ({
  signupVisible,
  clearingVisible,
  isAccountMerging = false,
}: any) => {
  return (
    <>
      <SocialSigninButtons
        title="Welcome to Whatuni"
        isVisible={!isAccountMerging}
        isRegisterVisible={isAccountMerging}
      />
      <RegisterForm signupVisible={true} />
    </>
  );
};

export default JoinusComponent;
