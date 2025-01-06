export const homePageComponentQueryFormation = (
  internalName: string | undefined,
  componentQuery: string,
  urlpath: string
) => {
  const query = `
      {
        contentData: homepageCollection(
          limit: 1
          where: {urlSlug: "${urlpath}", website: {websiteName: "${process.env.PROJECT}"}}
        ) {
          items {
            bodyContentCollection(
              limit: 1
              where: {internalName: "${internalName}"}
            ) {
              items {
                __typename
                ... on MultipleCardContainer {
                  mediaCardsCollection(limit: 20) {
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
      }
    `;
  return query;
};

export const articlePageComponentQueryFormation = (
  internalName: string | undefined,
  componentQuery: string,
  urlpath: string
) => {
  const query = `
      {
        contentData: homepageCollection(
          limit: 1
          where: {urlSlug: "${urlpath}", website: {websiteName: "${process.env.PROJECT}"}}
        ) {
          items {
            bodyContentCollection(
              limit: 1
              where: {internalName: "${internalName}"}
            ) {
              items {
                __typename
                ... on MultipleCardContainer {
                  mediaCardsCollection(limit: 20) {
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
      }
    `;
  return query;
};
