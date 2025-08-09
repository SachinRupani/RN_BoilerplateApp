export const getSafeString = (input: any): string => {
  return input ? String(input).trim() : "";
};

export const getSafeNumber = (input: any): number => {
  const result = input ? Number(input) : 0;
  return isNaN(result) ? 0 : result;
};
