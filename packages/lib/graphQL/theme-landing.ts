export const ThemeLandingPageQuery = (preview: boolean, slug: string) => {
  return `{
    contentData: pageTemplateThemedLandingPageCollection(
      limit: 1
      where: {urlSlug: "${slug}", website: {websiteName: "${process.env.PROJECT}"}}
        ${preview ? `preview : ${preview}` : ""}
    ) {
      items {
        sys {
          id
        }
        bannerImage {
          sys {
            id
          }
          internalName
          title
          subTitle
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
        bodyContentCollection(limit: 10) {
          items {
            sys {
              id
            }
            internalName
            cardSectionTitle
            flagComponentStyle
            mediaCardsCollection {
              items {
                ... on DynamicMediaComponent {
                  title
                  longDescription {
                    json
                  }
                }
                ... on MetaTagTopic {
                  title
                  id
                }
                ... on MetaTagSubTopic {
                  title
                  subTopic
                  parent {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;
};
