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
      {/* Main Content (no sidebar here) */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
