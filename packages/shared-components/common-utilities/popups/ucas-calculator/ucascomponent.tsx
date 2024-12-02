import React, { useEffect, useState } from "react";
import AddQualification from "./additional-qual";
import Link from "next/link";
import TopLevelMenu from "./toplevel-menu";
import { ucasAjax } from "@packages/lib/api-payloads/payloads";
import { getUcasCalculatorGrades } from "@packages/lib/server-actions/server-action";
import { GradeFilterArrayInterface } from "@packages/lib/types/ucas-calc";
interface PropsInterface {
  isUcasOpen: boolean;
  onClose: () => void;
}
interface QualInterface {
  id: number;
  name: string;
}
const UcasComponent = ({ onClose, isUcasOpen }: PropsInterface) => {
  // const [ucasGradeData, setUcasGradeData] = useState<
  //   GradeFilterArrayInterface[] | null
  // >();
  const [isUcasPopupOpen, SetIsUcasPopupOpen] = useState<boolean>(true);
  const [qualifications, setQualifications] = useState<QualInterface[]>([]);
  const [ucasPoints, setUcasPoints] = useState<number>(0);
  const [resetid, setResetid] = useState<number>(0);
  // const [topmenulevel, setTopmenulevel] = useState<string>("");
  const initialvalue = [
    {
      status: true,
      selectedLevel: "A Level",
      type: "plus-minus",
      maxPoint: 5,
      maxTotalPoint: 6,
      getmaxTotalPoint: 0,
      podSpecificPoints: 0,
      selectedPoints: [],
    },
    {
      status: false,
      selectedLevel: "A Level",
      type: "plus-minus",
      maxPoint: 5,
      maxTotalPoint: 6,
      getmaxTotalPoint: 0,
      podSpecificPoints: 0,
      selectedPoints: [],
    },
    {
      status: false,
      selectedPoints: [],
      selectedLevel: "A Level",
      type: "plus-minus",
      maxPoint: 5,
      maxTotalPoint: 6,
      getmaxTotalPoint: 0,
      podSpecificPoints: 0,
    },
  ];
  const [qual, setQual] = useState(initialvalue);
  // useEffect(() => {
  //   const fetchUcasData = async () => {
  //     try {
  //       const response = await getUcasCalculatorGrades(ucasAjax);
  //       setUcasGradeData(response?.gradeFilterList);
  //     } catch (error) {
  //       setUcasGradeData(null);
  //       console.log(error);
  //     }
  //   };
  //   fetchUcasData();
  // }, []);

  // console.log(ucasGradeData);
  const ucasHandleClose = () => {
    onClose();
    SetIsUcasPopupOpen(!isUcasPopupOpen);
  };
  const ucasGradeData: GradeFilterArrayInterface[] = [
    {
      qualId: null,
      qualification: "A - Levels",
      qualificationUrl: null,
      parentQualification: "A - Levels",
      gradeOptions: null,
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: null,
      template: "plus-minus",
    },
    {
      qualId: "1",
      qualification: "A Level",
      qualificationUrl: "a-level",
      parentQualification: "A - Levels",
      gradeOptions: "A*~56,A~48,B~40,C~32,D~24,E~16",
      maxPoint: "5",
      maxTotalPoint: "6",
      gradeOptionflag: "Y",
      template: "plus-minus",
    },
    {
      qualId: "2",
      qualification: "AS Level",
      qualificationUrl: "as-level",
      parentQualification: "A - Levels",
      gradeOptions: "A~20,B~16,C~12,D~10,E~6",
      maxPoint: "5",
      maxTotalPoint: "6",
      gradeOptionflag: "Y",
      template: "plus-minus",
    },
    {
      qualId: "3",
      qualification: "A Level Double Award",
      qualificationUrl: "a-level-double-award",
      parentQualification: "A - Levels",
      gradeOptions:
        "A*A*~112,A*A~104,AA~96,AB~88,BB~80,BC~72,CC~64,CD~56,DD~48,DE~40,EE~32",
      maxPoint: "5",
      maxTotalPoint: "6",
      gradeOptionflag: "N",
      template: "single-select",
    },
    {
      qualId: "4",
      qualification: "AS Level Double Award",
      qualificationUrl: "as-level-double-award",
      parentQualification: "A - Levels",
      gradeOptions: "AA~40,AB~36,BB~32,BC~28,CC~24,CD~22,DD~20,DE~16,EE~12",
      maxPoint: "5",
      maxTotalPoint: "6",
      gradeOptionflag: "N",
      template: "single-select",
    },
    {
      qualId: null,
      qualification: "International Baccalaureate (Diploma)",
      qualificationUrl: null,
      parentQualification: "International Baccalaureate (Diploma)",
      gradeOptions: null,
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: null,
      template: null,
    },
    {
      qualId: null,
      qualification: "International Baccalaureate (Diploma)",
      qualificationUrl: null,
      parentQualification: "International Baccalaureate (Diploma)",
      gradeOptions: null,
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: null,
      template: "single-select",
    },
    {
      qualId: "5",
      qualification: "IB Diploma points",
      qualificationUrl: "ib-diploma-points",
      parentQualification: "International Baccalaureate (Diploma)",
      gradeOptions: "0",
      maxPoint: "6",
      maxTotalPoint: "10",
      gradeOptionflag: "N",
      template: null,
    },
    {
      qualId: "14",
      qualification: "International Baccalaureate (Diploma) Higher Level",
      qualificationUrl: "higher-level",
      parentQualification: "International Baccalaureate (Diploma)",
      gradeOptions: "H7~56,H6~48,H5~32,H4~24,H3~12,H2~0,H1~0",
      maxPoint: "6",
      maxTotalPoint: "10",
      gradeOptionflag: "N",
      template: "single-select",
    },
    {
      qualId: "15",
      qualification: "International Baccalaureate (Diploma) Standard Level",
      qualificationUrl: "standard-level",
      parentQualification: "International Baccalaureate (Diploma)",
      gradeOptions: "S7~28,S6~24,S5~16,S4~12,S3~6,S2~0,S1~0",
      maxPoint: "6",
      maxTotalPoint: "10",
      gradeOptionflag: "N",
      template: "single-select",
    },
    {
      qualId: null,
      qualification: "Scottish Qualifications",
      qualificationUrl: null,
      parentQualification: "Scottish Qualifications",
      gradeOptions: null,
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: null,
      template: "single-select",
    },
    {
      qualId: "6",
      qualification: "Scottish Highers",
      qualificationUrl: "scottish-highers",
      parentQualification: "Scottish Qualifications",
      gradeOptions: "A~33,B~27,C~21,D~15",
      maxPoint: "6",
      maxTotalPoint: "10",
      gradeOptionflag: "N",
      template: "single-select",
    },
    {
      qualId: "7",
      qualification: "Scottish Advanced Highers",
      qualificationUrl: "scottish-advanced-highers",
      parentQualification: "Scottish Qualifications",
      gradeOptions: "A~56,B~48,C~40,D~32",
      maxPoint: "6",
      maxTotalPoint: "10",
      gradeOptionflag: "N",
      template: "single-select",
    },
    {
      qualId: null,
      qualification: "BTEC Nationals (QCF)",
      qualificationUrl: null,
      parentQualification: "BTEC Nationals (QCF)",
      gradeOptions: null,
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: null,
      template: "single-select",
    },
    {
      qualId: "8",
      qualification: "BTEC Extended Diploma",
      qualificationUrl: "btec-extended-diploma",
      parentQualification: "BTEC Nationals (QCF)",
      gradeOptions:
        "D*D*D*~168,D*D*D~160,D*DD~152,DDD~144,DDM~128,DMM~112,MMM~96,MMP~80,MPP~64,PPP~48",
      maxPoint: "8",
      maxTotalPoint: "10",
      gradeOptionflag: "N",
      template: "single-select",
    },
    {
      qualId: "9",
      qualification: "BTEC Diploma",
      qualificationUrl: "btec-diploma",
      parentQualification: "BTEC Nationals (QCF)",
      gradeOptions: "D*D*~112,D*D~104,DD~96,DM~80,MM~64,MP~48,PP~32",
      maxPoint: "8",
      maxTotalPoint: "10",
      gradeOptionflag: "N",
      template: "single-select",
    },
    {
      qualId: "10",
      qualification: "BTEC 90 Credit Diploma",
      qualificationUrl: "btec-90-credit-diploma",
      parentQualification: "BTEC Nationals (QCF)",
      gradeOptions: "D*D*~84,D*D~78,DD~72,DM~60,MM~48,MP~36,PP~24",
      maxPoint: "8",
      maxTotalPoint: "10",
      gradeOptionflag: "N",
      template: null,
    },
    {
      qualId: "16",
      qualification: "BTEC Foundation Diploma",
      qualificationUrl: "btec-foundation-diploma",
      parentQualification: "BTEC Nationals (QCF)",
      gradeOptions: "D*~84,D~72,M~48,P~24",
      maxPoint: "8",
      maxTotalPoint: "10",
      gradeOptionflag: "N",
      template: "single-select",
    },
    {
      qualId: null,
      qualification: "Irish Leaving Certificate",
      qualificationUrl: null,
      parentQualification: "Irish Leaving Certificate",
      gradeOptions: null,
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: null,
      template: "plus-minus",
    },
    {
      qualId: "11",
      qualification: "Irish Leaving Certificate Higher",
      qualificationUrl: "higher",
      parentQualification: "Irish Leaving Certificate",
      gradeOptions:
        "A1~36,A2~30,B1~30,B2~24,B3~24,C1~18,C2~18,C3~12,D1~12,D2~9,D3~9",
      maxPoint: "5",
      maxTotalPoint: "6",
      gradeOptionflag: "Y",
      template: "plus-minus",
    },
    {
      qualId: "12",
      qualification: "Irish Leaving Certificate Ordinary",
      qualificationUrl: "ordinary",
      parentQualification: "Irish Leaving Certificate",
      gradeOptions: "A1~12,A2~10,B1~10,B2~8,B3~8,C1~6,C2~6",
      maxPoint: "5",
      maxTotalPoint: "6",
      gradeOptionflag: "Y",
      template: "plus-minus",
    },
    {
      qualId: null,
      qualification: "ACCESS TO HE DIPLOMA",
      qualificationUrl: null,
      parentQualification: "ACCESS TO HE DIPLOMA",
      gradeOptions: null,
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: null,
      template: "credit-selector",
    },
    {
      qualId: "20",
      qualification: "Access to HE Diploma",
      qualificationUrl: "access-he-diploma",
      parentQualification: "ACCESS TO HE DIPLOMA",
      gradeOptions: "D~3.2,M~2.1333,P~1.0666",
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: "N",
      template: "credit-selector",
    },
    {
      qualId: null,
      qualification: "UCAS",
      qualificationUrl: null,
      parentQualification: "UCAS",
      gradeOptions: null,
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: null,
      template: "min-max",
    },
    {
      qualId: "19",
      qualification: "UCAS Tariff Points",
      qualificationUrl: "ucas",
      parentQualification: "UCAS",
      gradeOptions: "0",
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: "T",
      template: "min-max",
    },
    {
      qualId: "23",
      qualification: "T - Level",
      qualificationUrl: "t-level",
      parentQualification: "T - Levels",
      gradeOptions: "0",
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: "N",
      template: "single-select",
    },
    {
      qualId: null,
      qualification: "BTEC SEARCH",
      qualificationUrl: null,
      parentQualification: "BTEC SEARCH",
      gradeOptions: null,
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: null,
      template: null,
    },
    {
      qualId: "13",
      qualification: "BTEC SEARCH",
      qualificationUrl: null,
      parentQualification: "BTEC SEARCH",
      gradeOptions: "D*~56,D~48,M~32,P~16",
      maxPoint: null,
      maxTotalPoint: null,
      gradeOptionflag: null,
      template: null,
    },
  ];
  const getOrdinalName = (index: number) => {
    const ordinals = ["Second", "Third"];
    return ordinals[index];
  };

  const addQualification = () => {
    setQualifications((prevQualifications: QualInterface[]) => {
      if (prevQualifications.length >= 2) return prevQualifications;
      const newQualification = {
        id: Date.now(),
        name: getOrdinalName(prevQualifications.length),
      };
      return [...prevQualifications, newQualification];
    });
  };
  const removeQualification = (idToRemove: number, indexPosition: number) => {
    setQualifications((prevQualifications: QualInterface[]) => {
      const updatedQualifications = prevQualifications.filter(
        (item: QualInterface) => item.id !== idToRemove
      );
      return updatedQualifications.map(
        (qual: QualInterface, index: number) => ({
          ...qual,
          name: getOrdinalName(index),
        })
      );
    });
    setQual((prev: any) =>
      prev.map((item: any, index: number) =>
        index === indexPosition
          ? {
              ...item,
              selectedLevel: "A Level",
              type: "plus-minus",
              maxPoint: 5,
              maxTotalPoint: 6,
              getmaxTotalPoint: 0,
              podSpecificPoints: 0,
            }
          : item
      )
    );
  };
  const resetAll = () => {
    setQualifications([]);
    setUcasPoints(0);
    setQual(initialvalue);
    setResetid(Date.now());
  };
  console.log(qual);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-grey-600 backdrop-blur-custom-1 opacity-[80%] z-10  ${
          isUcasOpen ? "animate-fadeIn block" : "animate-fadeOut hidden"
        }`}
      ></div>

      <div
        className={`bg-white fixed top-0 left-0 h-full w-[375px] z-10 transition-all duration-300 ease-in-out ${
          isUcasOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-[16px]">
          {/* UCAS pop-up close SVG Icon*/}
          <svg
            onClick={ucasHandleClose}
            className="ml-auto cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h6 className="text-heading5 font-bold mt-[-8px]">
            Calculate your UCAS points
          </h6>
        </div>
        <div className="flex flex-col gap-[32px] h-[calc(100%-210px)] overflow-y-auto custom-scrollbar-2">
          <div className="flex flex-col gap-[16px] px-[16px] pb-[32px]">
            <TopLevelMenu
              ucasPoints={ucasPoints}
              setUcasPoints={setUcasPoints}
              ucasGradeData={ucasGradeData}
              indexPosition={0}
              key={resetid}
              resetid={resetid}
              qual={qual}
              setQual={setQual}
            />
            <div className="border-b border-grey-200"></div>
            {/* Additional Qualification */}
            {qualifications.map(
              (qualification: QualInterface, index: number) => (
                <AddQualification
                  indexPosition={index + 1}
                  qual={qual}
                  setQual={setQual}
                  ucasPoints={ucasPoints}
                  setUcasPoints={setUcasPoints}
                  key={qualification.id}
                  qualOrder={qualification.name}
                  ucasGradeData={ucasGradeData}
                  removeQual={() =>
                    removeQualification(qualification.id, index + 1)
                  }
                />
              )
            )}
            {/* Add qualification button */}

            {qualifications.length < 2 &&
              qual[0].selectedLevel !== "UCAS Tariff Points" &&
              qual[0].podSpecificPoints > 0 && (
                <div
                  onClick={addQualification}
                  className="flex items-center gap-[4px] text-primary-400 font-semibold cursor-pointer hover:underline"
                >
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2V15M14.5 8.5L1.5 8.5"
                      stroke="#4664DC"
                      strokeWidth="1.335"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Add a qualification
                </div>
              )}
          </div>
        </div>
        {/* Reset or submit button */}
        <div
          className={`flex flex-col gap-[10px] p-[16px] fixed w-[375px] bottom-0 shadow-custom-10 bg-white ${
            ucasPoints > 0 ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center justify-center gap-[8px] min-h-[42px]">
            <p className="small text-grey300 small">Your UCAS points</p>
            <div
              className={`flex items-center min-w-[36px] py-[6px] px-[14px] rounded-[4px] bg-grey-100 text-grey300 font-semibold cursor-pointer ${
                ucasPoints > 0 ? "bg-positive-default text-white" : ""
              }`}
            >
              {ucasPoints}
            </div>
          </div>
          <div className="flex items-center justify-between gap-[8px] min-h-[44px]">
            <Link
              href="#"
              onClick={resetAll}
              aria-label="reset filters"
              className="text-primary-400 font-semibold py-[10px] px-[16px] grow text-center hover:underline"
            >
              Reset
            </Link>
            <button className="bg-primary-400 text-white rounded-[24px] py-[10px] px-[16px] min-w-[200px] font-semibold hover:bg-primary-500">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UcasComponent;
