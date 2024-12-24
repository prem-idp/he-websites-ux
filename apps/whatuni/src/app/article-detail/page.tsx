import React from 'react'
// Components 
import Breadcrumblayoutcomponent from '../../../../../packages/shared-components/article-details/breadcrumb-layout/breadcrumblayoutcomponent';
import Articledescription from '../../../../../packages/shared-components/article-details/article-description/article-description';
import Authorprofile from '../../../../../packages/shared-components/article-details/author-profile/author-profile';


const page = () => {
    const breadcrumbData = [
        // {
        //   url: "#",
        //   Imgurl: "/assets/icons/breadcrumbs-home-icon.svg"
        // },
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
        {/* breadcrumb  */}
        {/* Article card  */}       
        <section className='pb-[40px]'>
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
        <Articledescription /> 
        </div>
        </section>
        {/* Article card END  */}
        {/* Author profile  */}
        <section className='pb-[40px]'>          
        <div className="max-w-container mx-auto px-[16px] xl:px-[0]">
        <Authorprofile />
        </div>
        </section>
        {/* Author profile END */}
      </>
  )
}

export default page