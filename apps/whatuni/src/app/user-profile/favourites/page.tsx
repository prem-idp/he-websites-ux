"use client";
import React from "react";
import ProfileUpdates from "@packages/shared-components/common-utilities/profile-updates/profile-updates";
import SettingTabs from "@packages/shared-components/common-utilities/setting-tabs/setting-tabs";
import Favourites from "@packages/shared-components/common-utilities/favourites/favourites";
import ManageFavourites from "@packages/shared-components/common-utilities/manage-favourites/managefavourites";
import Advicecomponents from "@packages/shared-components/home/advice/advicecomponents";
import Subscribecomponents from "@packages/shared-components/article-landing/subscribe-newsletter/subscribecomponents";

const FavouritesPage = () => {
  const listData = [
    { title: "Favourites", id: 1 },
    { title: "Profile", id: 2 },
    { title: "Activity", id: 3 },
    { title: "Settings", id: 4 },
  ];
  const bgColor1 = "white";

  return (
    <div>
      <ProfileUpdates>
        <SettingTabs
          data={listData}
          selectedTab="Favourites"
          onSelectTab={() => {}}
        />
      </ProfileUpdates>
      <div>
        <Favourites />
        <ManageFavourites />
        <Advicecomponents
          bgColor={bgColor1}
          heading={"Open days advice and articles"}
          subheading={""}
        />
        <Subscribecomponents />
      </div>
    </div>
  );
};

export default FavouritesPage;
