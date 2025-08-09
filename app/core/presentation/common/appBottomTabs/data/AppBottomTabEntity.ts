import {PropsAppIcon} from "../../appIcon/AppIcon";

export enum AppBottomTabType {
  Home = "Home",
  Settings = "Settings",
}

export interface AppBottomTabEntity {
  tabType: AppBottomTabType;
  isActive: boolean;
  icon?: PropsAppIcon;
}
