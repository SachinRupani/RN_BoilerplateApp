import {StyleSheet} from "react-native";
import {AppColors} from "../../../../../../../theme/AppColors";

export const getHomeStyles = (colors: AppColors) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },

    scrollViewBodyContainer: {
      flex: 1,
      flexDirection: "column",
    },

    scrollViewContentContainer: {
      paddingHorizontal: 20,
      paddingVertical: 8,
    },
  });
};
