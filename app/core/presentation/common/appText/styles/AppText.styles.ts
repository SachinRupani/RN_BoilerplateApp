import {StyleSheet} from "react-native";
import {AppColors} from "../../../../../theme/AppColors";
import {getDesiredTextColor, TextColorVariant} from "../data/TextColorVariant";
import {getTextStyleBasedOnVariant, TextVariant} from "../data/TextSizeVariant";

export const getAppTextStyles = (
  colors: AppColors,
  textVariant?: TextVariant,
  colorVariant?: TextColorVariant,
) => {
  const textStyle = getTextStyleBasedOnVariant(textVariant ?? "base");

  const colorString = getDesiredTextColor(colors, colorVariant ?? "text1");

  return StyleSheet.create({
    textStyle: {
      fontFamily: textStyle.fontFamily,
      color: colorString,
      fontSize: textStyle.fontSize,
      lineHeight: textStyle.lineHeight,
    },
  });
};
