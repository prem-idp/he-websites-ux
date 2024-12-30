export const ColcLandingPageQuery = `{
    contentData: pageTemplateLandingPageCollection(
      limit: 1
      where: {urlSlug: "/student-finace", website: {websiteName: "Whatuni"}}
    ) {
      items {
        seoFields {
          metaTite
          metaDescription
        }
        bodyContentCollection(limit: 10) {
          items {
            __typename
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
            ... on MultipleCardContainer {
              cardSectionTitle
              shortDescription
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
                }
              }
            }
          }
        }
      }
    }
  }
 `;
