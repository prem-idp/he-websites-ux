"use client"; // required if you're using app directory (Next.js 13+)

import React, { useState } from "react";

const BookOpenDay = ({ studyType }: any) => {
  const [clicked, setClicked] = useState(false); // new state to track click

  let buttonText = "Book Now";

  if (studyType === "IN-PERSON") {
    buttonText = "Book open day";
  } else if (studyType === "Virtual event") {
    buttonText = "Book virtual event";
  } else if (studyType === "Virtual tour") {
    buttonText = "Book virtual Tour";
  }
  if (clicked) {
    buttonText = "Open day booked";
  }

  const handleClick = () => {
    setClicked(true);
  };
  return (
    <button
      type="button"
      className={`btn btn-green w-full ${clicked ? "bg-white text-green-500 hover:bg-white" : ""}`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default BookOpenDay;
