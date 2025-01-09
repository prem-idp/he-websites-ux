"use client";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const GoogleOneTapPgs = () => {
  const scriptId = "google-one-tap-script";
  const scriptSrc = "https://accounts.google.com/gsi/client";
  function getCookieValue(name: any) {
    const cookieArray = document.cookie.split("; ");
    const cookie = cookieArray.find((c) => c.startsWith(`${name}=`));
    return cookie ? cookie.split("=")[1] : "";
  }
  function extractLastNumber(input: any) {
    console.log(input, "input from the extractLastuser function");
    const segments = input.toString().split("##SPLIT##");
    const lastSegment = segments[segments.length - 1];
    const match = lastSegment.match(/\d+/);
    console.log(
      match ? match[0] : null,
      "return value in the extractLastNumber"
    );
    return match ? match[0] : null;
  }

  function setCookie(name: string, value: string, days: number) {
    console.log("inside the setcookies function ");
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }
  async function fetchData(credential: any) {
    try {
      const decodedToken: any = jwtDecode(credential.toString());
      console.log(decodedToken, "decodedtoken in callback");
      const url = `pgs/pgs_interactive.check_email_exist_prc?p_email=${decodedToken?.email}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/html",
        },
      });

      const contentType = response.headers.get("Content-Type");

      if (contentType && contentType.includes("text/html")) {
        const htmlResponse = await response.text();
        console.log("HTML Response:", htmlResponse);

        if (htmlResponse.trim().toLowerCase() === "y") {
          // Second fetch if the response is 'Y'
          const loginResponse = await fetch(
            `pgs/pgs_user.do_login_lbx?pm_email=${decodedToken?.email}&p_from_page=GOOLE ONE TAP`,
            {
              method: "GET",
              headers: {
                "Content-Type": "text/html",
              },
            }
          );
          const loginData = await loginResponse.text();
          console.log("Login Response:", loginData);
          const session_id = extractLastNumber(loginData);
          console.log(session_id, "session id wet get from the responce");
          // If session_id exists, set it in cookies
          if (session_id) {
            setCookie("pgs_x", session_id, 7); // Expires in 7 days
          }
        } else {
          const loginResponse = await fetch(
            `/pgs/pgs_user.do_register_new?p_first_name=${decodedToken?.given_name}&p_last_name=${decodedToken?.family_name}&p_email=${decodedToken?.email}&p_form_type=GOOGLE ONE TAP`,
            {
              method: "GET",
              headers: {
                "Content-Type": "text/html",
              },
            }
          );
          const loginData = await loginResponse.text();
          console.log(loginData, "login data from the registraion api");
        }
      } else {
        const data = await response.json();
        console.log("API Response:", data);
      }
    } catch (error) {
      console.error("Error fetching the email data:", error);
    }
  }
  useEffect(() => {
    async function checkSession() {
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
    }

    checkSession();
    function loadGoogleScript() {
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
    }
    function initializeGoogleOneTap() {
      if (typeof window !== "undefined" && (window as any).google) {
        (window as any).google.accounts.id.initialize({
          client_id:
            "1007776276005-306decchqtue4pjqffn8qidnphccg2km.apps.googleusercontent.com",
          callback: (response: any) => {
            const { credential } = response;
            console.log(credential);
            fetchData(credential);
          },
        });
        (window as any).google.accounts.id.prompt();
      }
    }

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
