"use client";
import React, { useState } from "react";
import GradeBadgeButton from "./grade-badge-button";
import { GradeFilterArrayInterface } from "@packages/lib/types/ucas-calc";
import Image from "next/image";
import MaxMinInputBox from "./max-min-input";
import { KeyValuePair } from "@packages/lib/types/ucas-calc";
import GradeCounterButton from "./grade-counter-button";
import { GradePointsInterface } from "@packages/lib/types/ucas-calc";
import { parseGradeString } from "@packages/lib/utlils/helper-function";
interface PropsInterface {
  ucasGradeData: GradeFilterArrayInterface[] | null | undefined;
  ucasPoints: number;
  setUcasPoints: React.Dispatch<React.SetStateAction<number>>;
}
const TopLevelMenu = ({
  ucasGradeData,
  ucasPoints,
  setUcasPoints,
}: PropsInterface) => {
  const [selectedLevel, setSelectedLevel] = useState<string>("A Level");
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  //   const [dropDownMenu, setDropDownMenu] = useState({
  //     Counter: true,
  //     Badge: false,
  //     MaxMinInput: false,
  //   });
  const [gradeArray, setGradeArray] = useState<KeyValuePair[] | undefined>(
    undefined
  );
  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const [gradePoints, setGradePoints] = useState<GradePointsInterface>({
    maxPoint: 0,
    maxTotalPoint: 0,
    getmaxTotalPoint: 0,
    podSpecificPoints: 0,
  });

  const changeUcasLevel = (
    level: string,
    gradeString: string | null,
    maxPoint: string | null,
    maxTotalPoint: string | null
  ) => {
    setIsDropDownOpen(!isDropDownOpen);
    setGradePoints((prev) => ({
      ...prev,
      maxPoint: Number(maxPoint),
      maxTotalPoint: Number(maxTotalPoint),
    }));
    setGradeArray(parseGradeString(gradeString));
    setSelectedLevel(level);
  };
  console.log(gradeArray);
  return (
    <>
      <div className="relative">
        <div
          onClick={toggleDropdown}
          className="border border-grey300 text-grey300 rounded-[20px] flex items-center justify-center gap-[4px] h-[37px] font-semibold small cursor-pointer"
        >
          <span>{selectedLevel}</span>
          <Image
            src="/static/assets/icons/ucas-down-arrow.svg"
            alt=""
            width="16"
            height="16"
          />
        </div>
        {isDropDownOpen && ucasGradeData && (
          <div className="absolute top-[46px] left-0 max-h-[343px] overflow-y-auto w-full bg-white border border-neutral-300 rounded-[8px] small shadow-custom-9 custom-scrollbar-2 z-10">
            <ul>
              {ucasGradeData.map((childItems, index: number) => (
                <li
                  key={index + 1}
                  className={
                    childItems.qualId === null
                      ? "py-[10px] px-[16px] font-semibold x-small uppercase bg-neutral50 text-grey500 tracking-[1px]"
                      : "py-[10px] px-[16px] cursor-pointer"
                  }
                  onClick={
                    childItems.qualId !== null
                      ? () => {
                          changeUcasLevel(
                            childItems.qualification,
                            childItems.gradeOptions,
                            childItems.maxPoint,
                            childItems.maxTotalPoint
                          );
                        }
                      : undefined
                  }
                >
                  {childItems.qualification}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {false && (
        <div className="flex items-center justify-between gap-[32px] flex-wrap">
          {gradeArray?.map((childItems, index) => (
            <GradeCounterButton
              key={index + 1}
              btnName={childItems.key}
              btnValue={childItems.value}
              gradePoints={gradePoints}
              setGradePoints={setGradePoints}
              ucasPoints={ucasPoints}
              setUcasPoints={setUcasPoints}
            />
          ))}
        </div>
      )}
      {true && (
        <div className="flex items-center gap-[8px] flex-wrap cursor-pointer">
          {gradeArray?.map((childItems, index) => (
            <GradeBadgeButton
              key={index + 1}
              btnName={childItems.key}
              btnValue={childItems.value}
              gradePoints={gradePoints}
              setGradePoints={setGradePoints}
              ucasPoints={ucasPoints}
              setUcasPoints={setUcasPoints}
            />
          ))}
        </div>
      )}

      {false && <MaxMinInputBox />}
    </>
  );
};

export default TopLevelMenu;
