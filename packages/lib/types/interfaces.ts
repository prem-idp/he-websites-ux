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
