"use client";
import { useState } from "react";
import Image from "next/image";

const RegisterSuccess = () => {
  const options = [
    { id: "firstdegree", label: "I\u2019m looking for my first degree" },
    { id: "postgraduate", label: "I\u2019m looking for a postgraduate course" },
    {
      id: "parent",
      label: "I\u2019m a parent or guardian of a prospective student",
    },
    { id: "teacher", label: "Teacher" },
    { id: "advisor", label: "Career Advisor" },
    { id: "higheredu", label: "I work in higher education" },
  ];
  const [selected, setSelected] = useState(options[0].id);
  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-start bg-positive-light rounded-[6px] px-[16px] py-[16px] gap-[8px] border border-positive-default">
          <svg
            className="mt-[4px]"
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7L5 11L15 1"
              stroke="#106519"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="small font-semibold text-positive-dark flex w-[calc(100%_-_24px)]">
            You have successfully signed up
          </p>
        </div>

        <div className="flex flex-col gap-[8px]">
          <h5>Personalise your information</h5>
          <p className="small font-normal">
            Help us make sure we\u2019re sending useful advice at the right time
            for you.
          </p>
        </div>
        <div className="form_radio flex flex-col gap-[4px]">
          <label className="check-label small font-semibold text-grey300">
            When do you plan to start uni?
          </label>
          <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px]">
            <div className="flex relative">
              <input
                defaultChecked
                type="radio"
                name="yoe"
                className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                id="2025"
              />
              <label
                htmlFor="2025"
                className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
              >
                2025
              </label>
            </div>
            <div className="flex relative">
              <input
                type="radio"
                name="yoe"
                className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                id="2026"
              />
              <label
                htmlFor="2026"
                className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
              >
                2026
              </label>
            </div>
            <div className="flex relative">
              <input
                type="radio"
                name="yoe"
                className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                id="2027"
              />
              <label
                htmlFor="2027"
                className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
              >
                2027
              </label>
            </div>
            <div className="flex relative">
              <input
                type="radio"
                name="yoe"
                className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                id="2028"
              />
              <label
                htmlFor="2028"
                className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
              >
                2028
              </label>
            </div>
          </div>
        </div>
        <div className="form_group flex flex-row gap-[8px]">
          <div className="flex flex-col basis-6/12 gap-[4px] error">
            <label
              htmlFor="postcode"
              className="small font-semibold text-grey300"
            >
              Postcode <span className="x-small font-normal">(optional)</span>
            </label>
            <input
              type="text"
              className="w-full small text-grey300 px-[12px] py-[10px] border border-grey-500 rounded-[4px] outline-none shadow-custom-2"
              id="postcode"
            />
            <div className="x-small">Used only to understand our audience</div>
          </div>
        </div>

        <div className="flex flex-col gap-[8px] bg-grey-50 p-[16px] border border-grey-200 rounded-[4px]">
          <div className="form_radio flex flex-col gap-[8px]">
            <label className="check-label small font-semibold text-grey300">
              What description fits you best?{" "}
              <span className="x-small font-normal">(optional)</span>
            </label>

            <div className="flex flex-col gap-[8px]">
              {options.map((option) => (
                <label
                  key={option.id}
                  htmlFor={option.id}
                  className="flex items-center gap-[12px] cursor-pointer"
                >
                  <input
                    type="radio"
                    id={option.id}
                    name="descrip"
                    value={option.id}
                    checked={selected === option.id}
                    onChange={() => setSelected(option.id)}
                    className="w-[16px] h-[20px] accent-primary-400 cursor-pointer"
                  />
                  <span className="x-small font-semibold text-grey-600">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary w-full flex items-center justify-center gap-[8px]"
        >
          Continue
          <Image
            src="/static/assets/icons/right_white_arrow.svg"
            width={17}
            height={14}
            alt="arrow icon"
          />
        </button>
      </div>
    </>
  );
};

export default RegisterSuccess;
