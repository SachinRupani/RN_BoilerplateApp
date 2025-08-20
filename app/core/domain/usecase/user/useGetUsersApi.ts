import {useEffect, useState} from "react";
import {isEmptyArray} from "../../../../utils/GeneralUtils";
import {useGetUserListQuery} from "../../../data/redux/rtkQuery/services/ApiService";
import {UserEntity} from "../../entity/user/UserEntity";

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 5;

export const useGetUsersApi = () => {
  const [users, setUsers] = useState<Array<UserEntity>>([]);
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_PAGE);

  const {isLoading, data, isFetching} = useGetUserListQuery({
    pageNo: currentPage,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  useEffect(() => {
    if (data && !isEmptyArray(data.users)) {
      setUsers(isEmptyArray(users) ? data.users : users.concat(data.users));

      // Just load 2nd page data after 1st page data load (one time action)
      if (currentPage === INITIAL_PAGE) {
        loadNextPage();
      }
    }
  }, [data]);

  const loadNextPage = () => {
    if (!isFetching && data && currentPage < data.totalPageCount) {
      setCurrentPage(prevCount => prevCount + 1);
    }
  };

  return {
    isLoading,
    users,
    loadNextPage,
  };
};
