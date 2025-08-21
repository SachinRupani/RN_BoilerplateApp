import {useGetUserDetailsQuery} from "../../../../data/redux/rtkQuery/services/ApiService";

export const useUserDetailsScreenHook = (userId: string) => {
  // This hook can be used to manage the state and logic for the UserDetailsScreen

  const {isLoading, data} = useGetUserDetailsQuery(userId);

  return {
    isLoading,
    userEntity: data,
  };
};
