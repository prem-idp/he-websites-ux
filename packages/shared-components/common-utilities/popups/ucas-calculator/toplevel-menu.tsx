"use client";
import React, { useState } from "react";
import GradeBadgeButton from "./grade-badge-button";
import { GradeFilterArrayInterface } from "@packages/lib/types/ucas-calc";
import Image from "next/image";
import MaxMinInputBox from "./max-min-input";
import { KeyValuePair } from "@packages/lib/types/ucas-calc";
import GradeCounterButton from "./grade-counter-button";
import GradeDropdown from "./grade-dropdown";
import { GradePointsInterface } from "@packages/lib/types/ucas-calc";
import { parseGradeString } from "@packages/lib/utlils/helper-function";
interface PropsInterface {
  ucasGradeData: GradeFilterArrayInterface[] | null | undefined;
  ucasPoints: number;
  setUcasPoints: React.Dispatch<React.SetStateAction<number>>;
  setTopmenulevel: React.Dispatch<React.SetStateAction<string>>;
  resetid: number;
}
const TopLevelMenu = ({
  ucasGradeData,
  ucasPoints,
  setUcasPoints,
  setTopmenulevel,
  resetid,
}: PropsInterface) => {
  const [selectedLevel, setSelectedLevel] = useState<string>("A Level");
  const [type, setType] = useState<null | string>("plus-minus");
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [gradeArray, setGradeArray] = useState<KeyValuePair[] | undefined>([
    { key: "A*", value: 56 },
    { key: "A", value: 48 },
    { key: "B", value: 40 },
    { key: "C", value: 32 },
    { key: "D", value: 24 },
    { key: "E", value: 16 },
  ]);
  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const [gradePoints, setGradePoints] = useState<GradePointsInterface>({
    maxPoint: 5,
    maxTotalPoint: 6,
    getmaxTotalPoint: 0,
    podSpecificPoints: 0,
  });
  const changeUcasLevel = (
    level: string,
    gradeString: string | null,
    maxPoint: string | null,
    maxTotalPoint: string | null,
    template: string | null
  ) => {
    setIsDropDownOpen(!isDropDownOpen);
    setType(template);
    setUcasPoints(ucasPoints - gradePoints.podSpecificPoints);
    setGradePoints({
      maxPoint: Number(maxPoint),
      maxTotalPoint: Number(maxTotalPoint),
      getmaxTotalPoint: 0,
      podSpecificPoints: 0,
    });
    setGradeArray(parseGradeString(gradeString));
    setTopmenulevel(level);
    setSelectedLevel(level);
  };
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
                            childItems.maxTotalPoint,
                            childItems.template
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
      {type === "plus-minus" && (
        <div className="flex items-center justify-between gap-[32px] flex-wrap">
          {gradeArray?.map((childItems, index) => (
            <GradeCounterButton
              key={selectedLevel + index + resetid}
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
      {type === "single-select" && (
        <div className="flex items-center gap-[8px] flex-wrap cursor-pointer">
          {gradeArray?.map((childItems, index) => (
            <GradeBadgeButton
              key={selectedLevel + index}
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
      {type === "credit-selector" && (
        <GradeDropdown
          setGradePoints={setGradePoints}
          ucasPoints={ucasPoints}
          setUcasPoints={setUcasPoints}
        />
      )}
      {type === "min-max" && <MaxMinInputBox />}
    </>
  );
};

export default TopLevelMenu;
