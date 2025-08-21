import {getSafeNumber} from "../../../../../utils/GeneralUtils";
import {UserListResponseEntity} from "../../../../domain/entity/user/UserListResponseEntity";
import {ApiUserListResponseDataModel} from "../ApiUserListResponseDataModel";
import {mapApiUserToDomainUser} from "./UserMapper";

export const mapApiUserListResponseToDomainUserListResponse = (
  apiResponse: Partial<ApiUserListResponseDataModel>,
): UserListResponseEntity => {
  const defaultPageValue: number = 1;
  return {
    currentPage: getSafeNumber(apiResponse.page, defaultPageValue),
    totalItemCount: getSafeNumber(apiResponse.total),
    totalPageCount: getSafeNumber(apiResponse.total_pages, defaultPageValue),
    users:
      apiResponse.data?.map(apiUser => mapApiUserToDomainUser(apiUser)) ?? [],
  };
};
