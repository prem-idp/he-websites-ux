import React from "react";
import Image from "next/image";
import Logo from "./logo";

const SigninContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[24px] small">
      <Image
        className="block"
        src="/static/assets/images/registeration/regist_hero_image.png"
        width="97"
        height="129"
        alt="hero image"
      />
      <div className="flex flex-col gap-[8px]">
        <h5 className="text-center">Why create an account?</h5>
        <ul className="flex flex-col gap-[16px] list-disc pl-[20px]">
          <li>
            <span className="font-semibold">Save your results:</span>
            <div>
              Keep your cost of living estimates so you can check them anytime
            </div>
          </li>
          <li>
            <span className="font-semibold">Build your shortlist:</span>
            <div>
              Add universities to your favourites, making it easy to compare
            </div>
          </li>
          <li>
            <span className="font-semibold">Unlock insights:</span>
            <div>Quickly view costs by university, city, and region</div>
          </li>
        </ul>
      </div>
      <div className="flex gap-[12px] justify-center items-center">
        <Logo />
      </div>
    </div>
  );
};

export default SigninContent;
