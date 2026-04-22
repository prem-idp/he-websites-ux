import Image from "next/image";
import Link from "next/link";
import Reviewslidercomponents from "@packages/shared-components/common-utilities/slider/reviewslidercomponents";
import { StarIcon } from "@/app/media-utilities/mediautilities";

interface UniversityCardProps {
  logoSrc: string;
  name: string;
  rating: string;
  reviewCount: string;
  backgroundImage: string;
  maxSlidesPerView?: number;
  sliderClassName?: string;
  noRoundedRight?: boolean;
  totalCards?: number;
  headingClassName?: string;
  autoplay?: boolean;
  hideNavigation?: boolean;
  hideReadMore?: boolean;
  mobileSpaceBetween?: number;
}

const UniversityCard = ({
  logoSrc,
  name,
  rating,
  reviewCount,
  backgroundImage,
  maxSlidesPerView,
  sliderClassName,
  noRoundedRight = false,
  totalCards = 5,
  headingClassName,
  autoplay = false,
  hideNavigation = false,
  hideReadMore = false,
  mobileSpaceBetween,
}: UniversityCardProps) => {
  const roundedClass = noRoundedRight
    ? "rounded-none lg:rounded-tl-[8px] lg:rounded-tr-none"
    : "rounded-none lg:rounded-t-[8px]";

  return (
    <div className={`flex flex-col gap-[24px]`}>
      <div
        className={`w-full h-[292px] relative bg-grey200 bg-gradient11 shrink-0 ${roundedClass} cursor-pointer overflow-hidden`}
      >
        <div
          className={`absolute inset-0 p-[16px] bg-gradient17 lg:p-[24px] flex flex-col justify-between ${roundedClass} z-10`}
        >
          <Link
            href="#"
            className="w-[64px] h-[64px] p-[4px] rounded-[4px] bg-white shadow-custom-4 flex items-center justify-center shrink-0"
          >
            <Image src={logoSrc} alt="University logo" width={56} height={56} />
          </Link>
          <div className="flex flex-col gap-[4px] text-white">
            <div className="para-lg font-farro fontsemibold">{name}</div>
            <div className="flex items-center gap-[8px] text-grey-50 small">
              <div className="flex items-center gap-[2px]">
                <StarIcon />
                {rating}
              </div>
              <Link href="" className="hover:underline">
                {reviewCount} reviews
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={backgroundImage}
          alt="University"
          fill
          className={`${roundedClass} object-cover`}
        />
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className={`h6 ${headingClassName || "px-[16px] md:px-[0]"}`}>
          What students say
        </div>
        <Reviewslidercomponents
          maxSlidesPerView={maxSlidesPerView}
          className={sliderClassName}
          totalCards={totalCards}
          autoplay={autoplay}
          hideNavigation={hideNavigation}
          hideReadMore={hideReadMore}
          mobileSpaceBetween={mobileSpaceBetween}
        />
      </div>
    </div>
  );
};

export default UniversityCard;
