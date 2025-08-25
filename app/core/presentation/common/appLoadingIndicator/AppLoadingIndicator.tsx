import {ActivityIndicator} from 'react-native';
import {useAppTheme} from '../../../../theme/ThemeContext';

export type PropsAppLoadingIndicator = {
  indicatorSize: 'large' | 'small';
  indicatorColor?: string;
};

export const AppLoadingIndicator = ({
  indicatorSize = 'large',
  indicatorColor,
}: PropsAppLoadingIndicator) => {
  const {colors} = useAppTheme();
  return (
    <ActivityIndicator
      size={indicatorSize}
      color={indicatorColor ?? colors.primary}
    />
  );
};
