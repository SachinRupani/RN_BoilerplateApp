import {ScreenNames} from "../ScreenNames";
import {UserDetailsScreenParams} from "./ScreenParams";

// Define your navigation param list type
export type RootStackParamList = {
  [ScreenNames.UserDetails]: UserDetailsScreenParams;
  [ScreenNames.Dashboard]: undefined;
};
