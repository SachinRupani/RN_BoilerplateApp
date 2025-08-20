import {useGetUsersApi} from "../../../../../../domain/usecase/user/useGetUsersApi";

export const useHomeScreenHook = () => {
  const {isLoading, users, loadNextPage} = useGetUsersApi();

  return {
    users,
    isLoading,
    loadNextPage,
  };
};
