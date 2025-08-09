import {StyleSheet} from "react-native";
import {AppColors} from "../../../../../../../theme/AppColors";

export const getSettingsStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      gap: 8,
    },

    bodyContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    titleStyle: {
      color: colors.text1,
    },
  });
};
