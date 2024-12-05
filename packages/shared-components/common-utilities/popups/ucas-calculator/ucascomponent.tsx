"use client";
import { fetchAuthSession } from "aws-amplify/auth";
import React, { useEffect, useState } from "react";
import AddQualification from "./additional-qual";
import Link from "next/link";
import TopLevelMenu from "./toplevel-menu";
import { formatQualificationLabel } from "@packages/lib/utlils/ucas-functions";
import { ucasAjax } from "@packages/lib/api-payloads/payloads";
import { parseGradeString } from "@packages/lib/utlils/helper-function";
import { GradeFilterArrayInterface } from "@packages/lib/types/ucas-calc";
import {
  calculateTotalCount,
  getPodspecficGradePoints,
} from "@packages/lib/utlils/ucas-functions";
interface PropsInterface {
  isUcasOpen: boolean;
  onClose: () => void;
}
interface QualInterface {
  id: number;
  name: string;
}
const UcasComponent = ({ onClose, isUcasOpen }: PropsInterface) => {
  const [ucasGradeData, setUcasGradeData] =
    useState<GradeFilterArrayInterface[]>();
  const [isUcasPopupOpen, SetIsUcasPopupOpen] = useState<boolean>(true);
  const [qualifications, setQualifications] = useState<QualInterface[]>([]);
  const [ucasPoint, setUcasPoint] = useState<number>(0);
  const [resetid, setResetid] = useState<number>(0);
  const [prePopulationData, setPrepopulationData] = useState([]);
  const additionalQual = {
    SelectedLevel: "Please select",
    qualId: 0,
    totalcredit: 0,
    type: "",
    maxPoint: 5,
    maxTotalPoint: 6,
    getmaxTotalPoint: 0,
    podSpecificPoints: 0,
    userEntryPoint: "",
    min: 0,
    max: 0,
    gradeArray: [],
  };
  const initialvalue: any = {
    SelectedLevel: "A Level",
    totalcredit: 0,
    qualId: 1,
    type: "plus-minus",
    maxPoint: 5,
    maxTotalPoint: 6,
    getmaxTotalPoint: 0,
    podSpecificPoints: 0,
    userEntryPoint: "",
    min: 0,
    max: 0,
    gradeArray: [],
  };
  const [qual, setQual] = useState([initialvalue]);

  useEffect(() => {
    const fetchUcasData = async () => {
      const { idToken } =
        (
          await fetchAuthSession({
            forceRefresh: true,
          })
        ).tokens ?? {};
      const cookies = document?.cookie?.split("; ");
      const cookie = cookies?.find((mycookie) =>
        mycookie.startsWith("tracksessionid=")
      );
      const tracksessionId = cookie?.split("=")[1];
      try {
        if (idToken) {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}/hewebsites/v1/homepage/ucas-ajax`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
                Authorization:
                  typeof idToken === "string"
                    ? idToken
                    : idToken?.toString() || "",
              },
              body: JSON.stringify(ucasAjax),
            }
          );
          const jsonData = await res.json();
          setPrepopulationData(jsonData?.userGradeDetails);
          setUcasGradeData(jsonData?.gradeFilterList);
          setUcasPoint(Math.floor(jsonData?.userGradeDetails?.ucasPoint));
          if (jsonData?.userGradeDetails?.userStudyLevelEntry?.length) {
            const mappedQuals =
              jsonData?.userGradeDetails.userStudyLevelEntry.map(
                (entry: any, index: number) => ({
                  ...additionalQual,
                  SelectedLevel: formatQualificationLabel(entry.SelectedLevel),
                  qualId: entry.qualId,
                  userEntryPoint: entry.userEntryPoint,
                  maxPoint: Number(
                    jsonData?.gradeFilterList?.find(
                      (item: any) => item.qualId == entry.qualId
                    )?.maxPoint
                  ),
                  maxTotalPoint: Number(
                    jsonData?.gradeFilterList?.find(
                      (item: any) => item.qualId == entry.qualId
                    )?.maxTotalPoint
                  ),
                  type: jsonData?.gradeFilterList?.find(
                    (item: any) => item.qualId == entry.qualId
                  )?.template,
                  gradeArray: parseGradeString(
                    jsonData?.gradeFilterList?.find(
                      (item: any) => item.qualId == entry.qualId
                    )?.gradeOptions
                  ),
                  getmaxTotalPoint: calculateTotalCount(entry.userEntryPoint),
                  podSpecificPoints: getPodspecficGradePoints(
                    jsonData?.gradeFilterList?.find(
                      (item: any) => item.qualId == entry.qualId
                    )?.gradeOptions,
                    entry.userEntryPoint
                  ),
                })
              );
            setQual(mappedQuals);
            console.log(jsonData?.userGradeDetails?.userStudyLevelEntry);
            if (qualifications.length < 2) {
              for (
                let i = 0;
                i < jsonData?.userGradeDetails?.userStudyLevelEntry.length - 1;
                i++
              ) {
                const newQualification = {
                  id: Date.now() + i,
                  name: getOrdinalName(i),
                };
                qualifications.push(newQualification);
              }
            }
          }
        } else {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}/hewebsites/v1/guest/homepage/ucas-ajax`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
                tracksessionid: tracksessionId?.toString() || "",
              },
              body: JSON.stringify(ucasAjax),
            }
          );
          const jsonData = await response.json();

          setUcasGradeData(jsonData?.gradeFilterList);
        }
      } catch (error) {
        console.error("Error calling Search Ajax API:", error);
      }
    };
    fetchUcasData();
  }, []);

  const ucasHandleClose = () => {
    onClose();
    SetIsUcasPopupOpen(!isUcasPopupOpen);
  };

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
      qual.push(additionalQual);
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
    // setQual((prev: any) =>
    //   prev.map((item: any, index: number) =>
    //     index === indexPosition
    //       ? {
    //           ...item,
    //           qualId: 0,
    //           selectedLevel: "A Level",
    //           type: "plus-minus",
    //           maxPoint: 5,
    //           maxTotalPoint: 6,
    //           getmaxTotalPoint: 0,
    //           podSpecificPoints: 0,
    //           min: 0,
    //           max: 0,
    //         }
    //       : item
    //   )
    // );
    setQual((prev: any) =>
      prev.filter((item: any, index: number) => index !== indexPosition)
    );
  };
  const resetAll = () => {
    setQualifications([]);
    setUcasPoint(0);
    setQual([initialvalue]);
    setResetid(Date.now());
  };
  const updateUcas = () => {
    console.log(qual);
  };

  console.log(qual);
  // console.log(ucasGradeData);
  // const(JSON.stringify(prePopulationData));
  const stringg = JSON.stringify(prePopulationData);
  console.log("string", stringg);
  const parsed = JSON.parse(stringg);
  console.log("parsed", parsed);
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
              ucasPoint={ucasPoint}
              setUcasPoint={setUcasPoint}
              ucasGradeData={ucasGradeData}
              indexPosition={0}
              key={resetid}
              resetid={resetid}
              qual={qual}
              setQual={setQual}
              setQualifications={setQualifications}
            />
            <div className="border-b border-grey-200"></div>
            {/* Additional Qualification */}
            {qualifications.map(
              (qualification: QualInterface, index: number) => (
                <AddQualification
                  indexPosition={index + 1}
                  qual={qual}
                  setQual={setQual}
                  ucasPoint={ucasPoint}
                  setUcasPoint={setUcasPoint}
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
              qual[0]?.SelectedLevel !== "UCAS Tariff Points" &&
              qual[0]?.podSpecificPoints > 0 && (
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
            ucasPoint > 0 ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center justify-center gap-[8px] min-h-[42px]">
            <p className="small text-grey300 small">Your UCAS points</p>
            <div
              className={`flex items-center min-w-[36px] py-[6px] px-[14px] rounded-[4px] bg-grey-100 text-grey300 font-semibold cursor-pointer ${
                ucasPoint > 0 ? "bg-positive-default text-white" : ""
              }`}
            >
              {ucasPoint}
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
            <button
              className="bg-primary-400 text-white rounded-[24px] py-[10px] px-[16px] min-w-[200px] font-semibold hover:bg-primary-500"
              onClick={updateUcas}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UcasComponent;
