"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { discoverpodQuery } from "@packages/lib/graphQL/graphql-query";
import { graphQlFetchFunction } from "@packages/lib/server-actions/server-action";

interface discoverContentfulInterface{
  data: {
    contentData?: {
      items?: [{bodyContentCollection?: {
        items?: [
          {
            mediaCardsCollection?: {
              items?: [
                {
                  title: "",
                  internalName: "",
                  cta: {
                    internalName: ""
                    primaryCtaUrl: ""
                    primaryCtaLabel: ""
                    secondaryCtaUrl: ""
                    secondaryCtaLabel: ""
                    primaryCtaTarget: ""
                    secondaryCtaTarget: ""
                    flagStyle: ""
                  }
                  image: {
                    imageTitle: "",
                    imgAltText: "",
                    imgUpload: {
                      url: ""
                      height: ""
                      width: ""
                    }
                  }
                }
              ]
            }
          }
        ]
      }}]
    }
  }
}

let discoverList: discoverContentfulInterface;

const Discoverslidercomponents1 = () => {


  const [dicoverCardContentfulList, setDicoverCardContentfulList] = useState(discoverList);
  useEffect(() => {
    async function getcontetnfuldata(){
      console.log("graphQL req started....");
      const discovercontentfulData = await graphQlFetchFunction(discoverpodQuery);
      console.log("graphQL req ended....");
      setDicoverCardContentfulList(discovercontentfulData);
    }
    getcontetnfuldata();
    
  }, [])
  // Toggle Menu
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const mobileToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="slider-container">
          <Swiper
            pagination={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
            }}
            modules={[FreeMode, Pagination]}
            className="MultiSwiper"
          >
            {dicoverCardContentfulList?.data?.contentData?.items?.map((discoverObj) => {
              if(discoverObj != null){
                return discoverObj?.bodyContentCollection?.items?.map((mediaCardsCollectionItems, index) => {
                  if(mediaCardsCollectionItems?.mediaCardsCollection?.items != null && mediaCardsCollectionItems.mediaCardsCollection.items[index] != null){
                    return mediaCardsCollectionItems?.mediaCardsCollection?.items.map((discoverItems) => {
                      if(discoverItems?.title != null && discoverItems?.title != undefined){
                        return <SwiperSlide>
                          <div className="discover-card">
                           <Link href={discoverItems.cta.primaryCtaUrl} className="block bg-blue-100 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden">
                              <div className="discover-card flex justify-between gap-[8px]">
                                <div className="flex flex-col justify-between p-[20px] pr-[0]">
                                  <div className="w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]">
                                    {discoverItems.title}
                                  </div>
                                  <h5 className="font-bold">Looking for courses?</h5>
                                </div>
                                <Image
                                  src={discoverItems.image.imgUpload.url}
                                  width="186"
                                  height="200"
                                  alt="discover"
                                />
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      }
                    })
                  }
                });
              }
              return <></>
            })}
            
          </Swiper>
        </div>
      ) : (
        
        <div className="discover grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[20px]">
          {dicoverCardContentfulList?.data?.contentData?.items?.map((discoverObj) => {
              if(discoverObj != null){
                return discoverObj?.bodyContentCollection?.items?.map((mediaCardsCollectionItems, index) => {
                  if(mediaCardsCollectionItems?.mediaCardsCollection?.items != null && mediaCardsCollectionItems.mediaCardsCollection.items[index] != null){
                    return mediaCardsCollectionItems?.mediaCardsCollection?.items.map((discoverItems) => {
                      if(discoverItems?.title != null && discoverItems?.title != undefined){
                        return <div className="discover-card">
                                  <Link
                                    href={discoverItems.cta.primaryCtaUrl}
                                    className="block bg-blue-100 hover:outline-2 hover:outline hover:outline-primary-400 rounded-[8px] overflow-hidden"
                                  >
                                    <div className="discover-card flex justify-between gap-[8px]">
                                      <div className="flex flex-col justify-between p-[20px] pr-[0]">
                                        <div className="w-fit uppercase font-bold x-small text-primary-500 bg-white/[.6] px-[6px] py-[2px] rounded-[4px]">
                                          {discoverItems.title}
                                        </div>
                                        <h5 className="font-bold">Looking for courses?</h5>
                                      </div>
                                      <Image
                                        src={discoverItems.image.imgUpload.url}
                                        width="186"
                                        height="200"
                                        alt="discover"
                                      />
                                    </div>
                                  </Link>
                                </div>
                       }
                    })
                  }
                });
              }
            })}
        </div>
      )}
    </>
  );
};

export default Discoverslidercomponents1;
