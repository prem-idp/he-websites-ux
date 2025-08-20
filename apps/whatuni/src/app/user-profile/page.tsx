"use client";
import React, { useState } from "react";
import ProfileUpdates from "@packages/shared-components/common-utilities/profile-updates/profile-updates";
import SettingTabs from "@packages/shared-components/common-utilities/setting-tabs/setting-tabs";
import Settings from "@packages/shared-components/common-utilities/settings/settings";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";
import UserProfileComponents from "@packages/shared-components/common-utilities/form-variations/UserProfileComponents";
import Favourites from "@packages/shared-components/common-utilities/favourites/favourites";
import ManageFavourites from "@packages/shared-components/common-utilities/manage-favourites/managefavourites";
import Advicecomponents from "@packages/shared-components/home/advice/advicecomponents";
import Activity from "@packages/shared-components/common-utilities/activity/activity";
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
  const [selectedTab, setSelectedTab] = useState(listData[2].title);
  const bgColor1 = "white";

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
        {selectedTab === listData[0].title && (
          <>
            <Favourites />
            <ManageFavourites />
            <Advicecomponents
              bgColor={bgColor1}
              heading={"Open days advice and articles"}
              subheading={""}
            />
          </>
        )}
        {/* Profile */}
        {selectedTab === listData[1].title && <UserProfileComponents />}
        {/* Activity */}
        {selectedTab === listData[2].title && (
          <>
            <Activity />
          </>
        )}
        {/* Settings */}
        {selectedTab === listData[3].title && <Settings />}
        <Subscribecomponents />
      </div>
    </div>
  );
};

export default page;
