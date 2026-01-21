import React from "react";
import Headercomponent from "@packages/shared-components/common-utilities/campaign/header/Headercomponent";
import Footer from "@packages/shared-components/common-utilities/footer/footercomponents";

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Headercomponent />
      {children}
      <Footer />
    </>
  );
}
