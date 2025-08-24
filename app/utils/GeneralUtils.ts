export const getSafeString = (
  input: any,
  fallbackValue: string = '',
): string => {
  return input
    ? typeof input === 'object'
      ? JSON.stringify(input)
      : String(input).trim()
    : fallbackValue;
};

export const getSafeNumber = (
  input: any,
  fallbackValue: number = 0,
): number => {
  const result = input ? Number(input) : fallbackValue;
  return isNaN(result) ? fallbackValue : result;
};

export function isEmptyArray(elements: Array<unknown>): boolean {
  return elements.length < 1;
}
