import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../../../../../../../theme/AppColors';

export const getUserItemStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 16,
      backgroundColor: colors.white,
      gap: 8,
      borderRadius: 12,
      marginBottom: 12,
    },

    imageStyle: {
      width: 48,
      height: 48,
      borderRadius: 48,
    },

    infoContainer: {
      flex: 1,
      flexDirection: 'column',
      gap: 4,
    },
  });
};
