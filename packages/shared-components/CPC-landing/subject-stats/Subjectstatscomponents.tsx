import React from 'react';
import SubjectStatsCard from '@packages/shared-components/common-utilities/cards/subject-stats/Subjectstatscard';

const SubjectStatsComponents = ({ title, stats }: any) => {
  return (
    <div className="stats-container bg-grey-600">
      <div className="max-w-container mx-auto">
        <div className="stats-card-container flex flex-col gap-[20px] px-[16px] md:px-[20px] xl:px-0 py-[40px]">
          <div className="stats-header h5 text-white">{title}</div>
          <div className="stats-course-container">
            <div className="stats-inner-wrap grid grid-cols-2 md:grid-cols-[repeat(auto-fit,_minmax(128px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(227px,_1fr))] gap-[20px]">
                {stats.map((item: any, index: number) => {
                  if (item.topCitiesData) {
                  return (
                    <div key={index} className="cards flex flex-col gap-[8px]">
                      <div className="small font-semibold text-white">
                        {item.topCitiesData.title}
                      </div>
                      <ul className="list-disc pl-[24px] space-y-1 text-black">
                        {item.topCitiesData.cities.map((city: string, cityIndex: number) => (
                          <li key={cityIndex} className='small text-white'>{city}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }                  
                  return (
                  <div key={index} className="cards">
                    <SubjectStatsCard {...item} />
                  </div>
                )})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectStatsComponents;
