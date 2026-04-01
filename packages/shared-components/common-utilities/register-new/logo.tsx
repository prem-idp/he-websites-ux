import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        src="/static/assets/images/whatunisign-logo.svg"
        alt="WhatUni Sign Logo"
        width={52}
        height={56}
        className="h-auto min-w-0 w-[15%] max-w-[52px]"
      />
      <Image
        src="/static/assets/images/cug-logo.svg"
        alt="CUG Logo"
        width={123}
        height={40}
        className="h-auto min-w-0 w-[35%] max-w-[123px]"
      />
      <Image
        src="/static/assets/images/pgs-logo.svg"
        alt="PGS Logo"
        width={153}
        height={50}
        className="h-auto min-w-0 w-[45%] max-w-[153px]"
      />
    </>
  );
};

export default Logo;
