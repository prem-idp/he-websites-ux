"use client"; // Required for error boundaries in the app router

import { useEffect } from "react";

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.error(error); // Log the error to the console
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6 text-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Something went wrong. Please try again later.
        </p>
        <p className="text-gray-700 text-lg mb-6">{error.message}</p>
        <button
          onClick={() => reset()} // Attempt to recover
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
