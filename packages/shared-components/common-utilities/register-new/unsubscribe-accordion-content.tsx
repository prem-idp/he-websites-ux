import React from "react";
import ToggleComponent from "../form-variations/ToggleComponent";
import UnsubscribeAccordion from "./unsubscribe-accordion";

const unsubscribeAccordionContent = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <UnsubscribeAccordion title="Whatuni" defaultOpen>
        <div className="flex flex-col gap-[8px] py-[8px]">
          <div className="small font-semibold">Please choose</div>
          <ToggleComponent
            label="Newsletters and uni updates"
            description="Emails from us and our carefully selected third party providers providing you with the latest uni news, tips and guides."
          />
          <ToggleComponent
            label="Reminders"
            description="To remind you about upcoming course start dates, your shortlisted courses and any courses you emailed about."
          />
          <ToggleComponent
            label="Surveys"
            description="Have your say on important education issues and the services you recieve from us and our partners"
          />
        </div>
      </UnsubscribeAccordion>
      <UnsubscribeAccordion title="Complete University Guide">
        <div className="flex flex-col gap-[8px] py-[8px]">
          <div className="small font-semibold">Please choose</div>
          <ToggleComponent
            label="Newsletters and uni updates"
            description="Emails from us and our carefully selected third party providers providing you with the latest uni news, tips and guides."
          />
          <ToggleComponent
            label="Reminders"
            description="To remind you about upcoming course start dates, your shortlisted courses and any courses you emailed about."
          />
          <ToggleComponent
            label="Surveys"
            description="Have your say on important education issues and the services you recieve from us and our partners"
          />
        </div>
      </UnsubscribeAccordion>
      <UnsubscribeAccordion title="Postgraduate Search">
        <div className="flex flex-col gap-[8px] py-[8px]">
          <div className="small font-semibold">Please choose</div>
          <ToggleComponent
            label="Newsletters and uni updates"
            description="Emails from us and our carefully selected third party providers providing you with the latest uni news, tips and guides."
          />
          <ToggleComponent
            label="Reminders"
            description="To remind you about upcoming course start dates, your shortlisted courses and any courses you emailed about."
          />
          <ToggleComponent
            label="Surveys"
            description="Have your say on important education issues and the services you recieve from us and our partners"
          />
        </div>
      </UnsubscribeAccordion>
    </div>
  );
};

export default unsubscribeAccordionContent;
