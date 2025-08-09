import {StyleSheet} from "react-native";
import {AppColors} from "../../../../../theme/AppColors";

export const getDashboardStyles = (colors: AppColors) => {
  return StyleSheet.create({
    parentViewContainer: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: colors.white,
    },

    container: {
      flex: 1,
    },

    tabContentContainer: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: colors.background,
    },
  });
};
