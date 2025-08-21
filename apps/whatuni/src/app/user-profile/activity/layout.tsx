"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const sideMenu = [
  { name: "Prospectuses", path: "/user-profile/activity/prospectuses" },
  { name: "Open days", path: "/user-profile/activity/opendays" },
  { name: "Enquiries", path: "/user-profile/activity/enquiries" },
  { name: "Cost of living calculator", path: "/user-profile/activity/colc" },
];

export default function ActivityLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <section className="bg-yellow-300 px-[16px] md:px-[20px] xl:px-0 py-[32px] md:py-[40px]">
        <div className="max-w-container mx-auto px-[16px] md:px-[20px] lg:px-[100px] flex flex-col gap-[20px] md:flex-row bg-violet-200  ">
          {/* <div>
            {activityMenu.map((item, index) => (
              <button
                key={index}
                className={`flex gap-[4px] small font-semibold ${active === item.title ? "text-grey300" : "text-primary-400"}`}
              >
                {item.icon} {item.title}
              </button>
            ))}
          </div> */}
          <aside className="w-64 border-r bg-white p-4 flex flex-col gap-3">
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

      <div className="flex min-h-screen">
        {/* Sidebar */}

        {/* Right Content */}
        <main className="flex-1 p-6"></main>
      </div>
    </>
  );
}
