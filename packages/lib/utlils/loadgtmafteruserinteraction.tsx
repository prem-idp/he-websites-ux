"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const LoadGTMAfteruserInteraction = () => {
  const [gtmLoaded, setGtmLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setGtmLoaded(true);
      window.removeEventListener("load", handlePageLoad);
    };
    window.addEventListener("load", handlePageLoad);

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return gtmLoaded ? (
    <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_PGS_GTM_ACCOUNT || ""} />
  ) : null;
};

export default LoadGTMAfteruserInteraction;


