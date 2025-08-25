import {useGetUserDetailsQuery} from '../../../../../data/dataSource/collections/UserEndpoints';

export const useUserDetailsScreenHook = (userId: string) => {
  const {isLoading, data} = useGetUserDetailsQuery(userId);

  return {
    isLoading,
    userEntity: data,
  };
};
