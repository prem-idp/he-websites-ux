"use client";
import { useEffect } from "react";

const GoogleOneTap = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).google) {
      console.log("Google One Tap is ready");
      (window as any).google.accounts.id.initialize({
        client_id:
          "310464352984-52q8deiepmmnslhkehui0llrmvlvq5lu.apps.googleusercontent.com", // Replace with your Google OAuth Client ID
        callback: (response: any) => {
          const { credential } = response;
          console.log(response, "response");
        },
      });
      (window as any).google.accounts.id.prompt(); // Automatically prompt Google One Tap
    } else {
      console.log("insndie the else");
      setTimeout(() => {
        (window as any).google.accounts.id.initialize({
          client_id:
            "310464352984-52q8deiepmmnslhkehui0llrmvlvq5lu.apps.googleusercontent.com", // Replace with your Google OAuth Client ID
          callback: (response: any) => {
            const { credential } = response;
            console.log(response, "response");
            onLoginSuccess(response); // Handle the successful login
          },
        });
        (window as any).google.accounts.id.prompt(); // Automatically prompt Google One Tap
      }, 1000);
    }
  }, []);

  // Return null if Google One Tap is not ready or not available

  return null;
};

export default GoogleOneTap;
