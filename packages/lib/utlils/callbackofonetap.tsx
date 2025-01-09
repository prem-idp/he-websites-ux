"use client";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const CallbackComponent = (credential: any) => {
  console.log(credential, "credentialssssssssssssssssssssssssssssssss");
  function extractLastNumber(input: any) {
    const segments = input.toString().split("##SPLIT##");
    const lastSegment = segments[segments.length - 1];
    const match = lastSegment.match(/\d+/);
    console.log(match ? match[0] : null);
    return match ? match[0] : null;
  }

  function setCookie(name: string, value: string, days: number) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const decodedToken: any = jwtDecode(credential.toString());
        console.log(decodedToken, "decodedtoken in callback");
        const url = `https://mdev.dev.aws.postgraduatesearch.com/pgs/pgs_interactive.check_email_exist_prc?p_email=${decodedToken?.email}`;

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
          }
        } else {
          const data = await response.json();
          console.log("API Response:", data);
        }
      } catch (error) {
        console.error("Error fetching the email data:", error);
      }
    };

    fetchData();
  }, [credential]);

  return null;
};
export default CallbackComponent;
