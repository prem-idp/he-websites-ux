'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const UserProfileComponents = () => {
  // selectMonth
  const [selectMonth, setSelectMonth] = useState('Nationality');

  const months = Array.from({ length: 12 }, (_: unknown, i: number) => {
    const date = new Date(0, i);
    return {
      value: String(i + 1).padStart(2, '0'),
      label: date.toLocaleString('default', { month: 'long' }),
    };
  });
  // selectMonth
  // validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const getData = (data: unknown) => {
    // TODO: handle form submission
    console.log('Classes registration submitted:', data);
  };

  // validation

  return (
    <>
      <div className="user-profile-container flex flex-col py-[56px] w-full md:w-[598px] mx-auto">
        <div className='flex flex-col gap-[4px] py-[32px]'>
          <h4 className='text-neutral-900'>Your details</h4>
          <p className='x-small text-grey300'>Your profile details for Whatuni, Postgraduate Search and IDP, all in one place</p>
        </div>
        <div className='form-inner-container bg-white border border-grey-200 rounded-[8px] p-[32px]'>
          <form
          name="userProfile"
          onSubmit={handleSubmit(getData)}
        >
            <div className="form-inner-wrap form-card flex flex-col flex-1 gap-6">
              <div className='form-group flex gap-4'>
                <div className="form-col">
                  <label>
                    First name 
                    <span className="mandatory">*</span>
                  </label>
                  <input type="text" className="input-textbox" placeholder="Eg: Paul" />
                  <div className="error-text">Helper text.</div>
                </div>
                <div className="form-col flex flex-col flex-1 gap-1">
                  <label>
                    Last name 
                    <span className="mandatory">*</span>
                  </label>
                  <input type="text" className="input-textbox" placeholder="Eg: Paul" />
                  <div className="error-text">Helper text.</div>
                </div>
              </div>
              <div className="form-row typing-disabled">
                <div className="form-col flex flex-col gap-1">
                  <label className="small font-semibold text-gray-800">
                    Email Address
                    <span className="mandatory text-gray-500 pl-1">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('onlyGmail', {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    })}
                    name="onlyGmail"
                    className="input-textbox small text-grey-600 border border-grey-500  rounded-[4px] p-[10px_12px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700"
                    value="paul.atreides@Arrakis.com"
                    placeholder="Eg: paul.atreides@Arrakis.com"
                    autoComplete="off"
                  />
                  {errors?.onlyGmail?.type === 'required' && (
                    <div className="error x-small text-error-primary">
                      Please enter your email address.
                    </div>
                  )}
                  {errors?.onlyGmail?.type === 'pattern' && (
                    <div className="error x-small text-error-primary">
                      Please enter a valid email address.
                    </div>
                  )}
                </div>
              </div>
              <div className='form-row'>
                <div className="form-col flex flex-col flex-1 gap-1">
                  <label className="small font-semibold text-gray-800">
                    Mobile number <span className='font-normal'>(optional)</span>
                  </label>
                  <input
                    type="textbox"
                    {...register('mobileNumber', {
                      required: true,
                      minLength: 12,
                      maxLength: 15,
                      pattern: /^\+?[0-9]+$/,
                    })}
                    name="mobileNumber"
                    className="input-textbox small text-grey-600 border border-grey-500  rounded-[4px] p-[10px_12px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700"
                    placeholder=""
                    autoComplete="off"
                  />
                  {errors?.mobileNumber?.type === 'required' && (
                    <div className="error x-small text-error-primary">
                      Please enter the Mobile number.
                    </div>
                  )}
                  {errors?.mobileNumber?.type === 'minLength' && (
                    <div className="error x-small text-error-primary">
                      Please enter at least 10 digits.
                    </div>
                  )}
                  {errors?.mobileNumber?.type === 'maxLength' && (
                    <div className="error x-small text-error-primary">
                      Please enter no more than 15 digits.
                    </div>
                  )}
                  {errors?.mobileNumber?.type === 'pattern' && (
                    <div className="error x-small text-error-primary">
                      Please enter a valid phone number (numbers only, with
                      optional &apos;+&apos;).
                    </div>
                  )}
                </div>       
              </div>

              









            <div className="form-row">
              <div className="form-col flex flex-col gap-1">
                <label className="small font-semibold text-gray-800">
                  Nationality
                  <span className="mandatory text-gray-500 pl-1">*</span>
                </label>
                <select
                  {...register('birthMonth', { required: true })}
                  className="select-dropdown small text-grey-600 border border-grey-500 rounded-[4px] p-[10px_12px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700 bg-grey-100"
                  id="birthMonth"
                  name="birthMonth"
                  value={selectMonth}
                  //onChange={(e) => setSelectMonth(e.target.value)}
                >
                  <option value="">Nationality</option>
                  {months.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
                {errors?.birthMonth?.type === 'required' && (
                  <div className="error x-small text-error-primary">
                    Please select your birth month.
                  </div>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-col flex flex-col gap-3">
                <label className="small font-semibold text-gray-800">
                  Please choose your preferred venue
                  <span className="mandatory text-gray-500 pl-1">*</span>
                </label>
                <div className="flex flex-col items-start gap-4">
                  <div className="flex gap-2">
                    <input
                      id="fap"
                      type="radio"
                      name="childsGender"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="fap"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Friday at Orpington
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="faf"
                      type="radio"
                      name="childsGender"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="faf"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Friday at Falconwood
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="saf"
                      type="radio"
                      name="childsGender"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="saf"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Saturday at Falconwood
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="sao"
                      type="radio"
                      name="childsGender"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="sao"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Sunday at Orpington
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="to"
                      type="radio"
                      name="childsGender"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="to"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Tuesday ONLINE
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="venueOthers"
                      type="radio"
                      name="childsGender"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="venueOthers"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col flex flex-col gap-3">
                <label className="small font-semibold text-gray-800">
                  Please select your batch - Face2Face or Online
                  <span className="mandatory text-gray-500 pl-1">*</span>
                </label>
                <div className="flex flex-col items-start gap-4">
                  <div className="flex gap-2">
                    <input
                      id="superSelectF2F"
                      type="radio"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="superSelectF2F"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Apple-Super Selective-Face2Face-All Schools
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="orangeF2F"
                      type="radio"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="orangeF2F"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Orange-Face2Face
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="superSelectOnline"
                      type="radio"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="superSelectOnline"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Apple-Super Selective-Online-All Schools
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="orangeOnline"
                      type="radio"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="orangeOnline"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Orange-Online
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="batchOthers"
                      type="radio"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="batchOthers"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col flex flex-col gap-3">
                <label className="small font-semibold text-gray-800">
                  Which secondary school are you focusing on in your
                  preparation? Please select multiple schools based on your
                  priorities.
                  <span className="mandatory text-gray-500 pl-1">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <input
                      id="selectSchools1"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools1"
                      className="small text-gray-700 cursor-pointer"
                    >
                      St.Olave&apos;s Grammar School for Boys
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools2"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools2"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Newstead Wood Grammar School for Girls
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools3"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools3"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Queen Elizabeth for Boys High Barnet
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools4"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools4"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Henrietta Barnet for Girls High Barnet
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools5"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools5"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Wilson Grammar School Sutton
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools6"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools6"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Non-Such Grammar School
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools7"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools7"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Dartford Grammar School For Boys
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools8"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools8"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Dartford Grammar School For Girls
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools9"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools9"
                      className="small text-gray-700 cursor-pointer"
                    >
                      TOGS - Tonbridge Grammar School for Girls
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools10"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools10"
                      className="small text-gray-700 cursor-pointer"
                    >
                      JUDD Grammar School
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools11"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools11"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Skinner Grammar School
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools12"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools12"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Bexley Grammar School
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools13"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools13"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Townley Grammar School
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools14"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools14"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Beth Grammar School
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools15"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools15"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Chislehurst and Sidcup Grammar School
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools16"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools16"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Medway Grammar Schools
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools17"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools17"
                      className="small text-gray-700 cursor-pointer"
                    >
                      CSSE Consortium Schools
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools18"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools18"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Other Grammar Schools
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchools19"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchools19"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Private Schools
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="selectSchoolsOthers"
                      type="checkbox"
                      className="input-checked input-checkbox"
                    />
                    <label
                      htmlFor="selectSchoolsOthers"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Others
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col flex flex-col gap-2">
                <label className="small font-semibold text-gray-800">
                  Have you paid the refundable term deposit? Please do not
                  submit this form without making the payment.
                  <span className="mandatory text-gray-500 pl-1">*</span>
                </label>
                <div className="flex items-center gap-7">
                  <div className="flex gap-2">
                    <input
                      id="tdYes"
                      type="radio"
                      name="termDeposit"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="tdYes"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="tdNo"
                      type="radio"
                      name="termDeposit"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="tdNo"
                      className="small text-gray-700 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col flex flex-col gap-2">
                <label className="small font-semibold text-gray-800">
                  Have you paid the term fees?
                  <span className="mandatory text-gray-500 pl-1">*</span>
                </label>
                <div className="flex items-center gap-7">
                  <div className="flex gap-2">
                    <input
                      id="tfYes"
                      type="radio"
                      name="termFees"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="tfYes"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="tfNo"
                      type="radio"
                      name="termFees"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="tfNo"
                      className="small text-gray-700 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col flex flex-col gap-2">
                <label className="small font-semibold text-gray-800">
                  Do you agree with the above terms and conditions?
                  <span className="mandatory text-gray-500 pl-1">*</span>
                </label>
                <div className="flex items-center gap-7">
                  <div className="flex gap-2">
                    <input
                      id="tcYes"
                      type="radio"
                      name="termsCond"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="tcYes"
                      className="small text-gray-700 cursor-pointer"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      id="tcNo"
                      type="radio"
                      name="termsCond"
                      className="input-checked input-radio"
                    />
                    <label
                      htmlFor="tcNo"
                      className="small text-gray-700 cursor-pointer"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-col flex flex-col gap-1">
                <label className="small font-semibold text-gray-800">
                  Add your comments{' '}
                  <span className="mandatory text-gray-500 pl-1">*</span>
                </label>
                <input
                  type="textbox"
                  name="email"
                  className="textarea-box"
                  placeholder=""
                />
              </div>
            </div>
            <div className="form-row">
              <button
                type="submit"
                className="btn btn-info w-full  font-semibold mt-2"
              >
                SEND
              </button>
            </div>
          </div>
          </form>
        </div>  
      </div>
    </>
  );
};

export default UserProfileComponents;
