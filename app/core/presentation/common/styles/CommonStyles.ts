import {StyleSheet} from "react-native";
import {AppColors} from "../../../../theme/AppColors";

export const getAppCommonStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: colors.background,
    },

    bodyContainer: {
      flex: 1,
      flexDirection: "column",
    },
  });
};
