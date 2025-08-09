import {StyleSheet} from "react-native";
import {FontFamilyConfig} from "../../../../../config/FontFamilyConfig";
import {AppButtonColorSet} from "../data/AppButtonColorSet";
import {AppButtonVariantType} from "../data/AppButtonVariantType";

export const getAppButtonStyles = (
  colorSet: AppButtonColorSet,
  variant: AppButtonVariantType,
) => {
  const isOutlineVariant = variant === AppButtonVariantType.Outline;
  return StyleSheet.create({
    buttonContainer: {
      borderRadius: 12,
      padding: 12,
      backgroundColor: colorSet.bgColor,
      borderWidth: isOutlineVariant ? 2 : 0,
      borderColor: colorSet.borderColor,
      justifyContent: "center",
      alignItems: "center",
    },

    buttonText: {
      fontSize: 14,
      color: colorSet.foregroundColor,
      fontFamily: FontFamilyConfig.fontSemibold,
    },

    buttonFullWidth: {
      alignSelf: "stretch",
    },

    buttonContentWidthStart: {
      alignSelf: "flex-start",
    },

    buttonContentWidthEnd: {
      alignSelf: "flex-end",
    },

    buttonContentWidthCenter: {
      alignSelf: "center",
    },
  });
};
