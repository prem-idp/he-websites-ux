import React from "react";

const Getprospectus = ({ pageName, onOpen }: any) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-tertiary w-full"
        onClick={onOpen}
      >
        Get prospectus
      </button>
    </>
  );
};

export default Getprospectus;
