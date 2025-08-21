import Icon from "@react-native-vector-icons/ionicons";
import {memo} from "react";

export type IconNameType =
  | "home"
  | "home-outline"
  | "settings"
  | "settings-outline"
  | "arrow-back";

export type PropsAppIcon = {
  iconName?: IconNameType;
  iconSize?: number;
  iconHexColor?: string;
};

const AppIcon = ({iconName, iconSize, iconHexColor}: PropsAppIcon) => {
  return (
    <Icon
      name={iconName ?? `information-circle-outline`}
      size={iconSize ?? 20}
      color={iconHexColor}
    />
  );
};

export const AppIconMemoized = memo(AppIcon);
