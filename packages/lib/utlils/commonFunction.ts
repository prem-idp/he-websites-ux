export function getCookieValue(name: any) {
  const cookieArray = document.cookie.split("; ");
  const cookie = cookieArray.find((c) => c.startsWith(`${name}=`));
  return cookie ? cookie.split("=")[1] : "";
}

export function setNewCookie(cookieString: string) {
  document.cookie = cookieString;
}

export function ordinarySuffix(rank: any): string {
  const j = rank % 10; const k = rank % 100;
  if (j === 1 && k !== 11)
    return `${String(rank)}st`;

  if (j === 2 && k !== 12)
    return `${String(rank)}nd`;

  if (j === 3 && k !== 13)
    return `${String(rank)}rd`;

  return `${String(rank)}th`;
}