import React, { useState } from "react";

const BookOpenDay = ({ studyType }: any) => {
  let buttonText = "Book Now";

  if (studyType === "IN-PERSON") {
    buttonText = "Book open day";
  } else if (studyType === "Virtual event") {
    buttonText = "Book virtual event";
  } else if (studyType === "Virtual tour") {
    buttonText = "Book virtual Tour";
  }

  return (
    <button type="button" className="btn btn-green w-full">
      {buttonText}
    </button>
  );
};

export default BookOpenDay;
