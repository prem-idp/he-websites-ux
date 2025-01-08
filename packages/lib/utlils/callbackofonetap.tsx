"use client";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const CallbackComponent = (credential: any) => {
  //   const credential = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg5Y2UzNTk4YzQ3M2FmMWJkYTRiZmY5NWU2Yzg3MzY0NTAyMDZmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMTA0NjQzNTI5ODQtNTJxOGRlaWVwbW1uc2xoa2VodWkwbGxybXZsdnE1bHUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzMTA0NjQzNTI5ODQtNTJxOGRlaWVwbW1uc2xoa2VodWkwbGxybXZsdnE1bHUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTgyNDU3MzcxOTg5NzM2Nzc2OTgiLCJlbWFpbCI6InVkaGF5YWt1bWFyLmRAaWRwLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYmYiOjE3MzYyNDMzMTAsIm5hbWUiOiJVZGhheWEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSWkzcWgwU1lDeFRTZFdRRjRldWZYX3lkcG9Dc1pXUzlJWFhBeVQIbmFabV9yUlJnPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IlVkaGF5YSIsImlhdCI6MTczNjI0MzYxMCwiZXhwIjoxNzM2MjQ3MjEwLCJqdGkiOiJlYTBlNjU5ODA5OGJlYTlmZmNjZDg4YmJlZGI1NTNjZjExMGFiYWY3In0.XhhxtSa4keX4uBPB2Jvu96wF4PYZWQKN-gQ2xLJT18Gz-Sj2emJrlr5N-VTSVwdoxnePIuBp9Vbe1m61gpi-nALTsIjNahDKp0EOyUisjqXIXQ6B4U6wr4MltQ4swyc9Hrg09ctGueL6o-GFIkUV7cp5Z7s_mrYMhkIlMfIr-mbnu7Wn4dafph5U5N31cGEhy0ZY7I8mp4sJXhkRWGmbHmB_2tvzpitfk4DPZHSzk37kBEirupW0l0KjLi1mMAcJSZw_oTkUNBD0BZs2g_t3uj8bi9K2ZtywBfojLUgVSLelWJ18JMudORNitDNq89D-Ph0NdiBbQdacFMx6jaVb8w";

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
        const url = `pgs/pgs_interactive.check_email_exist_prc?p_email="${decodedToken?.email}"`;

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
