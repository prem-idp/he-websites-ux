import React from "react";
interface NameInterfaceProps {
  name: string;
}
const DynamicSkeleton: React.FC<NameInterfaceProps> = ({ name }) => {
  return (
    <>
      {name === "GallerySkeletonComponent" && (
        <div className="flex flex-col gap-4 p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
          <div className="h-48 bg-yellow-500 rounded-lg animate-pulse"></div>
          <div className="flex flex-col gap-2">
            <div className="h-6 bg-yellow-400 rounded animate-pulse"></div>
            <div className="h-6 bg-yellow-300 rounded animate-pulse w-3/4"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-4 bg-yellow-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-yellow-200 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-yellow-200 rounded animate-pulse w-2/3"></div>
          </div>
          <div className="h-4 bg-yellow-400 rounded animate-pulse w-1/2 mt-4"></div>
        </div>
      )}
      {name === "HeroSkeletonComponent" && (
        <div className="flex flex-col gap-4 p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
          <div className="h-48 bg-green-500 rounded-lg animate-pulse"></div>
          <div className="flex flex-col gap-2">
            <div className="h-6 bg-green-400 rounded animate-pulse"></div>
            <div className="h-6 bg-green-300 rounded animate-pulse w-3/4"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-4 bg-green-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-green-200 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-green-200 rounded animate-pulse w-2/3"></div>
          </div>
          <div className="h-4 bg-green-400 rounded animate-pulse w-1/2 mt-4"></div>
        </div>
      )}
    </>
  );
};

export default DynamicSkeleton;
