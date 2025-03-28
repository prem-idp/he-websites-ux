import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserFavourite from "@packages/shared-components/common-utilities/user-favourite/UserFavourite";

interface ProviderTopCardProps {
  searchResultlist: any; // Adjust type as needed
}

export default async function PrPageTopSection({ searchResultlist }: ProviderTopCardProps) {

  if (!searchResultlist || !searchResultlist.searchResultsList?.length) {
    return <></>
  }

  const college = searchResultlist?.searchResultsList[0];
  const logoSrc = `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}` + college?.collegeMedia?.ipCollegeLogo; // Extract the logo URL
  const distanceInMiles = college?.distanceInMiles ?? 0;
  const collegeName = college?.collegeDisplayName;
  const totalCourseCount = searchResultlist?.totalCourseCount;
  const reviewCount = college?.reviewCount ?? 0; // Default to 0 if null
  const rating = college?.exactRating ?? 0; // Default to 0 if null
  const collegeTextKey = college?.collegeTextKey;
  const reviewsLinksrc = `/university-course-reviews/${collegeTextKey?.toLowerCase().replace(/\s+/g, "-")}/${college?.collegeId}`;

  return (
    <section className="bg-white">
      <div className="max-w-container mx-auto px-[16px] md:px-[24px] xl:px-[0]">
        <div className="flex justify-between w-full py-[16px]">
          <div className="flex gap-[17px]">
            <span className="p-[4px] bg-white rounded-[8px] hidden md:block shadow-custom-1 min-w-[64px] h-[64px]">
              <img
                src={logoSrc || "/static/assets/icons/blue-star-icon.svg"}
                alt="University logo"
                width={56}
                height={56}
              />
            </span>
            <div className="flex flex-col gap-[4px]">
              <div className="h5 heading5 font-farro text-black">
                {collegeName}
              </div>
              <span className="para">{totalCourseCount} courses available </span>
              <div className="flex items-center gap-[8px] text-blue-400 small">
                {rating > 0 &&
                  <span className="flex items-center">
                    <Image
                      alt="blue star icon"
                      className="relative top-[-1px]"
                      width="24"
                      height="24"
                      src="/static/assets/icons/blue-star-icon.svg"
                    />
                    {rating}
                  </span>
                }
                {reviewCount > 0 && <Link href={reviewsLinksrc} className="underline ">
                  {reviewCount} reviews
                </Link>
                }
              </div>
              <ul className="flex mt-[4px] flex-wrap gap-[8px]">
                <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-grey-100 text-grey-500 xs-small">
                  REGION
                </li>
                <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                  <Image
                    src="/static/assets/icons/search-result/location-green.svg"
                    width="16"
                    height="16"
                    alt="location icon"
                  />
                  {distanceInMiles} Miles from you
                </li>
                {college?.wuscaRanking &&
                  <li className="relative group text-nowrap uppercase underline text-blue-400 x-small">
                    <span>
                      WUSCA ranking: {college?.wuscaRanking}
                      <div
                        className="absolute select-none z-[5] hidden group-hover:flex border border-grey-200 top-[20px] shadow-custom-1 whitespace-normal normal-case rounded-[8px] max-w-[100%] md:min-w-[320px] min-w-[200px] left-[-16px] md:left-0  bg-white p-[12px] flex-col gap-[4px] after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:bg-white after:left-[30px] after:z-0 after:top-[-5px] after:border after:translate-x-2/4 after:translate-y-0 after:rotate-45 after:border-b-0 after:border-r-0"
                      >
                        <span className="x-small text-grey900 font-semibold">
                          Why should you trust our uni reviews?
                        </span>
                        <p className="x-small text-grey300">
                          All our reviews are from real students, submitted using
                          their verified university email address.
                        </p>
                      </div>
                    </span>
                  </li>
                }

                {college?.wuscaBadges &&
                  <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                    {college?.wuscaBadges}
                  </li>
                }
                <li className="flex text-nowrap select-none rounded-[4px] font-bold uppercase px-[8px] bg-green-100 text-positive-dark xs-small">
                  + 2 more
                </li>
              </ul>
            </div>
          </div>
          <span className="favorite group mr-[0] lg:mr-[10px]  items-center justify-center flex min-w-[40px] w-[40px] h-[40px]  border border-primary-400 hover:bg-primary-400 rounded-[48px] cursor-pointer">
            <UserFavourite
              contentId={college?.collegeId}
              contentName={collegeTextKey}
              contentType="INSTITUTION"
            />
          </span>
        </div>
      </div>
    </section>
  );
};
