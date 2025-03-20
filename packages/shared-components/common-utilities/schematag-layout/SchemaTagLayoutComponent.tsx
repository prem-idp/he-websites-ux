import React from "react";
import Script from "next/script";

export default function SchemaTagLayoutComponent ({ schemaType, schemaData }: { schemaType: string, schemaData?: any }) {

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': schemaType,
        ...schemaData
      }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
};
