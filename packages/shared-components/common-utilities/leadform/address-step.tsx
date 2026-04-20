import React, { useState } from "react";
import Image from "next/image";
import CustomCheckbox from "./custom-checkbox";

interface AddressStepProps {
  onSubmit?: () => void;
  showExtraCheckbox?: boolean;
}

const AddressStep = ({ onSubmit, showExtraCheckbox = false }: AddressStepProps) => {
  const years = ["2024", "2025", "2026", "2027"];
  const [selectedYear, setSelectedYear] = useState("2024");
  const countries = ["United Kingdom", "Rest of the world"];
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");

  // Address flow states
  const [postcode, setPostcode] = useState("");
  const [postcodeError, setPostcodeError] = useState("");
  const [addressFound, setAddressFound] = useState(false);
  const [showManualFields, setShowManualFields] = useState(false);
  const [addressDropdownOpen, setAddressDropdownOpen] = useState(false);

  // Country dropdown states (Rest of the world)
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [selectedWorldCountry, setSelectedWorldCountry] = useState("");
  const worldCountries = [
    "Belgium",
    "Belarus",
    "Brazil",
    "Cameroon",
    "Cuba",
    "Denmark",
    "Egypt",
    "France",
    "Germany",
    "India",
    "Japan",
    "Kenya",
    "Mexico",
    "Nigeria",
    "Poland",
  ];

  const addresses = [
    "24, Locksley Lane, Sutton, London, SM2 3JW",
    "25, Locksley Lane, Sutton, London, SM2 3JW",
    "26, Locksley Lane, Sutton, London, SM2 3JW",
    "27, Locksley Lane, Sutton, London, SM2 3JW",
    "28, Locksley Lane, Sutton, London, SM2 3JW",
    "29, Locksley Lane, Sutton, London, SM2 3JW",
    "30, Locksley Lane, Sutton, London, SM2 3JW",
    "31, Locksley Lane, Sutton, London, SM2 3JW",
  ];
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);

  const handleFindAddress = () => {
    if (!postcode.trim()) {
      setPostcodeError("Please enter a valid postcode");
      return;
    }
    setPostcodeError("");
    setAddressFound(true);
    setShowManualFields(true);
  };

  const handleEnterManually = () => {
    setAddressFound(false);
    setShowManualFields(true);
    setPostcodeError("");
  };

  const handleEditAddress = () => {
    setAddressFound(false);
    setShowManualFields(false);
    setPostcodeError("");
  };

  return (
    <div className="border-y md:border border-grey-200 md:rounded-[8px] overflow-hidden">
      <div className="bg-white p-[16px] md:p-[32px] flex flex-col gap-[24px]">
        {/* Header */}
        <div className="flex flex-col gap-[8px] text-center">
          <h1 className="text-heading6 lg:text-heading5 font-farro font-bold">
            Where should we send your free prospectus?
          </h1>
          <p className="text-small">
            To receive your printed prospectus, complete the form below
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-[24px]">
          {/* When will you start */}
          <div className="form_radio flex flex-col gap-[4px]">
            <label className="small font-semibold">When will you start?</label>
            <div className="form-radio-group flex flex-row gap-[8px]">
              {years.map((year) => (
                <div className="flex relative" key={year}>
                  <input
                    checked={selectedYear === year}
                    onChange={() => setSelectedYear(year)}
                    type="radio"
                    name="start-year"
                    className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                    id={`start-${year}`}
                  />
                  <label
                    htmlFor={`start-${year}`}
                    className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px] cursor-pointer"
                  >
                    {year}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Country of residence */}
          <div className="form_radio flex flex-col gap-[4px]">
            <label className="small font-semibold">Country of residence</label>
            <div className="form-radio-group flex flex-row gap-[8px]">
              {countries.map((country) => (
                <div className="flex relative" key={country}>
                  <input
                    checked={selectedCountry === country}
                    onChange={() => setSelectedCountry(country)}
                    type="radio"
                    name="country"
                    className="form-check-input rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                    id={`country-${country}`}
                  />
                  <label
                    htmlFor={`country-${country}`}
                    className="check-label small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] px-[16px] py-[7px] cursor-pointer"
                  >
                    {country}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Postcode finder - only when UK selected */}
          {selectedCountry === "United Kingdom" && (
            <>
              <div className="flex flex-col gap-[4px]">
                <div className="flex w-full">
                  <div className="flex flex-col md:flex-row justify-between w-full md:w-[397px]">
                    <label className="small font-semibold">
                      Postcode finder
                      <span className="text-negative-default">*</span>
                    </label>
                    {!addressFound && (
                      <div
                        className="small font-normal text-primary-400 cursor-pointer"
                        onClick={handleEnterManually}
                      >
                        Enter manually
                      </div>
                    )}
                  </div>
                </div>

                {/* State 1: Postcode search input + Find address */}
                {!addressFound && !showManualFields && (
                  <>
                    <div className="flex gap-[8px] items-start">
                      <div className="flex-1">
                        <div className="relative">
                          <input
                            type="text"
                            className={`input-textbox w-full pr-[40px] ${postcodeError ? "!border-negative-default" : ""}`}
                            placeholder="Enter your postcode"
                            value={postcode}
                            onChange={(e) => {
                              setPostcode(e.target.value);
                              if (postcodeError) setPostcodeError("");
                            }}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-[12px] flex items-center cursor-pointer"
                            aria-label="Search postcode"
                            onClick={handleFindAddress}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 17L12.3333 12.3333M13.8889 8.44444C13.8889 11.4513 11.4513 13.8889 8.44444 13.8889C5.43756 13.8889 3 11.4513 3 8.44444C3 5.43756 5.43756 3 8.44444 3C11.4513 3 13.8889 5.43756 13.8889 8.44444Z"
                                stroke="#5C656E"
                                stroke-width="1.67"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                        {postcodeError && (
                          <p className="x-small text-negative-default mt-[4px]">
                            {postcodeError}
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        className="btn btn-medium bg-primary-500 text-white hover:bg-primary-400 whitespace-nowrap"
                        onClick={handleFindAddress}
                      >
                        Find address
                      </button>
                    </div>
                  </>
                )}

                {/* State 2: Address dropdown + Edit address (after Find address clicked) */}
                {addressFound && (
                  <div className="flex gap-[8px] items-start">
                    <div className="flex-1 relative">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between small font-normal px-[12px] py-[10px] bg-grey-100 border border-grey-500 rounded-[4px] text-left"
                        onClick={() =>
                          setAddressDropdownOpen(!addressDropdownOpen)
                        }
                        aria-expanded={addressDropdownOpen}
                        aria-haspopup="listbox"
                      >
                        <span>{selectedAddress}</span>
                        <Image
                          src="/static/assets/icons/arrow_down_black.svg"
                          alt="dropdown arrow"
                          width={20}
                          height={20}
                          className={`transition-transform ${addressDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {addressDropdownOpen && (
                        <div className="flex flex-col w-full absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-0 top-[52px]">
                          <div className="px-[16px] pt-[12px] pb-[8px]">
                            <p className="x-small font-semibold text-black tracking-[1px] leading-[18px] uppercase">
                              Postcode
                            </p>
                            <p className="small font-semibold text-primary-400">
                              &apos;{postcode.toUpperCase() || "SM2 3JW"}&apos;
                            </p>
                          </div>
                          <div className="px-[16px] pb-[8px]">
                            <span className="inline-block x-small font-semibold uppercase text-grey-500 bg-grey-100 rounded-[4px] px-[8px] py-[2px]">
                              Address
                            </span>
                          </div>
                          <div className="max-h-[200px] overflow-y-scroll custom-scrollbar-2">
                            {addresses.map((address) => (
                              <button
                                key={address}
                                type="button"
                                className="block w-full text-left small px-[16px] py-[12px] hover:bg-blue-50 underline"
                                onClick={() => {
                                  setSelectedAddress(address);
                                  setAddressDropdownOpen(false);
                                }}
                                role="option"
                                aria-selected={selectedAddress === address}
                              >
                                {address}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      className="btn btn-medium bg-primary-500 text-white hover:bg-primary-400 whitespace-nowrap"
                      onClick={handleEditAddress}
                    >
                      Edit address
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Address fields - shown after Find address or Enter manually */}
          {selectedCountry === "United Kingdom" && showManualFields && (
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[4px]">
                <label className="small font-semibold">Address line 1</label>
                <input
                  type="text"
                  className="input-textbox w-full"
                  placeholder="24, Locksley Lane"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <label className="small font-semibold">Address line 2</label>
                <input
                  type="text"
                  className="input-textbox w-full"
                  placeholder="Sutton"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-[24px] md:gap-[8px]">
                <div className="flex-1 flex flex-col gap-[4px]">
                  <label className="small font-semibold">Town/city</label>
                  <input
                    type="text"
                    className="input-textbox w-full"
                    placeholder="London"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[4px]">
                  <label className="small font-semibold">Postcode</label>
                  <input
                    type="text"
                    className="input-textbox w-full"
                    placeholder="SM2 3JW"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Rest of the world - Country dropdown + address fields */}
          {selectedCountry === "Rest of the world" && (
            <>
              <div className="flex flex-col gap-[4px]">
                <label className="small font-semibold">
                  Country<span className="text-negative-default">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between small font-normal px-[12px] py-[10px] bg-grey-100 border border-grey-500 rounded-[4px] text-left"
                    onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                    aria-expanded={countryDropdownOpen}
                    aria-haspopup="listbox"
                  >
                    <span
                      className={selectedWorldCountry ? "" : "text-grey-400"}
                    >
                      {selectedWorldCountry || "Choose country"}
                    </span>
                    <Image
                      src="/static/assets/icons/arrow_down_black.svg"
                      alt="dropdown arrow"
                      width={20}
                      height={20}
                      className={`transition-transform ${countryDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {countryDropdownOpen && (
                    <div className="flex flex-col w-full absolute z-[1] bg-white shadow-custom-3 rounded-[8px] left-0 top-[52px]">
                      <div className="px-[16px] pt-[12px] pb-[8px]">
                        <p className="x-small font-semibold text-black tracking-[1px] leading-[18px] uppercase">
                          Choose Country
                        </p>
                        {selectedWorldCountry && (
                          <p className="small font-semibold text-primary-400">
                            {selectedWorldCountry.toUpperCase()}
                          </p>
                        )}
                      </div>
                      <div className="px-[16px] pb-[8px]">
                        <span className="inline-block x-small font-semibold uppercase text-grey-500 bg-grey-100 rounded-[4px] px-[8px] py-[2px]">
                          Country
                        </span>
                      </div>
                      <div className="max-h-[200px] overflow-y-scroll custom-scrollbar-2">
                        {worldCountries.map((country) => (
                          <button
                            key={country}
                            type="button"
                            className="block w-full text-left small px-[16px] py-[12px] hover:bg-blue-50 underline"
                            onClick={() => {
                              setSelectedWorldCountry(country);
                              setCountryDropdownOpen(false);
                            }}
                            role="option"
                            aria-selected={selectedWorldCountry === country}
                          >
                            {country}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Address fields for Rest of the world */}
              <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[4px]">
                  <label className="small font-semibold">Address line 1</label>
                  <input
                    type="text"
                    className="input-textbox w-full"
                    placeholder="Boulevard de Waterloo"
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label className="small font-semibold">Address line 2</label>
                  <input
                    type="text"
                    className="input-textbox w-full"
                    placeholder="Address line 2"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-[24px] md:gap-[8px]">
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="small font-semibold">Town/city</label>
                    <input
                      type="text"
                      className="input-textbox w-full"
                      placeholder="Bruxelles"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label className="small font-semibold">Postcode</label>
                    <input
                      type="text"
                      className="input-textbox w-full"
                      placeholder="115 1000"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <hr className="bg-grey-200" />

          {/* Stay in the know */}
          <div className="space-y-[8px]">
            <label className="small font-semibold">Stay in the know</label>
            <CustomCheckbox>
              We&apos;ll send helpful updates and occasionally invite you to
              share your views.
            </CustomCheckbox>
            <CustomCheckbox>
              Receive newsletters from this University of Bradford. Contact the
              uni directly to update your email preferences.{" "}
              <a href="#" className="text-primary-400">
                Privacy Policy
              </a>
            </CustomCheckbox>
            {showExtraCheckbox && (
            <CustomCheckbox>
              Receive newsletters from this University of Kent. Contact the uni
              directly to update your email preferences.{" "}
              <a href="#" className="text-primary-400">
                Privacy Policy
              </a>
            </CustomCheckbox>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="btn btn-primary btn-medium w-full flex items-center justify-center gap-[8px]"
          onClick={onSubmit}
        >
          Complete to order your prospectus
          <Image
            src="/static/assets/icons/right_white_arrow.svg"
            width={17}
            height={14}
            alt="arrow icon"
          />
        </button>
      </div>
    </div>
  );
};

export default AddressStep;
