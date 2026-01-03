import {
  CommonActions,
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {ScreenNames} from '../ScreenNames';
import {RootStackParamList} from '../types/RootStackParamList';

export const useAppNavigation = () => {
  // This hook can be used to encapsulate navigation logic or state management
  // related to the app's navigation system.

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const navigateToDashboard = () => {
    navigation.dispatch(StackActions.replace(ScreenNames.Dashboard));
  };

  const navigateToUserDetails = (userId: string) => {
    navigation.navigate(ScreenNames.UserDetails, {userId: userId});
  };

  const navigateToLogin = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: ScreenNames.Login}],
      }),
    );
  };

  return {
    navigateBack,
    navigateToDashboard,
    navigateToUserDetails,
    navigateToLogin,
  };
};
