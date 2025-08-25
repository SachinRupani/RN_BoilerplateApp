import {useState} from 'react';
import {useFetchSagaUsersApi} from '../../../../../../../domain/usecase/user/useFetchSagaUsersApi';

export const useHomeScreenHook = () => {
  const {isLoading, users, loadNextPage, refreshList} = useFetchSagaUsersApi();

  const [isDataRefreshing, setIsDataRefreshing] = useState<boolean>(false);

  const triggerRefresh = () => {
    if (!isDataRefreshing) {
      setIsDataRefreshing(true);

      setTimeout(() => {
        setIsDataRefreshing(false);
      }, 500); // Simulate a refresh delay

      // Main refresh action
      refreshList();
    }
  };

  return {
    users,
    isLoading,
    isDataRefreshing,
    loadNextPage,
    triggerRefresh,
  };
};
