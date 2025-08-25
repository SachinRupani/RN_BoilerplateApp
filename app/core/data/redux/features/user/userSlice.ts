import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  getDefaultState,
  getFailureState,
  getInitialLoadingState,
  getSuccessDataState,
} from '../../../../domain/common/DataState';
import {UserListResponseEntity} from '../../../../domain/entity/user/UserListResponseEntity';
import {ApiUserListParams} from '../../../dataModel/user/params/ApiUserListParams';
import {RootState} from '../../store';

const userSlice = createSlice({
  name: 'users',
  initialState: getDefaultState<UserListResponseEntity>(),
  reducers: {
    userListRequest: (state, _action: PayloadAction<ApiUserListParams>) => {
      return getInitialLoadingState(state.data);
    },
    userListSuccess: (state, action: PayloadAction<UserListResponseEntity>) => {
      return getSuccessDataState(action.payload);
    },
    userListFailure: (state, action: PayloadAction<any>) => {
      return getFailureState(state.data, action.payload);
    },
  },
});

export const {userListRequest, userListSuccess, userListFailure} =
  userSlice.actions;

export const selectUserList = (state: RootState) => state.userListResponse;

export default userSlice.reducer;
