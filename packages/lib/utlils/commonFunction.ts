"use client";
export function getCookieValue(name: any) {
  if (typeof document === "undefined") {
    return ""; // Return empty if not in the browser
  }

  const cookieArray = document?.cookie.split("; ");
  const cookie = cookieArray.find((c) => c.startsWith(`${name}=`));
  return cookie ? cookie.split("=")[1] : "";
}

export function setNewCookie(cookieString: string) {
  if (typeof document !== "undefined") {
    document.cookie = cookieString;
  }
}
