"use client";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";

export function ContentfulField({
  entryId,
  fieldId,
  className,
}: {
  entryId: string;
  fieldId: string;
  className?: string;
}) {
  const inspectorProps: any = useContentfulInspectorMode();

  return (
    <div
      {...inspectorProps({
        entryId: entryId,
        fieldId: fieldId,
      })}
      className={className}
      style={{ display: "contents" }}
    ></div>
  );
}

// Usage in server component:
// export default async function YourServerComponent() {
//   const entry = {
//     id: 'contentful-entry-id',
//     title: 'Some Title',
//     description: 'Some Description'
//   };

//   return (
// <div>
// <ContentfulField entryId={entry.id} fieldId="title">
// <h1>{entry.title}</h1>
// </ContentfulField>
// <ContentfulField entryId={entry.id} fieldId="description">
// <p>{entry.description}</p>
// </ContentfulField>
// </div>
//   );
// }
