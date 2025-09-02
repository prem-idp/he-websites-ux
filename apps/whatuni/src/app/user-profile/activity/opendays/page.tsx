import React from "react";
import Opendaysrgridcomponents from "@packages/shared-components/common-utilities/openday-sr-grid/OpendaySRGridComponents";
import { AllOpenDaysData } from "@packages/constants/constants";
const OpenDaysPage = () => {
  const bgColor1 = "transparent";
  return (
    <>
      {/* <ActivityOpendayGridComponents /> */}
      <Opendaysrgridcomponents
        {...AllOpenDaysData}
        activityOpendays={true}
        bgColor={bgColor1}
      />
    </>
  );
};
export default OpenDaysPage;
