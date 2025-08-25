import axios from 'axios';
import {selectedEnvironment} from '../../../../config/environment/SelectedEnvironment';

type ApiMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

const axiosApiInstance = axios.create({
  baseURL: selectedEnvironment.baseUrl,
  timeout: 30000,
  headers: {'x-api-key': selectedEnvironment.apiKey},
});

export const makeApiCall = async (
  endpoint: string,
  apiMethod: ApiMethod,
): Promise<any> => {
  try {
    const axiosResponse = await axiosApiInstance({
      url: endpoint,
      method: apiMethod,
    });
    console.log('Api_', `${selectedEnvironment.baseUrl}${endpoint}`);
    console.log('ApiMethod_', `${apiMethod}`);
    console.log('ApiResponse_', `${JSON.stringify(axiosResponse.data)}`);
    if (axiosResponse.status == 200 || axiosResponse.status == 201) {
      return Promise.resolve(axiosResponse.data);
    }
    return Promise.reject();
  } catch (exception: any) {
    return Promise.reject(exception);
  }
};
