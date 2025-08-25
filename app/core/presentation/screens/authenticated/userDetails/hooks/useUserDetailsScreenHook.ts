import {useFetchSagaUserDetailsApi} from '../../../../../domain/usecase/user/useFetchSagaUserDetailsApi';

export const useUserDetailsScreenHook = (userId: string) => {
  // RTK
  //const {isLoading, data} = useGetUserDetailsQuery(userId);

  // Saga
  const {data, isLoading} = useFetchSagaUserDetailsApi(userId);

  return {
    isLoading,
    userEntity: data,
  };
};
