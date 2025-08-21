import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {AppColors} from "../theme/AppColors";
import {useAppTheme} from "../theme/ThemeContext";
import {RootStack} from "./RootStack";

export const RootNavigation = () => {
  const {colors} = useAppTheme();
  const stylesToUse = getRootStyles(colors);
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={stylesToUse.parentContainer}
        edges={["top", "bottom", "left", "right"]}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const getRootStyles = (colors: AppColors) => {
  return StyleSheet.create({
    parentContainer: {
      flex: 1,
      backgroundColor: colors.white,
    },
  });
};
