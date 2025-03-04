export function getMetaDetailsQueryForSRpage(seoFieldsName: string) {
    const query = `{
pageSeoFieldsCollection(
    where: {seoFieldsName: "${seoFieldsName}", website: {websiteName: "${process.env.PROJECT}"}}
)
  {
    items
    {
      seoFieldsName
      h2Text
      h1Title
      metaTile
      metaDescription
      metaDescription
      canonical
      websiteCollection
      {
        items
        {
          websiteName
        }
      }
      breadrumbTitle
      robots
    }
  }
}`
return query;
}