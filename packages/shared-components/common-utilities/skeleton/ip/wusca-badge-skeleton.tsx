import React from 'react'

const WuscaBadgeSkeleton = ({ wuscaCard = false }) => {
    const wuscabadge = Number(4);

    if (!wuscaCard) return null;
    const wuscaAward = [
        { image: "/static/assets/images/gold-university-of-the-year.svg", badge: "Winner", title: "1st", titleDescrition: "101", description: "University of the Year" },
        { image: "/static/assets/images/gold-university-of-the-year.svg", badge: "Winner", title: "1st", titleDescrition: "101", description: "Halls and student accommodation" },
        { image: "/static/assets/images/bronze-student-life.svg", badge: "Third place", title: "3rd", titleDescrition: "101", description: "Student life" },
        { image: "/static/assets/images/gold-university-of-the-year.svg", badge: "Winner", title: "1st", titleDescrition: "101", description: "University of the Year" }
    ]
    const tooltipQuestion: string = "Why should you trust our uni reviews?";
    const tooltipAnswer: string =
        "All our reviews are from real students, submitted using their verified university email address.";

    const tooltipStyles: string = `z-[5] absolute select-none hidden group-hover:flex border border-grey-200 
                                      top-[25px] shadow-custom-1 whitespace-normal normal-case rounded-[8px] max-w-[100%] 
                                      md:min-w-[215px] min-w-[200px] left-[-16px] md:left-0  bg-white p-[12px] flex-col 
                                      gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white 
                                      after:left-[30px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 
                                      after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0`;
    return (
        <div className="bg-neutral-100 flex flex-col gap-[16px] p-[16px] border-b border-grey-200">
            <div className="flex gap-[4px] md:items-center">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.5127 19.85L16.8527 19.61L16.1127 18.11C15.8527 17.59 15.4427 17.59 15.1827 18.11L14.4427 19.61L12.7827 19.85C12.2127 19.93 12.0827 20.33 12.4927 20.73L13.6927 21.9L13.4127 23.55C13.3127 24.12 13.6527 24.36 14.1627 24.09L15.6527 23.31L17.1327 24.09C17.6427 24.36 17.9827 24.12 17.8827 23.55L17.6027 21.9L18.8027 20.73C19.2127 20.32 19.0827 19.93 18.5127 19.85ZM24.5627 2H18.0827C17.8127 2 17.5627 2.15 17.4327 2.39L13.0227 10.4C13.8627 10.19 14.7427 10.06 15.6427 10.06C17.4627 10.06 19.1827 10.52 20.6927 11.32L25.2127 3.11C25.4927 2.61 25.1327 2 24.5627 2Z"
                        fill="#d4d4d4"
                    />
                    <path
                        d="M14.5228 3.82L13.8728 2.64C13.7428 2.4 13.4928 2.25 13.2228 2.25H6.74282C6.17282 2.25 5.82282 2.86 6.09282 3.35L10.4428 11.25L14.5228 3.82ZM15.6528 11.91C10.6628 11.91 6.61282 15.96 6.61282 20.95C6.61282 25.95 10.6628 30 15.6528 30C20.6428 30 24.6928 25.95 24.6928 20.96C24.6928 15.96 20.6428 11.92 15.6528 11.91ZM15.6528 26.28C12.7128 26.28 10.3228 23.9 10.3228 20.95C10.3228 18.01 12.7028 15.62 15.6528 15.62C18.5928 15.62 20.9828 18 20.9828 20.95C20.9828 23.9 18.5928 26.28 15.6528 26.28Z"
                        fill="#d4d4d4"
                    />
                </svg>
                <span className="para-lg font-semibold skeleton skeleton-text-animated descrip !w-[50%]">
                </span>
            </div>
            <div
                className={`grid grid-cols-1 gap-[16px] ${wuscabadge == 4 ? "md:grid-cols-2" : wuscabadge === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}
            >
                {wuscaAward.map((item, index) => (
                    <div className="flex items-center gap-[16px]" key={index}>
                        <div className="skeleton skeleton-square-img skeleton-text-animated !w-[124px] !h-[113px] !rounded-none"></div>
                        <div className="flex flex-col gap-[4px] grow">
                            <div className='skeleton skeleton-square-img skeleton-text-animated !w-[150px] !h-[20px] !rounded-[4px] !m-0'></div>
                            <div className="flex items-center gap-[8px]">
                                <span className="skeleton skeleton-text-animated large_heading !w-[20%]"></span>
                                <span className="small skeleton skeleton-text-animated descrip !w-[20%]"></span>
                            </div>
                            <div className="relative group">
                                <div className="skeleton skeleton-text-animated descrip !w-[50%]"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WuscaBadgeSkeleton