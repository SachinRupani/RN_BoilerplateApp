import {StatusBar} from "react-native";
import {useAppTheme} from "../../../../theme/ThemeContext";
import {ThemeType} from "../../../../theme/ThemeType";

const AppStatusBar = () => {
  const {colors, theme} = useAppTheme();
  const isDarkTheme = theme === ThemeType.Dark;

  return (
    <StatusBar
      barStyle={isDarkTheme ? `light-content` : `dark-content`}
      backgroundColor={colors.background}
    />
  );
};

export default AppStatusBar;
