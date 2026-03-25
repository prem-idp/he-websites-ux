import React from "react";
import Image from "next/image";

const SigninContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[24px] small w-[261px] mx-auto">
      <Image
        className="block"
        src="/static/assets/images/registeration/regist_hero_image.png"
        width="97"
        height="129"
        alt="hero image"
      />
      <div className="flex flex-col gap-[8px]">
        <h5 className="text-center max-w-[216px] mx-auto">
          Why create an account?
        </h5>
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
        <Image
          src="/static/assets/images/whatunisign-logo.svg"
          alt="Logo"
          width={36}
          height={40}
          className="h-[40px]"
        />
        <Image
          src="/static/assets/images/cug-logo.svg"
          alt="Logo"
          width={89}
          height={29}
          className="h-[40px]"
        />
        <Image
          src="/static/assets/images/pgs-logo.svg"
          alt="Logo"
          width={110}
          height={29}
          className="h-[40px]"
        />
      </div>
    </div>
  );
};

export default SigninContent;
