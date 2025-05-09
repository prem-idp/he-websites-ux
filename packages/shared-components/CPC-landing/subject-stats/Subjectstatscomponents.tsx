import React from 'react';
import SubjectStatsCard from '@packages/shared-components/common-utilities/cards/subject-stats/Subjectstatscard';
import { statsData } from '@packages/constants/constants';

const SubjectStatsComponents = () => {
  return (
    <div className="stats-container bg-grey-600">
      <div className="max-w-container mx-auto">
        <div className="stats-card-container flex flex-col gap-[20px] px-[16px] md:px-[20px] xl:px-0 py-[40px]">
          <div className="stats-header h5 text-white">[Subject] stats</div>
          <div className="stats-course-container">
            <div className="stats-inner-wrap grid grid-cols-2 md:grid-cols-[repeat(auto-fit,_minmax(133px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(227px,_1fr))] gap-[20px]">
                {statsData.map((item, index) => (
                <div key={index} className="cards">
                <SubjectStatsCard {...item} />
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectStatsComponents;
