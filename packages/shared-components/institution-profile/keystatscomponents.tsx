import React from "react";
import Image from "next/image";
import KeyStatsCard from "./keystatscard";
import keyStatsIcon1 from "../../../apps/whatuni/public/static/assets/icons/keystats_icon1.svg";
import keyStatsIcon2 from "../../../apps/whatuni/public/static/assets/icons/keystats_icon2.svg";
import keyStatsIcon3 from "../../../apps/whatuni/public/static/assets/icons/keystats_icon3.svg";

const Keystatscomponents = ({ keyStatsInnerData }: any) => {
  const keyStatsData = [
    {
      icon: keyStatsIcon1,
      label: "Ranking",
      value: "10th",
      description: "Complete University Guide",
    },
    {
      icon: keyStatsIcon2,
      label: "Student Population",
      value: "16,145",
      description: "Undergraduate students",
    },
    {
      icon: keyStatsIcon3,
      label: "Student Outcomes",
      value: "68%",
      description: "In job or further study",
    },
  ];
  return (
    <>
      <div className="keystats-container">
        <div className="keystats-inner-card flex flex-col gap-[16px] px-[16px] md:px-[20px] lg:px-0">
          <div className="h5 md:text-heading5 text-grey300">Keystats</div>
          <KeyStatsCard keyStatsData={keyStatsData} />
          {keyStatsInnerData && (
            <>
              <div className="keystats-inner-row">
                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(440px,_1fr))] justify-between gap-[20px] w-full *:text-small *:text-grey300">
                  {/* --1-- */}
                  <div className="w-full flex flex-col justify-between gap-[4px]">
                    <div className="*:flex *:flex-col gap-[16px] *:text-grey300 *:small flex items-center justify-between">
                      <div className="items-start">
                        <div className="h3">88%</div>
                        <div className="line-clamp-1">Full time</div>
                      </div>
                      <div className="items-end">
                        <div className="h3">12%</div>
                        <div className="line-clamp-1">Part time</div>
                      </div>
                    </div>
                    <div className=" progess-bar bg-primary-400 rounded-[8px] h-[8px] overflow-hidden">
                      <div
                        className="progess-bar__line transition-all duration-[3s] bg-primary-200 h-[8px]"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  {/* --1-- */}
                  {/* --2-- */}
                  <div className="w-full flex flex-col justify-between gap-[4px]">
                    <div className="*:flex *:flex-col gap-[16px] *:text-grey300 *:small flex items-center justify-between">
                      <div className="items-start">
                        <div className="h3">74%</div>
                        <div className="line-clamp-1">School leavers</div>
                      </div>
                      <div className="items-end">
                        <div className="h3">26%</div>
                        <div className="line-clamp-1">Mature students</div>
                      </div>
                    </div>
                    <div className=" progess-bar bg-primary-400 rounded-[8px] h-[8px] overflow-hidden">
                      <div
                        className="progess-bar__line transition-all duration-[3s] bg-primary-200 h-[8px]"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  {/* --2-- */}
                  {/* --3-- */}
                  <div className="w-full flex flex-col justify-between gap-[4px]">
                    <div className="*:flex *:flex-col gap-[16px] *:text-grey300 *:small flex items-center justify-between">
                      <div className="items-start">
                        <div className="h3">68%</div>
                        <div className="line-clamp-1">Undergraduate</div>
                      </div>
                      <div className="items-end">
                        <div className="h3">32%</div>
                        <div className="line-clamp-1">Postgraduate</div>
                      </div>
                    </div>
                    <div className=" progess-bar bg-primary-400 rounded-[8px] h-[8px] overflow-hidden">
                      <div
                        className="progess-bar__line transition-all duration-[3s] bg-primary-200 h-[8px]"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  {/* --3-- */}
                  {/* --4-- */}
                  <div className="w-full flex flex-col justify-between gap-[4px]">
                    <div className="*:flex *:flex-col gap-[16px] *:text-grey300 *:small flex items-center justify-between">
                      <div className="items-start">
                        <div className="h3">88%</div>
                        <div className="line-clamp-1">UK students</div>
                      </div>
                      <div className="items-end">
                        <div className="h3">12%</div>
                        <div className="line-clamp-1">International</div>
                      </div>
                    </div>
                    <div className=" progess-bar bg-primary-400 rounded-[8px] h-[8px] overflow-hidden">
                      <div
                        className="progess-bar__line transition-all duration-[3s] bg-primary-200 h-[8px]"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  {/* --4-- */}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Keystatscomponents;
