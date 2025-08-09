import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './RootStack';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
