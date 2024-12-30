export const articleDetailQuery = `{
  contentData: articleCollection(
    limit: 1
    where: {urlSlug: "article-the-best-resources-for-saving-money-at-university-whatuni", website: {websiteName: "Whatuni"}}
  ) {
    items {
      seoFields {
        metaTite
        metaDescription
        canonical
        metaKeywords
      }
      author {
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
          ... on PageImage {
            imgAltText
            imgUpload {
              url
            }
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
          ... on MetaTagTopic {
            title
          }
        }
      }
      metaTagSubTopicsCollection {
        items {
          ... on MetaTagSubTopic {
            title
            subTopic
          }
        }
      }
      metaTagCitiesCollection {
        items {
          ... on MetaTagCity {
            title
            parent {
              title
            }
          }
        }
      }
      metaTagNationsCollection {
        items {
          ... on MetaTagNation {
            title
          }
        }
      }
      metaTagRegionsCollection {
        items {
          ... on MetaTagRegion {
            title
          }
        }
      }
      metaTagUserTypesCollection {
        items {
          ... on MetaTagUserType {
            title
          }
        }
      }
      metaTagStudyLevelsCollection {
        items {
          ... on MetaTagStudyLevel {
            title
          }
        }
      }
      metaTagStudentYearsCollection {
        items {
          ... on MetaTagStudyYear {
            title
          }
        }
      }
      metaTagJourneyStepsCollection {
        items {
          ... on MetaTagJourneyStep {
            title
          }
        }
      }
      metaTagSubjectCategoryL1Collection {
        items {
          ... on MetaTagSubjectCategory1 {
            title
            id
          }
        }
      }
      metaTagSubjectCategoryL2Collection {
        items {
          ... on MetaTagSubjectCategory2 {
            title
            parent {
              ... on MetaTagSubjectCategory1 {
                title
              }
            }
          }
        }
      }
      bodyContentCollection {
        items {
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
}`