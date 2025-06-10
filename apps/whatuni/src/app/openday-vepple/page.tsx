import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import ContactDetails from "@packages/shared-components/institution-profile/contactdetails";
import React from "react";

const OpendayVepple = () => {
  return (
    <>
      <HeaderBanner />
      <div className="max-w-container mx-auto">
        <ContactDetails />
      </div>
    </>
  );
};

export default OpendayVepple;
