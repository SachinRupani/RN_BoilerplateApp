import {StyleSheet} from "react-native";
import {FontFamilyConfig} from "../../../../../config/FontFamilyConfig";
import {AppColors} from "../../../../../theme/AppColors";

export const getAppTextInputStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "column",
      gap: 4,
    },

    textInputStyle: {
      color: colors.primary,
      fontFamily: FontFamilyConfig.fontSemibold,
      fontSize: 14,
      paddingHorizontal: 12,
      paddingVertical: 16,
      backgroundColor: colors.inputBoxColor,
      borderRadius: 12,
    },
  });
};
