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
    where: {urlSlug: "/", website: {websiteName: "Whatuni"}}
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
export const pageLogoQuery = `... on PageLogo {
                  logoName
                  logoImage {
                    url
                    width
                    height
                  }
                  logoLink
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
            mediaCardsCollection(limit: 5) {
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
