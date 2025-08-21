import {PropsWithChildren} from "react";
import {TouchableOpacity} from "react-native";

type PropsAppTouchableSection = {
  onPressAction?: () => void;
  styles?: any; // You can define a more specific type if needed
};

export const AppTouchableSection = ({
  children,
  styles,
  onPressAction,
}: PropsWithChildren<PropsAppTouchableSection>) => {
  return (
    <TouchableOpacity
      style={styles}
      activeOpacity={0.7}
      onPress={onPressAction}>
      {children}
    </TouchableOpacity>
  );
};
