import React from "react";
import SigninForm from "./signinform";
import SocialSigninButtons from "./social-signin-buttons";

const SigninComponent = () => {
  return (
    <div className="w-full">
      <SigninForm />
      <div className="border-t border-grey-200">
        <SocialSigninButtons
          title="or"
          isVisible={false}
          isRegisterVisible={false}
        />
      </div>
    </div>
  );
};

export default SigninComponent;
