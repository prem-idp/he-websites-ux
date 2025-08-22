"use client";
import React from "react";
import { useRouter } from "next/navigation";

type TabItem = {
  id: string | number;
  title: string;
  // add other properties as needed
};

interface SettingTabsProps {
  data: TabItem[];
  selectedTab: string;
  onSelectTab: (title: string) => void;
}

const SettingTabs = ({ data, selectedTab, onSelectTab }: SettingTabsProps) => {
  const router = useRouter();

  const getTabUrl = (title: string) => {
    switch (title) {
      case "Favourites":
        return "/user-profile/favourites";
      case "Profile":
        return "/user-profile/profile-details";
      case "Activity":
        return "/user-profile/activity";
      case "Settings":
        return "/user-profile/settings";
      default:
        return "/user-profile/favourites";
    }
  };

  const handleTabClick = (title: string) => {
    onSelectTab(title);
    router.push(getTabUrl(title));
  };

  return (
    <div className="flex  gap-[4px]">
      {data.map((item: TabItem) => (
        <button
          key={item.id}
          onClick={() => handleTabClick(item.title)}
          className={`px-[10px] xs:px-[12px] py-[8px] text-x-small xs:text-small rounded-[20px] ${selectedTab === item.title ? "bg-black text-white" : "bg-white text-black"}`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default SettingTabs;
