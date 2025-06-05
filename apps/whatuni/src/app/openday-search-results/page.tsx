import Othercoursesmaylikecomponents from '@packages/shared-components/common-utilities/other-courses-you-may-like/othercoursesmaylikecomponents';
import Opendaysrgridcomponents from '@packages/shared-components/common-utilities/openday-sr-grid/OpendaySRGridComponents';
import { openDaysData } from '@packages/constants/constants';
import React from 'react'

const OpendaySRComponents = () => {
  const bgColor="white";
  return (
    <>
      <Othercoursesmaylikecomponents {...openDaysData} bgColor={bgColor} openDays={true} featureOpd={true} />
      <Opendaysrgridcomponents />
    </>
  )
}

export default OpendaySRComponents