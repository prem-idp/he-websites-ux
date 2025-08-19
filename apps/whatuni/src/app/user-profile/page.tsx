"use client";
import React, { useState } from "react";
import ProfileUpdates from "@packages/shared-components/common-utilities/profile-updates/profile-updates";
import SettingTabs from "@packages/shared-components/common-utilities/setting-tabs/setting-tabs";
import Favourites from "@packages/shared-components/common-utilities/favourites/favourites";
import Settings from "@packages/shared-components/common-utilities/settings/settings";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";
const page = () => {
  const listData = [
    {
      title: "Favourites",
      id: 1,
    },
    {
      title: "Profile",
      id: 2,
    },
    {
      title: "Activity",
      id: 3,
    },
    {
      title: "Settings",
      id: 4,
    },
  ];
  const [selectedTab, setSelectedTab] = useState(listData[3].title);
  return (
    <div>
      <ProfileUpdates>
        <SettingTabs
          data={listData}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
        />
      </ProfileUpdates>
      <div>
        {/* Favourites */}
        {selectedTab === listData[0].title && <Favourites />}
        {/* Profile */}
        {selectedTab === listData[1].title && <div>Profile Content</div>}
        {/* Activity */}
        {selectedTab === listData[2].title && <div>Activity Content</div>}
        {/* Settings */}
        {selectedTab === listData[3].title && <Settings />}
        <Subscribecomponents />
      </div>
    </div>
  );
};

export default page;
