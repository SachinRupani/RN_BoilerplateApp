import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../../theme/AppColors';

export const getAppProgressBarStyles = (colors: AppColors) => {
  return StyleSheet.create({
    trackContainer: {
      width: '100%',
      height: 8,
      borderRadius: 8,
      overflow: 'hidden',
    },

    trackPrimary: {
      backgroundColor: colors.primaryLight,
    },

    trackSecondary: {
      backgroundColor: colors.secondaryLight,
    },

    fillBar: {
      flex: 1,
      height: '100%',
      transformOrigin: 'left',
    },

    fillBarPrimary: {
      backgroundColor: colors.primary,
    },

    fillBarSecondary: {
      backgroundColor: colors.secondary,
    },
  });
};
