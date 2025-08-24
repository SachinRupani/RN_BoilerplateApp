import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../../../../../theme/AppColors';

export const getSettingsStyles = (_: AppColors) => {
  return StyleSheet.create({
    scrollViewContainer: {
      flex: 1,
      paddingTop: 16,
      paddingBottom: 24,
    },

    scrollViewContentContainer: {
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: 20,
    },

    switchButtonContainerStyle: {
      marginVertical: 16,
    },
  });
};
