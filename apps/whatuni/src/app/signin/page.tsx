"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { signIn } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import Link from "next/link";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    setRedirectUrl(redirect || "/");
  }, []);

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const user = await signIn({ username, password });
      console.log("User signed in:", user);
      setSuccess(true);

      // console.log("redirectUrl", redirectUrl);
      const origin: string =
        typeof window !== "undefined" ? window.location.origin : "";
      console.log("origin", origin);
      const url = `${origin}${redirectUrl}` as string;
      console.log("Full redirect URL:", url);
      window.location.replace(url);
    } catch (err) {
      console.error("Sign in error:", err);
      setError(
        err instanceof Error ? err.message : "An error occurred during sign in"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign-in Page</h1>

        <form onSubmit={handleSignin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        {!success && (
          <div className="mt-4">
            <p className="text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/new/signup"
                className="text-indigo-600 hover:text-indigo-500 font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
 