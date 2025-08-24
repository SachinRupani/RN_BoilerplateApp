import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../../../../../../../theme/AppColors';

export const getUserListStyles = (_: AppColors) => {
  return StyleSheet.create({
    listStyle: {
      flex: 1,
    },
    listContentContainerStyle: {
      paddingTop: 16,
      paddingHorizontal: 16,
      paddingBottom: 24,
    },
  });
};
