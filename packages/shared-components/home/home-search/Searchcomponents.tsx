import React, { useState } from 'react'
import Homesearchcomponents from './Homesearchcomponents'

const Searchcomponents = () => {
    // course tab
  const [activeTab, setActiveTab] = useState('tab0');
  const searchTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };

  // course tab actions
  const [isUndergratuateClicked, setIsUndergratuateClicked] = useState(false);
  const [isSubjectClicked, setIsSubjectClicked] = useState(false);
  const [isLocationClicked, setIsLocationClicked] = useState(false);
  const [isUniversityClicked, setIsUniversityClicked] = useState(false);
  const [isAdviceClicked, setIsAdviceClicked] = useState(false);
  const [isPgsUniversityClicked, setIsPgsUniversityClicked] = useState(false);
  const [isPgsSearched, setIsPgsSearched] = useState(false);

  const courseActions = (tabName: string) => {
    if (tabName == 'UG') {
      setIsUndergratuateClicked(!isUndergratuateClicked);
      setIsSubjectClicked(false);
      setIsLocationClicked(false);
      setIsUniversityClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == 'Subject') {
      setIsSubjectClicked(!isSubjectClicked);
      setIsUndergratuateClicked(false);
      setIsLocationClicked(false);
      setIsUniversityClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == 'Location') {
      setIsLocationClicked(!isLocationClicked);
      setIsUndergratuateClicked(false);
      setIsSubjectClicked(false);
      setIsUniversityClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == 'University') {
      setIsUniversityClicked(!isUniversityClicked);
      setIsUndergratuateClicked(false);
      setIsSubjectClicked(false);
      setIsLocationClicked(false);
      setIsAdviceClicked(false);
    } else if (tabName == 'Advice') {
      setIsAdviceClicked(!isAdviceClicked);
      setIsUndergratuateClicked(false);
      setIsSubjectClicked(false);
      setIsLocationClicked(false);
      setIsUniversityClicked(false);
    } else if (tabName == 'PGSUniversity') {
      setIsPgsUniversityClicked(!isPgsUniversityClicked);
      setIsAdviceClicked(false);
      setIsUndergratuateClicked(false);
      setIsSubjectClicked(false);
      setIsLocationClicked(false);
      setIsUniversityClicked(false);
    }
  };

  // ucas calculate
  const [isUcasPopupOpen, setIsUcasPopupOpen] = useState(false);
  const ucasClick = () => {
    setIsUcasPopupOpen(true);
    const body = document.body;
    body.classList.add('overflow-y-hidden');
  };

  const ucasClose = () => {
    const body = document.body;
    setIsUcasPopupOpen(false);
    body.classList.remove('overflow-y-hidden');
  };

  // PGS SearchBox
  const search = ['Masters', 'PhD', 'PGCert', 'PGDip', 'MBA', 'PGCE'];

  const handleKeyUp = (event: any) => {
    if (event.key === 'Enter') {
      setIsPgsSearched(!isPgsSearched);
    }
  };
  const searchKey = [
    {
      name: 'Law',
      course: '1124 courses',
    },
    {
      name: 'Law / Legal Studies',
      course: '1124 courses',
    },
    {
      name: 'Law (Specific Statutes)',
      course: '1124 courses ',
    },
    {
      name: 'Asian Law',
      course: '1124 courses',
    },
    {
      name: 'Civil Law',
      course: '1124 courses',
    },
  ];
  return (
    <>
    <Homesearchcomponents
      season={true}
              isUndergratuateClicked={isUndergratuateClicked}
              isSubjectClicked={isSubjectClicked}
              isLocationClicked={isLocationClicked}
              isUniversityClicked={isUniversityClicked}
              isAdviceClicked={isAdviceClicked}
              isPgsSearched={isPgsSearched}
              isUcasPopupOpen={isUcasPopupOpen}
              ucasClose={ucasClose}
              activeTab={activeTab}
              searchTab0Click={() => searchTabClick('tab0')}
              searchTab1Click={() => searchTabClick('tab1')}
              searchTab2Click={() => searchTabClick('tab2')}
              searchTab3Click={() => searchTabClick('tab3')}
              courseActions1={() => courseActions('UG')}
              courseActions2={() => courseActions('Subject')}
              courseActions3={() => courseActions('Location')}
              courseActions4={() => courseActions('University')}
              courseActions5={() => courseActions('Advice')}
              courseActions6={() => courseActions('PGSUniversity')}
    />
    </>
  )
}

export default Searchcomponents