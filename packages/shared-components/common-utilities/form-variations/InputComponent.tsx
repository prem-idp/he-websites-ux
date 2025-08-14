import React from 'react'

const InputComponent = () => {
  return (
    <>
      
      <div className='small font-semibold py-10'>Default Component:</div>
      
      <div className="form-row form-card">
        <div className="form-col">
          <label>
            First name 
            <span className="mandatory">*</span>
          </label>
          <input type="text" className="input-textbox" placeholder="Eg: Paul" />
          <div className="error-text">Helper text.</div>
        </div>
      </div>

      <br />
      <div className='small font-semibold py-10'>Error Component:</div>
      <div className="form-row form-card">
        <div className="form-col gap-1 error">
          <label>
            Last name 
            <span className="mandatory">*</span>
          </label>
          <input type="text" className="input-textbox" placeholder="Eg: Paul" />
          <div className="error-text">Helper text.</div>
        </div>
      </div>
    </>
  )
}

export default InputComponent
