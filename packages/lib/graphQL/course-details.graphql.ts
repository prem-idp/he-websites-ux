export const COURSE_DETAILS_QUERY = `{
  pageTemplateDynamicPageCollection(limit: 7) {
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
      dynamicZoneComponentsCollection(limit: 7) {
        items {
          sys {
            id
          }
          internalName
          cardSectionTitle
          flagComponentStyle
          shortDescription
          longDescription
          callToAction {
            ... on CallToActionCta {
              internalName
              primaryCtaLabel
              primaryCtaEventName
              primaryCtaTarget
              primaryCtaUrl
            }
          }
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
              ... on MultipleRichTextAndCta {
                componentName

                richTextComponent {
                  componentType
                  componentName

                  richContent {
                    json
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

interface Section {
    "sys": any
    "internalName": string,
    "cardSectionTitle": string,
    "flagComponentStyle": string,
    "shortDescription": string | null,
    "longDescription": string | null,
    "mediaCardsCollection": any
}

interface Sections {
    [key: string]: any,
    dynamicZoneComponentsCollection: {
        items: Section[]
    }
}

interface CousrseContent {
    data: {
        pageTemplateDynamicPageCollection: {
            items: Sections[]
        }
    }
}

export function courseContentExtractor(data: CousrseContent) {
    let result: any = { ...data?.data?.pageTemplateDynamicPageCollection?.items[0] }
    result.sections = [...result?.dynamicZoneComponentsCollection?.items];
    result = result?.sections?.map((item: any) => ({ ...item, mediaCardsCollection: item?.mediaCardsCollection?.items }))
    delete result['dynamicZoneComponentsCollection'];
    return { sectionsList: result?.map((item: any) => ({ ...item, sectionName: item?.cardSectionTitle, sectionId: item?.internalName?.toLowerCase()?.replaceAll(' ', '-') })) };
}   