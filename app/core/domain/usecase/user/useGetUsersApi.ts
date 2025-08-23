import {useEffect, useState} from "react";
import {AppDefaults} from "../../../../config/AppDefaults";
import {isEmptyArray} from "../../../../utils/GeneralUtils";
import {useGetUserListQuery} from "../../../data/dataSource/collections/UserEndpoints";
import {UserEntity} from "../../entity/user/UserEntity";

export const useGetUsersApi = () => {
  const [users, setUsers] = useState<Array<UserEntity>>([]);
  const [currentPage, setCurrentPage] = useState<number>(
    AppDefaults.INITIAL_PAGE_NO,
  );

  const {isLoading, data, isFetching, refetch} = useGetUserListQuery({
    pageNo: currentPage,
    itemsPerPage: AppDefaults.ITEMS_PER_PAGE,
  });

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
        loadNextPage();
      }
    }
  }, [data]);

  const loadNextPage = () => {
    if (!isFetching && data && currentPage < data.totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const refreshList = () => {
    setUsers([]);
    setCurrentPage(AppDefaults.INITIAL_PAGE_NO);
    refetch();
  };

  return {
    isLoading,
    users,
    loadNextPage,
    refreshList,
  };
};
