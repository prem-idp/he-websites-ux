"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const topMenu = [
  { name: "Favourites", path: "/user-profile/favourites" },
  { name: "Profile", path: "/user-profile/profile" },
  { name: "Activity", path: "/user-profile/activity/prospectuses" },
  { name: "Settings", path: "/user-profile/settings" },
];

export default function UserProfileLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Menu */}
      <nav className="flex gap-4 border-b p-3 bg-white">
        {topMenu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-4 py-1 rounded-full border transition ${
              pathname.startsWith(item.path)
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Main Content (no sidebar here) */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
