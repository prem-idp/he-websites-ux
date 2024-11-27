"use client";
import { useEffect } from "react";
const LocationAccess = () => {
  useEffect(() => {
    function requestLocation() {
      // console.log(navigator);
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // console.log("Location granted:", position.coords);
          },
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              // console.log("User denied location access.");
            } else if (error.code === error.POSITION_UNAVAILABLE) {
              // console.log("Location information is unavailable.");
            } else if (error.code === error.TIMEOUT) {
              // console.log("The request to get user location timed out.");
            } else {
              // console.log("An unknown error occurred.");
            }
          }
        );
      } else {
        // console.log("Geolocation is not supported by this browser.");
      }
    }
    requestLocation();
  }, []);
  return null;
};

export default LocationAccess;
