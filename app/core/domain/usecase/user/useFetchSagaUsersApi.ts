import {useEffect, useState} from 'react';
import {AppDefaults} from '../../../../config/AppDefaults';
import {isEmptyArray} from '../../../../utils/GeneralUtils';
import {
  selectUserList,
  userListRequest,
} from '../../../data/redux/features/user/userSlice';
import {useAppDispatch, useAppSelector} from '../../../data/redux/hooks';
import {UserEntity} from '../../entity/user/UserEntity';

export const useFetchSagaUsersApi = () => {
  const dispatch = useAppDispatch();
  const {data, isLoading, error} = useAppSelector(selectUserList);

  const [users, setUsers] = useState<Array<UserEntity>>([]);
  const [currentPage, setCurrentPage] = useState<number>(
    AppDefaults.INITIAL_PAGE_NO,
  );

  useEffect(() => {
    dispatch(
      userListRequest({
        pageNo: currentPage,
        itemsPerPage: AppDefaults.ITEMS_PER_PAGE,
      }),
    );
  }, [currentPage]);

  useEffect(() => {
    if (data && !isEmptyArray(data.users)) {
      // Update users state with new data
      setUsers(prevUsers => {
        const mergedUserList = [...prevUsers, ...data.users];
        const uniqueUsers = Array.from(
          new Map(mergedUserList.map(u => [u.id, u])).values(),
        );
        return uniqueUsers;
      });

      // Just load 2nd page data after 1st page data load (one time action)
      if (currentPage === AppDefaults.INITIAL_PAGE_NO) {
        loadNextPage(true);
      }
    }
  }, [data]);

  const loadNextPage = (isAutoTrigger: boolean = false) => {
    if (!isLoading && data && currentPage < data.totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const refreshList = () => {
    setUsers([]);
    setCurrentPage(AppDefaults.INITIAL_PAGE_NO);
  };

  return {
    isLoading,
    users,
    loadNextPage,
    refreshList,
  };
};
