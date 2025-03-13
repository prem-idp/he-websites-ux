export function getMetaDetailsQueryForSRpage(seoFieldsName: string) {
  const query = `{
pageSeoFieldsCollection(
  where: {seoFieldsName: "${seoFieldsName}", website: {websiteName: "${process.env.PROJECT}"}}
)
{
  items
      {
    metaTite
    metaDescription
    metaDescription
    canonical
    h1Title
    h2Text
    h2WithgradeText
    robots
    websiteCollection
    {
      items
      {
        websiteName
      }
    }


  }
}
}`
return query;
}