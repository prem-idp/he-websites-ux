import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Homesearchcomponents from '@packages/shared-components/home/home-search/Homesearchcomponents';
import Video from '@packages/shared-components/common-utilities/videos/video';

const Seasonlandingcomponents = () => {
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
      <section className="season-landing-container bg-primary-100">
        <div className="max-w-container mx-auto">
          <div className="season-landing-card flex flex-col gap-[32px] lg:gap-[24px] md:px-[20px]  md:py-[24px] xl:px-[0]">
            <div className="video-container flex flex-col lg:flex-row gap-[20px] md:gap-[32px] lg:gap-[40px]">
              <div className="video-inner-left relative w-full lg:w-[598px] min-h-[210px] md:min-h-[300x] bg-grey-400 md:rounded-[8px] md:overflow-hidden">
                <Video />
              </div>
              <div className="video-inner-right flex flex-col flex-1 justify-center px-[16px] md:px-[0]">
                <div
                  className='text-heading-lg md"text-heading-xl font-farro font-bold'
                  aria-labelledby="header"
                  aria-label="heading"
                >
                  Heading
                </div>
                <p className="para-lg" aria-label="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent a risus dolor sit amet, consectetur adipiscing elit.
                  Praesent a risus{' '}
                </p>
              </div>
            </div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Seasonlandingcomponents;
