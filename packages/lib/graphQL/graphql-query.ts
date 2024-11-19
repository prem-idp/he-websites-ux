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

export const homePageQuery = (websiteName: string|undefined) => `{
  contentData: homepageCollection(
    limit: 1
    where: {urlSlug: "/", website: {websiteName: "${websiteName}"}}
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
            
          }
        }
      }
    }
  }
}`;


export const discoverpodQuery = (websiteName: string|undefined, internalName: string) => `{
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
}`