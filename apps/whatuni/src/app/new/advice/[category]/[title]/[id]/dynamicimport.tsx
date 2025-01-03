import dynamic from "next/dynamic";

const componentMap: any = {
  PageComponentRichText: () =>
    dynamic(
      () =>
        import(
          "@packages/shared-components/article-details/richtextcomponent/richtextcomponent"
        )
    ),
};

const dynamicComponent = (input: string | null | undefined) => {
  if (!input) return null;
  const loadComponent = componentMap[input];
  return loadComponent();
};

export default dynamicComponent;
