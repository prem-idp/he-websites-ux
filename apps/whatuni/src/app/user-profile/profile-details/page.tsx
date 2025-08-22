"use client";
import React from "react";
import ProfileUpdates from "@packages/shared-components/common-utilities/profile-updates/profile-updates";
import SettingTabs from "@packages/shared-components/common-utilities/setting-tabs/setting-tabs";
import UserProfileComponents from "@packages/shared-components/common-utilities/form-variations/UserProfileComponents";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";

const ProfileDetailsPage = () => {
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
          selectedTab="Profile"
          onSelectTab={() => {}}
        />
      </ProfileUpdates>
      <div>
        <UserProfileComponents />
        <Subscribecomponents />
      </div>
    </div>
  );
};

export default ProfileDetailsPage;