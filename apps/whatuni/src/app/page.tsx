"use client";
import React from "react";
import Link from "next/link";
import Card from "@shared-components/card";
const page = () => {
  return (
    <div>
      <Link href="/new/degree-courses/search?subject=law" scroll={false}>
        Go to search result page
      </Link>
      <Card />
    </div>
  );
};

export default page;
