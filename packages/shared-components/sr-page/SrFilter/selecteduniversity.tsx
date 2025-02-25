import React from "react";

const SelectedUniversity = ({
  universityClicked,
  isUniversityOpen,
  universityList,
}: any) => {
  //   const universityList = [
  //     "Aberystwyth University ",
  //     "Acacia Learning",
  //     "Academy Of Contemporary Music",
  //     "Accrington And Rossendale College",
  //     "Activate Learning",
  //     "Aecc University College",
  //     "Al-Maktoum College Of Higher Education",
  //     "Amersham And Wycombe College",
  //     "Amity Business School London",
  //     "Anglia Ruskin University Aru",
  //     "Architectural Association School Of Architecture",
  //   ];
  return (
    <div
      className={`flex flex-col gap-[16px] ${isUniversityOpen ? "" : "hidden"}`}
    >
      <ul className="flex flex-wrap gap-[8px] uppercase">
        <li className="bg-secondary-50 text-blue-500 whitespace-nowrap rounded-[4px] px-[10px] py-[3px] font-semibold x-small">
          University of Aberdeen
        </li>
      </ul>
      <div className="flex flex-col gap-[12px] h-[246px] overflow-y-auto custom-scrollbar-2">
        <div
          onClick={() => {
            universityClicked("");
          }}
          className="flex items-center gap-[4px] text-blue-400 font-semibold cursor-pointer"
        >
          <svg
            className="rotate-180"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.48037 14.6192C3.97269 14.1116 3.97269 13.2884 4.48037 12.7808L8.76113 8.5L4.48037 4.21924C3.97269 3.71156 3.97269 2.88844 4.48037 2.38076C4.98805 1.87308 5.81117 1.87308 6.31885 2.38076L11.5188 7.58076C12.0265 8.08844 12.0265 8.91156 11.5188 9.41924L6.31885 14.6192C5.81117 15.1269 4.98805 15.1269 4.48037 14.6192Z"
              fill="#4664DC"
            />
          </svg>
          Choose a different uni
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="small font-bold">{universityList?.sortingCat}</div>
          <div className="flex flex-col gap-[12px]">
            {universityList?.uniList?.map((item: any, index: any) => (
              <div className="form_check relative" key={index}>
                <div className="flex items-start gap-[8px]">
                  <div className="checkbox_card">
                    <input
                      type="checkbox"
                      className="form-checkbox hidden"
                      id={item?.collegeName}
                    />
                    <label
                      htmlFor={item?.collegeName}
                      className="flex justify-center items-center w-[16px] h-[16px] rounded-[3px] border-2 border-grey-600 my-[2px] group-checked:bg-primary-400"
                    >
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.2534 0.723569C9.40607 0.863517 9.41638 1.10073 9.27643 1.2534L3.77643 7.2534C3.70732 7.3288 3.6104 7.37269 3.50815 7.37491C3.40589 7.37714 3.30716 7.33749 3.23483 7.26517L0.734835 4.76517C0.588388 4.61872 0.588388 4.38128 0.734835 4.23484C0.881282 4.08839 1.11872 4.08839 1.26517 4.23484L3.48822 6.45789L8.72357 0.746605C8.86351 0.593936 9.10073 0.583622 9.2534 0.723569Z"
                          fill="white"
                          stroke="white"
                          strokeWidth="0.666667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </label>
                  </div>
                  <label
                    htmlFor={item?.collegeName}
                    className="check-label small font-normal text-grey300 w-[calc(100%_-_28px)]"
                  >
                    {item?.collegeName}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedUniversity;
