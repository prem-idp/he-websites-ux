"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GradePointsInterface } from "@packages/lib/types/ucas-calc";
interface PropsInterface {
  setGradePoints: React.Dispatch<React.SetStateAction<GradePointsInterface>>;
  ucasPoints: number;
  setUcasPoints: React.Dispatch<React.SetStateAction<number>>;
}
const GradeDropdown = ({
  setGradePoints,
  ucasPoints,
  setUcasPoints,
}: PropsInterface) => {
  const initialArray = [
    0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45,
  ];
  const [totalcredit, setTotalcredit] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<
    "distinction" | "merit" | "pass" | null
  >(null);
  const [distinction, setDistinction] = useState({
    point: 0,
  });
  const [merit, setMerit] = useState({
    point: 0,
  });
  const [pass, setPass] = useState({
    point: 0,
  });

  const selectValue = (
    item: number,
    setState: React.Dispatch<React.SetStateAction<any>>,
    currentPoint: number
  ) => {
    setTotalcredit(totalcredit + item - currentPoint);
    setState({
      point: item,
    });
    setOpenDropdown(null);
    setGradePoints((prev) => ({
      ...prev,
      podSpecificPoints: totalcredit + item - currentPoint,
    }));
    setUcasPoints(ucasPoints + item - currentPoint);
  };
  const remainingCredits = 45 - (distinction.point + merit.point + pass.point);
  return (
    <div className="flex flex-col gap-[16px] px-[16px] pb-[32px]">
      <div className="flex flex-col gap-[16px] max-w-[200px]">
        {/* Distinction Dropdown */}
        <div className="flex flex-col gap-[4px] small">
          <label htmlFor="Distinction" className="font-semibold">
            Distinction
          </label>
          <div className="relative">
            <div
              onClick={() =>
                setOpenDropdown((prev) =>
                  prev === "distinction" ? null : "distinction"
                )
              }
              className="border border-grey300 text-grey300 rounded-[20px] flex items-center justify-center gap-[4px] h-[37px] font-semibold small cursor-pointer"
            >
              <span>{distinction.point} credits</span>
              <Image
                src="/static/assets/icons/ucas-down-arrow.svg"
                alt=""
                width="16"
                height="16"
              />
            </div>
            {openDropdown === "distinction" && (
              <div className="absolute top-[46px] left-0 max-h-[343px] overflow-y-auto w-full bg-white border border-neutral-300 rounded-[8px] small shadow-custom-9 custom-scrollbar-2 z-10">
                <ul>
                  {initialArray
                    .filter(
                      (item) => item <= remainingCredits + distinction.point
                    )
                    .map((item, index) => (
                      <li
                        key={index}
                        className="py-[10px] px-[16px] cursor-pointer hover:bg-secondary-50 hover:underline"
                        onClick={() =>
                          selectValue(item, setDistinction, distinction.point)
                        }
                      >
                        {item} credits
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Merit Dropdown */}
        <div className="flex flex-col gap-[4px] small">
          <label htmlFor="Merit" className="font-semibold">
            Merit
          </label>
          <div className="relative">
            <div
              onClick={() =>
                setOpenDropdown((prev) => (prev === "merit" ? null : "merit"))
              }
              className="border border-grey300 text-grey300 rounded-[20px] flex items-center justify-center gap-[4px] h-[37px] font-semibold small cursor-pointer"
            >
              <span>{merit.point} credits</span>
              <Image
                src="/static/assets/icons/ucas-down-arrow.svg"
                alt=""
                width="16"
                height="16"
              />
            </div>
            {openDropdown === "merit" && (
              <div className="absolute top-[46px] left-0 max-h-[343px] overflow-y-auto w-full bg-white border border-neutral-300 rounded-[8px] small shadow-custom-9 custom-scrollbar-2 z-10">
                <ul>
                  {initialArray
                    .filter((item) => item <= remainingCredits + merit.point)
                    .map((item, index) => (
                      <li
                        key={index}
                        className="py-[10px] px-[16px] cursor-pointer hover:bg-secondary-50 hover:underline"
                        onClick={() => selectValue(item, setMerit, merit.point)}
                      >
                        {item} credits
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Pass Dropdown */}
        <div className="flex flex-col gap-[4px] small">
          <label htmlFor="Pass" className="font-semibold">
            Pass
          </label>
          <div className="relative">
            <div
              onClick={() =>
                setOpenDropdown((prev) => (prev === "pass" ? null : "pass"))
              }
              className="border border-grey300 text-grey300 rounded-[20px] flex items-center justify-center gap-[4px] h-[37px] font-semibold small cursor-pointer"
            >
              <span>{pass.point} credits</span>
              <Image
                src="/static/assets/icons/ucas-down-arrow.svg"
                alt=""
                width="16"
                height="16"
              />
            </div>
            {openDropdown === "pass" && (
              <div className="absolute top-[46px] left-0 max-h-[343px] overflow-y-auto w-full bg-white border border-neutral-300 rounded-[8px] small shadow-custom-9 custom-scrollbar-2 z-10">
                <ul>
                  {initialArray
                    .filter((item) => item <= remainingCredits + pass.point)
                    .map((item, index) => (
                      <li
                        key={index}
                        className="py-[10px] px-[16px] cursor-pointer hover:bg-secondary-50 hover:underline"
                        onClick={() => selectValue(item, setPass, pass.point)}
                      >
                        {item} credits
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="small text-grey300">
        A total of 45 credits must be added for tariff points (e.g., D15, M15,
        P15).
      </p>
    </div>
  );
};

export default GradeDropdown;
