import FilterWrapper from "@packages/shared-components/sr-page/SrFilter/filterWrapper";
import { Suspense } from "react";
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Suspense>
        <FilterWrapper />
      </Suspense>
    </>
  );
}
