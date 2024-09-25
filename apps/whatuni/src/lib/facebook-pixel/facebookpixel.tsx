"use client";

import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const FacebookPixelComponent: React.FC = () => {
  useEffect(() => {
    const facebookPixelId = "246653179428508"; // Replace with your Pixel ID

    const initFacebookPixel = () => {
      ReactPixel.init(facebookPixelId);
      ReactPixel.pageView(); // Track page view by default
    };

    if (typeof window !== "undefined") {
      initFacebookPixel();
    }
  }, []);

  return null;
};

export default FacebookPixelComponent;
