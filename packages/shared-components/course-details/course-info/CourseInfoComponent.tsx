
import Keystatscomponents from './KeyStatsComponent';
import ReviewComponent from '../common-components/ReviewComponent';
import ReadMoreLessDesc from './ReadMoreLessDesc';
import { CourseSection } from '../models/course.model';
import Reviewscomponents from "@packages/shared-components/common-utilities/slider/reviews/reviewscomponents"

interface CourseInfoComponentProps extends CourseSection {

}
interface CourseInfoComponentProps {
  courseInfo: any,
  keyStats: any
}

const CourseInfoComponent = ({ sectionId, sectionName, courseInfo, keyStats }: CourseInfoComponentProps) => {

  return (
    <div id={sectionId} className='courseinfo-container'>
      <div className="max-w-container mx-auto">
        <div className='courseinfo-card-container flex flex-col lg:flex-row justify-between gap-[20px] pb-[40px]'>
          <div className='h5 w-full md:w-[289px] px-[16px] md:px-[20px] xl:px-[0]'>{sectionName}</div>
          <div className='flex flex-col gap-[20px] w-full lg:w-[calc(100%_-_309px)]'>
            <ReadMoreLessDesc text={courseInfo?.courseSummary} />
            <Keystatscomponents {...keyStats} />
            {/* <div className='mt-[8px]'> */}
            <Reviewscomponents heading="What student say" />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseInfoComponent;