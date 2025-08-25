import {useEffect} from 'react';
import {
  selectUserDetails,
  userDetailsRequest,
} from '../../../data/redux/features/user/userDetailsSlice';
import {useAppDispatch, useAppSelector} from '../../../data/redux/hooks';

export const useFetchSagaUserDetailsApi = (userId: string) => {
  const dispatch = useAppDispatch();
  const {data, isLoading, error} = useAppSelector(selectUserDetails);

  useEffect(() => {
    dispatch(userDetailsRequest(userId));
  }, [userId]);

  useEffect(() => {
    console.log('isLoadingState', isLoading);
  }, [isLoading]);

  return {
    data,
    isLoading,
  };
};
