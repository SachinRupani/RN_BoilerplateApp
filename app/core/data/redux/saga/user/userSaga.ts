import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {UserEntity} from '../../../../domain/entity/user/UserEntity';
import {UserListResponseEntity} from '../../../../domain/entity/user/UserListResponseEntity';
import {ApiUserDetailsResponseDataModel} from '../../../dataModel/user/ApiUserDetailsResponseDataModel';
import {ApiUserListResponseDataModel} from '../../../dataModel/user/ApiUserListResponseDataModel';
import {mapApiUserListResponseToDomainUserListResponse} from '../../../dataModel/user/mapper/UserListResponseMapper';
import {mapApiUserDetailsResponseToDomainUser} from '../../../dataModel/user/mapper/UserMapper';
import {ApiUserListParams} from '../../../dataModel/user/params/ApiUserListParams';
import {makeApiCall} from '../../../dataSource/axiosApi/AxiosApiClient';
import {
  userDetailsFailure,
  userDetailsRequest,
  userDetailsSuccess,
} from '../../features/user/userDetailsSlice';
import {
  userListFailure,
  userListRequest,
  userListSuccess,
} from '../../features/user/userSlice';

// User list saga worker
function* fetchUserListWorker(action: PayloadAction<ApiUserListParams>) {
  try {
    const {pageNo, itemsPerPage} = action.payload;
    const apiResponse: ApiUserListResponseDataModel = yield call(
      makeApiCall,
      `users?page=${pageNo}&per_page=${itemsPerPage}`,
      'get',
    );
    const responseUsers: UserListResponseEntity =
      mapApiUserListResponseToDomainUserListResponse(apiResponse);

    yield put(userListSuccess(responseUsers));
  } catch (error: any) {
    yield put(userListFailure(error.message));
  }
}

// User details saga worker
function* fetchUserDetailsWorker(action: PayloadAction<string>) {
  try {
    const userId: string = action.payload;
    const apiResponse: ApiUserDetailsResponseDataModel = yield call(
      makeApiCall,
      `users/${userId}`,
      'get',
    );
    const userDetailEntity: UserEntity =
      mapApiUserDetailsResponseToDomainUser(apiResponse);
    yield put(userDetailsSuccess(userDetailEntity));
  } catch (exception: any) {
    yield put(userDetailsFailure(exception));
  }
}

// user watchers
export function* usersWatcherSaga() {
  yield takeLatest(userListRequest.type, fetchUserListWorker);
  yield takeEvery(userDetailsRequest.type, fetchUserDetailsWorker);
}
