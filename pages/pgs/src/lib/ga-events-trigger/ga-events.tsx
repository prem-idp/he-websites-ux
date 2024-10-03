"use client";
import { subjectGuideEventData } from "./ga-data";

const gaSubjectGuideClickEvent = (subject: string) => {
  const temp = subjectGuideEventData;
  temp.cpe_parent_subject = subject.toLowerCase();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(temp);
};
export { gaSubjectGuideClickEvent };
