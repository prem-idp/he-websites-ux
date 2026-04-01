import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-[8px] px-[16px] gap-[16px] md:gap-[24px] justify-center items-center">
      <Image
        src="/static/assets/images/whatunisign-logo.svg"
        alt="Logo"
        width={52}
        height={56}
        className="h-auto w-[15%] max-w-[52px]"
      />
      <Image
        src="/static/assets/images/cug-logo.svg"
        alt="Logo"
        width={123}
        height={40}
        className="h-auto w-[35%] max-w-[123px]"
      />
      <Image
        src="/static/assets/images/pgs-logo.svg"
        alt="Logo"
        width={153}
        height={50}
        className="h-auto w-[45%] max-w-[153px]"
      />
    </div>
  );
};

export default Logo;
