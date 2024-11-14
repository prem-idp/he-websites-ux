export interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  isActive: boolean;
}

export interface UcasFormHandle {
  activeTab: string;
  isCourseType: boolean;
  isSubjectClicked: boolean;
  isLocationClicked: boolean;
  isAdviceClicked: boolean;
  isUniversityClicked: boolean;
  courseType: string;
  university: string;
  subject: string;
  location: string;
  advice: string;
}

export interface CarouselItem {
  type: "pictureCard" | "videoCard" | "articleCard" | "courseCard";
  id?: string;
  src?: string;
  alt?: string;
  link?: string;
  thumbnailImg?: string;
  playBtn?: string;
  videoTitle?: string;
  authorImg?: string;
  authorName?: string;
  dayPosted?: string;
  uniName?: string;
  articleImg?: string;
  articleTitle?: string;
  articleContent?: string;
  articlePostedDate?: string;
  courseImg?: string;
  closebtn?: string;
  courseTitle?: string;
  uniLogo?: string;
  courseuniName?: string;
  countryFlag?: string;
  countryName?: string;
  degreeType?: string;
  years?: string;
  fees?: string;
  isFastlaneTag?: boolean | undefined;
  subText?: string;
}

export interface CheckboxOption {
  id: string;
  label: string;
}

export interface homepageBanner {
  title: string;
  description: string;
  desktopImg: string;
  mobileImg: string;
  ctaText: string;
}

export interface OnboardingStepProps {
  questionText: string;
  subText: string;
}

export interface CheckboxProps {
  labelText: string;
  fieldId: string;
  name: string;
  checkboxStyles?: string;
  checkboxPadstyles?: string;
  disableChange?: () => void;
}

export interface listDropdownProps {
  options: listDropdownOptionProps[];
}
export interface footerProps {
  title: string;
  description: string;
  ctaText: string;
  linkTitle: string;
  socialLinkTitle: string;
  navLinks: string[];
  socialLinks: string[];
  copyRights: string;
}

export interface MainDropdownProps {
  options: string[];
  isOpen: boolean;
  handleOptionClick: (option: string) => void;
}
export interface logoSliderProps {
  imgSrc: string[];
}

export interface listDropdownOptionProps {
  listDropdownOptionHeader: string;
  listDropDownOptions: dropdownProps[];
}

export interface dropdownProps {
  id: number;
  label: string;
  value: string;
}

export interface logoSliderProps {
  imgSrc: string[];
}

export interface FooterDataInterface {
  footerNavBtmCollection: {
    items: {
      navTitle: string;
      navUrl: string | null;
    }[];
  };
  navApplinksCollection: {
    items: {
      primaryCtaLabel: string;
      primaryCtaUrl: string;
    }[];
  };
  footerNavCollection: {
    items: {
      navTitle: string;
      navChildC1Collection: {
        items: {
          navTitle: string;
          navUrl: string | null;
          navCtaTarget: "Open in same tab" | "Open in new tab" | null;
        }[];
      };
    }[];
  };
}

export interface MultipleCardContainer {
  __typename: "MultipleCardContainer";
  internalName: string;
  cardSectionTitle: string;
  shortDescription: string;
  longDescription: string | null;
  flagComponentStyle: string;
}

export interface TagCloudDataInterface{
  tagName: string;
  tagUrl: string | null;
}


export interface HomePageInterface {
  data: {
  contentData: {
    items: [{
      bodyContentCollection: {
        items: Array<{
          __typename: string;
          mediaCardsCollection: {
            items: TagCloudDataInterface[];
          };
        }>;
      };
    }];
  };
}
}