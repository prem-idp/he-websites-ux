import React from 'react'
import RadioComponent from '@packages/shared-components/common-utilities/form-variations/RadioComponent';
import CheckboxComponent from '@packages/shared-components/common-utilities/form-variations/CheckboxComponent';
import ToggleComponent from '@packages/shared-components/common-utilities/form-variations/ToggleComponent';
import InputComponent from '@packages/shared-components/common-utilities/form-variations/InputComponent';

const page = () => {
  return (
    <>
      <div className='max-w-container mx-auto py-10'>
        <RadioComponent />
        <CheckboxComponent />
        <ToggleComponent />
        <InputComponent />
              </div>
      </>
  )
}

export default page

