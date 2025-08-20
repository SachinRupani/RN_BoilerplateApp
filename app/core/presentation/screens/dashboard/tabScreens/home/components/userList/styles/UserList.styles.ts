import {StyleSheet} from "react-native";
import {AppColors} from "../../../../../../../../../theme/AppColors";

export const getUserListStyles = (colors: AppColors) => {
  return StyleSheet.create({
    listStyle: {
      flex: 1,
    },
    listContentContainerStyle: {
      paddingHorizontal: 16,
    },
  });
};
