import {useCallback, useRef} from "react";

export const useThrottle = (func: Function, delayMillis: number = 700) => {
  const lastCallRef = useRef<number>(0);

  return useCallback(() => {
    const now = Date.now();
    if (now - lastCallRef.current > delayMillis) {
      lastCallRef.current = now;
      func();
    }
  }, [func, delayMillis]);
};
