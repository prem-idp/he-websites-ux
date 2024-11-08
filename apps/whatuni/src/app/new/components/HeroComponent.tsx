"use server";
import React from "react";
const HeroComponent = async () => {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const jsonData = await res.json();
  const jokeContent =
    jsonData.type === "single"
      ? jsonData.joke
      : `${jsonData.setup} - ${jsonData.delivery}`;

  return (
    <div className="bg-green-100 p-6 rounded-lg shadow-lg max-w-md mx-auto my-4 text-center">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        Random Joke of the Day
      </h2>
      <div className="p-4 border-4 border-green-500 rounded-md bg-green-200">
        <p className="text-lg text-green-900 font-medium">{jokeContent}</p>
      </div>
      <p className="text-green-700 mt-4 italic">Hope this made you smile!</p>
    </div>
  );
};

export default HeroComponent;
