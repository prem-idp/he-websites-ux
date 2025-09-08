import advertOpendaysimg1 from "../../apps/whatuni/public/static/assets/images/opdays_thumb_image.jpg";
import advertOpendaysimg2 from "../../apps/whatuni/public/static/assets/images/virtual_thumb_image.jpg";
import statsDataIcon1 from "../../apps/whatuni/public/static/assets/icons/salary_stats_icon.svg";
import statsDataIcon2 from "../../apps/whatuni/public/static/assets/icons/graduate_stats_icon.svg";
import statsDataIcon3 from "../../apps/whatuni/public/static/assets/icons/univ_stats_icon.svg";
import statsDataIcon4 from "../../apps/whatuni/public/static/assets/icons/course_stats_icon.svg";
import statsDataIcon5 from "../../apps/whatuni/public/static/assets/icons/students_stats_icon.svg";
import travelIconBlue from "../../apps/whatuni/public/static/assets/icons/travel_icon_blue.svg";
import degreeSubject1 from "../../apps/whatuni/public/static/assets/images/degree-subject/degree-subject1.png";
import degreeSubject2 from "../../apps/whatuni/public/static/assets/images/degree-subject/degree-subject2.png";
import degreeSubject3 from "../../apps/whatuni/public/static/assets/images/degree-subject/degree-subject3.png";
import degreeSubject4 from "../../apps/whatuni/public/static/assets/images/degree-subject/degree-subject4.png";
import degreeSubject5 from "../../apps/whatuni/public/static/assets/images/degree-subject/degree-subject5.png";
import degreeSubject6 from "../../apps/whatuni/public/static/assets/images/degree-subject/degree-subject6.png";
import degreeSubject7 from "../../apps/whatuni/public/static/assets/images/degree-subject/degree-subject7.png";
import degreeSubject8 from "../../apps/whatuni/public/static/assets/images/degree-subject/degree-subject8.png";
import degreeSubject9 from "../../apps/whatuni/public/static/assets/images/degree-subject/degree-subject9.png";
import degreeSubject10 from "../../apps/whatuni/public/static/assets/images/degree-subject/degree-subject10.png";
import { title } from "process";
import { CourseListData } from "@packages/lib/types/interfaces";

export const advertOpendaysData = [
  {
    tagline: "NEXT OPEN DAY",
    title: "13th February",
    description: "Undergraduate open day, Main campus",
    buttonName: "Book your place",
    bannerSrc: advertOpendaysimg1,
    bgColor: "bg-blue-100",
  },
  {
    tagline: "Virtual tour",
    title: "A day in the life",
    description:
      "Discover some of the many places our students spend a typical day.",
    buttonName: "Take a virtual tour",
    bannerSrc: advertOpendaysimg2,
    bgColor: "bg-green-200",
  },
];

export const advertVirtualsData = [
  {
    tagline: "Virtual visits",
    title: "A day in the life",
    description:
      "Discover some of the many places our students spend a typical day.",
    buttonName: "Take a virtual tour",
    bannerSrc: advertOpendaysimg1,
    bgColor: "bg-green-200",
  },
];
export const statsSubjectData = {
  title: "[Subject] stats",
  stats: [
    {
      src: statsDataIcon1,
      title: "£00,000",
      description: "Average salary of graduates of this subject",
    },
    {
      src: statsDataIcon2,
      title: "00%",
      description: "Graduates went directly into employment",
    },
    {
      src: statsDataIcon3,
      title: "000",
      description: "Universities have courses in this subject",
    },
    {
      src: statsDataIcon4,
      title: "0,000",
      description: "Courses in this subject in the UK",
    },
    {
      src: statsDataIcon5,
      title: "0,000",
      description: "Students studying this subject in the UK",
    },
  ],
};
export const statsRegionData = {
  title: "[Region] info",
  stats: [
    {
      src: statsDataIcon1,
      title: "£0,000",
      description: "Cost of living (monthly average)",
    },
    {
      src: travelIconBlue,
      title: "£000",
      description: "Travel costs (monthly average)",
    },
    {
      src: statsDataIcon3,
      title: "30",
      description: "Universities in this region",
    },
    {
      topCitiesData: {
        title: "Top 5 cities in this region",
        cities: ["City A", "City B", "City C", "City D", "City E"],
      },
    },
  ],
};
export const searchLandingData = {
  title: "Heading",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a risus dolor sit amet, consectetur adipiscing elit. Praesent a risus ",
  image: "/static/assets/images/slice_1.png",
  isViewSearch: false,
  isImageVisible: true,
};
export const searchWULandingData = {
  title: "Heading",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a risus dolor sit amet, consectetur adipiscing elit. Praesent a risus ",
  image: "",
  isViewSearch: false,
  isImageVisible: false,
};
export const findacourseData = {
  title: "Find a course",
  description: "",
  image: "/static/assets/images/slice_1.png",
  isViewSearch: true,
  isImageVisible: true,
};
export const popularUniData = {
  title: "Heading",
  description:
    "Unsure which scholarship to consider? Take a look at some popular ones",
  data: [
    { uniName: "University of London", courseName: "Computer Science" },
    {
      uniName: "University of Leeds",
      courseName: "Business Studies with Foundation Year",
    },
    {
      uniName: "Liverpool Hope University",
      courseName:
        "Business Management and Conservation Biology (with Foundation Year) BA (Hons)",
    },
    { uniName: "University of Northampton", courseName: "Computer Science" },
    {
      uniName: "University of Chester",
      courseName:
        "Business Management and International Tourism Management (with Professional Placement Year) BA (Hons)",
    },
    {
      uniName: "University of Wales Trinity Saint David",
      courseName:
        "Management with Digital Innovation and Analytics (Year in Business)",
    },
  ],
};
export const popularCourseData = {
  title: "Heading",
  description:
    "Unsure which scholarship to consider? Take a look at some popular ones",
  data: [
    { courseName: "University of London", uniName: "Computer Science" },
    {
      courseName: "University of Leeds",
      uniName: "Business Studies with Foundation Year",
    },
    {
      courseName: "Liverpool Hope University",
      uniName:
        "Business Management and Conservation Biology (with Foundation Year) BA (Hons)",
    },
    { courseName: "University of Northampton", uniName: "Computer Science" },
    {
      courseName: "University of Chester",
      uniName:
        "Business Management and International Tourism Management (with Professional Placement Year) BA (Hons)",
    },
    {
      courseName: "University of Wales Trinity Saint David",
      uniName:
        "Management with Digital Innovation and Analytics (Year in Business)",
    },
  ],
};
export const userFavCourseData = {
  title: "Recommended courses for you",
  description: "",
  data: [
    { courseName: "University of London", uniName: "Computer Science" },
    {
      courseName: "University of Leeds",
      uniName: "Business Studies with Foundation Year",
    },
    {
      courseName: "Liverpool Hope University",
      uniName:
        "Business Management and Conservation Biology (with Foundation Year) BA (Hons)",
    },
    { courseName: "University of Northampton", uniName: "Computer Science" },
    {
      courseName: "University of Chester",
      uniName:
        "Business Management and International Tourism Management (with Professional Placement Year) BA (Hons)",
    },
    {
      courseName: "University of Wales Trinity Saint David",
      uniName:
        "Management with Digital Innovation and Analytics (Year in Business)",
    },
  ],
};
export const openDaysData = {
  title: "Featured open days",
  description: "",
  data: [
    {
      studyType: "IN-PERSON",
      uniName: "University of London",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "University of Leeds",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual tour",
      uniName: "Liverpool Hope University",
      opendaysType: "Undergraduate open day",
      location: "",
      time: "",
    },
    {
      studyType: "Virtual event",
      uniName: "University of Northampton",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "University of Chester",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "University of Wales Trinity Saint David",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
  ],
};
export const AllOpenDaysData = {
  title: "Open days",
  description:
    "Search for [NUMBER] available open days on the dates of your choice. Allowing you to plan your university visits in advance.",
  data: [
    {
      studyType: "IN-PERSON",
      uniName: "University of London",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "University of Leeds",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "Liverpool Hope University",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "University of Northampton",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "University of Chester",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "University of Wales Trinity Saint David",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "University of London",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "University of Leeds",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "Liverpool Hope University",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "University of Northampton",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "University of Chester",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "University of Wales Trinity Saint David",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
  ],
};
export const ProviderOpenDaysData = {
  title: "[PROVIDER NAME] open days",
  description:
    "Search for [NUMBER] available open days on the dates of your choice. Allowing you to plan your university visits in advance.",
  data: [
    {
      studyType: "IN-PERSON",
      uniName: "Open day type",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "Open day type",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "Open day type",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "Open day type",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "Open day type",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "Open day type",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "Open day type",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "Open day type",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "Liverpool Hope University",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "Open day type",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "IN-PERSON",
      uniName: "University of Chester",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
    {
      studyType: "Virtual event",
      uniName: "Open day type",
      opendaysType: "",
      location: "Main campus, CV23 8DY",
      time: "08:30-16:30",
    },
  ],
};
export const AnyEventsOpenDaysData = {
  title: "Anytime events",
  description:
    "Access university open days online from the comfort of your computer.",
  data: [
    {
      studyType: "IN-PERSON",
      uniName: "University of London",
      opendaysType: "Undergraduate open day",
      location: "",
      time: "",
    },
    {
      studyType: "Virtual event",
      uniName: "University of Leeds",
      opendaysType: "Undergraduate open day",
      location: "",
      time: "",
    },
    {
      studyType: "Virtual tour",
      uniName: "Liverpool Hope University",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "",
    },
    {
      studyType: "IN-PERSON",
      uniName: "University of Northampton",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "",
    },
    {
      studyType: "IN-PERSON",
      uniName: "University of Chester",
      opendaysType: "Undergraduate open day",
      location: "",
      time: "",
    },
    {
      studyType: "Virtual event",
      uniName: "University of Wales Trinity Saint David",
      opendaysType: "Undergraduate open day",
      location: "",
      time: "",
    },
    {
      studyType: "IN-PERSON",
      uniName: "University of Chester",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "",
    },
    {
      studyType: "Virtual event",
      uniName: "University of Wales Trinity Saint David",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "",
    },
    {
      studyType: "IN-PERSON",
      uniName: "University of Wales Trinity Saint David",
      opendaysType: "Undergraduate open day",
      location: "Main campus, CV23 8DY",
      time: "",
    },
  ],
};
export const OnlineOpenDaysData = {
  title: "[Provider name] online open days",
  description:
    "Access university open days online from the comfort of your computer.",
  data: [
    {
      studyType: "IN-PERSON",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
    {
      studyType: "Virtual event",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
    {
      studyType: "Virtual tour",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
    {
      studyType: "IN-PERSON",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
    {
      studyType: "IN-PERSON",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
    {
      studyType: "Virtual event",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
    {
      studyType: "IN-PERSON",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
    {
      studyType: "Virtual event",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
    {
      studyType: "IN-PERSON",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
    {
      studyType: "Virtual event",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
    {
      studyType: "Virtual tour",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
    {
      studyType: "IN-PERSON",
      uniName: "Open day type",
      opendaysType: "",
      location: "",
      time: "",
    },
  ],
};

export const temp = {
  title: "Open days and virtual visits",
  cards: [
    {
      tagline: "NEXT OPEN DAY",
      title: "13th February",
      description: "Undergraduate open day, Main campus",
      buttonName: "Book your place",
      bannerSrc: advertOpendaysimg1,
      bgColor: "bg-blue-100",
    },
    {
      tagline: "Virtual tour",
      title: "A day in the life",
      description:
        "Discover some of the many places our students spend a typical day.",
      buttonName: "Take a virtual tour",
      bannerSrc: advertOpendaysimg2,
      bgColor: "bg-green-200",
    },
  ],
  isViewAll: true,
};

export const switchButton = [
  { name: "Courses" },
  { name: "Open days" },
  { name: "Scholarships" },
];
// find a course
export const popularDegree = [
  { title: "Link" },
  { title: "Link" },
  { title: "Link" },
  { title: "Link" },
  { title: "Link" },
  { title: "Link" },
];
export const subjectIncludes = [];

export const degreeSubjectData = [
  {
    src: degreeSubject1,
    title: "Agriculture and Related subjects",
    subjectIncludes: [
      { title: "Agricultural Sciences" },
      { title: "Agricultural Technology" },
      { title: "Crop Science" },
      { title: "Horticultural Science" },
      { title: "Pest and Weed Control" },
      { title: "Soil Science" },
      { title: "Agribusiness" },
      { title: "Agricultural Economics" },
    ],
  },
  {
    src: degreeSubject2,
    title: "Architecture, Building, and Planning",
    subjectIncludes: [
      { title: "Architectural Design" },
      { title: "Architectural Engineering and Technology" },
      { title: "Architectural History" },
      { title: "Architecture" },
      { title: "Interior Architecture" },
      { title: "Interior Design" },
      { title: "Building" },
      { title: "Building and Construction Economics" },
    ],
  },
  {
    src: degreeSubject3,
    title: "Biological and Life Sciences",
    subjectIncludes: [
      { title: "Animal Behaviour and Ethology" },
      { title: "Animal Biology" },
      { title: "Applied Zoology" },
      { title: "Entomology" },
      { title: "Primatology" },
      { title: "Wildlife and Conservation Biology" },
      { title: "Zoo biology" },
      { title: "Zoology" },
    ],
  },
  {
    src: degreeSubject4,
    title: "Business, Commerce and Management",
    subjectIncludes: [
      { title: "Accountancy" },
      { title: "Management Accounting" },
      { title: "Accounting" },
      { title: "Agribusiness" },
      { title: "Credit Control" },
      { title: "Business Administration" },
      { title: "Forensic Accounting" },
      { title: "Business Communication Skills" },
    ],
  },
  {
    src: degreeSubject5,
    title: "Creative Arts and Design",
    subjectIncludes: [
      { title: "Applied Art" },
      { title: "Design and Applied Arts" },
      { title: "Art" },
      { title: "Digital Arts" },
      { title: "Creative Arts and Design" },
      { title: "Fine Arts" },
      { title: "Creative Practice" },
      { title: "Painting" },
    ],
  },
  {
    src: degreeSubject6,
    title: "Earth Sciences",
    subjectIncludes: [
      { title: "Atmospheric Physics" },
      { title: "Earth Science" },
      { title: "Atmospheric Science" },
      { title: "Exploration Geophysics" },
      { title: "Climatology" },
      { title: "Geochemistry" },
      { title: "Meteorology" },
      { title: "Geophysics and Seismology" },
    ],
  },
  {
    src: degreeSubject7,
    title: "Education and Teaching",
    subjectIncludes: [
      { title: "Education Research" },
      { title: "Education Studies" },
      { title: "Educational Psychology" },
      { title: "Educational Technology" },
      { title: "History of Education" },
      { title: "Montessori Education" },
      { title: "Pedagogy" },
      { title: "Professional Practice in Education" },
    ],
  },
  {
    src: degreeSubject8,
    title: "Engineering and Technology",
    subjectIncludes: [
      { title: "Navigation" },
      { title: "Aerodynamics" },
      { title: "Aeronautical Engineering" },
      { title: "Aerospace Engineering" },
      { title: "Aircraft Maintenance Engineering" },
      { title: "Avionics" },
      { title: "Space Technology" },
      { title: "Automotive Engineering" },
    ],
  },
  {
    src: degreeSubject9,
    title: "Food and Hospitality",
    subjectIncludes: [
      { title: "Baking" },
      { title: "Cookery" },
      { title: "Culinary Arts" },
      { title: "Patisserie" },
      { title: "Brewing" },
      { title: "Drinks Processing" },
      { title: "Food Hygiene" },
      { title: "Food Manufacturing" },
    ],
  },
  {
    src: degreeSubject10,
    title: "Forensic Sciences",
    subjectIncludes: [
      { title: "Forensic Accounting" },
      { title: "Forensic Medicine" },
      { title: "Forensic Archaeology" },
      { title: "Forensic Nursing" },
      { title: "Computer Forensics" },
      { title: "Forensic Pathology" },
      { title: "Forensic Dentistry and Odontology" },
      { title: "Forensic Psychiatry" },
    ],
  },
];

export const degreeSubjectTab = [
  { name: "A-D", isActive: true },
  { name: "E-G", isActive: false },
  { name: "H-L", isActive: false },
  { name: "M-P", isActive: false },
  { name: "R-W", isActive: false },
];

export const tabDataStudy = [
  { name: "University info", isActive: true },
  { name: "Courses" },
  { name: "Open days" },
  { name: "Scholarships" },
  { name: "Reviews" },
];
export const tabDataDegree = [
  { name: "Undergraduate" },
  { name: "HND / HNC", isActive: true },
  { name: "Foundation degree" },
  { name: "Access & Foundation" },
  { name: "Postgraduate" },
];
export const tabDataOpendays = [
  { name: "University info" },
  { name: "Open days", isActive: true },
  { name: "Courses" },
  { name: "Scholarships" },
];

export const favouritesCourseData: CourseListData[] = [
  {
    img: "",
    uniName: "University of Kent",
    description: "12 engineering courses",
    rating: "4.6",
    reviews: "400",
    region: "region",
    miles: "18.1",
    wuscaranking: "18th",
    courseName: "Course name",
    course: [
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
    ],
  },
  {
    img: "",
    uniName: "University of Kent",
    description: "12 engineering courses",
    rating: "4.6",
    reviews: "400",
    region: "region",
    miles: "18.1",
    wuscaranking: "18th",
    courseName: "Course name",
    course: [
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
    ],
  },
  {
    img: "",
    uniName: "University of Kent",
    description: "12 engineering courses",
    rating: "4.6",
    reviews: "400",
    region: "region",
    miles: "18.1",
    wuscaranking: "18th",
    courseName: "Course name",
    course: [
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
    ],
  },
  {
    img: "",
    uniName: "University of Kent",
    description: "12 engineering courses",
    rating: "4.6",
    reviews: "400",
    region: "region",
    miles: "18.1",
    wuscaranking: "18th",
    courseName: "Course name",

    course: [
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
    ],
  },
  {
    img: "",
    uniName: "University of Kent",
    description: "12 engineering courses",
    rating: "4.6",
    reviews: "400",
    region: "region",
    miles: "18.1",
    wuscaranking: "18th",
    courseName: "Course name",

    course: [
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
      {
        courseName: "Course name",
        buttonCount: 4,
        ucasPonits: "164-112",
        duration: "3",
        showprospect: true,
        showvisit: true,
        showBooking: true,
        showRequest: true,
      },
    ],
  },
];
