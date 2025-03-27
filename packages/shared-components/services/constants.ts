// Centralized key-value mapping

const allSortingValues = {
  recommended: "r",
  distanceFromHome: "dista",
  employmentRate: "empd",
  entryReqsHighest: "entd",
  entryReqsLowest: "enta",
  wuscaUniversityOfYear: "wuoy",
  wuscaCareerProspects: "wcp",
  wuscaFacilities: "wf",
  wuscaInternational: "wi",
  wuscaLecturersTeaching: "wltq",
  wuscaPostgraduate: "wpg",
  wuscaStudentLife: "wsl",
  wuscaStudentSupport: "wss",
  wuscaStudentsUnion: "wsu",
  wuscaUniversityHalls: "wuh",
  priceLowToHigh: "price_asc",
  empty: "",
} as const;

// Define filters by mapping labels to values
export const wuSortingFilter = {
    "Recommended": allSortingValues.recommended,
    "Distance from home": allSortingValues.distanceFromHome,
    "Employment rate": allSortingValues.employmentRate,
    "Entry reqs - Highest": allSortingValues.entryReqsHighest,
    "Entry reqs - lowest": allSortingValues.entryReqsLowest,
  } as const;

  export const wuscaCategories = {
    "WUSCA University of the Year ranking": allSortingValues.wuscaUniversityOfYear,
    "WUSCA Career Prospects ranking": allSortingValues.wuscaCareerProspects,
    "WUSCA Facilities ranking": allSortingValues.wuscaFacilities,
    "WUSCA International ranking": allSortingValues.wuscaInternational,
    "WUSCA Lecturers and Teaching Quality ranking": allSortingValues.wuscaLecturersTeaching,
    "WUSCA Postgraduate ranking": allSortingValues.wuscaPostgraduate,
    "WUSCA Student life ranking": allSortingValues.wuscaStudentLife,
    "WUSCA Student support ranking": allSortingValues.wuscaStudentSupport,
    "WUSCA Student's Union ranking": allSortingValues.wuscaStudentsUnion,
    "WUSCA University Halls ranking": allSortingValues.wuscaUniversityHalls,
  } as const;

  export const pgsSortingFilter = {
    "Recommended (CPE logic)": allSortingValues.recommended,
    "Distance from home": allSortingValues.distanceFromHome,
    "Employment rate": allSortingValues.employmentRate,
    "WUSCA Postgraduate ranking": allSortingValues.wuscaPostgraduate,
    "Price (low to high)": allSortingValues.priceLowToHigh,
  } as const;

  export const prSortingFilter = {
    "Recommended": allSortingValues.recommended,
    "Distance from home ": allSortingValues.distanceFromHome,
    "Employment rate": allSortingValues.employmentRate,
    "Postgrad ranking": allSortingValues.empty,
    "Price": allSortingValues.empty,
  } as const;