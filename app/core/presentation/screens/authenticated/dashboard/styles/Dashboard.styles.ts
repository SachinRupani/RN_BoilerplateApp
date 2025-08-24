import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../../../theme/AppColors';

export const getDashboardStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.background,
    },

    tabContentContainer: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.background,
    },
  });
};
