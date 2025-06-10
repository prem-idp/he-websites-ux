import { openDaysData, AllOpenDaysData, AnyEventsOpenDaysData, ProviderOpenDaysData, OnlineOpenDaysData } from '@packages/constants/constants';
import Opendaysrgridcomponents from '@packages/shared-components/common-utilities/openday-sr-grid/OpendaySRGridComponents';

const OpendayVepple = () => {
  const bgColor="white";
  const bgColor1="grey-50";
  return (
    <>
      <Opendaysrgridcomponents {...ProviderOpenDaysData} providerOpenDays={true} bgColor={bgColor1} />
      <Opendaysrgridcomponents {...OnlineOpenDaysData} onlineOpendays={true} anyTimeEvents={true} bgColor={bgColor} />
    </>
  )
}

export default OpendayVepple