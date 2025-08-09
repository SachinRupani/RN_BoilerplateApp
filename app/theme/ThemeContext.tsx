import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import {DarkColors, LightColors} from "./AppColors";
import {defaultThemeContextType, ThemeContextType} from "./ThemeContextType";
import {ThemeType} from "./ThemeType";

const AppThemeContext = createContext<ThemeContextType>(
  defaultThemeContextType,
);

export const AppContextProvider = ({
  children,
}: PropsWithChildren<unknown>): JSX.Element => {
  const [theme, setTheme] = useState<ThemeType>(defaultThemeContextType.theme);

  const colors = theme === ThemeType.Light ? LightColors : DarkColors;

  const _toggleTheme = useCallback(() => {
    setTheme(prev =>
      prev === ThemeType.Light ? ThemeType.Dark : ThemeType.Light,
    );
  }, []);

  return (
    <AppThemeContext.Provider
      value={{
        colors,
        theme,
        toggleTheme: _toggleTheme,
      }}>
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = (): ThemeContextType => {
  const context = useContext(AppThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
