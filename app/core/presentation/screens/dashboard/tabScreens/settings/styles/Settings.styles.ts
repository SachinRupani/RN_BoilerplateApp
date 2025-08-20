import {StyleSheet} from "react-native";
import {AppColors} from "../../../../../../../theme/AppColors";

export const getSettingsStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      gap: 8,
    },

    scrollViewBodyContainer: {
      flex: 1,
      flexDirection: "column",
    },

    scrollViewContentContainer: {
      paddingHorizontal: 20,
      paddingVertical: 8,
    },

    switchButtonContainerStyle: {
      marginBottom: 16,
    },
  });
};
