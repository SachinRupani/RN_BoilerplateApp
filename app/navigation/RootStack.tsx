import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '../core/presentation/screens/authenticated/dashboard/Dashboard';
import {UserDetailsScreen} from '../core/presentation/screens/authenticated/userDetails/UserDetailsScreen';
import {LoginScreen} from '../core/presentation/screens/unauthenticated/login/LoginScreen';
import {ScreenNames} from './ScreenNames';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.Login}
      screenOptions={{
        headerShown: false,
      }}>
      {/* Login */}
      <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />

      {/* Dashboard */}
      <Stack.Screen name={ScreenNames.Dashboard} component={Dashboard} />

      {/* User Details */}
      <Stack.Screen
        name={ScreenNames.UserDetails}
        component={UserDetailsScreen}
      />
    </Stack.Navigator>
  );
};
