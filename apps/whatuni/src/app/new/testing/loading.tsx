import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-8 border-black border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
