import React from "react";

const ApplyNow = ({ pageName }: any) => {
  return (
    <>
      {pageName == "courseDetails" ? (
        <button type="button" className={"btn btn-negative-default w-full"}>
          Get Prospectus
        </button>
      ) : (
        <button type="button" className="btn btn-orange w-full">
          Apply now {pageName}
        </button>
      )}
    </>
  );
};

export default ApplyNow;
