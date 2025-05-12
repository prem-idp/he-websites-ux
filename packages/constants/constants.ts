import advertOpendaysimg1 from "../../apps/whatuni/public/static/assets/images/opdays_thumb_image.jpg";
import advertOpendaysimg2 from "../../apps/whatuni/public/static/assets/images/virtual_thumb_image.jpg";
import statsDataIcon1 from '../../apps/whatuni/public/static/assets/icons/salary_stats_icon.svg';
import statsDataIcon2 from '../../apps/whatuni/public/static/assets/icons/graduate_stats_icon.svg';
import statsDataIcon3 from '../../apps/whatuni/public/static/assets/icons/univ_stats_icon.svg';
import statsDataIcon4 from '../../apps/whatuni/public/static/assets/icons/course_stats_icon.svg';
import statsDataIcon5 from '../../apps/whatuni/public/static/assets/icons/students_stats_icon.svg';
import travelIconBlue from '../../apps/whatuni/public/static/assets/icons/travel_icon_blue.svg';

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
    description: "Discover some of the many places our students spend a typical day.",
    buttonName: "Take a virtual tour",
    bannerSrc: advertOpendaysimg2,
    bgColor: "bg-green-200",
  },
];

export const advertVirtualsData = [
  {
    tagline: "Virtual visits",
    title: "A day in the life",
    description: "Discover some of the many places our students spend a typical day.",
    buttonName: "Take a virtual tour",
    bannerSrc: advertOpendaysimg1,
    bgColor: "bg-green-200",
  },
];
export const statsSubjectData = {
  title: '[Subject] stats',
    stats: [
      {
        src: statsDataIcon1,
        title: '£00,000',
        description: 'Average salary of graduates of this subject',
      },
      {
        src: statsDataIcon2,
        title: '00%',
        description: 'Graduates went directly into employment',
      },
      {
        src: statsDataIcon3,
        title: '000',
        description: 'Universities have courses in this subject',
      },
      {
        src: statsDataIcon4,
        title: '0,000',
        description: 'Courses in this subject in the UK',
      },
      {
        src: statsDataIcon5,
        title: '0,000',
        description: 'Students studying this subject in the UK',
      },
    ]
}
export const statsRegionData = {
  title: '[Region] info',
    stats: [
      {
        src: statsDataIcon1,
        title: '£0,000',
        description: 'Cost of living (monthly average)',
      },
      {
        src: travelIconBlue,
        title: '£000',
        description: 'Travel costs (monthly average)',
      },
      {
        src: statsDataIcon3,
        title: '30',
        description: 'Universities in this region',
      },
      {
      topCitiesData: {
        title: 'Top 5 cities in this region',
        cities: ['City A', 'City B', 'City C', 'City D', 'City E'],
      } 
    },  
    ]
}
export const searchLandingData = {
  title: 'Heading',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a risus dolor sit amet, consectetur adipiscing elit. Praesent a risus ',
  image: '/static/assets/images/slice_1.png',
  isViewSearch: false,
}
export const findacourseData = {
  title: 'Find a course',
  description: '',
  image: '/static/assets/images/slice_1.png',
  isViewSearch: true,
}
export const popularUniData = {
  title: 'Heading',
  description: 'Unsure which scholarship to consider? Take a look at some popular ones',
  data: [
  {uniName: 'University of London', courseName: 'Computer Science'},
  {uniName: 'University of Leeds', courseName: 'Business Studies with Foundation Year'},
  {uniName: 'Liverpool Hope University', courseName: 'Business Management and Conservation Biology (with Foundation Year) BA (Hons)'},  
  {uniName: 'University of Northampton', courseName: 'Computer Science'},
  {uniName: 'University of Chester', courseName: 'Business Management and International Tourism Management (with Professional Placement Year) BA (Hons)'},
  {uniName: 'University of Wales Trinity Saint David', courseName: 'Management with Digital Innovation and Analytics (Year in Business)'},
]
}
export const popularCourseData = {
  title: 'Heading',
  description: 'Unsure which scholarship to consider? Take a look at some popular ones',
  data: [
  {courseName: 'University of London', uniName: 'Computer Science'},
  {courseName: 'University of Leeds', uniName: 'Business Studies with Foundation Year'},
  {courseName: 'Liverpool Hope University', uniName: 'Business Management and Conservation Biology (with Foundation Year) BA (Hons)'},  
  {courseName: 'University of Northampton', uniName: 'Computer Science'},
  {courseName: 'University of Chester', uniName: 'Business Management and International Tourism Management (with Professional Placement Year) BA (Hons)'},
  {courseName: 'University of Wales Trinity Saint David', uniName: 'Management with Digital Innovation and Analytics (Year in Business)'},
]
}
export const openDaysData = {
  title: 'Heading',
  description: 'Unsure which scholarship to consider? Take a look at some popular ones',
  data: [
  {uniName: 'University of London', opendaysType: 'Undergraduate open day'},
  {uniName: 'University of Leeds', opendaysType: 'Undergraduate open day'},
  {uniName: 'Liverpool Hope University', opendaysType: 'Undergraduate open day'},  
  {uniName: 'University of Northampton', opendaysType: 'Undergraduate open day'},
  {uniName: 'University of Chester', opendaysType: 'Undergraduate open day'},
  {uniName: 'University of Wales Trinity Saint David', opendaysType: 'Undergraduate open day'},
]
}





export const temp = {
    title: "Open days and virtual visits",
    cards: [
      {
        "tagline": "NEXT OPEN DAY",
        "title": "13th February",
        "description": "Undergraduate open day, Main campus",
        "buttonName": "Book your place",
        "bannerSrc": advertOpendaysimg1,
        "bgColor": "bg-blue-100"
      },
      {
        "tagline": "Virtual tour",
        "title": "A day in the life",
        "description": "Discover some of the many places our students spend a typical day.",
        "buttonName": "Take a virtual tour",
        "bannerSrc": advertOpendaysimg2,
        "bgColor": "bg-green-200"
      }
    ],
    isViewAll: true
}