import React from "react";
import RegisterClearingUpdates from "@packages/shared-components/common-utilities/register/registerclearingupdates";

const RegisterClearing = () => {
  return (
    <section className="bg-grey-50 pt-[28px] md:py-[64px]">
      <div className="w-full md:w-[598px] mx-auto md:border md:border-grey-200 md:rounded-[8px] bg-white">
        {/* form details */}
        <RegisterClearingUpdates clearingVisible={true} />
        {/* form details */}
      </div>
    </section>
  );
};

export default RegisterClearing;
