import { FastlaneCardProps } from "@/component/Call-to-action/fastlaneCta";
import { ScholarshipCardProps } from "@/component/Call-to-action/scholarshipCta";
import {  homepageBanner } from "../types/types";

export const homepageBannerContents: homepageBanner[] = [
  {
    title: "Your study abroad dream starts here",
    description:
      "Answer 3 simple questions and get personalized recommendations and guidance",
    desktopImg: "/images/desktop-Hero-Banner2.webp",
    mobileImg: "/images/mobile-Hero-Banner.webp",
    ctaText: "Start my journey",
  },
];


export const fastlaneCardItems: FastlaneCardProps[] = [
  {
    bannerImg: "/images/fastlaneBanner.png",
    title: "Less is more with IDP FastLane!",
    content:
      "Your express pass to studying abroad is here. Let IDP fastlane match you to the best university.",
    ctaBtn: "Find courses",
    tagline: "Product of",
    link: "/",
  },
];

export const scholarshipCardItems: ScholarshipCardProps[] = [
  {
    bannerImg: "/images/scholarshipBanner.png",
    title: "Find a scholarship",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus fermentum cursus, proin bibendum sem feugiat cubilia sapien turpis id egestas tortor, morbi cras et commodo",
    ctaBtn: "Find scholarships",
    link: "/",
  },
];

const dropdownData = {
  listDropdownOptions: [
    {
      listDropdownOptionHeader: "Agriculture and Veterinary Medicine",
      listDropDownOptions: [
        { id: 1, label: "Agriculture", value: "Agriculture" },
        { id: 2, label: "Farm Management", value: "Farm Management" },
        {
          id: 3,
          label: "Plant and Crop Sciences",
          value: "Plant and Crop Sciences",
        },
        { id: 4, label: "Veterinary Medicine", value: "Veterinary Medicine" },
      ],
    },
    {
      listDropdownOptionHeader: "Applied and Pure Sciences",
      listDropDownOptions: [
        { id: 5, label: "Astronomy", value: "Astronomy" },
        { id: 6, label: "Biology", value: "Biology" },
        { id: 7, label: "Biomedical Sciences", value: "Biomedical Sciences" },
        { id: 8, label: "Chemistry", value: "Chemistry" },
        { id: 9, label: "Earth Sciences", value: "Earth Sciences" },
        {
          id: 10,
          label: "Food Science and Technology",
          value: "Food Science and Technology",
        },
      ],
    },
    {
      listDropdownOptionHeader: "Architecture",
      listDropDownOptions: [
        { id: 5, label: "Architecture", value: "Architecture" },
        { id: 6, label: "Biology", value: "Biology" },
        { id: 7, label: "Biomedical Sciences", value: "Biomedical Sciences" },
        { id: 8, label: "Chemistry", value: "Chemistry" },
        { id: 9, label: "Earth Sciences", value: "Earth Sciences" },
        {
          id: 10,
          label: "Food Science and Technology",
          value: "Food Science and Technology",
        },
      ],
    },
  ],
};

export default dropdownData;

export const optionsStep1: CheckboxOption[] = [
  { id: "postgraduate", label: "Postgraduate" },
  { id: "undergraduate", label: "Undergraduate" },
  { id: "premasters", label: "Pre-masters and Vocational" },
];
export const optionsStep3: CheckboxOption[] = [
  { id: "australia", label: "Australia" },
  { id: "canada", label: "Canada" },
  { id: "ireland", label: "Ireland" },
  { id: "newzealand", label: "New Zealand" },
  { id: "uk", label: "UK" },
  { id: "usa", label: "USA" },
];
export const optionsStep4 = [
  {
    title: "Speak to an expert",
    description: "FREE guidance from uni selection to admission",
  },
  {
    title: "Shortlist courses and compare",
    description: "",
  },
  {
    title: "Check admission eligibility",
    description: "",
  },
  {
    title: "Save preferences and recommendations",
    description: "",
  },
];


export const navLinks = [
  "About Us",
  "Hotcourses Abroad",
  "IDP Connect",
  "Cookies",
]

export const socialLinks = [
  "Terms and Conditions",
  "Sitemap",
  "IDP Connect",
  "Manage cookies",
]

export const options = [
  "English - Global",
  "ประเทศไทย - Thailand",
  "English - India",
  "Portuguese - Brazil",
  "Việt Nam - Vietnam",
  "Indonesian - Indonesia",
  "Español - Latinoamerica",
  "Español - Latinoamerica",
  "Россия - Russia",
  "Türkiye  - Turkey",
  "عربي"  
]

export const logoImgArray  = [
  "/assets/images/our-partner/partner1.png",
  "/assets/images/our-partner/partner2.png",
  "/assets/images/our-partner/partner3.png",
  "/assets/images/our-partner/partner4.png",
  "/assets/images/our-partner/partner5.png",
  "/assets/images/our-partner/partner6.png",
  "/assets/images/our-partner/partner7.png",
  "/assets/images/our-partner/partner8.png",
  "/assets/images/our-partner/partner9.png",
  "/assets/images/our-partner/partner10.png",
];
