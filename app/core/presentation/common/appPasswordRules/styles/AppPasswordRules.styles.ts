import {StyleSheet} from "react-native";
import {FontFamilyConfig} from "../../../../../config/FontFamilyConfig";
import {AppColors} from "../../../../../theme/AppColors";

export const getAppPasswordRulesStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flexDirection: "column",
      gap: 2,
    },

    textStyle: {
      fontFamily: FontFamilyConfig.fontSemibold,
    },
  });
};
