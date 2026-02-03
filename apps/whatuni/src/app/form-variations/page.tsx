"use client";
import React from "react";
import RadioComponent from "@packages/shared-components/common-utilities/form-variations/RadioComponent";
import CheckboxComponent from "@packages/shared-components/common-utilities/form-variations/CheckboxComponent";
import ToggleComponent from "@packages/shared-components/common-utilities/form-variations/ToggleComponent";
import InputComponent from "@packages/shared-components/common-utilities/form-variations/InputComponent";
import SwitchToggleComponent from "@packages/shared-components/common-utilities/form-variations/SwitchToggleComponent";
const page = () => {
  return (
    <>
      <div className="max-w-container mx-auto px-[16px] md:px-[20px] xl:px-0 py-10 flex flex-col gap-10">
        <h2 className="text-2xl font-bold mb-4">Radio Button Example</h2>
        <RadioComponent
          id={1}
          label="Control button heading"
          description="Description of what this control will do"
        />
        <h2 className="text-2xl font-bold mb-4">Checkbox Example</h2>
        <CheckboxComponent />
        <h2 className="text-2xl font-bold mb-4">Toggle Switch Example</h2>
        <ToggleComponent
          label="Control button heading"
          description="Description of what this control will do"
        />
        <SwitchToggleComponent
          stateEnable={false}
          label="Surveys"
          description="Have your say on important education issues and the services you receive from us and our partners"
        />
        <h2 className="text-2xl font-bold mb-4">Input Button Example</h2>
        <InputComponent />
      </div>
    </>
  );
};

export default page;
