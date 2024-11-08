"use server";
import dynamic from "next/dynamic";
import DynamicSkeleton from "../../skeleton/skeleton";
const DynamicComponentRenderer = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  const advice = data.slip.advice;

  const componentList = [
    {
      component: "GalleryComponent",
      ssr: false,
      loading: "GallerySkeletonComponent",
      data: { images: ["img1.jpg", "img2.jpg", "img3.jpg"] },
    },
    {
      component: "HeroComponent",
      ssr: true,
      loading: "HeroSkeletonComponent",
      data: { content: "Hero content here" },
    },
    {
      component: "FeatureComponent",
      ssr: true,
      loading: "FeatureSkeletonComponent",
      data: { features: ["Feature 1", "Feature 2", "Feature 3"] },
    },
  ];

  const loadComponent = (
    name: string,
    ssr: boolean,
    loadingComponent: string
  ) =>
    dynamic(() => import(`@/app/new/components/${name}`), {
      ssr,
      loading: () => <DynamicSkeleton name={loadingComponent} />,
    });

  return (
    <>
      {/* Parent component */}
      <div className="bg-green-100 p-6 rounded-lg shadow-md max-w-md mx-auto my-4 text-center">
        <h2 className="text-xl font-semibold mb-4 text-green-900">
          Daily Advice
        </h2>
        <p className="text-gray-700 italic">{advice}</p>
      </div>
      {/* Client component */}

      <div>
        {componentList.map(({ component, ssr, loading, data }, index) => {
          const Component = loadComponent(component, ssr, loading);
          return <Component key={index} {...data} />;
        })}
      </div>
    </>
  );
};

export default DynamicComponentRenderer;
