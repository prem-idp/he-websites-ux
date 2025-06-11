import Breadcrumblayoutcomponent from "@packages/shared-components/common-utilities/breadcrumb-layout/breadcrumblayoutcomponent";
import HeaderBanner from "@packages/shared-components/common-utilities/header-banner/header-banner";
import Opendaysrgridcomponents from '@packages/shared-components/common-utilities/openday-sr-grid/OpendaySRGridComponents';
import OpendaysSREliteComponents from '@packages/shared-components/common-utilities/opendays-sr-elite/OpendaysSREliteComponents';
import { openDaysData, AllOpenDaysData, AnyEventsOpenDaysData } from '@packages/constants/constants';
import Advicecomponents from '@packages/shared-components/home/advice/advicecomponents';
import Faqcomponents from '@packages/shared-components/common-utilities/faq/faqcomponents';

const OpendaySRComponents = () => {
  const bgColor="white";
  const bgColor1="grey-50";
  return (
    <>
      <OpendaysSREliteComponents {...openDaysData} bgColor={bgColor} featureOpd={true} />
      <Opendaysrgridcomponents {...AllOpenDaysData} bgColor={bgColor1} />
      <Opendaysrgridcomponents {...AnyEventsOpenDaysData} anyTimeEvents={true} bgColor={bgColor} />
      <Advicecomponents />
      <Faqcomponents />
    </>
  );
};

export default OpendaySRComponents;
