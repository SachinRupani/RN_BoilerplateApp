import {UserEntity} from "./UserEntity";

export interface UserListResponseEntity {
  users: Array<UserEntity>;
  totalItemCount: number;
  totalPageCount: number;
  currentPage: number;
}
