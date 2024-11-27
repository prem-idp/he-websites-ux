"use client";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const TrackSessionId = () => {
  useEffect(() => {
    const name = "trackSessionId";
    const cookies = document?.cookie?.split("; ");
    const cookie = cookies?.find((mycookie) => mycookie.startsWith(`${name}=`));
    const cookiePresent = cookie?.split("=")[1] || null;
    console.log(cookiePresent);
    if (!cookiePresent) {
      const trackSessionId = uuidv4();
      document.cookie = `${name}=${trackSessionId}; path=/; max-age=3600`;
    } else {
      console.log("Cookie already present:", cookiePresent);
    }
  }, []);
  return null;
};
export default TrackSessionId;
