import FiveStarRatings from "./FiveStarRatings";

const CategoryReviewCard: React.FC<any> = () => {
    return (
        <div className='flex flex-col gap-[8px]'>
            <div className='category-rank flex items-center gap-[8px]'>
                <span className="reviewLink small font-semibold text-grey300">University rating</span>
                <FiveStarRatings overallRating={4} />
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
    )
}

export default CategoryReviewCard;