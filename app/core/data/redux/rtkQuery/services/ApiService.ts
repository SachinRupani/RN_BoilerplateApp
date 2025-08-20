import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {selectedEnvironment} from "../../../../../config/environment/SelectedEnvironment";
import {UserListResponseEntity} from "../../../../domain/entity/user/UserListResponseEntity";
import {ApiUserListResponseDataModel} from "../../../dataModel/user/ApiUserListResponseDataModel";
import {mapApiUserListResponseToDomainUserListResponse} from "../../../dataModel/user/mapper/UserListResponseMapper";
import {ApiUserListParams} from "../../../dataModel/user/params/ApiUserListParams";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${selectedEnvironment.baseUrl}`,
    prepareHeaders: (headers, {getState}) => {
      headers.set("x-api-key", selectedEnvironment.apiKey);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),

  endpoints: builder => ({
    getUserList: builder.query<UserListResponseEntity, ApiUserListParams>({
      query: (params: ApiUserListParams) =>
        `users?page=${params.pageNo}&per_page=${params.itemsPerPage}`,
      transformResponse: (
        response: Partial<ApiUserListResponseDataModel>,
      ): UserListResponseEntity => {
        return mapApiUserListResponseToDomainUserListResponse(response);
      },
    }),
  }),
});

export const {useGetUserListQuery} = userApi;
