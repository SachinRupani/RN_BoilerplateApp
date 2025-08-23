import {AppColors} from "../../../../../theme/AppColors";
import {AppButtonVariantType} from "./AppButtonVariantType";

export interface AppButtonColorSet {
  bgColor: string;
  foregroundColor: string;
  borderColor: string;
  loadingIndicatorColor: string;
}

export const getPrimaryButtonColorSet = (
  colors: AppColors,
  variant: AppButtonVariantType,
): AppButtonColorSet => {
  switch (variant) {
    case AppButtonVariantType.Outline:
      return {
        bgColor: colors.transparent,
        foregroundColor: colors.primary,
        borderColor: colors.primary,
        loadingIndicatorColor: colors.primary,
      };

    case AppButtonVariantType.Flat:
      return {
        bgColor: colors.primaryLight,
        foregroundColor: colors.primary,
        borderColor: colors.transparent,
        loadingIndicatorColor: colors.primary,
      };

    default:
      return {
        bgColor: colors.primary,
        foregroundColor: colors.textOnPrimary,
        borderColor: colors.transparent,
        loadingIndicatorColor: colors.textOnPrimary,
      };
  }
};

export const getSecondaryButtonColorSet = (
  colors: AppColors,
  variant: AppButtonVariantType,
): AppButtonColorSet => {
  switch (variant) {
    case AppButtonVariantType.Outline:
      return {
        bgColor: colors.transparent,
        foregroundColor: colors.secondary,
        borderColor: colors.secondary,
        loadingIndicatorColor: colors.secondary,
      };

    case AppButtonVariantType.Flat:
      return {
        bgColor: colors.secondaryLight,
        foregroundColor: colors.secondary,
        borderColor: colors.transparent,
        loadingIndicatorColor: colors.secondary,
      };

    default:
      return {
        bgColor: colors.secondary,
        foregroundColor: colors.textOnSecondary,
        borderColor: colors.transparent,
        loadingIndicatorColor: colors.textOnSecondary,
      };
  }
};
