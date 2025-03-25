import Link from "next/link";

const FavouritedToolTip: React.FC<any> = ({ onClose }) => {
    return (
        <div className="absolute z-[1] select-none flex border border-grey-200 top-[43px] shadow-custom-1 whitespace-normal rounded-[8px] w-[320px] right-0 bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:right-[18px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0">
            <div className="flex items-center justify-between">
                <span className="text-grey900 font-semibold">
                    We have added this to your comparison
                </span>
                <svg
                    onClick={(event) => onClose(event)}
                    className="cursor-pointer"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18 6L6 18"
                        stroke="#333333"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 6L18 18"
                        stroke="#333333"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <Link
                href="/degrees/comparison"
                className="flex items-center gap-[4px] w-fit text-primary-400 hover:underline"
            >
                View all comparison
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.23441 2.63471C8.54683 2.32229 9.05336 2.32229 9.36578 2.63471L14.1658 7.43471C14.4782 7.74713 14.4782 8.25366 14.1658 8.56608L9.36578 13.3661C9.05336 13.6785 8.54683 13.6785 8.23441 13.3661C7.92199 13.0537 7.92199 12.5471 8.23441 12.2347L11.6687 8.80039L2.4001 8.80039C1.95827 8.80039 1.6001 8.44222 1.6001 8.00039C1.6001 7.55856 1.95827 7.20039 2.4001 7.20039H11.6687L8.23441 3.76608C7.92199 3.45366 7.92199 2.94712 8.23441 2.63471Z"
                        fill="#3460DC"
                    />
                </svg>
            </Link>
        </div>
    )
}

export default FavouritedToolTip;