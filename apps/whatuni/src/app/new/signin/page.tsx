"use client";
import { signInWithRedirect } from "aws-amplify/auth";
import Authcomponent from "./auth";
export default function App() {
  const { user, error, customState } = Authcomponent();
  console.log(error);
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
