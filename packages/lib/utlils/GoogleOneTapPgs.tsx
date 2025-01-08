"use client";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { CallbackComponent } from "./callbackofonetap";
const GoogleOneTapPgs = () => {
  const scriptId = "google-one-tap-script";
  const scriptSrc = "https://accounts.google.com/gsi/client";
  function getCookieValue(name: any) {
    const cookieArray = document.cookie.split("; ");
    const cookie = cookieArray.find((c) => c.startsWith(`${name}=`));
    return cookie ? cookie.split("=")[1] : "";
  }

  useEffect(() => {
    const checkSession = async () => {
      try {
        const user_initial = getCookieValue("pgs_auth") || "";
        if (user_initial !== "null" && user_initial) {
          return null;
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
            "1007776276005-306decchqtue4pjqffn8qidnphccg2km.apps.googleusercontent.com",
          callback: (response: any) => {
            const { credential } = response;
            CallbackComponent(credential);
            console.log(credential);
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
            observer.disconnect();
          }
        }
      });
      observer.observe(document, {
        subtree: true,
        childList: true,
      });
      if (document.cookie.includes("OptanonAlertBoxClosed")) {
        loadGoogleScript();
        observer.disconnect();
      }
    }
  }, []);

  return null;
};
export default GoogleOneTapPgs;
