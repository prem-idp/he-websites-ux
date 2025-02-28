import Link from "next/link"

export const DropDown = () => {
    return (
        <div className='hidden z-[1] bg-white shadow-custom-3 rounded-[4px] absolute left:0 md:right-0 top-[32px] w-[326px] md:w-[342px] group-hover:block'>
            <div className='w-fit px-[8px] py-[4px] x-small text-grey-500 bg-grey-100 font-bold rounded-[4px] m-[16px]'>RATING TYPE</div>
            <ul className='max-h-[280px] overflow-y-auto custom-scrollbar-2 overflow-hidden'>
                <li>
                    <Link
                        href="#"
                        className="block small text-grey300 font-normal px-[16px] py-[12px] underline  hover:underline"
                    >
                        University rating
                    </Link>
                </li>
                <li>
                    <Link
                        className="block small text-grey300  font-normal px-[16px] py-[12px]  hover:underline"
                        href="#"
                    >
                        X rating
                    </Link>
                </li>
                <li>
                    <Link
                        className="block small text-grey300 font-normal px-[16px] py-[12px]  hover:underline"
                        href="#"
                    >
                        X rating
                    </Link>
                </li>
                <li>
                    <Link
                        className="block small text-grey300 font-normal px-[16px] py-[12px]  hover:underline"
                        href="#"
                    >
                        X rating
                    </Link>
                </li>
                <li>
                    <Link
                        className="block small text-grey300 font-normal px-[16px] py-[12px]  hover:underline"
                        href="#"
                    >
                        X rating
                    </Link>
                </li>
            </ul>
        </div>
    )
}