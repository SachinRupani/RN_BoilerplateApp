import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Dashboard} from "../core/presentation/screens/dashboard/Dashboard";
import {useAppTheme} from "../theme/ThemeContext";
import {ScreenNames} from "./ScreenNames";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const {colors} = useAppTheme();

  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.Dashboard}
      screenOptions={{
        headerShown: false,
      }}>
      {/* Dashboard */}
      <Stack.Screen name={ScreenNames.Dashboard} component={Dashboard} />
    </Stack.Navigator>
  );
};
