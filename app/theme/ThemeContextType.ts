import {AppColors, LightColors} from './AppColors';
import {ThemeType} from './ThemeType';

export interface ThemeContextType {
  theme: ThemeType;
  colors: AppColors;
  toggleTheme: () => void;
}

export const defaultThemeContextType: ThemeContextType = {
  theme: ThemeType.Light,
  colors: LightColors,
  toggleTheme: () => {},
};
