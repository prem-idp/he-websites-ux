import React from "react";
import Image from "next/image";
import Link from "next/link";

const StarIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
      fill="#0FBEFD"
    />
  </svg>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-[2px]">
    {[1, 2, 3, 4, 5].map((star) => (
      <StarIcon key={star} />
    ))}
  </div>
);

interface WuscareviewsectionProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  badgeImage?: string;
}

const Wuscareviewsection = ({
  heading = "Make your voice heard ",
  description = "By leaving a review, you can support and inspire future students to make the best university choice for them.",
  ctaText = "Write a review",
  ctaLink = "/write-a-review",
  badgeImage = "/static/assets/images/wusca/review-award.png",
}: WuscareviewsectionProps) => {
  return (
    <section className="bg-primary-50 py-[40px] md:py-[64px] overflow-x-hidden">
      <div className="max-w-container mx-auto lg:px-[20px] xl:px-[0]">
        <div className="flex flex-col md:flex-row gap-[24px] md:mx-[-104px] lg:mx-0">
          <div className="flex flex-row justify-center md:flex-col gap-[12px] md:gap-[100px] w-full md:w-[150px] lg:w-[276px]">
            <div className="flex items-center gap-[6px] md:ml-[105px]">
              <div className="w-[32px] h-[32px] rounded-full bg-grey-300 flex-shrink-0">
                <Image
                  src="/static/assets/images/wusca/review-icon1.png"
                  alt="Review Icon 1"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="bg-white rounded-full px-[10px] py-[6px] shadow-custom-2">
                <StarRating rating={5} />
              </div>
            </div>

            <div className="flex items-center gap-[6px]">
              <div className="w-[32px] h-[32px] rounded-full bg-grey-300 flex-shrink-0">
                <Image
                  src="/static/assets/images/wusca/review-icon2.png"
                  alt="Review Icon 1"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="bg-white rounded-full px-[10px] py-[6px] shadow-custom-2">
                <StarRating rating={5} />
              </div>
            </div>

            <div className="flex items-center gap-[6px] md:ml-[50px]">
              <div className="w-[32px] h-[32px] rounded-full bg-grey-300 flex-shrink-0">
                <Image
                  src="/static/assets/images/wusca/review-icon3.png"
                  alt="Review Icon 3"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="bg-white rounded-full px-[10px] py-[6px] shadow-custom-2">
                <StarRating rating={3} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center justify-center gap-[16px] md:gap-[20px] lg:grow md:w-[422px] mx-auto px-[16px] md:px-0">
            {/* Awards Badge */}
            <div className="">
              <Image
                src={badgeImage}
                alt="Whatuni Student Choice Awards"
                className="object-contain"
                width={392}
                height={234}
              />
            </div>

            {/* Heading */}
            <h2 className="font-farro font-bold text-heading4 md:text-heading2 text-grey-600">
              {heading}
            </h2>

            {/* Description */}
            <p className="text-grey-500">{description}</p>

            {/* CTA Button */}
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-[8px] btn btn-primary"
            >
              {ctaText}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <div className="flex flex-row justify-center md:flex-col gap-[12px] md:gap-[100px] w-full md:w-[150px] lg:w-[276px] items-end">
            <div className="flex items-center gap-[6px] md:mr-[105px]">
              <div className="w-[32px] h-[32px] rounded-full bg-grey-300 flex-shrink-0">
                <Image
                  src="/static/assets/images/wusca/review-icon4.png"
                  alt="Review Icon 4"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="bg-white rounded-full px-[10px] py-[6px] shadow-custom-2">
                <StarRating rating={4} />
              </div>
            </div>

            {/* Middle right */}
            <div className="flex items-center gap-[6px]">
              <div className="w-[32px] h-[32px] rounded-full bg-grey-300 flex-shrink-0">
                <Image
                  src="/static/assets/images/wusca/review-icon5.png"
                  alt="Review Icon 5"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="bg-white rounded-full px-[10px] py-[6px] shadow-custom-2">
                <StarRating rating={5} />
              </div>
            </div>

            <div className="flex items-center gap-[6px] md:mr-[50px]">
              <div className="w-[32px] h-[32px] rounded-full bg-grey-300 flex-shrink-0">
                <Image
                  src="/static/assets/images/wusca/review-icon6.png"
                  alt="Review Icon 6"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="bg-white rounded-full px-[10px] py-[6px] shadow-custom-2">
                <StarRating rating={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wuscareviewsection;
