"use client";
import { useState } from "react";
import { Amplify } from "aws-amplify";
import { signUp } from "aws-amplify/auth"; // Import specific API from v6
import config from "../../../../configs/amplifyconfiguration.json";
import Link from "next/link";

// Configure Amplify with your amplifyconfiguration.json
Amplify.configure(config, { ssr: true });

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const signUpInput = {
        username,
        password,
        attributes: {
          email, // Optional if not using email as username
        },
        autoSignIn: {
          // Optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      };

      // Call the new v6 signUp API from aws-amplify/auth
      const signUpOutput = await signUp(signUpInput);
      setSuccess(true); // Show success message
    } catch (error: any) {
      // console.error("Error signing up:", error);
      setError(error.message || "Error occurred during sign up");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign-up Page</h1>

        {success ? (
          <div className="text-center">
            <h2 className="text-green-600 text-lg font-medium">
              Sign up successful! Please check your email to confirm.
            </h2>
          </div>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Sign In Button */}
        <div className="mt-4">
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              prefetch={false}
              href="/new/signin"
              className="text-indigo-600 hover:text-indigo-500 font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
