"use client";
import { useEffect, use } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
const GoogleOneTap = () => {
  const scriptId = "google-one-tap-script";
  const scriptSrc = "https://accounts.google.com/gsi/client";

  useEffect(() => {
    // console.log("chcek for ");
    const checkSession = async () => {
      // console.log("inside the check session");
      try {
        const session = await fetchAuthSession();

        if (session.tokens) {
          // console.log(session, "inside the if of session");
          const hasAccessToken = session.tokens.accessToken !== undefined;
          const hasIdToken = session.tokens.idToken !== undefined;

          if (hasAccessToken && hasIdToken) {
            // console.log(session, "inside the if of session");
            return null;
          } else {
            loadGoogleScript();
          }
        } else {
          // console.log("inside the else of session");
          loadGoogleScript();
        }
      } catch (error) {
        // console.log(
        //   "0000000000000000000000098888888888888888888888888888888888888888888888888888888888888"
        // );
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
