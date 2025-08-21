import React, { useState } from "react";
import Enquiries from "@packages/shared-components/common-utilities/enquiries/enquiries";

const Activity = () => {
  const activityMenu = [
    { title: "Prospectuses", icon: "activity-icon" },
    { title: "Open days", icon: "activity-icon" },
    { title: "Enquiries", icon: "activity-icon" },
    { title: "Cost of living calculator", icon: "activity-icon" },
  ];
  const [active, setActive] = useState("Prospectuses");

  return (
    <section className="bg-yellow-300 px-[16px] md:px-[20px] xl:px-0 py-[32px] md:py-[40px]">
      <div className="max-w-container mx-auto px-[16px] md:px-[20px] lg:px-[100px] flex flex-col gap-[20px] md:flex-row bg-violet-200  ">
        <div>
          {activityMenu.map((item, index) => (
            <button
              key={index}
              className={`flex gap-[4px] small font-semibold ${active === item.title ? "text-grey300" : "text-primary-400"}`}
            >
              {item.icon} {item.title}
            </button>
          ))}
        </div>
        <div className="flex-1">
          <Enquiries />
        </div>
      </div>
    </section>
  );
};

export default Activity;
