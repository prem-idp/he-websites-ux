"use client";
import { useEffect } from "react";

const GoogleOneTap = () => {
  useEffect(() => {
    const initializeGoogleOneTap = () => {
      if (typeof window !== "undefined" && (window as any).google) {
        // console.log("Google One Tap is ready");
        (window as any).google.accounts.id.initialize({
          client_id:
            "310464352984-52q8deiepmmnslhkehui0llrmvlvq5lu.apps.googleusercontent.com", // Replace with your Google OAuth Client ID
          callback: (response: any) => {
            const { credential } = response;
            // console.log(response, "response");
            // Handle the successful login
          },
        });
        (window as any).google.accounts.id.prompt(); // Automatically prompt Google One Tap
      } else {
        // console.log("Google One Tap library not loaded yet. Retrying...");
        setTimeout(() => {
          initializeGoogleOneTap();
        }, 1000);
      }
    };

    initializeGoogleOneTap();
  }, []);

  // Return null if Google One Tap is not ready or not available

  return null;
};

export default GoogleOneTap;
