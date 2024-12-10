import React, { useEffect, useState } from "react";
import AddQualification from "./additional-qual";
import Link from "next/link";
import TopLevelMenu from "./toplevel-menu";
import crypto from "crypto";
import { ucasAjax } from "@packages/lib/api-payloads/payloads";
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
  const [ucasGradeData, setUcasGradeData] = useState<
    GradeFilterArrayInterface[] | null
  >();
  const [isUcasPopupOpen, SetIsUcasPopupOpen] = useState<boolean>(true);
  const [qualifications, setQualifications] = useState<QualInterface[]>([]);
  const [ucasPoints, setUcasPoints] = useState<number>(0);
  const [resetid, setResetid] = useState<number>(0);
  const additionalQual = {
    status: false,
    selectedLevel: "Please select",
    type: "",
    maxPoint: 5,
    maxTotalPoint: 6,
    getmaxTotalPoint: 0,
    podSpecificPoints: 0,
    selectedPoints: [],
  };
  const initialvalue: any = {
    status: true,
    selectedLevel: "A Level",
    type: "plus-minus",
    maxPoint: 5,
    maxTotalPoint: 6,
    getmaxTotalPoint: 0,
    podSpecificPoints: 0,
    selectedPoints: [],
  };
  const [qual, setQual] = useState([initialvalue]);
  console.log(ucasAjax);
  useEffect(() => {
    const fetchUcasData = async () => {
      try {
        //const payloadString = JSON.stringify(ucasAjax);
        // const hash = crypto
        //   .createHash("sha256")
        //   .update(payloadString)
        //   .digest("hex");
        const response = await fetch(
          "https://4oov0t9iqk.execute-api.eu-west-2.amazonaws.com/dev-hewebsites-bff/v1/guest/homepage/ucas-ajax",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
              tracksessionid: "23775638",
            },
            body: JSON.stringify(ucasAjax),
          }
        );
        const jsonData = await response.json();
        if (jsonData) {
          setUcasGradeData(jsonData?.gradeFilterList);
        }
      } catch (error) {
        console.error("Error calling Search Ajax API:", error);
      }
    };
    fetchUcasData();
  }, []);

  //console.log("ucas grade data", ucasGradeData);

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
      if (prevQualifications.length >= 2) {
        return prevQualifications;
      } else {
        const newQualification = {
          id: Date.now(),
          name: getOrdinalName(prevQualifications.length),
        };
        qual.push(additionalQual);
        return [...prevQualifications, newQualification];
      }
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
    setQual((prevQual) =>
      prevQual.filter((_, index) => index !== indexPosition)
    );
  };
  const resetAll = () => {
    setQualifications([]);
    setUcasPoints(0);
    setQual([initialvalue]);
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
              qual[0]?.selectedLevel !== "UCAS Tariff Points" &&
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
              prefetch={false}
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
