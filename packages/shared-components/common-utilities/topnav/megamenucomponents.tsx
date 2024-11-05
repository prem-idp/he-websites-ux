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
import { isMobile } from 'react-device-detect';

const Megamenucomponents = () => {

    const [openMenu, setOpenMenu] = useState<string | boolean>(false);
    const megaMenu = (menuId: string) => {
        setOpenMenu(openMenu === menuId ?  false: menuId);
        if (openMenu === menuId ?  false: menuId){
            document.body.classList.add("overflow-y-hidden");
        }
        else{
            document.body.classList.remove("overflow-y-hidden");
        }
    };

    const [isMobileView, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(isMobile);
        const handleResize = () => {
          setIsMobile(isMobile);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


  return (
    <>
        <div className='flex lg:items-center lg:justify-center'>
        <nav className="p-[16px] w-[335px] h-[100vh] overflow-y-scroll bg-white lg:p-0 lg:w-fit lg:h-auto lg:overflow-y-visible">
            <ul className="flex flex-col lg:flex-row gap-[10px] lg:gap-[24px] justify-center">
                <li>
                    <Link onClick={() => megaMenu('menu1')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 hover:bg-neutral300 lg:hover:bg-transparent lg:bg-transparent 
                        lg:hover:shadow-custom-7`}>Find a course
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img1.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>
                    {isMobileView ? (
                        
                        <div className={`${openMenu == 'menu1' ? 'translate-x-0 opacity-[1]' : '-translate-x-full opacity-0'} megamenu !fixed top-0 right-auto w-[335px] bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] transition-all duration-300 ease-in-out`}>
                        <div onClick={() => megaMenu('menu1')} className={`back-navigation font-bold flex items-center gap-[10px] p-[16px] border-b border-b-neutral300`}>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Link 1
                        </div>
                        <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-4  lg:gap-[16px] p-[0] lg:p-[24px h-[calc(100vh_-_40px)] overflow-y-scroll pb-[40px]">
                                <Menucategory1card />
                                <Menucategory2card />
                                <Menucategory2card />
                                <Menucategory4card />
                            </section>
                        </div>
                    </div>
                    )
                    : (
                        <>    
                        {openMenu === 'menu1' && (
                            <>
                        <div onClick={() => megaMenu('menu1')} className={`${openMenu ? "animate-fadeIn block" : "hidden"} backdrop-shadow absolute top-[76px] left-0 right-0 bottom-0 z-[5] h-[100vh]`}></div>
                        <div className={`${openMenu ? 'block animate-fadeIn' : 'hidden animate-fadeOut'} megamenu bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] right-[0] z-[5] lg:border-t lg:border-grey-300`}>
                            <div className="max-w-container mx-auto">
                                <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                    <Menucategory1card />
                                    <Menucategory2card />
                                    <Menucategory2card />
                                    <Menucategory4card />
                                </section>
                            </div>
                        </div>
                    </>
                    )}
                    </>
                    )}                         
                </li>
                <li>
                    <Link onClick={() => megaMenu('menu2')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 hover:bg-neutral300 lg:hover:bg-transparent lg:bg-transparent lg:hover:shadow-custom-7`}>Find a uni
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img2.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>
                    {isMobileView ? (
                      <div className={`${openMenu == 'menu2' ? 'translate-x-0 opacity-[1]' : '-translate-x-full opacity-0'} megamenu !fixed top-0 right-auto w-[335px] bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] transition-all duration-300 ease-in-out`}>
                      <div onClick={() => megaMenu('menu2')} className={`back-navigation font-semibold lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300`}>
                          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Link 2
                      </div>
                      <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-[610px_auto_auto] lg:gap-[16px] p-[0] lg:p-[24px]  h-[calc(100vh_-_40px)] pb-[40px] overflow-y-scroll">
                                <Menucategory1x2card />
                                <Menucategory2card />
                                <Menucategory2card />
                            </section>
                        </div>
                      </div>
                    )
                    :(
                    <>    
                        {openMenu === 'menu2' && (
                        <>
                        <div onClick={() => megaMenu('menu2')} className={`${openMenu ? "animate-fadeIn block" : "hidden"} backdrop-shadow absolute top-[76px] left-0 right-0 bottom-0 z-[5] h-[100vh] `}></div>       
                        <div className={`${openMenu ? 'block animate-fadeIn' : 'hidden animate-fadeOut'} megamenu bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] right-[0] z-[5] lg:border-t lg:border-grey-300`}>
                            <div className="max-w-container mx-auto">
                                <section className="grid grid-cols-1 lg:grid-cols-[610px_auto_auto] lg:gap-[16px] p-[0] lg:p-[24px]">
                                    <Menucategory1x2card />
                                    <Menucategory2card />
                                    <Menucategory2card />
                                </section>
                            </div>
                        </div>
                        </>
                        )}
                    </>
                    )}
                </li>
                <li>
                    <Link onClick={() => megaMenu('menu3')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 hover:bg-neutral300 lg:hover:bg-transparent lg:bg-transparent lg:hover:shadow-custom-7 ${openMenu === "menu3" ? 'menu-active' : ''}`}>Careers
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img3.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>
                    {isMobileView ? (
                        <div className={`${openMenu == 'menu3' ? 'translate-x-0 opacity-[1]' : '-translate-x-full opacity-0'} megamenu !fixed top-0 right-auto w-[335px] bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] transition-all duration-300 ease-in-out`}>
                            <div onClick={() => megaMenu('menu3')} className={`back-navigation font-semibold lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300`}>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Link 3
                            </div>
                            <div className="max-w-container mx-auto">
                                <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px] h-[calc(100vh_-_40px)] pb-[40px] overflow-y-scroll">
                                    <Menucategory1card />
                                    <Menucategory2card />
                                    <Menucategory1card />
                                    <Menucategory4card />
                                </section>
                            </div>                            
                        </div>
                    ):(
                        <>    
                            {openMenu === 'menu3' && (
                            <>
                                <div onClick={() => megaMenu('menu3')} className={`${openMenu ? "animate-fadeIn block" : "hidden"} backdrop-shadow absolute top-[76px] left-0 right-0 bottom-0 z-[5] h-[100vh] `}></div>    
                                <div className={`${openMenu ? 'block animate-fadeIn' : 'hidden animate-fadeOut'} megamenu bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] right-[0] z-[5] lg:border-t lg:border-grey-300`}>
                                    <div className="max-w-container mx-auto">
                                        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                            <Menucategory1card />
                                            <Menucategory2card />
                                            <Menucategory1card />
                                            <Menucategory4card />
                                        </section>
                                    </div>                                
                                </div>
                            </>        
                            )}
                        </>
                    )}   
                </li>
                <li>
                    <Link onClick={() => megaMenu('menu4')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 hover:bg-neutral300 lg:hover:bg-transparent lg:bg-transparent lg:hover:shadow-custom-7 ${openMenu === "menu4" ? 'menu-active' : ''}`}>Prospectuses
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img4.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>
                    {isMobileView ? (
                        <div className={`${openMenu == 'menu4' ? 'translate-x-0 opacity-[1]' : '-translate-x-full opacity-0'} megamenu !fixed top-0 right-auto w-[335px] bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] transition-all duration-300 ease-in-out`}>
                            <div onClick={() => megaMenu('menu4')} className={`back-navigation font-semibold lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300`}>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Link 4
                            </div>
                            <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px] h-[calc(100vh_-_40px)] pb-[40px] overflow-y-scroll">
                                <Menucategory1card />
                                <Menucategory3card />
                                <Menucategory2card />
                                <Menucategory4card />
                            </section>
                        </div>                        
                        </div>
                    ):(
                        <>    
                            {openMenu === 'menu4' && (    
                            <>
                                <div onClick={() => megaMenu('menu4')} className={`${openMenu ? "animate-fadeIn block" : "hidden"} backdrop-shadow absolute top-[76px] left-0 right-0 bottom-0 z-[5] h-[100vh] `}></div>
                                <div className={`${openMenu ? 'block animate-fadeIn' : 'hidden animate-fadeOut'} megamenu bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] right-[0] z-[5] lg:border-t lg:border-grey-300`}>
                                    <div className="max-w-container mx-auto">
                                        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                            <Menucategory1card />
                                            <Menucategory3card />
                                            <Menucategory2card />
                                            <Menucategory4card />
                                        </section>
                                    </div>                                
                                </div>
                            </>
                            )}
                        </>
                    )}
                </li>
                <li>
                    <Link onClick={() => megaMenu('menu5')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 hover:bg-neutral300 lg:hover:bg-transparent lg:bg-transparent lg:hover:shadow-custom-7 ${openMenu === "menu5" ? 'menu-active' : ''}`}>Open days
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img1.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>
                    {isMobileView ? (
                        <div className={`${openMenu == 'menu5' ? 'translate-x-0 opacity-[1]' : '-translate-x-full opacity-0'} megamenu !fixed top-0 right-auto w-[335px] bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] transition-all duration-300 ease-in-out`}>
                            <div onClick={() => megaMenu('menu5')} className={`back-navigation font-semibold lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300`}>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Link 5
                            </div>
                            <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px] h-[calc(100vh_-_40px)] pb-[40px] overflow-y-scroll">
                                <Menucategory1card />
                                <Menucategory2card />
                                <Menucategory1x1card />
                                <Menucategory1x1card />
                            </section>
                        </div>                        
                        </div>
                    ):(
                        <>    
                            {openMenu === 'menu5' && (
                            <>
                                <div onClick={() => megaMenu('menu5')} className={`${openMenu ? "animate-fadeIn block" : "hidden"} backdrop-shadow absolute top-[76px] left-0 right-0 bottom-0 z-[5] h-[100vh] `}></div>    
                                <div className={`${openMenu ? 'block animate-fadeIn' : 'hidden animate-fadeOut'} megamenu bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] right-[0] z-[5] lg:border-t lg:border-grey-300`}>
                                    <div className="max-w-container mx-auto">
                                        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                            <Menucategory1card />
                                            <Menucategory2card />
                                            <Menucategory1x1card />
                                            <Menucategory1x1card />
                                        </section>
                                    </div>                                    
                                </div>
                            </>    
                            )}
                        </>
                    )}
                </li>
                <li>
                    <Link onClick={() => megaMenu('menu6')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 lg:bg-transparent lg:hover:shadow-custom-7 ${openMenu === "menu6" ? 'menu-active' : ''}`}>Rankings
                    <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img1.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                    </Link>
                    {isMobileView ? (
                        <div className={`${openMenu == 'menu6' ? 'translate-x-0 opacity-[1]' : '-translate-x-full opacity-0'} megamenu !fixed top-0 right-auto w-[335px] bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] transition-all duration-300 ease-in-out`}>
                            <div onClick={() => megaMenu('menu6')} className={`back-navigation font-semibold lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300`}>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Link 6
                            </div>
                            <div className="max-w-container mx-auto">
                                <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px] h-[calc(100vh_-_40px)] pb-[40px] overflow-y-scroll">
                                    <Menucategory1card />
                                    <Menucategory2card />
                                    <Menucategory4card />
                                    <Menucategory4card />
                                </section>
                            </div>                        
                        </div>
                    ):(
                        <>    
                            {openMenu === 'menu6' && (
                            <>
                            <div onClick={() => megaMenu('menu6')} className={`${openMenu ? "animate-fadeIn block" : "hidden"} backdrop-shadow absolute top-[76px] left-0 right-0 bottom-0 z-[5] h-[100vh] `}></div>    
                                <div className={`${openMenu ? 'block animate-fadeIn' : 'hidden animate-fadeOut'} megamenu bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] right-[0] z-[5] lg:border-t lg:border-grey-300`}>
                                    <div className="max-w-container mx-auto">
                                        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                            <Menucategory1card />
                                            <Menucategory2card />
                                            <Menucategory4card />
                                            <Menucategory4card />
                                        </section>
                                    </div>                                    
                                </div>
                            </>    
                            )}
                        </>
                    )}
                </li>
                <li><Link onClick={() => megaMenu('menu7')} href="" className={`flex justify-between items-center px-[16px] py-[10px] lg:px-[0] font-semibold para text-grey300 bg-neutral100 hover:bg-neutral300 lg:hover:bg-transparent lg:bg-transparent lg:hover:shadow-custom-7 ${openMenu === "menu7" ? 'menu-active' : ''}`}>Advice
                <Image className="block lg:hidden rounded-[24px] outline outline-1 outline-neutral-200 outline-offset-2 !h-[44px]" src="/assets/images/megamenu/category-thumb-img1.png" width="44" height="44" quality={100} alt="Megamenu thumb" />
                </Link>
                {isMobileView ? (
                        <div className={`${openMenu == 'menu7' ? 'translate-x-0 opacity-[1]' : '-translate-x-full opacity-0'} megamenu !fixed top-0 right-auto w-[335px] bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] transition-all duration-300 ease-in-out`}>
                            <div onClick={() => megaMenu('menu7')} className={`back-navigation font-semibold lg:hidden flex items-center gap-[10px] p-[16px] border-b border-b-neutral300`}>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.44444 12.4444L1 6.99999M1 6.99999L6.44444 1.55554M1 6.99999L15 6.99999" stroke="#0F172A" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Link 7
                            </div>
                            <div className="max-w-container mx-auto">
                            <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px] h-[calc(100vh_-_40px)] pb-[40px] overflow-y-scroll">
                                <Menucategory1card />
                                <Menucategory1card />
                                <Menucategory2card />
                                <Menucategory1x1card />
                            </section>
                        </div>                            
                        </div>
                    ):(
                        <>    
                            {openMenu === 'menu7' && (
                            <>
                                <div onClick={() => megaMenu('menu7')} className={`${openMenu ? "animate-fadeIn block" : "hidden"} backdrop-shadow absolute top-[76px] left-0 right-0 bottom-0 z-[5] h-[100vh] `}></div>    
                                <div className={`${openMenu ? 'block animate-fadeIn' : 'hidden animate-fadeOut'} megamenu bg-neutral-50 lg:bg-white shadow-custom-5 lg:absolute lg:top-[76px] left-[0] right-[0] z-[5] lg:border-t lg:border-grey-300`}>
                                    <div className="max-w-container mx-auto">
                                        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-[16px] p-[0] lg:p-[24px]">
                                            <Menucategory1card />
                                            <Menucategory1card />
                                            <Menucategory2card />
                                            <Menucategory1x1card />
                                        </section>
                                    </div>                                    
                                </div>
                            </>    
                            )}
                        </>
                    )}
                  </li>
            </ul>
        </nav>
    </div>
    </> 
  )
}

export default Megamenucomponents