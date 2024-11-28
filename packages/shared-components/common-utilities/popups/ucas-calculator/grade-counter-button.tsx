import React, { useState } from "react";
import { GradePointsInterface } from "@packages/lib/types/ucas-calc";
interface PropsInterface {
  btnName: string;
  btnValue: number;
  gradePoints: GradePointsInterface;
  setGradePoints: React.Dispatch<React.SetStateAction<GradePointsInterface>>;
  ucasPoints: number;
  setUcasPoints: React.Dispatch<React.SetStateAction<number>>;
}
const GradeCounterButton = ({
  btnName,
  btnValue,
  gradePoints,
  setGradePoints,
  ucasPoints,
  setUcasPoints,
}: PropsInterface) => {
  const [count, setCount] = useState(0);
  const increment = (btnValue: number) => {
    if (
      count < gradePoints.maxPoint &&
      gradePoints.getmaxTotalPoint < gradePoints.maxTotalPoint
    ) {
      setCount(count + 1);
      setGradePoints((prev) => ({
        ...prev,
        getmaxTotalPoint: gradePoints.getmaxTotalPoint + 1,
        podSpecificPoints: gradePoints.podSpecificPoints + btnValue,
      }));
      setUcasPoints(ucasPoints + Number(btnValue));
    }
  };
  const decrement = (btnValue: number) => {
    if (count > 0) {
      setCount(count - 1);
      setGradePoints((prev) => ({
        ...prev,
        getmaxTotalPoint: gradePoints.getmaxTotalPoint - 1,
        podSpecificPoints: gradePoints.podSpecificPoints - btnValue,
      }));
      setUcasPoints(ucasPoints - Number(btnValue));
    }
  };
  //console.log(btnValue);
  return (
    <>
      <div className="inline-flex items-center gap-[4px]">
        <label
          htmlFor="grade"
          className="min-w-[24px] font-semibold block text-grey300"
        >
          {btnName}
        </label>
        <button
          aria-label="decrement"
          onClick={() => decrement(btnValue)}
          className={`${
            count ? "decrease cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0002 36.6667C29.2049 36.6667 36.6668 29.2048 36.6668 20C36.6668 10.7953 29.2049 3.33337 20.0002 3.33337C10.7954 3.33337 3.3335 10.7953 3.3335 20C3.3335 29.2048 10.7954 36.6667 20.0002 36.6667Z"
              stroke="#ADB2B6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3335 20H26.6668"
              stroke="#ADB2B6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="text-grey300 min-w-[24px] block text-center">
          {count}
        </span>
        <button
          aria-label="increment"
          onClick={() => increment(btnValue)}
          className={`${count >= gradePoints.maxPoint || gradePoints.maxTotalPoint <= gradePoints.getmaxTotalPoint ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0002 36.6667C29.2049 36.6667 36.6668 29.2048 36.6668 20C36.6668 10.7953 29.2049 3.33337 20.0002 3.33337C10.7954 3.33337 3.3335 10.7953 3.3335 20C3.3335 29.2048 10.7954 36.6667 20.0002 36.6667Z"
              stroke="#4664DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 13.3334V26.6667"
              stroke="#4664DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3335 20H26.6668"
              stroke="#4664DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default GradeCounterButton;
