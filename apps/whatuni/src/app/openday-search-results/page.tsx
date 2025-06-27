import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Opendaysrgridcomponents from '@packages/shared-components/common-utilities/openday-sr-grid/OpendaySRGridComponents';
import OpendaysSREliteComponents from '@packages/shared-components/common-utilities/opendays-sr-elite/OpendaysSREliteComponents';
import { openDaysData, AllOpenDaysData, AnyEventsOpenDaysData } from '@packages/constants/constants';
import Advicecomponents from '@packages/shared-components/home/advice/advicecomponents';
import Faqcomponents from '@packages/shared-components/common-utilities/faq/faqcomponents';
import SearchFilterButtons from "@packages/shared-components/common-utilities/search-filter-buttons/search-filter-buttons";

const OpendaySRComponents = () => {
  const bgColor="white";
  const bgColor1="grey-50";
  return (
    <>
      {/* <section className="bg-white px-[16px] md:px-[20px] xl:px-0">
        <div className="max-w-container mx-auto">
          <div className="py-[16px]"><div className="h5 mb-[4px]">Top Law, Engineering  Architecture subjects for you</div>
            <p>000 universities offer 1563 courses</p></div>
        </div>
      </section>
      <SearchFilterButtons /> */}
      <OpendaysSREliteComponents {...openDaysData} bgColor={bgColor} featureOpd={true} />
      <Opendaysrgridcomponents {...AllOpenDaysData} bgColor={bgColor1} />
      <Opendaysrgridcomponents {...AnyEventsOpenDaysData} anyTimeEvents={true} bgColor={bgColor} />
      <Advicecomponents />
      <Faqcomponents />
    </>
  );
};

export default OpendaySRComponents;
