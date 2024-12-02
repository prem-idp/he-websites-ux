"use client";

import { useEffect } from "react";

const GoogleOneTap = () => {
  useEffect(() => {
    const loadGoogleScript = () => {
      const scriptId = "google-one-tap-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.onload = () => initializeGoogleOneTap();
        document.body.appendChild(script);
      } else {
        initializeGoogleOneTap();
      }
    };

    const initializeGoogleOneTap = () => {
      if (typeof window !== "undefined" && (window as any).google) {
        console.log("Google One Tap is ready");
        (window as any).google.accounts.id.initialize({
          client_id:
            "310464352984-52q8deiepmmnslhkehui0llrmvlvq5lu.apps.googleusercontent.com", // Replace with your Google OAuth Client ID
          callback: (response: any) => {
            const { credential } = response;
            console.log(response, "response");
            // Handle the successful login
          },
        });
        (window as any).google.accounts.id.prompt(); // Automatically prompt Google One Tap
      } else {
        // console.log("Google One Tap library not loaded yet. Retrying...");
        // setTimeout(() => {
        initializeGoogleOneTap();
        // }, 1000);
      }
    };

    loadGoogleScript();
  }, []);

  return null; // No UI elements to render
};

export default GoogleOneTap;
