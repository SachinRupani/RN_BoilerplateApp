import {ApiUserDataModel} from "./ApiUserDataModel";

export interface ApiUserListResponseDataModel {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<ApiUserDataModel>;
}
