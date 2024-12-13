"use client";
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
}

function replaceWithNA(value: any) {
  return value === undefined || value === ''  || value === null ? 'NA' : value;
}

export { getCookie, replaceWithNA };
