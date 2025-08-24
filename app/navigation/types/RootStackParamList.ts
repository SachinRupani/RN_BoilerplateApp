import {ScreenNames} from '../ScreenNames';
import {UserDetailsScreenParams} from './ScreenParams';

// Define your navigation param list type
export type RootStackParamList = {
  [ScreenNames.Login]: undefined;
  [ScreenNames.UserDetails]: UserDetailsScreenParams;
  [ScreenNames.Dashboard]: undefined;
};
