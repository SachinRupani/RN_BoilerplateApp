import {useState} from 'react';
import {useGetUsersApi} from '../../../../../../../domain/usecase/user/useGetUsersApi';

export const useHomeScreenHook = () => {
  const {isLoading, users, loadNextPage, refreshList} = useGetUsersApi();

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
