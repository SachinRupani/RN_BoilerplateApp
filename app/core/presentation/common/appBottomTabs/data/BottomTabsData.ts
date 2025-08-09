import {AppColors} from "../../../../../theme/AppColors";
import {PropsAppIcon} from "../../appIcon/AppIcon";
import {AppBottomTabEntity, AppBottomTabType} from "./AppBottomTabEntity";

export const defaultTabs = (colors: AppColors): Array<AppBottomTabEntity> => {
  const arrayTabs: Array<AppBottomTabEntity> = [
    {
      tabType: AppBottomTabType.Home,
      isActive: true,
      icon: {
        iconName: "home",
        iconHexColor: colors.tabForegroundActive,
      },
    },
    {
      tabType: AppBottomTabType.Settings,
      isActive: false,
      icon: {
        iconName: "settings-outline",
        iconHexColor: colors.tabForegroundDefault,
      },
    },
  ];

  return arrayTabs;
};

export const getDesiredIconProps = (
  tabType: AppBottomTabType,
  isActive: boolean,
  colors: AppColors,
): PropsAppIcon => {
  const iconObj: PropsAppIcon = {
    iconHexColor: isActive
      ? colors.tabForegroundActive
      : colors.tabForegroundDefault,
  };

  switch (tabType) {
    case AppBottomTabType.Home:
      return {
        ...iconObj,
        iconName: isActive ? "home" : "home-outline",
      };

    case AppBottomTabType.Settings:
      return {
        ...iconObj,
        iconName: isActive ? "settings" : "settings-outline",
      };

    default:
      return {
        ...iconObj,
      };
  }
};
