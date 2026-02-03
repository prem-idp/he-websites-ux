"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const Headercomponent = dynamic(
  () =>
    import("@packages/shared-components/common-utilities/campaign/header/Headercomponent"),
  { ssr: false },
);

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.title = "Registration";
  }, []);

  return (
    <>
      <Headercomponent />
      {children}
    </>
  );
}
