export const ColcLandingPageQuery = `
{
  contentData: pageTemplateLandingPageCollection(
    limit: 1
    where: {urlSlug: "/student-finace", website: {websiteName: "${process.env.PROJECT}"}}
  ) {
    items {
      seoFields {
        metaTite
        metaDescription
      }
      bodyContentCollection(limit: 10) {
        items {
          ... on MultipleCardContainer {
            cardSectionTitle
            shortDescription
            flagComponentStyle
            callToAction {
              ... on CallToActionCta {
                primaryCtaUrl
                primaryCtaLabel
                primaryCtaTarget
                primaryCtaEventName
              }
            }
            mediaCardsCollection(limit: 10) {
              items {
                ... on Image {
                  imageTitle
                  image {
                    url
                    height
                    width
                  }
                }
                ... on PageNewsletterSubscription {
                  newsTitle
                  newsDesc {
                    json
                  }
                  newsEmail
                  newsFirstName
                  newsLastName
                  newsEntryYear
                  ctaLabel
                  submitSuccessMessage
                  checkboxField
                }
                ... on DynamicMediaComponent {
                  title
                  internalName
                  longDescription {
                    json
                  }
                  image {
                    imageTitle
                    imgAltText
                    imgUpload {
                      url
                      height
                      width
                    }
                  }
                }
                ... on PageMultimediaTestimonials {
                  sectionTitle
                  multimediaBlockLeft {
                    ... on PageVideo {
                      videoIntName
                      videoAltText
                      thumbnail {
                        url
                        width
                        height
                        fileName
                      }
                      videoUpload {
                        url
                        width
                        height
                        title
                      }
                    }
                    ... on PageImage {
                      imgIntName
                      imgAltText
                      imgUpload {
                        url
                        width
                        height
                        title
                      }
                    }
                  }
                  testimonialBlockRight {
                    internalName
                    testimonialText
                    author {
                      firstName
                      lastName
                      middleName
                      shortBio
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
 `;

export const ColcLandingPageSeoQuery = `
 {
   contentData: pageTemplateLandingPageCollection(
     limit: 1
     where: {urlSlug: "/student-finace", website: {websiteName: "Whatuni"}}
   ) {
     items {
       seoFields {
         metaTite
         metaDescription
       }
      
     }
   }
 }
  `;

export const homePageComponentQueryFormation = (
  internalName: string,
  componentQuery: string
) => {
  const query = `{
    contentData: homepageCollection(
      limit: 1
      where: {urlSlug: "/", website: {websiteName: "${process.env.PROJECT}"}}
    ) {
      items {
        bodyContentCollection(limit: 1
        where:{internalName:"${internalName}"}) {
          items {
            __typename
            ... on MultipleCardContainer {
              mediaCardsCollection(limit: 20 ) {
                items {
                  __typename
                  ${componentQuery}
                }
              }
            }
          }
        }
      }
    }
  }`;
  return query;
};
