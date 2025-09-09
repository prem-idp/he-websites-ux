"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface ActivityProps {
  children?: React.ReactNode;
}

const Activity = ({ children }: ActivityProps) => {
  const sideMenu = [
    {
      icon: "/static/assets/icons/activity/prospectuses.svg",
      name: "Prospectuses",
      path: "/user-profile/activity/prospectuses",
    },
    {
      icon: "/static/assets/icons/activity/opendays.svg",
      name: "Open days",
      path: "/user-profile/activity/opendays",
    },
    {
      icon: "/static/assets/icons/activity/enquiries.svg",
      name: "Enquiries",
      path: "/user-profile/activity/enquiries",
    },
    {
      icon: "/static/assets/icons/activity/colc.svg",
      name: "Cost of living calculator",
      path: "/user-profile/activity/cost-of-living",
    },
  ];

  const pathname = usePathname();

  return (
    <section className="bg-grey-50 py-[32px] md:py-[40px]">
      <div className="max-w-container mx-auto lg:px-[100px] flex flex-col gap-[20px] lg:flex-row">
        <aside className="bg-grey-50 w-full h-full p-[16px] lg:w-[225px] flex flex-col gap-[12px]">
          {sideMenu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`font-semibold small flex items-center gap-[8px] group hover:text-grey300 ${
                pathname === item.path ? "text-grey300" : "text-primary-400"
              }`}
            >
              <Image
                className={`transition-all duration-200 ${
                  pathname === item.path
                    ? "custom-filter-icon"
                    : "group-hover:custom-filter-icon"
                }`}
                width={24}
                height={24}
                src={item.icon}
                alt={item.name}
              />
              {item.name}
            </Link>
          ))}
        </aside>
        <main className="px-[16px] md:px-[20px] xl:px-0 flex-1">
          {children}
        </main>
      </div>
    </section>
  );
};

export default Activity;
