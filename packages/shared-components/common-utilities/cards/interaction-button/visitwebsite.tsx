import React from "react";

const Visitwebsite = ({ showCount }: any) => {
  return (
    <button
      type="button" className={`btn btn-grey w-full ${ showCount == 4 ? "md:col-start-2" : "" }`}
    >
      Visit website
    </button>
  );
};

export default Visitwebsite;
