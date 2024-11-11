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

export const homePageQuery = `{
  contentData: homepageCollection(
    limit: 1
    where: {urlSlug: "/", website: {websiteId: "220703"}}
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
            mediaCardsCollection(limit: 2) {
              items {
                __typename
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
