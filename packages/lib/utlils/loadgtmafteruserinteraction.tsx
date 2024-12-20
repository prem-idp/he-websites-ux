"use client";

import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

const LoadGTMAfteruserInteraction = () => {
  const [gtmLoaded, setGtmLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setGtmLoaded(true);
      window.removeEventListener("mousemove", handlePageLoad);
      window.removeEventListener("click", handlePageLoad);
    };
    window.addEventListener("mousemove", handlePageLoad);
    window.addEventListener("click", handlePageLoad);

    return () => {
      window.removeEventListener("mousemove", handlePageLoad);
      window.removeEventListener("click", handlePageLoad);
    };
  }, []);

  return gtmLoaded ? (
    <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_PGS_GTM_ACCOUNT || ""} />
  ) : null;
};

export default LoadGTMAfteruserInteraction;
