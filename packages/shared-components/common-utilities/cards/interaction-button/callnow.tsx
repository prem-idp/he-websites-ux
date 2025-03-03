import React from 'react'

const Callnowbutton = ({pageName}:any) => {
  return (
      <button type='button' className={'btn btn-negative-default flex justify-center items-center gap-[8px] min-w-[160px] w-full'}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.612793 1.66632C0.612793 1.23683 0.960956 0.888672 1.39044 0.888672H3.0646C3.44475 0.888672 3.76917 1.1635 3.83167 1.53847L4.40659 4.988C4.46271 5.32474 4.29265 5.65872 3.9873 5.81139L2.7834 6.41334C3.65148 8.57048 5.37328 10.2923 7.53042 11.1604L8.13237 9.95646C8.28505 9.65111 8.61902 9.48105 8.95576 9.53717L12.4053 10.1121C12.7803 10.1746 13.0551 10.499 13.0551 10.8792V12.5533C13.0551 12.9828 12.7069 13.331 12.2774 13.331H10.7222C5.13891 13.331 0.612793 8.80485 0.612793 3.2216V1.66632Z" fill="white"/>
        </svg>
        Call now</button>
  )
}

export default Callnowbutton