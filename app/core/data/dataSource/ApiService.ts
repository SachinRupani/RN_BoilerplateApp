import {BaseQueryFn} from '@reduxjs/toolkit/query';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {selectedEnvironment} from '../../../config/environment/SelectedEnvironment';

// Create a wrapped base query for logging purpose
const loggingBaseQuery =
  (baseQuery: ReturnType<typeof fetchBaseQuery>): BaseQueryFn =>
  async (args, api, extraOptions) => {
    if (selectedEnvironment.shouldLogNetworkRequestResponse) {
      console.log('📡 Request:', {
        ...args,
        url: `${selectedEnvironment.baseUrl}${args.url}`,
      });
    }

    const result = await baseQuery(args, api, extraOptions);

    if ('error' in result) {
      if (selectedEnvironment.shouldLogNetworkErrors) {
        console.log('❌ Error Response:', result.error);
      }
    } else {
      if (selectedEnvironment.shouldLogNetworkRequestResponse) {
        console.log('✅ Response:', result.data);
      }
    }

    return result;
  };

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: loggingBaseQuery(
    fetchBaseQuery({
      baseUrl: `${selectedEnvironment.baseUrl}`,
      prepareHeaders: (headers, {getState}) => {
        // From the getState() you can also get the auth token and set in headers if required
        //const token = (getState() as RootState).auth.token

        headers.set('x-api-key', selectedEnvironment.apiKey);
        headers.set('Content-Type', 'application/json');
        return headers;
      },
    }),
  ),
  endpoints: () => ({}),
});
