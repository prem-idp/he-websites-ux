import React from 'react'
import Breadcrumblayoutcomponent from '@packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent';
import Articledescription from '@packages/shared-components/article-details/article-description/article-description';
import Authorprofile from '@packages/shared-components/article-details/author-profile/author-profile';
import {articleDetailQuery} from '@packages/lib/graphQL/article-detail';
import { graphQlFetchFunction } from '@packages/lib/server-actions/server-action';




const page = async() => {
     const articledetaildata= await graphQlFetchFunction(articleDetailQuery);
     const data = articledetaildata?.data?.contentData?.items[0];
    const breadcrumbData = [
        {
          url: "#",
          label: "Home",
        },
        {
          url: "#",
          label: "Payments",
        },
        {
          url: "#",
          label: "Online payments",
        },
        {
          url: "",
          label: "Overview",
        },
      ];
  return (
      <>
        {/* breadcrumb  */}
        <section className="pt-[16px] pb-[40px]">
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
        <Breadcrumblayoutcomponent data={breadcrumbData} />
        </div>
        </section>
        
        <section className='pb-[40px]'>
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
        <Articledescription data={data}/> 
        </div>
        </section>
       
        <section className='pb-[40px]'>          
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
        <Authorprofile data={data}/>
        </div>
        </section>
        
      </>
  )
}

export default page