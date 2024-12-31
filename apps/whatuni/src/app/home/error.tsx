"use client";
 
import { useEffect } from "react";
 
export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    console.error("Error Digest:", error.digest);
    console.error("Error Stack:", error.stack);
    if (error.cause) {
      console.error("Error Cause:", error.cause);
    }
  }, [error]);
 
  return (
<div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6 text-center">
<div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
<h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
<p className="text-gray-700 text-lg mb-6">
          Something went wrong. Please try again later.
</p>
<p className="text-gray-700 text-lg mb-6">{error.message}</p>
        {error.digest && (
<p className="text-sm text-gray-500 mb-2">Digest: {error.digest}</p>
        )}
        {error.stack && (
<details className="text-sm text-gray-500 mb-6">
<summary className="cursor-pointer">View Stack Trace</summary>
<pre className="whitespace-pre-wrap text-left">
              {error.stack}
</pre>
</details>
        )}
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