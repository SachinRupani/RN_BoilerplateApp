import {getSafeNumber, getSafeString} from "../../../../../utils/GeneralUtils";
import {UserEntity} from "../../../../domain/entity/user/UserEntity";
import {ApiUserDataModel} from "../ApiUserDataModel";

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
