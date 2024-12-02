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
const TopLevelMenu = ({
  ucasGradeData,
  ucasPoints,
  setUcasPoints,
  indexPosition,
  qual,
  setQual,
  resetid,
}: any) => {
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
  const changeUcasLevel = (
    level: string,
    gradeString: string | null,
    maxPoint: string | null,
    maxTotalPoint: string | null,
    template: string | null
  ) => {
    setIsDropDownOpen(!isDropDownOpen);
    setQual((prev: any) =>
      prev.map((item: any, index: any) =>
        index === indexPosition
          ? {
              ...item,
              type: template,
              selectedLevel: level,
              maxPoint: Number(maxPoint),
              maxTotalPoint: Number(maxTotalPoint),
              getmaxTotalPoint: 0,
              podSpecificPoints: 0,
              selectedPoints: [],
            }
          : item
      )
    );
    setUcasPoints(ucasPoints - qual[indexPosition].podSpecificPoints);
    setGradeArray(parseGradeString(gradeString));
  };
  return (
    <>
      <div className="relative">
        <div
          onClick={toggleDropdown}
          className="border border-grey300 text-grey300 rounded-[20px] flex items-center justify-center gap-[4px] h-[37px] font-semibold small cursor-pointer"
        >
          <span>{qual[indexPosition].selectedLevel}</span>
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
              {ucasGradeData.map((childItems: any, index: number) => (
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
      {qual[indexPosition].type === "plus-minus" && (
        <div className="flex items-center justify-between gap-[32px] flex-wrap">
          {gradeArray?.map((childItems, index) => (
            <GradeCounterButton
              key={qual[indexPosition].selectedLevel + index + resetid}
              btnName={childItems.key}
              btnValue={childItems.value}
              indexPosition={indexPosition}
              qual={qual}
              setQual={setQual}
              ucasPoints={ucasPoints}
              setUcasPoints={setUcasPoints}
            />
          ))}
        </div>
      )}
      {qual[indexPosition].type === "single-select" && (
        <div className="flex items-center gap-[8px] flex-wrap cursor-pointer">
          {gradeArray?.map((childItems, index) => (
            <GradeBadgeButton
              key={qual[indexPosition].selectedLevel + index}
              indexPosition={indexPosition}
              btnName={childItems.key}
              btnValue={childItems.value}
              qual={qual}
              setQual={setQual}
              ucasPoints={ucasPoints}
              setUcasPoints={setUcasPoints}
            />
          ))}
        </div>
      )}
      {qual[indexPosition].type === "credit-selector" && (
        <GradeDropdown
          indexPosition={indexPosition}
          qual={qual}
          setQual={setQual}
          ucasPoints={ucasPoints}
          setUcasPoints={setUcasPoints}
        />
      )}
      {qual[indexPosition].type === "min-max" && <MaxMinInputBox />}
    </>
  );
};

export default TopLevelMenu;
