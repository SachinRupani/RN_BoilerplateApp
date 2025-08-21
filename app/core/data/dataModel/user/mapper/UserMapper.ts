import {getSafeNumber, getSafeString} from "../../../../../utils/GeneralUtils";
import {UserEntity} from "../../../../domain/entity/user/UserEntity";
import {ApiUserDataModel} from "../ApiUserDataModel";
import {ApiUserDetailsResponseDataModel} from "../ApiUserDetailsResponseDataModel";

export const mapApiUserToDomainUser = (
  apiUser: Partial<ApiUserDataModel>,
): UserEntity => {
  return {
    id: getSafeNumber(apiUser.id),
    firstName: getSafeString(apiUser.first_name),
    lastName: getSafeString(apiUser.last_name),
    email: getSafeString(apiUser.email),
    avatarUrl: getSafeString(apiUser.avatar),
  };
};

export const mapApiUserDetailsResponseToDomainUser = (
  apiResponse: Partial<ApiUserDetailsResponseDataModel>,
): UserEntity => {
  return {
    id: getSafeNumber(apiResponse.data?.id),
    firstName: getSafeString(apiResponse.data?.first_name),
    lastName: getSafeString(apiResponse.data?.last_name),
    email: getSafeString(apiResponse.data?.email),
    avatarUrl: getSafeString(apiResponse.data?.avatar),
  };
};
