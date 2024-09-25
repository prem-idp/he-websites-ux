"use client";
import React from "react";
const CustomErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <center
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
        backgroundColor: "#f8d7da",
        color: "#721c24",
        padding: "20px",
        borderRadius: "5px",
        border: "1px solid #f5c6cb",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <h4>Error while fetching data for the below page</h4>
        <h6>{error?.message}</h6>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </center>
  );
};

export default CustomErrorBoundary;
