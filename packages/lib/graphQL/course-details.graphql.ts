export const COURSE_DETAILS_QUERY = `
{
  pageTemplateDynamicPageCollection {
    items {
      pageName
      pageTitle
      urlSlug
      website
      seoFields {
        metaKeywords
        metaTile
        metaDescription
        seoFieldsName
      }
      gaPageName
      dynamicZoneComponentsCollection(limit: 5) {
        items {
          sys {
            id
          }
          internalName
          cardSectionTitle
          flagComponentStyle
          shortDescription
          longDescription
          mediaCardsCollection {
            items {
              __typename
              ... on PageComponentSectionTitle {
                internalName
                sectionTitle
                shortDescription
                flagComponentStyle
              }
              ... on CallToActionCta {
                internalName
                primaryCtaUrl
                primaryCtaLabel
                primaryCtaTarget
                primaryCtaEventName
              }
            }
          }
        }
      }
    }
  }
}
`