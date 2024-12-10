"use client";
import React, { useEffect, useState } from "react";
import { signInWithRedirect, signOut, getCurrentUser } from "aws-amplify/auth";
import { Hub } from "@aws-amplify/core";
import { Amplify } from "aws-amplify";
import awsconfig from "../../../../configs/amplifyconfiguration";

Amplify.configure(awsconfig);

interface AuthUser {
  username: string;
  [key: string]: any; 
}

export default function App() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [customState, setCustomState] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "signInWithRedirect":
          getUser();
          break;
        case "signInWithRedirect_failure":
          setError("An error has occurred during the OAuth flow.");
          break;
        case "customOAuthState":
          setCustomState(payload.data); // this is the customState provided on signInWithRedirect function
          break;
      }
    });

    getUser();

    return unsubscribe;
  }, []);

  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error(error);
      // console.log("Not signed in");
    }
  };

  return (
    <div className="App">
      <button
        onClick={() =>
          signInWithRedirect({
            provider: "Google",
            customState: "http://localhost:3000/new/home",
          })
        }
      >
        Open Google
      </button>

      {/* <button onClick={() => signOut()}>Sign Out</button> */}
      <div>{user?.username}</div>
      <div>{customState}</div>
    </div>
  );
}
