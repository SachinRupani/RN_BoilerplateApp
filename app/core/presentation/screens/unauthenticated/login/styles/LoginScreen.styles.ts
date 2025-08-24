import {StyleSheet} from 'react-native';
import {AppColors} from '../../../../../../theme/AppColors';

export const getLoginScreenStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 16,
    },

    loginCardContainer: {
      width: '100%',
      backgroundColor: colors.white,
      paddingHorizontal: 16,
      paddingVertical: 24,
      borderRadius: 12,
      flexDirection: 'column',
      gap: 16,

      elevation: 3, //android
      shadowColor: colors.black, // ios
      shadowOffset: {width: 0, height: 2}, // ios
      shadowOpacity: 0.25, // ios
      shadowRadius: 3.84, // ios
    },

    loginButtonContainer: {
      marginTop: 12,
    },

    themeSwitchContainer: {
      marginVertical: 24,
    },
  });
};
