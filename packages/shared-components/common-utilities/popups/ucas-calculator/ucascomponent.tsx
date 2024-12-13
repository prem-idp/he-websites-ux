"use client";
import { fetchAuthSession } from "aws-amplify/auth";
import React, { useEffect, useState, useRef } from "react";
import AddQualification from "./additional-qual";
import Link from "next/link";
import TopLevelMenu from "./toplevel-menu";
import {
  extractMinMax,
  formatQualificationLabel,
  formatToUpperCase,
  uppercaseToLowercase,
} from "@packages/lib/utlils/ucas-functions";
import { ucasAjax } from "@packages/lib/api-payloads/payloads";
import { getCookie } from "@packages/lib/utlils/helper-function";
import { parseGradeString } from "@packages/lib/utlils/ucas-functions";
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
  const [ucasGradeData, setUcasGradeData] = useState<any>();
  const [isUcasPopupOpen, SetIsUcasPopupOpen] = useState<boolean>(true);
  const [qualifications, setQualifications] = useState<QualInterface[]>([]);
  const [ucasPoint, setUcasPoint] = useState<number>(0);
  const [resetid, setResetid] = useState<number>(Date.now());
  const [applybtn, setApplybtn] = useState<any>("Apply");
  const [qualCopy, setQualCopy] = useState<any>();
  const [userIdToken, setUserIdToken] = useState<any>(null);
  const [tracksessionId, setTracksessionId] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const ucasRef = useRef<HTMLDivElement | null>(null);
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
    min: "",
    max: "",
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
    min: "",
    max: "",
    gradeArray: [],
  };
  const [qual, setQual] = useState([initialvalue]);
  useEffect(() => {
    setLoading(true);
    console.log("use effect is runnning");
    const fetchUcasData = async () => {
      const response = await fetchAuthSession({ forceRefresh: true });
      const { idToken } = response.tokens ?? {};
      console.log("ID Token:", idToken);
      const tracksessionId = getCookie("userTrackId");
      setUserIdToken(idToken);
      try {
        if (idToken) {
          console.log("logged in user");
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
          setUcasGradeData(jsonData?.gradeFilterList);
          setUcasPoint(Math.floor(jsonData?.userGradeDetails?.ucasPoint));
          console.log(jsonData.userGradeDetails);
          if (jsonData?.userGradeDetails?.userStudyLevelEntry?.length > 0) {
            console.log("user details present in API");
            const mappedQuals =
              jsonData?.userGradeDetails.userStudyLevelEntry.map(
                (entry: any, index: number) => ({
                  ...additionalQual,
                  //formatQualificationLabel(entry.SelectedLevel)
                  SelectedLevel: jsonData?.gradeFilterList?.filter(
                    (item: any) => item.qualId === entry.qualId.toString()
                  )[0]?.qualification,
                  qualId: entry.qualId,
                  min: extractMinMax(entry.userEntryPoint, "min"),
                  max: extractMinMax(entry.userEntryPoint, "max"),
                  userEntryPoint: formatToUpperCase(entry.userEntryPoint),
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
            setQualCopy(mappedQuals);
            console.log("user details from db", jsonData?.userGradeDetails);
            if (
              jsonData?.userGradeDetails?.userStudyLevelEntry.length > 0 &&
              qualifications.length < 2
            ) {
              const temp = Math.abs(
                qualifications.length -
                  (jsonData?.userGradeDetails?.userStudyLevelEntry.length - 1)
              );
              for (let i = 0; i < temp; i++) {
                const newQualification = {
                  id: Date.now() + i,
                  name: getOrdinalName(i),
                };
                qualifications.push(newQualification);
              }
            }
            setLoading(false);
          } else {
            console.log("No user details present in API");
            const mappedQuals = {
              ...initialvalue,
              SelectedLevel: jsonData.gradeFilterList[1].qualification,
              qualId: jsonData.gradeFilterList[1].qualId,
              maxPoint: Number(jsonData.gradeFilterList[1].maxPoint),
              maxTotalPoint: Number(jsonData?.gradeFilterList[1].maxTotalPoint),
              type: jsonData?.gradeFilterList[1].template,
              gradeArray: parseGradeString(
                jsonData?.gradeFilterList[1].gradeOptions
              ),
            };
            setQual([mappedQuals]);
            setQualCopy([mappedQuals]);
            setLoading(false);
          }
        } else if (tracksessionId) {
          console.log("guest user");
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
          const jsonCookies = JSON.parse(getCookie("UCAS") || "{}");
          console.log(
            "cookie length",
            jsonCookies?.userStudyLevelEntry?.length
          );
          setUcasPoint(
            jsonCookies?.ucasPoint ? Math.floor(jsonCookies.ucasPoint) : 0
          );
          if (jsonCookies?.userStudyLevelEntry) {
            console.log("Cookieeee", jsonCookies?.userStudyLevelEntry);
            const mappedQuals = jsonCookies?.userStudyLevelEntry.map(
              (entry: any, index: number) => ({
                ...additionalQual,
                SelectedLevel: jsonData?.gradeFilterList?.filter(
                  (item: any) => item.qualId === entry.qualId.toString()
                )[0]?.qualification,
                qualId: entry.qualId,
                min: extractMinMax(entry.userEntryPoint, "min"),
                max: extractMinMax(entry.userEntryPoint, "max"),
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
            setQualCopy(mappedQuals);
            console.log(jsonCookies?.userStudyLevelEntry);
            if (jsonCookies?.userStudyLevelEntry.length > 0) {
              const temp = Math.abs(
                qualifications.length -
                  (jsonCookies?.userStudyLevelEntry.length - 1)
              );
              for (let i = 0; i < temp; i++) {
                const newQualification = {
                  id: Date.now() + i,
                  name: getOrdinalName(i),
                };
                qualifications.push(newQualification);
              }
            }
            setLoading(false);
          } else {
            const mappedQuals = {
              ...initialvalue,
              SelectedLevel: jsonData.gradeFilterList[1].qualification,
              qualId: jsonData.gradeFilterList[1].qualId,
              maxPoint: Number(jsonData.gradeFilterList[1].maxPoint),
              maxTotalPoint: Number(jsonData?.gradeFilterList[1].maxTotalPoint),
              type: jsonData?.gradeFilterList[1].template,
              gradeArray: parseGradeString(
                jsonData?.gradeFilterList[1].gradeOptions
              ),
            };
            setQual([mappedQuals]);
            setQualCopy([mappedQuals]);
            setLoading(false);
          }
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
  console.log(ucasGradeData);
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

    setQual((prev: any) =>
      prev.filter((item: any, index: number) => index !== indexPosition)
    );
  };
  const resetAll = () => {
    setQualifications([]);
    setUcasPoint(0);
    setQual([initialvalue]);
    setResetid(Date.now());
    const mappedQuals = {
      ...initialvalue,
      SelectedLevel: ucasGradeData[1].qualification,
      qualId: ucasGradeData[1].qualId,
      maxPoint: Number(ucasGradeData[1].maxPoint),
      maxTotalPoint: Number(ucasGradeData[1].maxTotalPoint),
      type: ucasGradeData[1].template,
      gradeArray: parseGradeString(ucasGradeData[1].gradeOptions),
    };
    setQual([mappedQuals]);
    setQualCopy([mappedQuals]);
  };

  const [valid, setIsInvalid] = useState(false);
  const validateTotalCredit = () => {
    const filteredArray = qual.filter(
      (item: any) => item.SelectedLevel === "Access to HE Diploma"
    );
    const totalCredits = filteredArray.reduce(
      (acc: any, item) => acc + item.totalcredit,
      0
    );
    const expectedTotal = filteredArray.length * 45;
    if (filteredArray.length > 0 && totalCredits !== expectedTotal) {
      setIsInvalid(true);
      return true;
    } else {
      setIsInvalid(false);
      return false;
    }
  };
  const updateUcas = async () => {
    setApplybtn("Applying...");
    const validation = validateTotalCredit();
    setIsInvalid(validation);
    const list: any = [];
    if (qual[0].SelectedLevel == "UCAS Tariff Points") {
      const obj = {
        qualId: Number(qual[0].qualId),
        SelectedLevel: ucasGradeData?.filter(
          (item: any) => item.qualId === qual[0].qualId.toString()
        )[0]?.qualificationUrl,
        userEntryPoint: `${qual[0].min}-${qual[0].max}`,
      };
      list.push(obj);
    } else {
      qual
        .filter((item) => item.userEntryPoint !== "")
        .map((items) => {
          const obj = {
            qualId: Number(items.qualId),
            SelectedLevel: ucasGradeData?.filter(
              (item: any) => item.qualId === items.qualId.toString()
            )[0]?.qualificationUrl,
            userEntryPoint: items.userEntryPoint,
          };
          list.push(obj);
        });
    }
    const saveUcas = {
      affiliateId: 220703,
      ucasPoint: ucasPoint,
      userStudyLevelEntry: [...list],
    };
    console.log(saveUcas);
    const { idToken } =
      (
        await fetchAuthSession({
          forceRefresh: true,
        })
      ).tokens ?? {};
    if (!validation) {
      setQualCopy(qual);
      if (idToken) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BFF_API_DOMAIN}/hewebsites/v1/homepage/update-ucas`,
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
            body: JSON.stringify(saveUcas),
          }
        );
        console.log(response);
        const jsonData = await response.json();
        if (jsonData == "updated") {
          onClose();
          setApplybtn("Apply");
        } else {
          alert("failed");
          onClose();
          setApplybtn("Apply");
        }
      } else {
        if (saveUcas) {
          const stringConvert = JSON.stringify(saveUcas);
          console.log(stringConvert);
          document.cookie = `UCAS=${stringConvert}; path=/; max-age=3600; SameSite=Strict`;
          if (getCookie("UCAS")) {
            onClose();
            setApplybtn("Apply");
          }
        } else {
          console.error("saveUcas is not a valid value");
        }
      }
    }
  };
  console.log("qual", qual);
  console.log("add-qual", qualifications);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ucasRef.current && !ucasRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-grey-600 backdrop-blur-custom-1 opacity-[80%] z-10  ${
          isUcasOpen ? "animate-fadeIn block" : "animate-fadeOut hidden"
        }`}
      ></div>

      <div
        ref={ucasRef}
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
        {!loading && (
          <>
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
                      setQualifications={setQualifications}
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
              {valid && (
                <p className="small text-negative-default">
                  A total of 45 credits for Access to HE Diploma must be added
                  for tariff points to be calculated
                </p>
              )}
              {qual[0].SelectedLevel === "UCAS Tariff Points" &&
                qual[0].min > qual[0].max && (
                  <p className="small text-negative-default">
                    The maximum points should be larger than the minimum points
                  </p>
                )}
              {ucasPoint > 0 && (
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
              )}
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
                <button
                  className={`inline-flex items-center justify-center small rounded-[24px] py-[10px] px-[16px] min-w-[200px] font-semibold ${(qual[0].SelectedLevel === "UCAS Tariff Points" && qual[0].min > qual[0].max) || JSON.stringify(qual) === JSON.stringify(qualCopy) ? "cursor-not-allowed bg-grey-300 text-white" : "bg-primary-400 text-white hover:bg-primary-500"}`}
                  onClick={updateUcas}
                >
                  {applybtn == "Applying..." && (
                    <svg
                      className="animate-spin mr-[8px] h-[18px] w-[18px] text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  {applybtn}
                </button>
              </div>
            </div>
          </>
        )}
        {loading && (
          <center>
            <h5>loading..</h5>
          </center>
        )}
      </div>
    </>
  );
};

export default UcasComponent;
