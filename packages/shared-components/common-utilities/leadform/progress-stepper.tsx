import React from "react";

type Step = {
  label: string;
};

type ProgressStepperProps = {
  steps: Step[];
  activeStep: number;
};

const ProgressStepper = ({ steps, activeStep }: ProgressStepperProps) => {
  return (
    <div className="flex items-center justify-center bg-grey-50 pt-[8px] pb-[24px]">
      {steps.map((step, index) => {
        const isCompleted = index < activeStep;
        const isActive = index === activeStep;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center gap-[8px] w-[60px] z-0">
              {isCompleted ? (
                <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-primary-500">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6L5.5 10.5L14.5 1.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : isActive ? (
                <button className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-white shadow-custom-15 border-2 border-primary-500">
                  <span className="w-[12px] h-[12px] bg-primary-500 rounded-full" />
                </button>
              ) : (
                <button className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-white border-2 border-grey-200"></button>
              )}
              <span>{step.label}</span>
            </div>
            {!isLast && (
              <hr
                className={`w-[60px] h-[2px] border-0 -mt-[26px] -mx-[12px] ${
                  isCompleted ? "bg-primary-500" : "bg-grey-200"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressStepper;
