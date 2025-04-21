import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Findacoursecomponents = () => {
  return (
          <section className="bg-orange-100">
            <div className="max-w-container mx-auto">
              <div className="flex flex-col-reverse md:flex-row justify-between gap-[16px] p-[16px]  md:p-[0_20px_26px_20px] lg:py-0 xl:px-0 min-h-[194px]">
                <div className="w-full flex flex-col flex-grow gap-[16px] self-center md:self-end lg:p-[16px_0_38px]">
                  <div className="flex flex-col gap-[4px]">
                    <h1 className="text-heading1 md:text-heading-xl">Find a course</h1>
                    {/* <p className="small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent a risus
                    </p> */}
                  </div>
                  {/* -- */}
                  <div className="w-full lg:max-w-[680px]">
                              <div className="flex flex-col gap-[24px] min-h-[60px]">
                                <div className="bg-white rounded-[32px] p-[16px] border border-neutral300 hover:border-primary-500 shadow-custom-1 md:pl-[24px] md:p-[10px]">
                                  <div className="flex flex-col items-stretch md:flex-row md:items-center">
                                    <div className="relative mt-[4px] mb-[20px] md:mb-[0] shrink-0">
                                      <button
                                         className="flex items-center justify-between gap-[4px] mr-0 w-full small text-black md:w-[160px] md:mr-[16px]"
                                        type="button"
                                      >
                                        Access & foundation
                                        <Image
                                          src="/assets/icons/arrow_down_black.svg"
                                          width="20"
                                          height="20"
                                          alt="Search icon"
                                        />
                                      </button>
                                        <div className="hidden w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-[-16px] top-[43px] overflow-hidden lg:w-[192px]">
                                          <ul>
                                            <li>
                                              <Link
                                                href="#"
                                                className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                              >
                                                Undergraduate
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                                href="#"
                                              >
                                                HND / HNC
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                                href="#"
                                              >
                                                Foundation degree
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                                href="#"
                                              >
                                                Access & foundation
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                                href="#"
                                              >
                                                Postgraduate
                                              </Link>
                                            </li>
                                          </ul>
                                        </div>
                                    </div>
                                    <div
                                      className="w-full relative border-y-[1px] border-neutral200 grow md:border-l md:border-y-0">
                                      <div className="flex items-center my-[12px] md:my-[0]">
                                        <input
                                          type="text"
                                          className="form-control w-full focus:outline-none small text-black placeholder:text-gray-500 px-[0] py-[11px] md:px-[16px]"
                                          aria-label="submenu"
                                          placeholder="Enter subject"
                                        />
                                      </div>
                                      <div className="hidden w-full z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left-0 top-[54px] max-h-[311px] overflow-y-scroll custom-scrollbar-2 overflow-hidden">
                                          <Link href="">
                                            <div className="px-[16px] py-[12px]">
                                              <p className="x-small font-semibold text-black tracking-[1px] leading-[18px]">
                                                KEYWORD SEARCH FOR
                                              </p>
                                              <p className="small text-primary-400">
                                                Law
                                              </p>
                                            </div>
                                          </Link>
                                          <ul>
                                            <li>
                                              <Link
                                                href="#"
                                                className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                              >
                                                Law
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                                href="#"
                                              >
                                                Law / Legal Studies
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                                href="#"
                                              >
                                                Law (Specific Statutes)
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                                href="#"
                                              >
                                                Asian Law
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                                href="#"
                                              >
                                                Civil Law
                                              </Link>
                                            </li>
                                            <li>
                                              <Link
                                                className="block small px-[16px] py-[12px] hover:bg-blue-50 hover:underline"
                                                href="#"
                                              >
                                                Family Law
                                              </Link>
                                            </li>
                                          </ul>
                                      </div>
                                    </div>
                                    <div className="pt-[24px] md:pt-[0]">
                                      <button
                                        type="submit"
                                        className="btn btn-primary w-full flex items-center justify-center gap-[6px] px-[24px] py-[10px] para md:w-[138px] lg:para-lg"
                                      >
                                        <Image
                                          src="/assets/icons/search_icon.svg"
                                          width="18"
                                          height="18"
                                          alt="Search icon"
                                        />
                                        Search
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                          </div>
                  {/* -- */}
                </div>
                <div className="flex self-end justify-center w-full shrink-0 md:w-[219px] lg:w-[392px] pt-[12px]">
                  <div className="w-[108px] md:w-[205px]">
                    <Image
                      src="/assets/images/article/slice_1.png"
                      className="w-full"
                      width={205}
                      height={260}
                      priority
                      alt="Colc Banner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Findacoursecomponents