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
    where: {urlSlug: "/", website: {websiteName: "Whatuni"}}
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

export const interComponentLoop = (internalName: string) => {
  const query = `{
  contentData: homepageCollection(
    limit: 1
    where: {urlSlug: "/", website: {websiteName: "Whatuni"}}
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
  return query;
};
