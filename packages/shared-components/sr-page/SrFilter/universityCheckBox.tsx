"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { KeyNames } from "@packages/lib/utlils/filters/filterJson";
import { generatePathName } from "@packages/lib/utlils/filters/result-filters";
const UniversityCheckBox = React.memo(
  ({ slug, formUrl, appendSearchParams, item }: any) => {
    const searchparams = useSearchParams();
    const keyName = KeyNames();
    const [isUniSelected, setIsUniSelected] = useState(false);
    //const [pageCategory, setPageCategory] = useState("csearch");
    useEffect(() => {
      const uni = searchparams
        ?.get(keyName?.university)
        ?.includes(item?.collegeTextKey);
      if (uni) {
        //setPageCategory("search");
        setIsUniSelected(true);
      } else {
        //setPageCategory("csearch");
        setIsUniSelected(false);
      }
    }, [searchparams]);

    return (
      <div className="custom-radio">
        <Link
          id={keyName?.university + item?.collegeTextKey}
          href={{
            pathname: generatePathName(
              slug,
              keyName?.university,
              "",
              null,
              searchparams
                ?.get(keyName?.university)
                ?.includes(item?.collegeTextKey)
            ),
            query: formUrl(keyName?.university, item?.collegeTextKey, true),
          }}
        ></Link>
        <input
          type="radio"
          id={item?.collegeNameDisplay}
          value={item?.collegeNameDisplay}
          checked={
            searchparams?.get(keyName?.university) === item?.collegeTextKey
          }
          name="university"
          onChange={(event) => {
            console.log("triggered", event.target);
            appendSearchParams(keyName?.university, item?.collegeTextKey, true);
            setIsUniSelected(!isUniSelected);
          }}
        />
        <label htmlFor={item?.collegeNameDisplay} className="flex items-center">
          {item?.collegeNameDisplay}
        </label>
      </div>
    );
  }
);

export default UniversityCheckBox;
