import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <center>
      <h1>
        <Link href="/new/article">Move to static page</Link>
      </h1>
      <h1>
        <Link href="/new/whatuni">Move to dynamic page</Link>
      </h1>
    </center>
  );
};

export default page;
