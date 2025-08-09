import {AppColors} from "../../../../../theme/AppColors";

export type TextColorVariant =
  | "text1"
  | "text2"
  | "text3"
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "white";

export const getDesiredTextColor = (
  colors: AppColors,
  colorVariant: TextColorVariant,
): string => {
  switch (colorVariant) {
    case "text1":
      return colors.text1;
    case "text2":
      return colors.text2;
    case "text3":
      return colors.text3;
    case "primary":
      return colors.primary;
    case "secondary":
      return colors.secondary;
    case "error":
      return colors.error;
    case "success":
      return colors.success;
    case "white":
      return colors.white;
  }
};
