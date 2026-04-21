"use client";
import React from "react";
import Headercomponent from "@packages/shared-components/common-utilities/campaign/header/Headercomponent";

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {<Headercomponent />}
      {children}
    </>
  );
}
