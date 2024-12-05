import React, { useEffect, useState } from "react";

const MaxMinInputBox = ({
  indexPosition,
  qual,
  setQual,
  ucasPoint,
  setUcasPoint,
}: any) => {
  // const [min, setMin] = useState<string>("");
  // const [max, setMax] = useState<string>("");
  // setQual((prev: any) =>
  //   prev.map((item: any, index: number) =>
  //     index === indexPosition
  //       ? {
  //           ...item,
  //           min: event?.target.value,
  //         }
  //       : item
  //   )
  // );

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[4px] small">
        <label htmlFor="minpoint" className="font-semibold ">
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
                      min: event?.target.value,
                    }
                  : item
              )
            )
          }
          id=""
          placeholder="Enter UCAS points"
          className="block rounded-[8px] min-h-[44px] border border-grey-500 py-[12px] px-[10px]"
        />
      </div>
      <div className="flex flex-col gap-[4px] small">
        <label htmlFor="minpoint" className="font-semibold ">
          Maximum points
        </label>
        <input
          type="text"
          onChange={(event) =>
            setQual((prev: any) =>
              prev.map((item: any, index: number) =>
                index === indexPosition
                  ? {
                      ...item,
                      max: event?.target.value,
                    }
                  : item
              )
            )
          }
          id=""
          placeholder="Enter UCAS points"
          className="block rounded-[8px] min-h-[44px] border border-grey-500 py-[12px] px-[10px]"
        />
      </div>
    </div>
  );
};

export default MaxMinInputBox;
