export const PercentageBar = ({ name, percentage = 0 }: { name: string, percentage: number | string }) => {
    return (
        <div className='w-full flex flex-col gap-[8px]'>
            <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-[8px] md:gap-[16px]'>
                <div className='w-fit md:w-[205px] order-1 md:order-none small text-grey300'>{name}</div>
                <div className="progess-bar flex items-center order-3 md:order-none w-full bg-grey-200 rounded-[2px] h-[4px]">
                    <div className={`progess-bar__line transition-all duration-[3s] bg-primary-200 rounded-[4px] h-[8px] w-[${percentage}%]`}></div>
                </div>
                <div className='w-fit md:w-[42px] order-2 md:order-none small font-semibold text-grey300'>{percentage}%</div>
            </div>
        </div>
    )
}