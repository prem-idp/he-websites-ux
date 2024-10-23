"use server";
import React from "react";
import CookieConsent from "./cookie";
import { isBrowser, isMobile } from "react-device-detect";
const page = () => {
  console.log(isBrowser);
  console.log(isMobile);
  return (
    <>
      <div>PGS</div>
      <CookieConsent />
      {/* <div id="onetrust-consent-sdk"></div> */}
    </>
  );
};

export default page;
