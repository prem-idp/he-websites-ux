import { parseGradeString } from "./helper-function";

const updateUserEntryPointForIncrement = (
  currentEntry: string,
  btnName: string
): string => {
  const key = `${btnName}`;
  const entries = currentEntry?.split("-")?.filter(Boolean);
  const counts: Record<string, number> = {};
  entries.forEach((entry) => {
    const match = entry.match(/^(\d+)?(.*)$/);
    const count = parseInt(match?.[1] || "1", 10);
    const value = match?.[2] || "";
    counts[value] = (counts[value] || 0) + count;
  });
  counts[key] = (counts[key] || 0) + 1;
  return Object.entries(counts)
    .map(([entry, count]) => `${count > 1 ? count : "1"}${entry}`)
    .join("-");
};
export { updateUserEntryPointForIncrement };

const updateUserEntryPointForDecrement = (
  currentEntry: string,
  btnName: string
): string => {
  const key = `${btnName}`;
  const entries = currentEntry?.split("-")?.filter(Boolean);
  const counts: Record<string, number> = {};
  entries.forEach((entry) => {
    const match = entry.match(/^(\d+)?(.*)$/);
    const count = parseInt(match?.[1] || "1", 10);
    const value = match?.[2] || "";
    counts[value] = (counts[value] || 0) + count;
  });
  if (counts[key]) {
    counts[key] -= 1;
    if (counts[key] === 0) {
      delete counts[key];
    }
  }
  return Object.entries(counts)
    .map(([entry, count]) => `${count > 1 ? count : "1"}${entry}`)
    .join("-");
};

export { updateUserEntryPointForDecrement };

const calculateTotalCount = (userEntryPoint: string): number => {
  if (!userEntryPoint) return 0;
  return userEntryPoint
    .split("-")
    .filter(Boolean)
    .reduce((total, entry) => {
      const match = entry.match(/^(\d+)?/);
      const count = match && match[0] ? parseInt(match[0], 10) : 1;
      return total + count;
    }, 0);
};

export { calculateTotalCount };

const getPodspecficGradePoints = (
  gradesString: string,
  userEntryPoint: string
): number => {
  const grades = parseGradeString(gradesString);
  if (!userEntryPoint || !grades?.length) return 0;

  const gradeMap = grades.reduce(
    (map, grade) => {
      map[grade.key.toUpperCase()] = grade.value;
      return map;
    },
    {} as Record<string, number>
  );

  return userEntryPoint
    .split("-")
    .filter(Boolean)
    .reduce((total, entry) => {
      const match = entry.match(/^(\d+)?(.+)/);
      const count = match && match[1] ? parseInt(match[1], 10) : 1;
      const key = match && match[2] ? match[2].toUpperCase() : "";
      return total + count * (gradeMap[key] || 0);
    }, 0);
};

export { getPodspecficGradePoints };

const getSelectedGrade = (userEntryPoint: string, gradeKey: string): number => {
  if (!userEntryPoint || !gradeKey) return 0;

  const normalizedGradeKey = gradeKey.trim().toUpperCase();
  return userEntryPoint
    .split("-")
    .filter(Boolean)
    .reduce((count, entry) => {
      const match = entry.match(/^(\d+)?(.+)/);
      const currentCount = match && match[1] ? parseInt(match[1], 10) : 1;
      const currentKey = match && match[2] ? match[2].toUpperCase() : "";
      return currentKey === normalizedGradeKey ? count + currentCount : count;
    }, 0);
};

export { getSelectedGrade };

const formatQualificationLabel = (input: string): string => {
  if (!input) return "";

  return input
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
export { formatQualificationLabel };
