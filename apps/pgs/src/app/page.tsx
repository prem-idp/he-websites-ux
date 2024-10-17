"use server";
import React from "react";
import CookieConsent from "./cookie";
const page = () => {
  return (
    <>
      <div>PGS</div>
      <CookieConsent />
      {/* <div id="onetrust-consent-sdk"></div> */}
    </>
  );
};

export default page;
