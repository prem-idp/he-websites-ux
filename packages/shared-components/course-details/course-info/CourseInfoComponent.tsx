
import Keystatscomponents from './KeyStatsComponent';
import ReviewComponent from '../common-components/ReviewComponent';
import ReadMoreLessDesc from './ReadMoreLessDesc';
import { CourseSection } from '../models/course.model';
import Reviewscomponents from "@packages/shared-components/common-utilities/slider/reviews/reviewscomponents"

interface CourseInfoComponentProps {
  courseInfo: any,
  keyStats: any,
  sectionInfo: any
}

const CourseInfoComponent = ({ courseInfo, keyStats, sectionInfo }: any) => {

  // if (!sectionInfo)
  //   return
  return (
    <div id={sectionInfo?.sectionId} className='courseinfo-container'>
      <div className="max-w-container mx-auto">
        <div className='courseinfo-card-container flex flex-col lg:flex-row justify-between gap-[20px] pb-[40px]'>
          <div className='h5 w-full md:w-[289px] px-[16px] md:px-[20px] xl:px-[0]'>Course info</div>
          <div className='flex flex-col gap-[20px] w-full lg:w-[calc(100%_-_309px)]'>
            <ReadMoreLessDesc text={courseInfo?.courseSummary} />
            <Keystatscomponents {...keyStats} tooltipList={sectionInfo?.mediaCardsCollection} />
            <Reviewscomponents heading="What student say" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseInfoComponent;