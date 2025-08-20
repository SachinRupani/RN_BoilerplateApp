import {StyleSheet} from "react-native";
import {AppColors} from "../../../../../../../theme/AppColors";

export const getHomeStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },

    bodyContainer: {
      flex: 1,
    },
  });
};
