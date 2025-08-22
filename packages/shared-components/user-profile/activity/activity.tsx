"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Enquiries from "@packages/shared-components/common-utilities/enquiries/enquiries";

interface ActivityProps {
  children?: React.ReactNode;
}

const Activity = ({ children }: ActivityProps) => {
  const activityMenu = [
    { title: "Prospectuses", icon: "activity-icon" },
    { title: "Open days", icon: "activity-icon" },
    { title: "Enquiries", icon: "activity-icon" },
    { title: "Cost of living calculator", icon: "activity-icon" },
  ];

  const sideMenu = [
    { name: "Prospectuses", path: "/user-profile/activity/prospectuses" },
    { name: "Open days", path: "/user-profile/activity/opendays" },
    { name: "Enquiries", path: "/user-profile/activity/enquiries" },
    {
      name: "Cost of living calculator",
      path: "/user-profile/activity/cost-of-living",
    },
  ];

  const pathname = usePathname();

  return (
    <section className="px-[16px] md:px-[20px] xl:px-0 py-[32px] md:py-[40px]">
      <div className="max-w-container mx-auto px-[16px] md:px-[20px] lg:px-[100px] flex flex-col gap-[20px] md:flex-row">
        <aside className="w-full md:w-[200px] flex flex-col gap-[12px]">
          {sideMenu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 rounded-md transition ${
                pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
};

export default Activity;
