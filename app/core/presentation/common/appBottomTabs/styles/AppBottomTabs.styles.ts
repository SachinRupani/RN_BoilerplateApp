import {StyleSheet} from "react-native";
import {FontFamilyConfig} from "../../../../../config/FontFamilyConfig";
import {AppColors} from "../../../../../theme/AppColors";

export const getAppBottomTabsStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: colors.white,
      minHeight: 56,
    },

    tabContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
    },

    tabTextStyle: {
      fontFamily: FontFamilyConfig.fontSemibold,
    },
  });
};
