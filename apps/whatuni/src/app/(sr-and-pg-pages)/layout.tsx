import FilterWrapper from "@packages/shared-components/sr-page/filterWrapper/filterWrapper";
import { Suspense } from "react";
export default async function Layout({
  children,
  params,
  // searchParams,
}: Readonly<{
  children: React.ReactNode;
  params: any;
  // searchParams: any;
}>) {
  const p = await params;
  // const sp = await searchParams;
  //console.log({ p });
  return (
    <>
      {children}
      <Suspense>
        <FilterWrapper />
      </Suspense>
    </>
  );
}
