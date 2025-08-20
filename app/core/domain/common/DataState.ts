export interface DataState<T> {
  data?: T;
  error?: any;
  isLoading: boolean;
}

export function getDefaultState() {
  return {
    data: undefined,
    error: undefined,
    isLoading: false,
  };
}

export function getInitialLoadingState<T>(currentData?: T): DataState<T> {
  return {
    data: currentData,
    isLoading: true,
    error: undefined,
  };
}

export function getSuccessDataState<T>(newData: T): DataState<T> {
  return {
    data: newData,
    error: undefined,
    isLoading: false,
  };
}

export function getErrorState<T>(currentData?: T): DataState<T> {
  return {
    data: currentData,
    error: undefined,
    isLoading: false,
  };
}
