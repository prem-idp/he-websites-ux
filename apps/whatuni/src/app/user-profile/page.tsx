"use client";
import React, { useState } from "react";
import ProfileUpdates from "@packages/shared-components/common-utilities/profile-updates/profile-updates";
import SettingTabs from "@packages/shared-components/common-utilities/setting-tabs/setting-tabs";

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
  const [selectedTab, setSelectedTab] = useState(listData[0].title);
  return (
    <div>
      <ProfileUpdates>
        <SettingTabs
          data={listData}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
        />
      </ProfileUpdates>
      <div className="w-full flex py-[40px]">
        <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0]">
          {/* Favourites */}
          {selectedTab === listData[0].title && <div>Favourites Content</div>}
          {/* Profile */}
          {selectedTab === listData[1].title && <div>Profile Content</div>}
          {/* Activity */}
          {selectedTab === listData[2].title && <div>Activity Content</div>}
          {/* Settings */}
          {selectedTab === listData[3].title && <div>Settings Content</div>}
        </div>
      </div>
    </div>
  );
};

export default page;
