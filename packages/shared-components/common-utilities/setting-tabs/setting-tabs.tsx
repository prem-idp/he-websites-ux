import React from "react";

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
  return (
    <div className="flex  gap-[4px]">
      {data.map((item: TabItem) => (
        <button
          key={item.id}
          onClick={() => onSelectTab(item.title)}
          className={`px-[12px] py-[8px] text-small rounded-[20px] ${selectedTab === item.title ? "bg-black text-white" : "bg-white text-black"}`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default SettingTabs;
