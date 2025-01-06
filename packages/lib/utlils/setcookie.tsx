"use client";

import { fetchAuthSession } from "@aws-amplify/auth";
import { useEffect } from "react";

export default function SetCookiewuIdToken() {
  useEffect(() => {
    async function setCookie() {
      try {
        const session = await fetchAuthSession();
        if (session?.tokens?.idToken) {
          // Set the cookie with the idToken
          document.cookie = `wuIdToken=${session.tokens.idToken}; path=/; secure; samesite=strict`;
        } else {
          // Set the cookie to null if idToken is not present
          document.cookie = `wuIdToken=null; path=/; secure; samesite=strict`;
        }
      } catch (error) {
        console.error("Failed to fetch session or set cookie:", error);
        // Optionally, set the cookie to null in case of errors
        document.cookie = `wuIdToken=null; path=/; secure; samesite=strict`;
      }
    }

    setCookie();
  }, []);

  return null;
}
