"use client";
import { ReactNode, useState } from "react";
import ProfileUpdates from "@packages/shared-components/user-profile/profile-updates/profile-updates";
import SettingTabs from "@packages/shared-components/user-profile/setting-tabs/setting-tabs";

const listData = [
  { title: "Favourites", id: 1 },
  { title: "Profile", id: 2 },
  { title: "Activity", id: 3 },
  { title: "Settings", id: 4 },
];

export default function UserProfileLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedTab, setSelectedTab] = useState(listData[0].title);

  return (
    <div className="flex flex-col">
      <ProfileUpdates>
        <SettingTabs
          data={listData}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
        />
      </ProfileUpdates>
      {/* Main Content (no sidebar here) */}
      {children}
    </div>
  );
}
