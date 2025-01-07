export const ArticleLandingPageQuery = `
{
  contentData: pageTemplateLandingPageCollection(
    limit: 1
    where: {urlSlug: "/advice", website: {websiteName: "${process.env.PROJECT}"}}
  ) {
    items {
      bodyContentCollection(
        limit: 10
      ) {
        items {
          ... on MultipleCardContainer {
            internalName
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
          }
        }
      }
    }
  }
}
`;
export const ArticleLandingSeoQuery = `{
  contentData: pageTemplateLandingPageCollection(
    limit: 1
     where: {urlSlug: "/advice", website: {websiteName: "${process.env.PROJECT}"}}
  ) {
    items {
      seoFields {
        metaTite
        metaDescription
         metaKeywords
        canonical
      }
    }
  }
}`;
