import React from 'react'
import Reviewslidercomponents from '../slider/reviewslidercomponents'

const Reviewsliderskeleton = () => {
  return (
    <div className="max-w-container mx-auto">
        <div className="reviews-card-container py-[34px] lg:py-[60px] lg:px-[0]">
            <div className="reviews-header px-[16px] mb-[26px]  md:px-[20px] xl:px-[0] xl:mb-[32px]">
                <div className="skeleton skeleton-text-animated small_heading !w-[20%]"></div>
                <div className="skeleton skeleton-text-animated page-heading !w-[60%]"></div>
            </div>
            <div className="reviews-inner-wrap"> 
                        <div className='reviews-course-container'>
                            <div className='reviews-inner-wrap flex flex-col md:flex-row justify-start gap-[16px] px-[16px] md:px-[20px] lg:px-[0]'>
                                <div className="reviews-card flex flex-col bg-white p-[16px] rounded-[8px] border border-grey-200 shadow-custom-2 w-full md:w-[48%] lg:w-[33.3%]">
                                        <div className="review-card-header flex items-center gap-[8px] border-b border-neutrale-200 pb-[16px]">
                                        <div className="skeleton skeleton-text skeleton-circle-img skeleton-text-animated !m-[0]"></div>
                                            <div className="review-box__details flex flex-col justify-center w-[calc(100%_-_48px)]">
                                            <div className="review-box__name font-semibold small text-grey300 line-clamp-1">
                                                <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[50%]"></div>
                                            </div>
                                            <div className="review-box__uniname small text-grey300 line-clamp-1">
                                                <div className="skeleton skeleton-text skeleton-text-animated title !w-[70%]"></div>
                                            </div>
                                            <div className="review-rating flex justify-start gap-[5px] mt-[6px]">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="review-card-footer flex flex-col gap-[4px] pt-[12px]">
                                            <div className="reviewed__date x-small text-grey-500">
                                                <div className="skeleton skeleton-text skeleton-text-animated !w-[30%]"></div>
                                            </div>
                                            <div className="reviewed__date font-semibold para line-clamp-1">
                                                <div className="skeleton skeleton-text skeleton-text-animated small_heading"></div>
                                            </div>
                                            <div className="reviewed__date small text-grey-500 line-clamp-3">
                                                <div className="skeleton skeleton-text skeleton-text-animated"></div>
                                                <div className="skeleton skeleton-text skeleton-text-animated"></div>
                                            </div>
                                            <div className="reviewed__date font-semibold small text-primary-400">
                                                <div className="skeleton skeleton-text skeleton-text-animated !w-[30%]"></div>
                                            </div>
                                        </div>
                                </div>
                                <div className="reviews-card flex flex-col bg-white p-[16px] rounded-[8px] border border-grey-200 shadow-custom-2 w-full md:w-[48%] lg:w-[33.3%]">
                                        <div className="review-card-header flex items-center gap-[8px] border-b border-neutrale-200 pb-[16px]">
                                        <div className="skeleton skeleton-text skeleton-circle-img skeleton-text-animated !m-[0]"></div>
                                            <div className="review-box__details flex flex-col justify-center w-[calc(100%_-_48px)]">
                                            <div className="review-box__name font-semibold small text-grey300 line-clamp-1">
                                                <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[50%]"></div>
                                            </div>
                                            <div className="review-box__uniname small text-grey300 line-clamp-1">
                                                <div className="skeleton skeleton-text skeleton-text-animated title !w-[70%]"></div>
                                            </div>
                                            <div className="review-rating flex justify-start gap-[5px] mt-[6px]">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="review-card-footer flex flex-col gap-[4px] pt-[12px]">
                                            <div className="reviewed__date x-small text-grey-500">
                                                <div className="skeleton skeleton-text skeleton-text-animated !w-[30%]"></div>
                                            </div>
                                            <div className="reviewed__date font-semibold para line-clamp-1">
                                                <div className="skeleton skeleton-text skeleton-text-animated small_heading"></div>
                                            </div>
                                            <div className="reviewed__date small text-grey-500 line-clamp-3">
                                                <div className="skeleton skeleton-text skeleton-text-animated"></div>
                                                <div className="skeleton skeleton-text skeleton-text-animated"></div>
                                            </div>
                                            <div className="reviewed__date font-semibold small text-primary-400">
                                                <div className="skeleton skeleton-text skeleton-text-animated !w-[30%]"></div>
                                            </div>
                                        </div>
                                </div>
                                <div className="reviews-card flex flex-col bg-white p-[16px] rounded-[8px] border border-grey-200 shadow-custom-2 w-full md:w-[48%] lg:w-[33.3%]">
                                        <div className="review-card-header flex items-center gap-[8px] border-b border-neutrale-200 pb-[16px]">
                                        <div className="skeleton skeleton-text skeleton-circle-img skeleton-text-animated !m-[0]"></div>
                                            <div className="review-box__details flex flex-col justify-center w-[calc(100%_-_48px)]">
                                            <div className="review-box__name font-semibold small text-grey300 line-clamp-1">
                                                <div className="skeleton skeleton-text skeleton-text-animated page_heading !w-[50%]"></div>
                                            </div>
                                            <div className="review-box__uniname small text-grey300 line-clamp-1">
                                                <div className="skeleton skeleton-text skeleton-text-animated title !w-[70%]"></div>
                                            </div>
                                            <div className="review-rating flex justify-start gap-[5px] mt-[6px]">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#e6e6e6"/>
                                                </svg>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="review-card-footer flex flex-col gap-[4px] pt-[12px]">
                                            <div className="reviewed__date x-small text-grey-500">
                                                <div className="skeleton skeleton-text skeleton-text-animated !w-[30%]"></div>
                                            </div>
                                            <div className="reviewed__date font-semibold para line-clamp-1">
                                                <div className="skeleton skeleton-text skeleton-text-animated small_heading"></div>
                                            </div>
                                            <div className="reviewed__date small text-grey-500 line-clamp-3">
                                                <div className="skeleton skeleton-text skeleton-text-animated"></div>
                                                <div className="skeleton skeleton-text skeleton-text-animated"></div>
                                            </div>
                                            <div className="reviewed__date font-semibold small text-primary-400">
                                                <div className="skeleton skeleton-text skeleton-text-animated !w-[30%]"></div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-[16px] lg:mt-[20px]'>
                            <div className='flex items-center w-fit font-semibold small text-primary-400 hover:underline gap-[8px]'>
                                <div className="skeleton skeleton-text-animated page-heading !w-[100px]"></div>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.4814 0.814819L14.6666 6M14.6666 6L9.4814 11.1852M14.6666 6L1.33325 6" stroke="#e6e6e6" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                    </div>
            </div>
        </div>
      </div>
  )
}

export default Reviewsliderskeleton