import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  getDefaultState,
  getFailureState,
  getInitialLoadingState,
  getSuccessDataState,
} from '../../../../domain/common/DataState';
import {UserEntity} from '../../../../domain/entity/user/UserEntity';
import {RootState} from '../../store';

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: getDefaultState<UserEntity>(),
  reducers: {
    userDetailsRequest: (state, _action: PayloadAction<string>) => {
      return getInitialLoadingState();
    },
    userDetailsSuccess: (state, action: PayloadAction<UserEntity>) => {
      return getSuccessDataState(action.payload);
    },
    userDetailsFailure: (state, action: PayloadAction<any>) => {
      return getFailureState(state.data, action.payload);
    },
  },
});

export const {userDetailsRequest, userDetailsSuccess, userDetailsFailure} =
  userDetailsSlice.actions;

export const selectUserDetails = (state: RootState) =>
  state.userDetailsResponse;

export default userDetailsSlice.reducer;
