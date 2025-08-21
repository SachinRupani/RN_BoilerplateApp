import {StyleSheet} from "react-native";
import {AppColors} from "../../../../../../../theme/AppColors";

export const getSettingsStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },

    scrollViewBodyContainer: {
      flex: 1,
      paddingTop: 16,
      paddingBottom: 24,
    },

    scrollViewContentContainer: {
      flex: 1,
      flexDirection: "column",
      paddingHorizontal: 20,
    },

    switchButtonContainerStyle: {
      marginVertical: 16,
    },
  });
};
