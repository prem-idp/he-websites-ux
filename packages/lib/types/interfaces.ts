export interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  isActive: boolean;
}
export interface Subject {
  description: string;
  url: string;
  category_code: string;
  browse_cat_id: string;
  parent_subject: string | null;
  qual_Code: string;
}
export interface SearchFormHandle {
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
  footerNavBtmCollection: FooterNavBtmCollection;
  navApplinksCollection: NavApplinksCollection;
  footerNavCollection: FooterNavCollection;
}

export interface FooterNavCollection {
  items: FooterNavCollectionItem[];
}

export interface FooterNavCollectionItem {
  navTitle: string;
  navChildC1Collection: FooterNavChildCollection;
}

export interface FooterNavChildCollection {
  items: FooterNavChildItem[];
}

export interface FooterNavChildItem {
  navTitle: string;
  navUrl: string | null;
  navCtaTarget: "Open in same tab" | "Open in new tab" | null;
}

export interface NavApplinksCollection {
  items: AppLinkItem[];
}

export interface AppLinkItem {
  primaryCtaLabel: string;
  primaryCtaUrl: string;
}

export interface FooterNavBtmCollection {
  items: FooterNavItem[];
}

export interface FooterNavItem {
  navTitle: string | null;
  navUrl: string | null;
}

export interface SliderBannerCollection {
  items: DynamicMediaComponent[];
}
export interface DynamicMediaComponentArray {
  dynamicMediaComponent: DynamicMediaComponent[];
}

export interface DynamicMediaComponent {
  __typename: "DynamicMediaComponent";
  longDescription: LongDescription;
  title: string;
  internalName: string;
  cta: CTA | null;
  image: Image | null;
  video: null;
}

export interface LongDescription {
  json: JSONContent;
}

export interface JSONContent {
  data: Record<string, any>;
  content: Paragraph[];
  nodeType: string;
}

export interface Paragraph {
  data: Record<string, any>;
  content: TextNode[];
  nodeType: string;
}

export interface TextNode {
  data: Record<string, any>;
  marks: any[];
  value: string;
  nodeType: string;
}

export interface Image {
  imageTitle: string | null;
  imgAltText: string;
  imgUpload: ImageUpload;
}

export interface ImageUpload {
  url: string;
  height: number;
  width: number;
}

export interface MultipleCardContainer {
  __typename: "MultipleCardContainer";
  internalName: string;
  cardSectionTitle: string;
  shortDescription: string;
  longDescription: string | null;
  flagComponentStyle: string;
  callToAction: CallToAction | null;
}

export interface CallToAction {
  __typename: "CallToActionCta";
  internalName: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  primaryCtaTarget: string;
  flagStyle: string;
}

export interface ReviewDetailsList {
  reviewDetail: ReviewDetails[];
}

export interface ReviewDetails {
  reviewerName: string;
  comment: string;
  initial: string;
  collegeTextKey: string;
  reviewedDate: string;
  collegeId: string;
  collegeName: string;
  courseTitle: string;
  overallRating: string;
}

export interface CTA {
  internalName: string;
  primaryCtaUrl: string | null;
  primaryCtaLabel: string | null;
  secondaryCtaUrl: string | null;
  secondaryCtaLabel: string | null;
  primaryCtaTarget: string | null;
  secondaryCtaTarget: string | null;
  flagStyle: string | null;
}

export interface Icon {
  url: string;
  width: number;
  height: number;
  title: string;
}
export interface Image {
  url: string;
  width: number;
  height: number;
  title: string;
}
export interface Cta {
  primaryCtaLabel: string;
  primaryCtaUrl: string;
}

export interface StatInfo {
  internalName: string;
  statLabel: string;
  statNumber: string;
  icon: Icon;
}

export interface PageStatPodContainerInterface {
  bgColor: string;
  marginPadding: string;
  statPodContainerName: string;
  statinfoCollection: {
    items: StatInfo[];
  };
  image: Image;
  cta: Cta;
}

export interface HomePageStatInterface {
  data: {
    contentData: {
      items: [
        {
          bodyContentCollection: {
            items: Array<{
              __typename: string;
              mediaCardsCollection: {
                items: PageStatPodContainerInterface[];
              };
            }>;
          };
        },
      ];
    };
  };
}

export interface DataInterface {
  items: DynamicMediaComponent[];
}

export interface DynamicMediaComponent {
  __typename: "DynamicMediaComponent";
  longDescription: LongDescription;
  title: string;
  internalName: string;
  cta: CTA | null;
  image: Image | null;
}

export interface LongDescription {
  json: JSONContent;
}

export interface JSONContent {
  data: Record<string, any>;
  content: Paragraph[];
  nodeType: string;
}

export interface Paragraph {
  data: Record<string, any>;
  content: TextNode[];
  nodeType: string;
}

export interface TextNode {
  data: Record<string, any>;
  marks: any[];
  value: string;
  nodeType: string;
}

export interface ImageUpload {
  url: string;
  height: number;
  width: number;
}

export interface MultipleCardContainer {
  __typename: "MultipleCardContainer";
  internalName: string;
  cardSectionTitle: string;
  shortDescription: string;
  longDescription: string | null;
  flagComponentStyle: string;
}

export interface MultipleCardContainer {
  __typename: "MultipleCardContainer";
  internalName: string;
  cardSectionTitle: string;
  shortDescription: string;
  longDescription: string | null;
  flagComponentStyle: string;
}

export interface TagCloudDataInterface {
  tagName: string;
  tagUrl: string | null;
}

export interface HomePageInterface {
  data: {
    contentData: {
      items: [
        {
          bodyContentCollection: {
            items: Array<{
              __typename: string;
              mediaCardsCollection: {
                items: TagCloudDataInterface[];
              };
            }>;
          };
        },
      ];
    };
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

export interface TagCloudDataInterface {
  tagName: string;
  tagUrl: string | null;
}

export interface HomePageInterface {
  data: {
    contentData: {
      items: [
        {
          bodyContentCollection: {
            items: Array<{
              __typename: string;
              mediaCardsCollection: {
                items: TagCloudDataInterface[];
              };
            }>;
          };
        },
      ];
    };
  };
}
