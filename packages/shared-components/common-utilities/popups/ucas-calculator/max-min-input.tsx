"use client";
import React from "react";
const MaxMinInputBox = ({ indexPosition, setQual, setUcasPoint }: any) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[4px] small">
        <label htmlFor={`minpoint-${indexPosition}`} className="font-semibold ">
          Minimum points
        </label>
        <input
          type="text"
          onChange={(event) =>
            setQual((prev: any) =>
              prev.map((item: any, index: number) =>
                index === indexPosition
                  ? {
                      ...item,
                      min: Number(event?.target.value),
                    }
                  : item
              )
            )
          }
          id={`minpoint-${indexPosition}`}
          placeholder="Enter UCAS points"
          className="block rounded-[8px] min-h-[44px] border border-grey-500 py-[12px] px-[10px]"
        />
      </div>
      <div className="flex flex-col gap-[4px] small">
        <label htmlFor={`maxpoint-${indexPosition}`} className="font-semibold ">
          Maximum points
        </label>
        <input
          type="text"
          onChange={(event) => {
            const value = Number(event?.target.value);

            setQual((prev: any) =>
              prev.map((item: any, index: number) =>
                index === indexPosition
                  ? { ...item, max: value, podSpecificPoints: value }
                  : item
              )
            );

            setUcasPoint(value);
          }}
          id={`maxpoint-${indexPosition}`}
          placeholder="Enter UCAS points"
          className="block rounded-[8px] min-h-[44px] border border-grey-500 py-[12px] px-[10px]"
        />
      </div>
    </div>
  );
};

export default MaxMinInputBox;
