import Othercoursesmaylikecomponents from "@packages/shared-components/common-utilities/other-courses-you-may-like/othercoursesmaylikecomponents";
import Opendaysrgridcomponents from "@packages/shared-components/common-utilities/openday-sr-grid/OpendaySRGridComponents";
import { openDaysData } from "@packages/constants/constants";
import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import React from "react";

const OpendaySRComponents = () => {
  const bgColor = "white";

  return (
    <>
      <HeaderBanner />
      <Othercoursesmaylikecomponents
        {...openDaysData}
        bgColor={bgColor}
        openDays={true}
        featureOpd={true}
      />
      <Opendaysrgridcomponents />
    </>
  );
};

export default OpendaySRComponents;
