export const parseGradeString = (gradeString: string | null) => {
  if (gradeString) {
    return gradeString.split(",").map((item) => {
      const [key, value] = item.split("~");
      return { key, value: parseInt(value, 10) };
    });
  }
};
