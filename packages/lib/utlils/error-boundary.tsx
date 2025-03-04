import React from "react";
function ErrorFallback({ error }: any) {
  console.log({
    error,
    Date_Time: new Date().toLocaleString(),
  });
  return (
    <div className="hidden">
      <pre>{error?.message}</pre>
      <div className="p-6 bg-red-50 text-red-900 border border-red-300 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="mb-2">
          <strong>Error:</strong> {error?.message || "Unknown error occurred"}
        </p>
        <p className="mb-2">
          <strong>Time:</strong>
        </p>
        {error?.stack && (
          <details className="mb-2">
            <pre className="bg-gray-100 p-2 rounded overflow-auto text-sm">
              {error?.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
export default ErrorFallback;
