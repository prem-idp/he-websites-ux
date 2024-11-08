"use server";
import React from "react";
const WeatherInfo = async () => {
  const city = "London";
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
  const jsonData = await res.json();
  const weather = jsonData?.data?.current_weather;
  return (
    <div className="bg-green-100 p-6 rounded-lg shadow-md max-w-md mx-auto my-4 text-center">
      <h2 className="text-xl font-semibold mb-4">Weather in {city}</h2>
      <div>
        <p className="text-gray-700">Temperature: {weather?.temperature}°C</p>
        <p className="text-gray-700">Wind Speed: {weather?.windspeed} km/h</p>
        <p className="text-gray-700">Conditions: {weather?.weathercode}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
