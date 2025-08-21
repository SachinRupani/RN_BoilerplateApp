import {StyleSheet} from "react-native";
import {AppColors} from "../../../../../../../theme/AppColors";

export const getUserInfoStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flexDirection: "column",
      backgroundColor: colors.white,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      borderRadius: 12,
      gap: 8,
    },

    imageStyle: {
      width: 64,
      height: 64,
      borderRadius: 64,
    },

    infoContainer: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 4,
    },
  });
};
