import React from "react";
import Logo from "@packages/shared-components/common-utilities/register-new/logo";
import Unsubscribe from "@packages/shared-components/common-utilities/register-new/unsubscribe";

const UnsubscribePage = () => {
  return (
    <section className="bg-grey-50 py-[24px] min-h-screen">
      <div className="flex flex-col gap-[24px] w-full mx-auto md:w-[598px]">
        <div className="p-[32px_16px] border-b-[1px] border-t-[1px] md:p-[32px] md:border md:border-b-[2px] md:border-grey-200 md:rounded-[8px]  bg-white overflow-hidden">
          <Unsubscribe />
        </div>
        <Logo />
      </div>
    </section>
  );
};

export default UnsubscribePage;
