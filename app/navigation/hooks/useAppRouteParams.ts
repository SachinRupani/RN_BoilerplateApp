import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../types/RootStackParamList';

export const useAppRouteParams = () => {
  // User Details Route
  const route = useRoute<RouteProp<RootStackParamList>>();

  return {params: route.params};
};
