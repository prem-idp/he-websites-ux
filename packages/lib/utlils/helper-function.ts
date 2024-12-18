"use client";

import { getCurrentUser } from "@aws-amplify/auth";


function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
}

function replaceWithNA(value: any) {
  return value === undefined || value === ''  || value === null ? 'NA' : value;
}

async function currentAuthenticatedUser() {
  try {
    const userData = await getCurrentUser();
	return userData?.userId ?  userData?.userId : '';
  } catch (err) {
    console.log(err);
  }
}

function GADataLayerFn(event?:any, eventName?:any, dataLabel?:any, dataLabel2?:any, cpeParentSubject?:any, cpeChildSubject?:any, pageName?:any, pageNameContentful?:any,collegeName?:any, providerType?:any, courseName?:any, sponsoredSr?:any, collegeId?:any, ucasPoints?:any,studyMode?:any, targetYear?:any, clearing?:any, userId?:any, studyLevel?:any, articleCategory?:any, destinationCountry?:any, dataLabel3?:any, dataLabel4?:any,dataLabel5?:any,website?:any,ctaName?:any,ctaUrl?:any,contentful_1?:any,contentful_2?:any) {
	if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
        'event': replaceWithNA(event),
		'event name': replaceWithNA(eventName),
		'data_label' : replaceWithNA(dataLabel),
		'data_label2': replaceWithNA(dataLabel2),
		'cpe_parent_subject' : replaceWithNA(cpeParentSubject),
		'cpe_child_subject' : replaceWithNA(cpeChildSubject),
		'page_name' : replaceWithNA(pageName)?.toLowerCase(),
        'page_name_contentful' : replaceWithNA(pageNameContentful),
		'college_name' : replaceWithNA(collegeName),
		'provider_type' : replaceWithNA(providerType),
		'course_name' : replaceWithNA(courseName),
		'sponsored_sr' : replaceWithNA(sponsoredSr),
		'college_id' : replaceWithNA(collegeId),
		'ucas_points' : replaceWithNA(getCookie("UCAS")),
		'study_mode' : replaceWithNA(studyMode),
		'target_year' : replaceWithNA(targetYear),
		'clearing': replaceWithNA(clearing),
		'wu_user_id' : userId ? '1' : '0',
		'study_level' : replaceWithNA(studyLevel),
		'article_category' : replaceWithNA(articleCategory),
	    'destination_country' : replaceWithNA(destinationCountry),
	    'data_label3' : replaceWithNA(dataLabel3),
	    'data_label4' : replaceWithNA(dataLabel4),
        'data_label5' : replaceWithNA(dataLabel5),
		'cta_name' : replaceWithNA(ctaName),
		'ctaUrl' : replaceWithNA(ctaUrl),
        'website_name': replaceWithNA(website)?.toLowerCase(),
		'contentful_1': replaceWithNA(contentful_1),
		'contentful_2': replaceWithNA(contentful_2),
	});
      } else {
        console.warn('GTM dataLayer is not available yet.');
      }

}

export { getCookie, replaceWithNA,GADataLayerFn,currentAuthenticatedUser };
