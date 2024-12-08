"use server";
import Header from "./headercomponents";
import {
  graphQlFetchFunction,
  searchAjaxFecthFunction,
} from "@packages/lib/server-actions/server-action";
import { Headerquery } from "@packages/lib/graphQL/graphql-query";
import { headers } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";

export default async function HeaderWrapper() {
  const headersList = await headers(); // Await the promise
  const isAuthenticated = headersList.get("isAuthenticated") || "false";
  const idToken = headersList.get("idToken") || "false";
  let email = "";
  let initial = "";
  const extractInitials = (user: string) => {
    if (user) {
      const namePart = user.split("@")[0];
      const nameSegments = namePart.split(/[^a-zA-Z0-9]+/);
      const initials = nameSegments
        .map((segment) => segment[0])
        .join("")
        .toUpperCase();
      return initials;
    }
    return "";
  };
  if (idToken && isAuthenticated === "true") {
    try {
      // Decode the JWT without verification (for extracting payload only)
      const decodedToken = jwt.decode(idToken) as JwtPayload | null;
      if (decodedToken && decodedToken.email) {
        email = decodedToken.email;
        initial = extractInitials(email);
      }
    } catch (err) {
      console.error("Failed to decode token:", err);
    }
  }

  const body = {
    affiliateId: 220703,
    actionType: "subject",
    keyword: "",
    qualCode: "",
    networkId: 2,
  };
  const unibody = {
    affiliateId: 220703,
    actionType: "institution",
    keyword: "",
    qualCode: "",
    networkId: 2,
  };

  let course_data = null,
    uni_data = null,
    topnav_data = null;
  try {
    const results = await Promise.allSettled([
      searchAjaxFecthFunction(body),
      searchAjaxFecthFunction(unibody),
      graphQlFetchFunction(Headerquery),
    ]);

    course_data = results[0].status === "fulfilled" ? results[0].value : null;
    uni_data = results[1].status === "fulfilled" ? results[1].value : null;
    topnav_data = results[2].status === "fulfilled" ? results[2].value : null;
  } catch (error) {
    console.error("Unexpected error:", error);
  }

  return (
    <Header
      topnav_data={topnav_data}
      course_data={course_data}
      uni_data={uni_data}
      isAuthenticated={isAuthenticated}
      initial={initial}
      basketCount={0}
    />
  );
}
