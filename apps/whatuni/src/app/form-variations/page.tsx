import React from "react";
import RadioComponent from "@packages/shared-components/common-utilities/form-variations/RadioComponent";
import CheckboxComponent from "@packages/shared-components/common-utilities/form-variations/CheckboxComponent";
import ToggleComponent from "@packages/shared-components/common-utilities/form-variations/ToggleComponent";
import InputComponent from "@packages/shared-components/common-utilities/form-variations/InputComponent";

const page = () => {
  return (
    <div className="max-w-container mx-auto py-10">
      <RadioComponent />
      <CheckboxComponent
        title={"Control button heading"}
        description={"Description of what this control will do"}
        id={"checkbox-1"}
      />
      <ToggleComponent />
      <InputComponent />
    </div>
  );
};

export default page;
