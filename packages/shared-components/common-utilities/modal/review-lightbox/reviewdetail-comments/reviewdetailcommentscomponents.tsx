import Link from 'next/link'
import React from 'react'

const Reviewdetailcommentscomponents = () => {
  return (
    <>
    {/* -- container no loop */}
    <div className='review-comments-card pb-[24px]'> 
        <div className='review-comments flex flex-col gap-[24px]'>
            <div className='review-comments__col w-full'>
                <div className='flex items-center gap-[16px]'>
                    <div className='reviewer__avatar flex items-center justify-center min-w-[80px] w-[80px] h-[80px] bg-primary-200 text-heading4 font-bold text-grey-50 uppercase rounded-[80px]'>jd</div>
                    <div className='flex flex-col flex-1 *:text-x-small *:text-grey300 *:text-left'>
                        <div className='font-semibold'>Joan Doe</div>
                        <p>Aged 18-24</p>
                        <p>First gen student</p>
                    </div>
                </div>
            </div>
            <div className='review-comments__col flex-1'>
                <div className='flex flex-col flex-1 gap-[24px]'>
                    <div className='flex flex-col flex-1 *:text-grey300'>
                        <div className='x-small'>Reviewed: March 2022</div>
                        <div className='flex flex-col gap-[4px]'>
                            <div className='para font-semibold'>University of Portsmouth</div>
                            <Link className='small text-primary-400 hover:text-primary-500 hover:underline' href='#'>Business and Management MSc (Hons)</Link>
                        </div>
                    </div>
                    <div className='review-body flex flex-col gap-[16px]'>
                        <div className='flex flex-col gap-[20px]'>
                            {/* -- loop */}
                                <div className='flex flex-col gap-[8px]'>
                                    <div className='category-rank flex items-center gap-[8px]'>
                                            <span className="reviewLink small font-semibold text-grey300">University rating</span>
                                            <div className='flex gap-[4px] items-center'>
                                                <div className='flex gap-[4px]'>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                </div>
                                                <span className='small text-grey300'>(4.6)</span>
                                            </div>                                             
                                    </div>
                                    <div className='x-small text-grey300 mt-[-4px]'>Winchester Hall</div>
                                    <p className='small text-grey300 '>I started on the wrong course for me but was supported greatly in the transition to something better suited! All the stuff are so lovely and I feel truly cared for by my teachers. I have learned so much already and have been inspired from being surrounded by so much passion and talent. There are so many opportunities to play and create in a range of ensembles, and I am happy here.</p>
                                    <ul className='flex flex-wrap gap-x-[16px] gap-y-[2px] *:text-small *:text-grey300 *:font-semibold'>
                                            <li>Lecturers and teaching quality 5.0</li>
                                            <li>Work placements and internships 5.0</li>
                                            <li>Lecturers and teaching quality 5.0</li>
                                            <li>Tutor contact time 5.0</li>
                                            <li>course content 5.0</li>
                                            <li>Subject facilities 5.0</li>
                                            <li>Career prospects 1.5</li>
                                    </ul>
                                </div>    
                            {/* -- loop */}
                            {/* -- loop */}
                                <div className='flex flex-col gap-[8px]'>
                                    <div className='category-rank flex items-center gap-[8px]'>
                                            <span className="reviewLink small font-semibold text-grey300">University rating</span>
                                            <div className='flex gap-[4px] items-center'>
                                                <div className='flex gap-[4px]'>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                </div>
                                                <span className='small text-grey300'>(4.6)</span>
                                            </div>                                             
                                    </div>
                                    <div className='x-small text-grey300 mt-[-4px]'>Winchester Hall</div>
                                    <p className='small text-grey300 '>I started on the wrong course for me but was supported greatly in the transition to something better suited! All the stuff are so lovely and I feel truly cared for by my teachers. I have learned so much already and have been inspired from being surrounded by so much passion and talent. There are so many opportunities to play and create in a range of ensembles, and I am happy here.</p>
                                    <ul className='flex flex-wrap gap-x-[16px] gap-y-[2px] *:text-small *:text-grey300 *:font-semibold'>
                                        <li>Lecturers and teaching quality 5.0</li>
                                        <li>Work placements and internships 5.0</li>
                                        <li>Lecturers and teaching quality 5.0</li>
                                        <li>Tutor contact time 5.0</li>
                                        <li>course content 5.0</li>
                                        <li>Subject facilities 5.0</li>
                                        <li>Career prospects 1.5</li>
                                    </ul>
                                </div>
                            {/* -- loop */}
                            {/* -- loop */}
                                <div className='flex flex-col gap-[8px]'>
                                    <div className='category-rank flex items-center gap-[8px]'>
                                            <span className="reviewLink small font-semibold text-grey300">University rating</span>
                                            <div className='flex gap-[4px] items-center'>
                                                <div className='flex gap-[4px]'>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                </div>
                                                <span className='small text-grey300'>(4.6)</span>
                                            </div>                                             
                                    </div>
                                    <div className='x-small text-grey300 mt-[-4px]'>Winchester Hall</div>
                                    <p className='small text-grey300 '>I started on the wrong course for me but was supported greatly in the transition to something better suited! All the stuff are so lovely and I feel truly cared for by my teachers. I have learned so much already and have been inspired from being surrounded by so much passion and talent. There are so many opportunities to play and create in a range of ensembles, and I am happy here.</p>
                                    <ul className='flex flex-wrap gap-x-[16px] gap-y-[2px] *:text-small *:text-grey300 *:font-semibold'>
                                            <li>Lecturers and teaching quality 5.0</li>
                                            <li>Work placements and internships 5.0</li>
                                            <li>Lecturers and teaching quality 5.0</li>
                                            <li>Tutor contact time 5.0</li>
                                            <li>course content 5.0</li>
                                            <li>Subject facilities 5.0</li>
                                            <li>Career prospects 1.5</li>
                                    </ul>
                                </div>    
                            {/* -- loop */}
                            {/* -- loop */}
                                <div className='flex flex-col gap-[8px]'>
                                    <div className='category-rank flex items-center gap-[8px]'>
                                            <span className="reviewLink small font-semibold text-grey300">University rating</span>
                                            <div className='flex gap-[4px] items-center'>
                                                <div className='flex gap-[4px]'>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.85874 1.14803C8.21796 0.0424542 9.78205 0.0424547 10.1413 1.14803L11.4248 5.09818C11.5854 5.59261 12.0462 5.92736 12.566 5.92736H16.7195C17.8819 5.92736 18.3653 7.4149 17.4248 8.09818L14.0646 10.5395C13.644 10.8451 13.468 11.3867 13.6287 11.8812L14.9122 15.8313C15.2714 16.9369 14.006 17.8562 13.0656 17.173L9.70535 14.7316C9.28477 14.426 8.71525 14.426 8.29466 14.7316L4.93446 17.173C3.994 17.8562 2.72863 16.9369 3.08785 15.8313L4.37133 11.8812C4.53198 11.3867 4.35599 10.8451 3.93541 10.5395L0.575205 8.09818C-0.365252 7.4149 0.118079 5.92736 1.28055 5.92736H5.43399C5.95386 5.92736 6.41461 5.59261 6.57525 5.09818L7.85874 1.14803Z" fill="#0FBEFD"/>
                                                    </svg>
                                                </div>
                                                <span className='small text-grey300'>(4.6)</span>
                                            </div>                                             
                                    </div>
                                    <div className='x-small text-grey300 mt-[-4px]'>Winchester Hall</div>
                                    <p className='small text-grey300 '>I started on the wrong course for me but was supported greatly in the transition to something better suited! All the stuff are so lovely and I feel truly cared for by my teachers. I have learned so much already and have been inspired from being surrounded by so much passion and talent. There are so many opportunities to play and create in a range of ensembles, and I am happy here.</p>
                                    <ul className='flex flex-wrap gap-x-[16px] gap-y-[2px] *:text-small *:text-grey300 *:font-semibold'>
                                            <li>Lecturers and teaching quality 5.0</li>
                                            <li>Work placements and internships 5.0</li>
                                            <li>Lecturers and teaching quality 5.0</li>
                                            <li>Tutor contact time 5.0</li>
                                            <li>course content 5.0</li>
                                            <li>Subject facilities 5.0</li>
                                            <li>Career prospects 1.5</li>
                                    </ul>
                                </div>    
                            {/* -- loop */}                                                
                            {/* <div className='w-fit cursor-pointer underline'>- Read less</div>     */}
                        </div>        
                        <div className='flex gap-[8px] items-center w-fit small text-grey300  cursor-pointer'>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.66732 15.1667H2.66732C2.3137 15.1667 1.97456 15.0262 1.72451 14.7762C1.47446 14.5261 1.33398 14.187 1.33398 13.8333V9.16668C1.33398 8.81306 1.47446 8.47392 1.72451 8.22387C1.97456 7.97382 2.3137 7.83334 2.66732 7.83334H4.66732M9.33398 6.50001V3.83334C9.33398 3.30291 9.12327 2.7942 8.7482 2.41913C8.37313 2.04406 7.86442 1.83334 7.33398 1.83334L4.66732 7.83334V15.1667H12.1873C12.5089 15.1703 12.8209 15.0576 13.0659 14.8493C13.3109 14.6411 13.4724 14.3513 13.5207 14.0333L14.4407 8.03334C14.4697 7.84225 14.4568 7.64713 14.4029 7.46151C14.349 7.27589 14.2554 7.10421 14.1286 6.95835C14.0017 6.8125 13.8447 6.69596 13.6684 6.61682C13.492 6.53768 13.3006 6.49782 13.1073 6.50001H9.33398Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className='small text-grey300 underline'>67</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* -- container no loop */}
    </>
  )
}

export default Reviewdetailcommentscomponents


