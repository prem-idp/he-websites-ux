'use client'
import { useEffect } from "react";

export default function SchemaTag({data,url}:any) {
    const jsonLd = {
        "@context":"http://schema.org",
        "@type":"Article",
        "headline":data?.seoFields?.metaTite,
        
        
        "url":url,	
        "thumbnailUrl":data?.bannerImageCollection?.items[0]?.imgUpload?.url,
        "image":data?.bannerImageCollection?.items[0]?.imgUpload?.url,	
        "dateCreated":"04 Feb 2019",
        "datePublished":"04 Feb 2019",
        "dateModified":data?.modifiedDate,
        "creator":{"@type":"Person","name":data?.author?.firstName + data?.author?.middleName +  data?.author?.lastName},
        "author":{"@type":"Person","name":data?.author?.firstName + data?.author?.middleName +  data?.author?.lastName},
        "publisher":{"@type":"Organization","name":"Whatuni",
        "logo":{"@type":"http://schema.org/ImageObject",
        "url":"https://images-dom.prod.aws.idp-connect.com/wu-cont/images/logo_print.png"}},
        "mainEntityOfPage":{"@type":"WebPage",
        "@id":url},
        "keywords":[""]
      }
   

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);

    // Append the script to the <head>
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
