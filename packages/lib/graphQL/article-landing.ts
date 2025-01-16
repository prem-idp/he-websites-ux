export const HeroLandingPageQuery = (preview: boolean) => {
  return `
{
  contentData: pageTemplateHeroLandingPageCollection(
    limit: 1
    where: {urlSlug: "/advice/budgeting", website: {websiteName: "${process.env.PROJECT}"}
    }
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
`;
};

export const ArticleLandingSeoQuery = `{
  contentData: pageTemplateHeroLandingPageCollection(
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
        robots {
        title
      }
    }
  }
}`;

export const ArticleTextSnippet = `
   ... on DynamicMediaComponent {
  internalName
  title
  subTitle
  longDescription {
    json
  }
  image {
    imgUpload {
      url
    }
  }
  cta {
    primaryCtaUrl
    primaryCtaLabel
    primaryCtaEventName
    primaryCtaTarget
  }
}
`;

export const LinksQuery = `
   ... on Navigation {
  navTitle
  navChildC1Collection {
    items {
      ... on Navigation {
        navTitle
        navUrl
        navCtaTarget
        navIcon {
          url
        }
      }
    }
  }
}
`;

export const FaqsQuery = `
   ... on PageComponentFaq {
  faqComponentTitle
  faqCategoriesCollection {
    items {
      ... on PageComponentQa {
        question
        answer
      }
    }
  }
}
`;

export const NewsletterQuery = (preview: boolean) => {
  return `{
  newsLetterData: pageNewsletterSubscriptionCollection(limit: 1    
    ${preview ? `preview : ${preview}` : ""}) {
    items {
      newsTitle
      newsDesc {
        json
      }
      newsEmail
      newsFirstName
      newsLastName
      newsEntryYear
      ctaLabel
      submitSuccessMessage
      checkboxField
    }
  }
}`;
};
