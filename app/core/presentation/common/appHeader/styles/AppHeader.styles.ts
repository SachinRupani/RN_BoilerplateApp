import {StyleSheet} from "react-native";
import {AppColors} from "../../../../../theme/AppColors";
import {isIos} from "../../../../../utils/FrameworkUtils";

export const getAppHeaderStyles = (colors: AppColors) => {
  return StyleSheet.create({
    headerContainer: {
      height: 56,
      justifyContent: "center",
      paddingStart: 20,
      backgroundColor: isIos() ? colors.white : colors.transparent,
    },
  });
};
