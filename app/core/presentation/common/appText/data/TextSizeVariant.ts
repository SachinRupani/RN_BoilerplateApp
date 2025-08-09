import {FontFamilyConfig} from "../../../../../config/FontFamilyConfig";

export type TextVariant =
  | "base"
  | "sm"
  | "xs"
  | "large"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export const getTextStyleBasedOnVariant = (
  variant: TextVariant,
): {fontFamily: FontFamilyConfig; fontSize: number} => {
  let obj = {
    fontFamily: FontFamilyConfig.fontRegular,
    fontSize: 14,
  };

  switch (variant) {
    case "base":
      obj = {
        fontSize: 14,
        fontFamily: FontFamilyConfig.fontRegular,
      };
      break;
    case "4xl":
      obj = {
        fontSize: 24,
        fontFamily: FontFamilyConfig.fontBold,
      };
      break;
    case "3xl":
      obj = {
        fontSize: 22,
        fontFamily: FontFamilyConfig.fontBold,
      };
      break;
    case "2xl":
      obj = {
        fontSize: 20,
        fontFamily: FontFamilyConfig.fontBold,
      };
      break;
    case "xl":
      obj = {
        fontSize: 18,
        fontFamily: FontFamilyConfig.fontSemibold,
      };
      break;
    case "large":
      obj = {
        fontSize: 16,
        fontFamily: FontFamilyConfig.fontSemibold,
      };
      break;
    case "sm":
      obj = {
        fontSize: 12,
        fontFamily: FontFamilyConfig.fontRegular,
      };
      break;
    case "xs":
      obj = {
        fontSize: 10,
        fontFamily: FontFamilyConfig.fontRegular,
      };
      break;
  }

  return obj;
};
