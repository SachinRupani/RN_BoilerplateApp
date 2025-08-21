import {FontFamilyConfig} from "../../../../../config/FontFamilyConfig";

type TextStyle = {fontFamily: FontFamilyConfig; fontSize: number};

export type TextVariant =
  | "base"
  | "sm"
  | "xs"
  | "large"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

const textVariantMap: Record<TextVariant, TextStyle> = {
  base: {fontSize: 14, fontFamily: FontFamilyConfig.fontRegular},
  "4xl": {fontSize: 24, fontFamily: FontFamilyConfig.fontBold},
  "3xl": {fontSize: 22, fontFamily: FontFamilyConfig.fontBold},
  "2xl": {fontSize: 20, fontFamily: FontFamilyConfig.fontBold},
  xl: {fontSize: 18, fontFamily: FontFamilyConfig.fontSemibold},
  large: {fontSize: 16, fontFamily: FontFamilyConfig.fontSemibold},
  sm: {fontSize: 12, fontFamily: FontFamilyConfig.fontRegular},
  xs: {fontSize: 10, fontFamily: FontFamilyConfig.fontRegular},
};

export const getTextStyleBasedOnVariant = (variant: TextVariant): TextStyle => {
  return textVariantMap[variant];
};
