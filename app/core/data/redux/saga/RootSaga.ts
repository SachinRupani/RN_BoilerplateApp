import {all} from 'redux-saga/effects';
import {usersWatcherSaga} from './user/userSaga';

export function* rootSaga() {
  yield all([
    usersWatcherSaga(),
    // add more feature sagas here
  ]);
}
