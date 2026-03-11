import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-[16px] md:gap-[24px] justify-center items-center">
      <Image
        src="/static/assets/images/whatunisign-logo.svg"
        alt="Logo"
        width={52}
        height={56}
        className="h-[56px] w-auto"
      />
      <Image
        src="/static/assets/images/cug-logo.svg"
        alt="Logo"
        width={123}
        height={40}
        className="h-[40px] w-auto"
      />
      <Image
        src="/static/assets/images/pgs-logo.svg"
        alt="Logo"
        width={153}
        height={50}
        className="h-[40px] w-auto"
      />
    </div>
  );
};

export default Logo;
