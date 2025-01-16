export function articleDetailQuery(
  category: any,
  title: any,
  id: any,
  preview: any
) {
  const query = `{
    contentData: articleCollection(
    limit: 1
    ${preview ? `preview : ${preview}` : ""}
    where: {urlSlug: "${title}", website: {websiteName: "${process.env.PROJECT}"}}
  ) {
    items {
    
      pageTitle
      seoFields {
        
        metaTite
        metaDescription
        canonical
        metaKeywords
      }
      author {
      sys {
      id
    }
        internalName
        firstName
        lastName
        middleName
        domain
        shortBio
        p2PShortBio
        longBio
        audienceGroup
        image {
          imgUpload {
            url
            height
            width
          }
          imgAltText
        }
      }
      bannerImageCollection {
        items {
          imgAltText
          imgUpload {
            url
          }
        }
      }
      shortDescription
      modifiedDate
      readTime
      articleType {
        title
      }
      metaTagTopicsCollection {
        items {
          title
        }
      }
      metaTagSubTopicsCollection {
        items {
          title
          subTopic
        }
      }
      metaTagCitiesCollection {
        items {
          title
          parent {
            title
          }
        }
      }
      metaTagNationsCollection {
        items {
          title
        }
      }
      metaTagRegionsCollection {
        items {
          title
        }
      }
      metaTagUserTypesCollection {
        items {
          title
        }
      }
      metaTagStudyLevelsCollection {
        items {
          title
        }
      }
      metaTagStudentYearsCollection {
        items {
          title
        }
      }
      metaTagJourneyStepsCollection {
        items {
          title
        }
      }
      metaTagSubjectCategoryL1Collection {
        items {
          title
          id
        }
      }
      metaTagSubjectCategoryL2Collection {
        items {
          title
          parent {
            title
          }
        }
      }
      bodyContentCollection {
        items {
          __typename
          ... on PageComponentRichText {
            paragraphTitle
            media {
              url
              fileName
            }
            paragraphBodyRichText {
              json
            }
          }
          ... on PagePullQuotes {
            pullQuote {
              json
            }
            pullQuoteAuthor
            pullQuoteRole
          }
          ... on PageImage {
            imgAltText
            imgUpload {
              url
            }
          }
          ... on PageDataTableStatic {
            lTname
            lTtitle
            apiUrl
          }
        }
      }
    }
  }
}`;

  return query;
}
