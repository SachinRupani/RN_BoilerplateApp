import {ActivityIndicator} from 'react-native';

export type PropsAppLoadingIndicator = {
  indicatorSize: 'large' | 'small';
  indicatorColor: string;
};

export const AppLoadingIndicator = ({
  indicatorSize = 'large',
  indicatorColor,
}: PropsAppLoadingIndicator) => {
  return <ActivityIndicator size={indicatorSize} color={indicatorColor} />;
};
