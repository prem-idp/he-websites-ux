"use server";
import React from "react";
import CourseBox from "./course-box";
import Image from "next/image";
import Link from "next/link";
const Colleges = ({ data, title }: any) => {
  return (
    <>
      <section className="px-[20px] py-[10px]">
        <div className="max-w-container mx-auto">
          {data != null ? (
            <div className="border border-gray-300 p-[10px] lg:mb-[20px] lg:p-[24px]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <Link
                    href="/"
                    className="text-primary-500 font-semibold text-para-lg hover:underline"
                  >
                    {data.collegeName}
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-400 font-semibold text-small hover:underline"
                  >
                    {data.bestMatchCoursesList.length} {title}degree
                  </Link>
                  <div className="flex items-center gap-[5px] pt-[14px]">
                    <div className="flex items-center">
                      <svg
                        className="w-[18px] h-[18px] text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[18px] h-[18px] text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[18px] h-[18px] text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[18px] h-[18px] text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-[18px] h-[18px] ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <div className="text-gray-400 text-small">(41)</div>
                    <Link href="/" className="text-primary-500 text-small">
                      1293 reviews
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src="https://pbs.twimg.com/profile_images/1304396549246586881/4X1ieeNV_400x400.jpg"
                    width={62}
                    height={62}
                    title="Coventry University"
                    alt="Coventry University"
                  />
                </div>
              </div>
              <CourseBox data={data.bestMatchCoursesList} />
              <Link
                href="/"
                className="mt-[20px] inline-block uppercase text-primary-500 font-bold hover:underline"
              >
                View all 5 related courses{" "}
              </Link>
            </div>
          ) : (
            <h1>No data match for this search</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default Colleges;
