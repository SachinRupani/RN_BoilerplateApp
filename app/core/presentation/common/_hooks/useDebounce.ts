import {useCallback, useRef} from "react";

export const useDebounce = (
  func: (...args: any[]) => void,
  delay: number = 700,
) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunc = useCallback(
    (...args: any[]) => {
      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set new timeout
      timeoutRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay],
  );

  return debouncedFunc;
};
