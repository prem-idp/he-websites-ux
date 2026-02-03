"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RadioSingleLabelComponent from "./RadioSingleLabelComponent";
import CheckboxSingleLabelComponents from "./CheckboxSingleLabelComponents";

const UserProfileComponents = () => {
  const roleBest = [
    "Student",
    "My child is going to uni",
    "Teacher",
    "Career advisor",
    "I work in the sector",
  ];
  const [selectNationality, setSelectNationality] = useState("");

  const countries = [
    { value: "GB", label: "United Kingdom" },
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "AU", label: "Australia" },
    { value: "DE", label: "Germany" },
    { value: "FR", label: "France" },
    { value: "IN", label: "India" },
    { value: "CN", label: "China" },
    { value: "JP", label: "Japan" },
    { value: "BR", label: "Brazil" },
  ];
  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const getFirstNameError = () => {
    if (errors?.firstName?.type === "required") {
      return "Please enter your first name.";
    }
    if (errors?.firstName?.type === "minLength") {
      return "First name must be at least 2 characters.";
    }
    if (errors?.firstName?.type === "pattern") {
      return "Please enter the first name with letters only.";
    }
    return null;
  };

  const getLastNameError = () => {
    if (errors?.lastName?.type === "required") {
      return "Please enter your last name.";
    }
    if (errors?.lastName?.type === "minLength") {
      return "Last name must be at least 2 characters.";
    }
    if (errors?.lastName?.type === "pattern") {
      return "Please enter the last name with letters only.";
    }
    return null;
  };

  const getEmailError = () => {
    if (errors?.email?.type === "required") {
      return "Please enter your email address.";
    }
    if (errors?.email?.type === "pattern") {
      return "Please enter a valid email address.";
    }
    return null;
  };

  const getData = (data: unknown) => {
    // TODO: handle form submission
    console.log("Classes registration submitted:", data);
  };
  // validation

  return (
    <>
      <div className="user-profile-container flex flex-col px-[16px] md:px-[20px] xl:px-[0] py-[40px] md:py-[56px]  w-full md:w-[598px] mx-auto">
        <div className="successfull_cont w-full flex  gap-[8px] bg-positive-light border border-positive-dark rounded-[6px] p-[16px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 11L7 15L17 5"
              stroke="#106519"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex flex-grow small font-semibold text-positive-dark">
            We've saved your profile changes.
          </div>
        </div>
        <div className="flex flex-col gap-[4px] py-[16px] md:py-[32px]">
          <h4 className="text-neutral-900">Your details</h4>
          <p className="x-small text-grey300">
            Your profile details for Whatuni, Postgraduate Search and IDP, all
            in one place
          </p>
        </div>
        <div className="form-inner-container bg-white border border-grey-200 rounded-[8px] p-[24px_16px] md:p-[32px]">
          <form name="userProfile" onSubmit={handleSubmit(getData)}>
            <div className="form-inner-wrap form-card flex flex-col flex-1 gap-[24px]">
              {/* -- Personal details  -- */}
              <div className="personal-details flex flex-col gap-[24px]">
                <h5 className="text-heading5">Personal details</h5>
                <div className="form-group flex flex-col lg:flex-row gap-[24px] md:gap-[8px]">
                  <div
                    className={`form-col ${getFirstNameError() ? "error" : ""} `}
                  >
                    <label>
                      First name
                      <span className="mandatory">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("firstName", {
                        required: true,
                        minLength: 2,
                        pattern: /^[A-Za-z\s]+$/,
                      })}
                      className={`input-textbox ${getFirstNameError() ? "border-negative-default" : ""}`}
                      placeholder="Eg: Paul"
                    />
                    {getFirstNameError() && (
                      <div className="x-small text-negative-default">
                        {getFirstNameError()}
                      </div>
                    )}
                  </div>
                  <div
                    className={`form-col flex flex-col flex-1 gap-1 ${getLastNameError() ? "error" : ""}`}
                  >
                    <label>
                      Last name
                      <span className="mandatory">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("lastName", {
                        required: true,
                        minLength: 2,
                        pattern: /^[A-Za-z\s]+$/,
                      })}
                      className={`input-textbox ${getLastNameError() ? "border-negative-default" : ""}`}
                      placeholder="Eg: Paul"
                    />
                    {getLastNameError() && (
                      <div className="x-small text-negative-default">
                        {getLastNameError()}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-row typing-disabled">
                  <div
                    className={`form-col flex flex-col gap-1 ${getEmailError() ? "error" : ""}`}
                  >
                    <label className="small font-semibold text-gray-800">
                      Email Address
                      <span className="mandatory text-gray-500 pl-1">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      })}
                      name="email"
                      className={`input-textbox ${getLastNameError() ? "border-negative-default" : ""}`}
                      value="paul.atreides@Arrakis.com"
                      placeholder="Eg: paul.atreides@Arrakis.com"
                      autoComplete="off"
                    />
                    {getEmailError() && (
                      <div className="x-small text-negative-default">
                        {getEmailError()}
                      </div>
                    )}
                    <div className="reset-password">
                      <a
                        href="#"
                        className="flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]"
                      >
                        Reset Password
                      </a>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col flex flex-col flex-1 gap-1">
                    <label className="small font-semibold text-gray-800">
                      Mobile number{" "}
                      <span className="font-normal">(optional)</span>
                    </label>
                    <div className="flex flex-col md:flex-row gap-[8px]">
                      <div className="relative flex items-center flex-1">
                        <input
                          type="textbox"
                          name="mobileNumber"
                          className="input-textbox w-full pl-[60px]"
                          placeholder=""
                          autoComplete="off"
                        />
                        <span className="small text-grey-700 absolute left-[16px]">
                          (+44)
                        </span>
                      </div>
                      <button className="btn btn-primary max-w-[136px]">
                        Submit number
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col flex flex-col gap-1">
                    <label className="small font-semibold text-gray-800">
                      Nationality
                    </label>
                    <select
                      className="select-dropdown small text-grey-600 border border-grey-500 rounded-[4px] p-[10px_12px] pr-[40px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700 bg-grey-100 appearance-none w-full"
                      style={{
                        backgroundImage:
                          "url(/static/assets/icons/arrow_down_black.svg)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        backgroundSize: "20px 20px",
                      }}
                      id="nationality"
                      name="nationality"
                      value={selectNationality}
                      onChange={(e) => setSelectNationality(e.target.value)}
                    >
                      <option
                        value=""
                        className="w-full text-grey-600 bg-white outline-0"
                      >
                        Select nationality
                      </option>
                      {countries.map((country) => (
                        <option
                          key={country.value}
                          value={country.value}
                          className="w-full text-grey-600 bg-white outline-0"
                        >
                          {country.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-row flex">
                  <div className="role-card form-col flex flex-col gap-[16px] bg-grey-50 border border-grey-200 p-[16px] rounded-[8px]">
                    <label className="small font-semibold text-grey-300">
                      What description fits you best?
                      <span className="optional font-normal x-small text-grey-700 pl-1">
                        (optional)
                      </span>
                    </label>
                    <div className="flex flex-col items-start gap-[8px]">
                      {roleBest.map((roleData, index) => (
                        <RadioSingleLabelComponent
                          id={index}
                          label={roleData}
                          description={""}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* -- Personal details  -- */}
              {/* -- Address details  -- */}
              <div className="address-details flex flex-col gap-[24px] border-t border-t-grey-200 pt-[24px]">
                <h5 className="text-heading5">Address details</h5>
                <div className="form-row form_radio flex flex-col gap-[4px]">
                  <label className="check-label small font-semibold text-grey300">
                    Country of residence
                  </label>
                  <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px] max-md:overflow-x-auto max-md:w-[calc(100%_+16px)] max-md:pr-[16px] max-md:scrollbar-hidden">
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="cor"
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id="UK"
                      />
                      <label
                        htmlFor="UK"
                        className="check-label w-max small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                      >
                        United Kingdom
                      </label>
                    </div>
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="cor"
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id="RoW"
                      />
                      <label
                        htmlFor="RoW"
                        className="check-label w-max small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                      >
                        Rest of the World
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col flex flex-col flex-1 gap-1">
                    <label className="small font-semibold text-gray-800">
                      Postcode finder
                    </label>
                    <div className="flex flex-col md:flex-row gap-[8px]">
                      <input
                        type="textbox"
                        {...register("postcodeFinder", {
                          required: true,
                          minLength: 12,
                          maxLength: 15,
                          pattern: /^\+?[0-9]+$/,
                        })}
                        name="postcodeFinder"
                        className="input-textbox flex-1 small text-grey-600 border border-grey-500  rounded-[4px] p-[10px_12px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700"
                        placeholder="Enter your postcode"
                        autoComplete="off"
                      />
                      <button className="btn btn-primary max-w-[120px]">
                        Find address
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col flex flex-col flex-1 gap-1">
                    <label className="small font-semibold text-gray-800">
                      Address line 1
                    </label>
                    <input
                      type="textbox"
                      {...register("addressLine1", {
                        required: true,
                        minLength: 12,
                        maxLength: 15,
                        pattern: /^\+?[0-9]+$/,
                      })}
                      name="addressLine1"
                      className="input-textbox small text-grey-600 border border-grey-500  rounded-[4px] p-[10px_12px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700"
                      placeholder="Enter your address"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col flex flex-col flex-1 gap-1">
                    <label className="small font-semibold text-gray-800">
                      Address line 2
                    </label>
                    <input
                      type="textbox"
                      {...register("addressLine1", {
                        required: true,
                        minLength: 12,
                        maxLength: 15,
                        pattern: /^\+?[0-9]+$/,
                      })}
                      name="addressLine1"
                      className="input-textbox small text-grey-600 border border-grey-500  rounded-[4px] p-[10px_12px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700"
                      placeholder="Enter your address"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="form-group flex flex-col md:flex-row gap-[24px] md:gap-[8px]">
                  <div className="form-col">
                    <label>Town/city</label>
                    <input
                      type="text"
                      className="input-textbox"
                      placeholder="Enter town/city"
                    />
                  </div>
                  <div className="form-col flex flex-col flex-1 gap-1">
                    <label>Postcode</label>
                    <input
                      type="text"
                      className="input-textbox"
                      placeholder="Enter your postcode"
                    />
                  </div>
                </div>
              </div>
              {/* -- Address details  -- */}
              {/* -- Education details  -- */}
              <div className="education-details flex flex-col gap-[24px] border-t border-t-grey-200 pt-[24px]">
                <h5 className="text-heading5">Education details</h5>
                <div className="form-row form_radio flex flex-col gap-[4px]">
                  <label className="check-label small font-semibold text-grey300">
                    When do you plan to start uni?
                  </label>
                  <span className="xs-small font-semibold text-grey300">
                    CHOOSE ONE
                  </span>
                  <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px] max-md:overflow-x-auto max-md:w-[calc(100%_+32px)] max-md:-ml-[16px] max-md:pl-[16px] max-md:pr-[16px] max-md:scrollbar-hidden">
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="yoe"
                        defaultChecked
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
                    <div className="col flex relative">
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
                    <div className="col flex relative">
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
                    <div className="col flex relative">
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
                <div className="form-row form_radio flex flex-col gap-[4px]">
                  <label className="check-label small font-semibold text-grey300">
                    Study level
                  </label>
                  <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px] max-md:overflow-x-auto max-md:w-[calc(100%_+32px)] max-md:-ml-[16px] max-md:pl-[16px] max-md:pr-[16px] max-md:scrollbar-hidden">
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="studyLevel"
                        defaultChecked
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id="UG"
                      />
                      <label
                        htmlFor="UG"
                        className="check-label w-max small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                      >
                        Undergradute
                      </label>
                    </div>
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="studyLevel"
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id="Postgraduate"
                      />
                      <label
                        htmlFor="Postgraduate"
                        className="check-label w-max small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                      >
                        Postgraduate
                      </label>
                    </div>
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="studyLevel"
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id="Foundation"
                      />
                      <label
                        htmlFor="Foundation"
                        className="check-label w-max small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                      >
                        Foundation
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="form-row">
                    <div className="form-col flex flex-col flex-1 gap-1">
                      <label className="small font-semibold text-gray-800">
                        My school/college
                      </label>
                      <input
                        type="textbox"
                        name="postcodeFinder"
                        className="input-textbox small text-grey-600 border border-grey-500  rounded-[4px] p-[10px_12px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700"
                        placeholder="School / college"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <CheckboxSingleLabelComponents />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="form-row">
                    <div className="form-col flex flex-col flex-1 gap-1">
                      <label className="small font-semibold text-gray-800">
                        Course
                      </label>
                      <input
                        type="textbox"
                        name="courseName"
                        className="input-textbox small text-grey-600 border border-grey-500  rounded-[4px] p-[10px_12px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700"
                        placeholder="Please enter your course name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col flex flex-col gap-1">
                    <label className="small font-semibold text-gray-800">
                      Year completed/expected
                    </label>
                    <select
                      className="select-dropdown small text-grey-600 border border-grey-500 rounded-[4px] p-[10px_12px] pr-[40px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700 bg-grey-100 appearance-none w-full"
                      style={{
                        backgroundImage:
                          "url(/static/assets/icons/arrow_down_black.svg)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        backgroundSize: "20px 20px",
                      }}
                      id="selectYear"
                      name="selectYear"
                      value=""
                    >
                      <option
                        value=""
                        className="w-full text-grey-600 bg-white outline-0"
                      >
                        Select year
                      </option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col flex flex-col gap-1">
                    <label className="small font-semibold text-gray-800">
                      Award classification
                    </label>
                    <select
                      className="select-dropdown small text-grey-600 border border-grey-500 rounded-[4px] p-[10px_12px] pr-[40px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700 bg-grey-100 appearance-none w-full"
                      style={{
                        backgroundImage:
                          "url(/static/assets/icons/arrow_down_black.svg)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        backgroundSize: "20px 20px",
                      }}
                      id="selectClassification"
                      name="selectClassification"
                      value=""
                    >
                      <option
                        value=""
                        className="w-full text-grey-600 bg-white outline-0"
                      >
                        Select classification
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              {/* -- Education details  -- */}
              {/* -- Study preferences  -- */}
              <div className="study-preferences flex flex-col gap-[24px] border-t border-t-grey-200 pt-[24px]">
                <h5 className="text-heading5">Study preferences</h5>
                {/* -- */}
                <div className="form-row form_radio flex flex-col gap-[4px]">
                  <label className="check-label small font-semibold text-grey300">
                    Qualification
                  </label>
                  <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px] max-md:overflow-x-auto max-md:w-[calc(100%_+32px)] max-md:-ml-[16px] max-md:pl-[16px] max-md:pr-[16px] max-md:scrollbar-hidden">
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="qualification"
                        defaultChecked
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id="taught"
                      />
                      <label
                        htmlFor="taught"
                        className="check-label w-max small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                      >
                        Taught
                      </label>
                    </div>
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="qualification"
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id="research"
                      />
                      <label
                        htmlFor="research"
                        className="check-label w-max small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                      >
                        Research
                      </label>
                    </div>
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="qualification"
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id="taught&research"
                      />
                      <label
                        htmlFor="taught&research"
                        className="check-label w-max small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                      >
                        Taught & Research
                      </label>
                    </div>
                  </div>
                </div>
                {/* -- */}
                {/* -- */}
                <div className="form-row form_radio flex flex-col gap-[4px]">
                  <label className="check-label small font-semibold text-grey300">
                    Study mode
                  </label>
                  <div className="form-radio-group flex flex-row gap-[6px] md:gap-[8px] max-md:overflow-x-auto max-md:w-[calc(100%_+32px)] max-md:-ml-[16px] max-md:pl-[16px] max-md:pr-[16px] max-md:scrollbar-hidden">
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="studyMode"
                        defaultChecked
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id="fullTime"
                      />
                      <label
                        htmlFor="fullTime"
                        className="check-label w-max small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                      >
                        Full-time
                      </label>
                    </div>
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="studyMode"
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id="partTime"
                      />
                      <label
                        htmlFor="partTime"
                        className="check-label w-max small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                      >
                        Part-time
                      </label>
                    </div>
                    <div className="col flex relative">
                      <input
                        type="radio"
                        name="studyMode"
                        className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                        id="online/distance"
                      />
                      <label
                        htmlFor="online/distance"
                        className="check-label w-max small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px]"
                      >
                        Online / distance
                      </label>
                    </div>
                  </div>
                </div>
                {/* -- */}
                {/* -- */}
                <div className="flex flex-col gap-[8px]">
                  <div className="form-row">
                    <div className="form-col flex flex-col flex-1 gap-1">
                      <label className="small font-semibold text-gray-800">
                        Research interests
                      </label>
                      <p className="x-small text-grey300">
                        If you have specific research interests, please enter
                        them here.
                      </p>
                      <input
                        type="textbox"
                        name="researchInterest"
                        className="input-textbox small text-grey-600 border border-grey-500  rounded-[4px] p-[10px_12px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700"
                        placeholder="Please enter research interest"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <CheckboxSingleLabelComponents description="I am not interested in a particular area of research at this time" />
                </div>
                {/* -- */}
              </div>
              {/* -- Study preferences  -- */}
              <div className="predicted_grades flex flex-col gap-[4px]">
                <div className="small font-semibold text-grey300">
                  Predicted grades
                </div>
                <p className="small text-grey300">
                  You have not yet added any qualifications
                </p>
                <div className="flex justify-start">
                  <a
                    href="#"
                    className="flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]"
                  >
                    Add your grades
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6"
                        stroke="#3460DC"
                        strokeWidth="1.48148"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="sticky-btn-card w-full fixed bottom-0 left-0 z-[5] bg-grey-600">
              <div className="max-w-container mx-auto">
                <div className="flex justify-end p-[16px] md:p-[16px_20px] lg:p-[16px_24px] max-md:gap-[16px]">
                  <button className="btn flex justify-center items-center gap-[4px] md:min-w-[107px] md:max-w-[120px] max-md:p-0 hover:underline">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.8173 1.8173C2.24037 1.39423 2.9263 1.39423 3.34937 1.8173L8 6.46794L12.6506 1.8173C13.0737 1.39423 13.7596 1.39423 14.1827 1.8173C14.6058 2.24037 14.6058 2.9263 14.1827 3.34937L9.53206 8L14.1827 12.6506C14.6058 13.0737 14.6058 13.7596 14.1827 14.1827C13.7596 14.6058 13.0737 14.6058 12.6506 14.1827L8 9.53206L3.34937 14.1827C2.9263 14.6058 2.24037 14.6058 1.8173 14.1827C1.39423 13.7596 1.39423 13.0737 1.8173 12.6506L6.46794 8L1.8173 3.34937C1.39423 2.9263 1.39423 2.24037 1.8173 1.8173Z"
                        fill="white"
                      />
                    </svg>
                    Reset
                  </button>
                  <button className="btn btn-primary w-full min-w-[150px] sm:max-w-[180px]">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserProfileComponents;
