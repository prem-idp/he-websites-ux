"use client";
import React from "react";
import Link from "next/link";

import GoogleOneTap from "@packages/lib/utlils/GoogleOneTap";
const Page = () => {
  // console.log(" from the uni page isAuthenticated");
  const handleLoginSuccess = (response: any) => {
    // You can extract user details from the response
    console.log("Google One Tap login response:", response);

    const { credential } = response;
    // You may want to send this token to your server to verify and authenticate the user
    console.log({ credential });
  };
  return (
    <center>
      <GoogleOneTap onLoginSuccess={handleLoginSuccess} />
      <h1>
        <Link href="/new/article">Move to static page</Link>
      </h1>
      <h1>
        <Link href="/new/whatuni">Move to dynamic page</Link>
      </h1>
    </center>
  );
};

export default Page;
