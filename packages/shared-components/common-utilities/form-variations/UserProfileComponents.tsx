'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import RadioSingleLabelComponent from './RadioSingleLabelComponent';


const UserProfileComponents = () => {

  const roleBest = ['Student', 'My child is going to uni', 'Teacher', 'Career advisor', 'I work in the sector' ]

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
          <div className="form-inner-wrap form-card flex flex-col flex-1 gap-[24px]">
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
                  {...register('month', { required: true })}
                  className="select-dropdown small text-grey-600 border border-grey-500 rounded-[4px] p-[10px_12px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700 bg-grey-100"
                  id="month"
                  name="month"
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
                {errors?.month?.type === 'required' && (
                  <div className="error x-small text-error-primary">
                    Please select your nth.
                  </div>
                )}
              </div>
            </div>
            <div className="form-row flex">
                <div className="role-card form-col flex flex-col gap-[16px] bg-grey-50 border border-grey-200 p-[16px] rounded-[8px]">
                  <label className="small font-semibold text-grey-300">
                    What description fits you best? 
                    <span className="optional font-normal x-small text-grey-700 pl-1">(optional)</span>
                  </label>
                  <div className="flex flex-col items-start gap-[8px]">
                    {roleBest.map((roleData, index) => (
                      <RadioSingleLabelComponent
                        id={index}
                        label={roleData}
                        description={''}
                      />
                    ))}                    
                  </div>
                </div>
            </div>
            <div className='address-details'>
                <div className='form-row'>
                  <div className="form-col flex flex-col flex-1 gap-1">
                    <label className="small font-semibold text-gray-800">
                      Postcode finder
                    </label>
                    <input
                      type="textbox"
                      {...register('postcodeFinder', {
                        required: true,
                        minLength: 12,
                        maxLength: 15,
                        pattern: /^\+?[0-9]+$/,
                      })}
                      name="postcodeFinder"
                      className="input-textbox small text-grey-600 border border-grey-500  rounded-[4px] p-[10px_12px] focus:outline-none focus:border-blue-400 active:grey-500 custom-14 placeholder:text-grey-700"
                      placeholder="Enter your postcode"
                      autoComplete="off"
                    />
                  </div>       
                </div>
                <div className='form-row'>
                  <div className="form-col flex flex-col flex-1 gap-1">
                    <label className="small font-semibold text-gray-800">
                      Address line 1
                    </label>
                    <input
                      type="textbox"
                      {...register('addressLine1', {
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
                <div className='form-row'>
                  <div className="form-col flex flex-col flex-1 gap-1">
                    <label className="small font-semibold text-gray-800">
                      Address line 2
                    </label>
                    <input
                      type="textbox"
                      {...register('addressLine1', {
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
                <div className='form-group flex gap-4'>
                  <div className="form-col">
                    <label>
                      Town/city
                    </label>
                    <input type="text" className="input-textbox" placeholder="Enter town/city" />
                    <div className="error-text">Helper text.</div>
                  </div>
                  <div className="form-col flex flex-col flex-1 gap-1">
                    <label>
                      Postcode 
                      <span className="mandatory">*</span>
                    </label>
                    <input type="text" className="input-textbox" placeholder="Enter your postcode" />
                    <div className="error-text">Helper text.</div>
                  </div>
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
