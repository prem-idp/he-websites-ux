"use server";
import Script from "next/script";
import Head from "next/head";
export default async function page() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://mdev.dev.aws.whatuni.com/colc/static/css/main.colc.0.1.1.css"
        />
      </Head>
      <Script src="https://mdev.dev.aws.whatuni.com/colc/static/js/main.colc.0.1.1.js" />
      {/* <Script src="./main" /> */}
      <colc-calculator></colc-calculator>
    </>
  );
}
