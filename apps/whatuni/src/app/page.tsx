"use client";
import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div>
      
      <Link href="/new/degree-courses/search?subject=law" scroll={false}>
        Go to search result page
      </Link>
      
    </div>
  );
};

export default page;
