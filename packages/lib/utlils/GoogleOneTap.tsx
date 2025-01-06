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
            watchForOptanonCookie();
          }
        } else {
          watchForOptanonCookie();
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
              provider: "Google",
              customState: "home page", // You can pass the credential as custom state if needed
            });
            const { credential } = response;
          },
        });
        (window as any).google.accounts.id.prompt();
      }
    };

    function watchForOptanonCookie() {
      let previousCookies = document.cookie;

      const observer = new MutationObserver(() => {
        if (document.cookie !== previousCookies) {
          previousCookies = document.cookie;

          if (document.cookie.includes("OptanonAlertBoxClosed")) {
            loadGoogleScript();
            observer.disconnect(); // Stop observing once cookie is found
          }
        }
      });

      // Start observing
      observer.observe(document, {
        subtree: true,
        childList: true,
      });

      // Initial check in case cookie is already present
      if (document.cookie.includes("OptanonAlertBoxClosed")) {
        loadGoogleScript();
        observer.disconnect();
      }
    }

    // Initialize the cookie watcher
  }, []);

  return null;
};
export default GoogleOneTap;
