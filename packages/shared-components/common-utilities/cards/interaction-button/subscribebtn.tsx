import React from "react";

const Subscribebtn = ({ btnAction, error }: any) => {
  return (
    <button
      type="button"
      className="btn btn-primary flex items-center justify-center w-full min-w-[180px]  md:w-fit gap-[8px] p-[10px_20px] group-hover:bg-primary-500"
      onClick={btnAction}
    >
      Subscribe {error && "error"}
    </button>
  );
};

export default Subscribebtn;
