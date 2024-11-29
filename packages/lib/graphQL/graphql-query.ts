export const Headerquery = `{
  contentData: headerCollection(
    limit: 1
    where: { website: {websiteName: "${process.env.PROJECT}"}}
  ) {
    items {
      websiteLogo {
        url
        width
        height
      }
      headerTrackingScripts
      headerMainMenuCollection(limit: 7) {
        items {
          navName
          navTitle
          navUrl
          navIcon {
            url
            width
            height
          }
          navChildC1Collection(limit: 10) {
            items {
              ... on Navigation {
                navName
                navUrl
                navTitle
                navCtAlabel
                navIcon {
                  url
                  width
                  height
                }
                navCtaTarget
                flagNavItemStyle
              }
            }
          }
          navChildC2Collection(limit: 10) {
            items {
              ... on Navigation {
                navName
                navUrl
                navTitle
                navCtAlabel
                navIcon {
                  url
                  width
                  height
                }
                navCtaTarget
                flagNavItemStyle
              }
            }
          }
          navChildC3Collection(limit: 10) {
            items {
              ... on Navigation {
                navName
                navTitle
                navUrl
                navCtAlabel
                navIcon {
                  url
                  width
                  height
                }
                navCtaTarget
                flagNavItemStyle
              }
            }
          }
          navChildC4Collection(limit: 10) {
            items {
              ... on Navigation {
                navName
                navUrl
                navTitle
                navCtAlabel
                navIcon {
                  url
                  width
                  height
                }
                navCtaTarget
                flagNavItemStyle
              }
            }
          }
        }
      }
      universalSearchPanel {
        internalName
        navigationElementsCollection(limit: 5) {
          items {
            ... on Navigation {
              navName
              navUrl
              navCtAlabel
              navIcon {
                url
                width
                height
              }
              navCtaTarget
              flagNavItemStyle
            }
          }
        }
      }
    }
  }
}`;
export const footerQuery = `query {
  footerNavigationCollection(where: {footerName: "Footer - Whatuni"}) {
    items {
      footerNavCollection(limit: 3) {
        items {
          navTitle
          navChildC1Collection(limit: 10) {
            items {
              ... on Navigation {
                navTitle
                navUrl
                navCtaTarget
              }
            }
          }
        }
      }
      footerNavBtmCollection(limit: 10) {
        items {
          navTitle
          navUrl
        }
      }
      navApplinksCollection(limit: 5) {
        items {
          primaryCtaLabel
          primaryCtaUrl
        }
      }
    }
  }
}`;
export const statsPodQuery = `{
  contentData: homepageCollection(
    limit: 1
    where: {urlSlug: "/", website: {websiteName: "${process.env.PROJECT}"}}
  ) {
    items {
      bodyContentCollection(limit: 10) {
        items {
          __typename
          ... on MultipleCardContainer {
            mediaCardsCollection(limit: 2) {
              items {
                __typename
                ... on PageStatPodContainer {
                  bgColor
                  marginPadding
                  statPodContainerName
                  statinfoCollection {
                  
                    items {
                      internalName
                      statLabel
                      icon {
                        url
                        width
                        height
                        title                         
                      }
                      statNumber
                    }
                      
                  }
                  image {
                    url
                    width
                    height
                    title
                  }
                  cta{
                    internalName
                    primaryCtaLabel
                    primaryCtaUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;
export const homePageQuery = `{
  contentData: homepageCollection(
    limit: 1
    where: {urlSlug: "/", website: {websiteName: "${process.env.PROJECT}"}}
  ) {
    items {
      pageTitle
      shortDescription
      seoFields {
        metaTite
        metaDescription
      }
      robots {
        title
      }
      sliderBannerCollection(limit: 5) {
        items {
          __typename
          ... on DynamicMediaComponent {
            title
            internalName
            backgroundColor
            longDescription {
              json  
            }
            cta {
              internalName
              primaryCtaUrl
              primaryCtaLabel
              secondaryCtaUrl
              secondaryCtaLabel
              primaryCtaTarget
              secondaryCtaTarget
              flagStyle
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
            video {
              videoTitle
              videoIntName
              videoDesc
              externalVideoUrl
              videoUpload {
                url
                width
                height
              }
            }
          }
        }
      }
      bodyContentCollection(limit: 10) {
        items {
          __typename
          ... on MultipleCardContainer {
            internalName
            cardSectionTitle
            shortDescription
            longDescription
            flagComponentStyle
            callToAction {
              ... on CallToActionCta {
                internalName
                primaryCtaLabel
                primaryCtaUrl
                primaryCtaTarget
                flagStyle
              }
            }
          }
        }
      }
    }
  }
}`;

export const internalComponentLoop = (
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

export const tagCloudQuery = `{
  contentData: homepageCollection(
    limit: 1
    where: {urlSlug: "/", website: {websiteName: "Whatuni"}}
    ) {
    items {
      bodyContentCollection(limit: 10
      where:{internalName:"Homepage - Tagcloud - Whatuni"}) {
        items {
          __typename
          ... on MultipleCardContainer {
            mediaCardsCollection {
              items {
                __typename
                ... on PageTagCloud {
                  tagName
                  tagUrl
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export const partnerLogo = `
{
  contentData: homepageCollection(
    limit: 1
    where: {urlSlug: "/", website: {websiteName: "Whatuni"}}
  ) {
    items {
      bodyContentCollection(limit: 1
      where:{internalName:"Homepage - Logos - Whatuni"}) {
        items {
          __typename
          ... on MultipleCardContainer {
            mediaCardsCollection(limit: 20 ) {
              items {
                __typename
                ... on PageLogo {
                  logoName
                  logoImage {
                    url
                    width
                    height
                  }
                  logoLink
                }
              }
            }
          }
        }
      }
    }
  }
}`;

// export const discoverpodQuery = (
//   websiteName: string | undefined,
//   internalName: string
// ) => `{
// export const testimonial = `
// {
//   contentData: homepageCollection(
//     limit: 1
//     where: {urlSlug: "/", website: {websiteName: "${process.env.PROJECT}"}}
//   ) {
//     items {
//       bodyContentCollection(limit: 1
//       where:{internalName:"Homepage - Testimonials - Whatuni"}) {
//         items {
//           __typename
//           ... on MultipleCardContainer {
//             mediaCardsCollection(limit: 20 ) {
//               items {
//                 __typename
//                 ... on PageMultimediaTestimonials {
//                   sectionTitle
//                   multimediaBlockLeft {
//                     ... on PageVideo {
//                       videoIntName
//                       videoAltText
//                       thumbnail{
//                         url
//                         width
//                         height
//                         fileName
//                       }
//                       videoUpload {
//                         url
//                         width
//                         height
//                         title
//                       }
//                     }
//                     ... on PageImage {
//                       imgIntName
//                       imgAltText
//                       imgUpload {
//                         url
//                         width
//                         height
//                         title
//                       }
//                     }
//                   }
//                   testimonialBlockRight {
//                     internalName
//                     ... on PageTestimonial {
//                       testimonialText
//                       author {
//                         firstName
//                         lastName
//                         middleName
//                         shortBio
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }`;
export const discoverpodQuery = (
  websiteName: string | undefined,
  internalName: string
) => `{
  contentData: homepageCollection(
    limit: 1
    where: {urlSlug: "/", website: {websiteName: "${websiteName}"}}
  ) {
    items {
      bodyContentCollection(limit: 10
      where: {internalName: "${internalName}"}
     ) {
        items {
         
          ... on MultipleCardContainer {
    
            mediaCardsCollection(limit: 6) {
              items {
                ... on DynamicMediaComponent {
                  internalName
                  title
                  subTitle
                  shortDescription
                  backgroundColor
                  longDescription {
                    json
                  }
                  image {
                    imageTitle
                    imgIntName
                    imgUpload {
                      url
                      width
                      height
                    }
                    imgAltText
                  }
                  video {
                    videoIntName
                    videoTitle
                    videoDesc
                    videoAltText
                    videoTranscript
                    thumbnail {
                      url
                      width
                      height
                      title
                    }
                    videoUpload {
                      url
                      width
                      height
                      title
                    }
                  }
                  cta {
                    internalName
                    primaryCtaUrl
                    secondaryCtaUrl
                    primaryCtaLabel
                    secondaryCtaLabel
                    primaryCtaTarget
                    secondaryCtaTarget
                    flagStyle
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

export const testimonial = `
{
  contentData: homepageCollection(
    limit: 1
    where: {urlSlug: "/", website: {websiteName: "${process.env.PROJECT}"}}
  ) {
    items {
      bodyContentCollection(limit: 1
      where:{internalName:"Homepage - Testimonials - Whatuni"}) {
        items {
          __typename
          ... on MultipleCardContainer {
            mediaCardsCollection(limit: 20 ) {
              items {
                __typename
                ... on PageMultimediaTestimonials {
                  sectionTitle
                  multimediaBlockLeft {
                    ... on PageVideo {
                      videoIntName
                      videoAltText
                      thumbnail{
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
                    ... on PageTestimonial {
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
}`;
