import React from "react";
import { GradePointsInterface } from "@packages/lib/types/ucas-calc";
// interface PropsInterface {
//   btnName: string;
//   btnValue: number;
//   gradePoints: GradePointsInterface;
//   setGradePoints: React.Dispatch<React.SetStateAction<GradePointsInterface>>;
//   ucasPoints: number;
//   setUcasPoints: React.Dispatch<React.SetStateAction<number>>;
// }
const GradeBadgeButton = ({
  btnName,
  btnValue,
  qual,
  setQual,
  indexPosition,
  ucasPoints,
  setUcasPoints,
}: any) => {
  const selectGradeButton = (btnValue: number) => {
    if (qual[indexPosition]?.podSpecificPoints !== btnValue) {
      setUcasPoints(
        ucasPoints + btnValue - qual[indexPosition]?.podSpecificPoints
      );
      setQual((prev: any) =>
        prev.map((item: any, index: any) =>
          index === indexPosition
            ? {
                ...item,
                podSpecificPoints: btnValue,
                selectedPoints: [`${btnName}~${btnValue}`],
              }
            : item
        )
      );
    }
  };
  return (
    <button
      className={`min-w-[66px] text-center small border border-primary-400 text-primary-400 py-[8px] px-[16px] rounded-[20px] block font-semibold ${qual[indexPosition].podSpecificPoints === btnValue ? "bg-primary-400 text-white " : "bg-white hover:bg-primary-400 hover:text-white"}`}
      onClick={() => selectGradeButton(btnValue)}
    >
      {btnName}
    </button>
  );
};

export default GradeBadgeButton;
