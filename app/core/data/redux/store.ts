import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import createSagaMiddleware from 'redux-saga';
import {apiService} from '../dataSource/ApiService';
import userDetailsReducer from './features/user/userDetailsSlice';
import userReducer from './features/user/userSlice';
import {rootSaga} from './saga/RootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    userListResponse: userReducer,
    userDetailsResponse: userDetailsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware).concat(apiService.middleware),
});

// Saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
