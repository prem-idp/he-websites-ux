"use client";
import { useEffect, use } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import { signInWithRedirect } from "aws-amplify/auth";
const GoogleOneTap = () => {
  const scriptId = "google-one-tap-script";
  const scriptSrc = "https://accounts.google.com/gsi/client";

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await fetchAuthSession();
        if (session.tokens) {
          const hasAccessToken = session.tokens.accessToken !== undefined;
          const hasIdToken = session.tokens.idToken !== undefined;
          if (hasAccessToken && hasIdToken) {
            return null;
          } else {
            loadGoogleScript();
          }
        } else {
          loadGoogleScript();
        }
      } catch (error) {
        console.error("Error checking session:", error);
      }
    };

    checkSession();
    const loadGoogleScript = () => {
      const scriptExists = Array.from(
        document.getElementsByTagName("script")
      ).some((script) => script.src === scriptSrc || script.id === scriptId);

      if (!scriptExists) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://accounts.google.com/gsi/client";
        script.defer = true;
        script.onload = () => initializeGoogleOneTap();
        document.body.appendChild(script);
      } else {
        initializeGoogleOneTap();
      }
    };
    const initializeGoogleOneTap = () => {
      if (typeof window !== "undefined" && (window as any).google) {
        
        (window as any).google.accounts.id.initialize({
          client_id:
            "310464352984-52q8deiepmmnslhkehui0llrmvlvq5lu.apps.googleusercontent.com",
          callback: (response: any) => {
            signInWithRedirect({
              provider: 'Google',
              customState: "home page" // You can pass the credential as custom state if needed
            });
            console.log("inside he callback")
            const { credential } = response;
            console.log(credential);
          },
        });
        (window as any).google.accounts.id.prompt();
      }
    };
  }, []);
  return null;
};
export default GoogleOneTap;
