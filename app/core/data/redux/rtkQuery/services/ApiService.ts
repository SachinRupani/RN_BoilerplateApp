import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {selectedEnvironment} from "../../../../../config/environment/SelectedEnvironment";
import {UserEntity} from "../../../../domain/entity/user/UserEntity";
import {UserListResponseEntity} from "../../../../domain/entity/user/UserListResponseEntity";
import {ApiUserDetailsResponseDataModel} from "../../../dataModel/user/ApiUserDetailsResponseDataModel";
import {ApiUserListResponseDataModel} from "../../../dataModel/user/ApiUserListResponseDataModel";
import {mapApiUserListResponseToDomainUserListResponse} from "../../../dataModel/user/mapper/UserListResponseMapper";
import {mapApiUserDetailsResponseToDomainUser} from "../../../dataModel/user/mapper/UserMapper";
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
    // GET user list
    getUserList: builder.query<UserListResponseEntity, ApiUserListParams>({
      query: (params: ApiUserListParams) => ({
        url: `users?page=${params.pageNo}&per_page=${params.itemsPerPage}`,
      }),
      transformResponse: (
        response: Partial<ApiUserListResponseDataModel>,
      ): UserListResponseEntity => {
        return mapApiUserListResponseToDomainUserListResponse(response);
      },
    }),

    // GET user details based on id
    getUserDetails: builder.query<UserEntity, string>({
      query: (id: string) => ({
        url: `users/${id}`,
      }),
      transformResponse: (
        response: Partial<ApiUserDetailsResponseDataModel>,
      ): UserEntity => {
        return mapApiUserDetailsResponseToDomainUser(response);
      },
    }),
  }),
});

export const {useGetUserListQuery, useGetUserDetailsQuery} = userApi;
