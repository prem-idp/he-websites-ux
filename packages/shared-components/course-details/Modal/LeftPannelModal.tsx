"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

interface LeftPannelModal {
    matchKey: string,
    isOpen: any,
    onClose: any,
    onApply: (item: any) => void,
    heading: string,
    subHeading?: string,
    itemList: any[],
    selectedItems?: any[]
}

const LeftPannelModal = ({ isOpen, onClose, onApply, heading, subHeading, itemList, selectedItems, matchKey }: LeftPannelModal) => {

    const [tempSelectedItems, setTempSelectedItems] = useState(selectedItems || []);
    const [anmate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => { setAnimate(() => true) }, 80);
    }, []);

    function select(item: any) {
        setTempSelectedItems(() => [item]);
    }

    function cancel() {
        closePannel();
    }

    function apply() {
        onApply(tempSelectedItems);
        closePannel();
    }

    function closePannel() {
        setAnimate(() => false);
        setTimeout(() => {
            onClose();
        }, 300);
    }

    return (
        <>
            <div onClick={closePannel} className={`${anmate ? "animate-fadeIn block" : "hidden"} backdrop-shadow fixed top-0 right-0 left-0 bottom-0 bg-white z-[7]`}>
            </div>
            <div className={`${anmate ? "translate-x-0 opacity-[1]" : "-translate-x-full opacity-0"} transition-all duration-300 modal modal-container shadow-custom-6 w-full md:w-[375px] fixed top-0 left-0 z-[8]`}>
                <div className={`modal-box p-[16px_0_16px_16px] bg-white overflow-hidden h-[100vh]`}>
                    <div onClick={onClose} className='modal_close absolute top-[16px] right-[16px] z-[1] cursor-pointer'>
                        <Image className='block' src="/assets/icons/modal_close.svg" width="12" height="12" alt='modal close' />
                    </div>
                    <div className='select-subject-container flex flex-col gap-[16px]'>
                        <div className='card-header flex flex-col gap-[4px]'>
                            <div className='h5 text-grey300'>{heading}</div>
                            {subHeading && <p className='para-lg font-semibold text-grey300'>{subHeading}</p>}
                        </div>
                        <div className='select-subject-card pr-[16px] custom-scrollbar-2 overflow-y-auto h-[calc(100vh_-_156px)]'>
                            <ul>
                                {itemList?.map((item) => <li className='flex justify-between items-center gap-[16px] border-b border-b-grey400 pb-[16px] mb-[16px]'>
                                    <span className='small font-semibold text-grey300 line-clamp-1'>{item?.[matchKey]}</span>
                                    <div className='modal-select'>
                                        <div className='form_check'>
                                            <div className="col flex relative">
                                                <input type="radio" checked={!!tempSelectedItems?.length && tempSelectedItems[0]?.[matchKey] === item?.[matchKey]}
                                                    name={item?.[matchKey]} value={item?.[matchKey]} className=" form-checkbox rounded-[4px] outline-none absolute opacity-0 pointer-events-none"
                                                    id={item?.seq_no} onChange={() => { }} />
                                                <label onClick={() => { select(item) }} htmlFor={item?.[matchKey]} className="check-label flex justify-center items-center w-[90px] Group small font-semibold text-primary-400 bg-white border border-primary-400 rounded-[18px] hover:bg-primary-400 hover:text-white transition-all cursor-pointer px-[16px] py-[7px]">
                                                    {tempSelectedItems?.length && tempSelectedItems[0]?.[matchKey] === item?.[matchKey] ? <span className='selected'>Selected</span> : <span className='select'>Select</span>}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>)}
                            </ul>
                        </div>
                        <div className='apply-card flex p-[8px] absolute left-0 bottom-0 w-full gap-[8px] shadow-custom-10 z-4'>
                            <ul className='flex justify-between items-center w-full'>
                                <li className='w-[50%] text-center'><span className='para font-semibold text-primary-400 hover:text-primary-500 cursor-pointer hover:underline p-[12px_16px]' onClick={cancel}>Cancel</span></li>
                                <li className='w-[50%]'><button className="btn btn-primary text-[18px] flex items-center justify-center min-w-[180px] w-full gap-[8px] p-[13px_20px] group-hover:bg-primary-500" onClick={apply}>Apply</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftPannelModal;