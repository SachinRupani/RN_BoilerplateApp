import {FontFamilyConfig} from '../../../../../config/FontFamilyConfig';

type TextStyle = {
  fontFamily: FontFamilyConfig;
  fontSize: number;
  lineHeight?: number;
};

export type TextVariant =
  | 'base'
  | 'sm'
  | 'xs'
  | 'large'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

const textVariantMap: Record<TextVariant, TextStyle> = {
  base: {
    fontSize: 14,
    fontFamily: FontFamilyConfig.fontRegular,
    lineHeight: 18,
  },
  '4xl': {fontSize: 24, fontFamily: FontFamilyConfig.fontBold, lineHeight: 28},
  '3xl': {fontSize: 22, fontFamily: FontFamilyConfig.fontBold, lineHeight: 26},
  '2xl': {fontSize: 20, fontFamily: FontFamilyConfig.fontBold, lineHeight: 24},
  xl: {fontSize: 18, fontFamily: FontFamilyConfig.fontBold, lineHeight: 24},
  large: {
    fontSize: 16,
    fontFamily: FontFamilyConfig.fontSemibold,
    lineHeight: 22,
  },
  sm: {fontSize: 12, fontFamily: FontFamilyConfig.fontRegular, lineHeight: 18},
  xs: {fontSize: 10, fontFamily: FontFamilyConfig.fontRegular, lineHeight: 16},
};

export const getTextStyleBasedOnVariant = (variant: TextVariant): TextStyle => {
  return textVariantMap[variant];
};
