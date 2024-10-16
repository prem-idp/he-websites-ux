import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Menucategory1card from '../megamenu/menucategory1card';
import Menucategory2card from '../megamenu/menucategory2card';
import Menucategory3card from '../megamenu/menucategory3card';
import Menucategory4card from '../megamenu/menucategory4card';
import Menucategory1x2card from '../megamenu/menucategory1x2card';
import Menucategory1x1card from '../megamenu/menucategory1x1card';

const Megamenucomponents = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const megaMenu = (menuId: string) => {
        setOpenMenu(openMenu === menuId ? null : menuId);
    };

    // Menu open/close state
    const [isOpen, setIsOpen] = useState(false);

    const closeMegamenu = () => {
        setIsOpen(isOpen)
     }

     const [isMobile, setIsMobile] = useState(false);
     // Check screen width
    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 991);
    };

    // Initial check
    handleResize();

    // Add event listener on resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <>
        <div className='flex lg:items-center lg:justify-center'>
        <nav className="p-[16px] w-[335px] h-[100vh] bg-white lg:w-fit lg:h-auto">
            <ul className="flex flex-col lg:flex-row gap-[10px] lg:gap-[24px] justify-center">
                <li>
                    <Link onClick={() => megaMenu('menu1')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 lg:bg-transparent 
                        lg:hover:shadow-custom-7 ${openMenu === "menu1" ? 'menu-active' : ''}`}>Find a course
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img1.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>

                    {openMenu === 'menu1' && (
                    <div className="megamenu bg-neutral-50 lg:bg-white shadow-custom-5 absolute top-[94px] left-[0] right-[0]">
                        {isMobile && (
                        <div className={`back-navigation lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300`}>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Link 1
                        </div>
                        )}
                        <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                <Menucategory1card />
                                <Menucategory2card />
                                <Menucategory2card />
                                <Menucategory4card />
                            </section>
                        </div>
                    </div>
                    )}
                </li>
                <li>
                    <Link onClick={() => megaMenu('menu2')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 lg:bg-transparent lg:hover:shadow-custom-7 ${openMenu === "menu2" ? 'menu-active' : ''}`}>Find a uni
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img2.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>
                    {openMenu === 'menu2' && (
                    <div className="megamenu bg-neutral-50 lg:bg-white shadow-custom-5 absolute top-[94px] left-[0] right-[0]">
                        <div className='back-navigation lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Link 1
                        </div>                        
                        <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-[610px_auto_auto] lg:gap-[16px] p-[0] lg:p-[24px]">
                                <Menucategory1x2card />
                                <Menucategory2card />
                                <Menucategory2card />
                            </section>
                        </div>
                    </div>
                    )}
                </li>
                <li>
                    <Link onClick={() => megaMenu('menu3')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 lg:bg-transparent lg:hover:shadow-custom-7 ${openMenu === "menu3" ? 'menu-active' : ''}`}>Careers
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img3.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>
                    {openMenu === 'menu3' && (
                    <div className="megamenu bg-neutral-50 lg:bg-white shadow-custom-5 absolute top-[94px] left-[0] right-[0]">
                        <div className='back-navigation lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Link 1
                        </div>                        
                        <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                <Menucategory1card />
                                <Menucategory2card />
                                <Menucategory1card />
                                <Menucategory4card />
                            </section>
                        </div>
                    </div>
                    )}    
                </li>
                <li>
                    <Link onClick={() => megaMenu('menu4')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 lg:bg-transparent lg:hover:shadow-custom-7 ${openMenu === "menu4" ? 'menu-active' : ''}`}>Prospectuses
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img4.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>
                    {openMenu === 'menu4' && (
                    <div className="megamenu bg-neutral-50 lg:bg-white shadow-custom-5 absolute top-[94px] left-[0] right-[0]">
                        <div className='back-navigation lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Link 1
                        </div>                        
                        <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                <Menucategory1card />
                                <Menucategory3card />
                                <Menucategory2card />
                                <Menucategory4card />
                            </section>
                        </div>
                    </div>
                    )} 
                </li>
                <li>
                    <Link onClick={() => megaMenu('menu5')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 lg:bg-transparent lg:hover:shadow-custom-7 ${openMenu === "menu5" ? 'menu-active' : ''}`}>Open days
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img1.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>
                    {openMenu === 'menu5' && (
                    <div className="megamenu bg-neutral-50 lg:bg-white shadow-custom-5 absolute top-[94px] left-[0] right-[0]">
                        <div className='back-navigation lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Link 1
                        </div>                        
                        <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                <Menucategory1card />
                                <Menucategory2card />
                                <Menucategory1x1card />
                                <Menucategory1x1card />
                            </section>
                        </div>
                    </div>
                    )} 
                </li>
                <li>
                    <Link onClick={() => megaMenu('menu6')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 lg:bg-transparent lg:hover:shadow-custom-7 ${openMenu === "menu6" ? 'menu-active' : ''}`}>Rankings
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img1.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>
                    {openMenu === 'menu6' && (
                    <div className="megamenu bg-neutral-50 lg:bg-white shadow-custom-5 absolute top-[94px] left-[0] right-[0]">
                        <div className='back-navigation lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Link 1
                        </div>                        
                        <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                <Menucategory1card />
                                <Menucategory2card />
                                <Menucategory4card />
                                <Menucategory4card />
                            </section>
                        </div>
                    </div>
                    )} 
                </li>
                <li><Link onClick={() => megaMenu('menu7')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 lg:bg-transparent lg:hover:shadow-custom-7 ${openMenu === "menu7" ? 'menu-active' : ''}`}>Advice
                <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img1.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                </Link>
                {openMenu === 'menu7' && (
                    <div className="megamenu bg-neutral-50 lg:bg-white shadow-custom-5 absolute top-[94px] left-[0] right-[0]">
                        <div className='back-navigation lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300'>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Link 1
                        </div>                        
                        <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                <Menucategory1card />
                                <Menucategory1card />
                                <Menucategory2card />
                                <Menucategory1x1card />
                            </section>
                        </div>
                    </div>
                    )} 
                </li>
            </ul>
        </nav>
        <div className='menu-close-card lg:hidden'>
            <div className='menu-close bg-neutral-900 p-[8px]'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
    </> 
  )
}

export default Megamenucomponents