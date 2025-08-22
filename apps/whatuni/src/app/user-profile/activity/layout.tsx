"use client";
import { ReactNode } from "react";
import ProfileUpdates from "@packages/shared-components/common-utilities/profile-updates/profile-updates";
import SettingTabs from "@packages/shared-components/common-utilities/setting-tabs/setting-tabs";
import Activity from "@packages/shared-components/common-utilities/activity/activity";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";

export default function ActivityLayout({ children }: { children: ReactNode }) {
  const listData = [
    { title: "Favourites", id: 1 },
    { title: "Profile", id: 2 },
    { title: "Activity", id: 3 },
    { title: "Settings", id: 4 },
  ];

  return (
    <div>
      <ProfileUpdates>
        <SettingTabs
          data={listData}
          selectedTab="Activity"
          onSelectTab={() => {}}
        />
      </ProfileUpdates>
      <Activity>{children}</Activity>
      <Subscribecomponents />
    </div>
  );
}
