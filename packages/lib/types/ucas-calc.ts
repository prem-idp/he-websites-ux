export interface GradeFilterArrayInterface {
  qualId: string | null;
  qualification: string;
  qualificationUrl: string | null;
  parentQualification: string;
  gradeOptions: string | null;
  maxPoint: string | null;
  maxTotalPoint: string | null;
  gradeOptionflag: string | null;
}

export interface GradeFilterInterface {
  gradeFilterList: GradeFilterArrayInterface[];
}

export interface KeyValuePair {
  key: string;
  value: number;
}

export interface GradePointsInterface {
  maxPoint: number;
  maxTotalPoint: number;
  getmaxTotalPoint: number;
  podSpecificPoints: number;
}
