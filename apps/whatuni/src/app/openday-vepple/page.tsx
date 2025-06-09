import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import React from "react";

const OpendayVepple = () => {
  const breadcrumbData = [
    {
      url: "#",
      label: "Home",
    },
    {
      url: "#",
      label: "Opend days",
    },
    {
      url: "",
      label: "Search results",
    },
  ];
  return (
    <>
      <div className="max-w-container mx-auto">
        {/* breadcrumb  */}
        <div className="px-[16px] xl:px-[0] md:p-[24px_0_8px] hidden md:block">
          <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
      </div>
      <HeaderBanner />
    </>
  );
};

export default OpendayVepple;
