import Keystatscomponents from './KeyStatsComponent';
import ReviewComponent from '@packages/shared-components/course-details/common-components/ReviewComponent';
import ReadMoreLessDesc from './ReadMoreLessDesc';
import LazyLoadWrapper from '@packages/lib/utlils/lazyloadcomponent';
import Keystatsskeleton from "@packages/shared-components/skeleton/keystatsskeleton"


const CourseInfoComponent = ({ data, sectionInfo, loading }: any) => {
  const { courseInfo, keyStats, uniRankings } = data;
  // console.log(data)
  return (
    <div id={sectionInfo?.sectionId} className='courseinfo-container'>
      <div className="max-w-container mx-auto">
        <div className='courseinfo-card-container flex flex-col lg:flex-row justify-between gap-[20px] pb-[40px]'>
          <div className='h5 w-full md:w-[289px] px-[16px] md:px-[20px] xl:px-[0]'>Course info</div>
          <div className='flex flex-col gap-[20px] w-full lg:w-[calc(100%_-_309px)]'>
            {data?.courseInfo?.courseSummary &&
              <ReadMoreLessDesc text={courseInfo?.courseSummary} />
            }
            {data?.courseInfo?.keyStats && (
              loading ? (
                <Keystatsskeleton />
              ) : (
                <Keystatscomponents
                  subjectArea={keyStats}
                  uniRankings={uniRankings}
                  tooltipList={sectionInfo?.mediaCardsCollection}
                  dataSource={sectionInfo?.callToAction}
                />
              )
            )}
              {data?.institutionReviews?.reviewDetail &&
                <ReviewComponent heading="What student say" jsonResponse={data?.institutionReviews?.reviewDetail} />
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseInfoComponent;