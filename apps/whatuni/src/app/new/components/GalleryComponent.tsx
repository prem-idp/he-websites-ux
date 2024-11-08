"use server";
import React from "react";
import Image from "next/image";
const GalleryComponent = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  const jsonData = await res.json();
  const imageUrl = jsonData.message;

  return (
    <div className="bg-yellow-100 p-6 rounded-lg shadow-lg max-w-md mx-auto my-4 text-center">
      <h2 className="text-2xl font-bold text-yellow-800 mb-4">
        Random Dog of the Day
      </h2>
      <div className="p-4 border-4 border-yellow-500 rounded-md">
        <Image
          src={imageUrl}
          height={100}
          width={300}
          alt="Random Dog"
          //   className="w-full h-auto rounded-md shadow-md"
        />
      </div>
      <p className="text-yellow-700 mt-4 italic">
        Here’s a little furry joy to brighten your day!
      </p>
    </div>
  );
};

export default GalleryComponent;
