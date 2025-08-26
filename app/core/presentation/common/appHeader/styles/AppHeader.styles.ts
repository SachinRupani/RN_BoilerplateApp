import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../../theme/AppColors';
import {isIos} from '../../../../../utils/FrameworkUtils';

export const getAppHeaderStyles = (colors: AppColors) => {
  return StyleSheet.create({
    headerContainer: {
      height: 56,
      flexDirection: 'row',
      paddingStart: 16,
      backgroundColor: isIos() ? colors.white : colors.transparent,
      gap: 12,
      alignItems: 'center',
    },
  });
};
