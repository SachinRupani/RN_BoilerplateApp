import {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';

type PropsAppTouchableSection = {
  testID?: string;
  onPressAction?: () => void;
  styles?: any; // You can define a more specific type if needed
};

export const AppTouchableSection = ({
  children,
  styles,
  testID,
  onPressAction,
}: PropsWithChildren<PropsAppTouchableSection>) => {
  return (
    <TouchableOpacity
      testID={testID}
      style={styles}
      activeOpacity={0.7}
      onPress={onPressAction}>
      {children}
    </TouchableOpacity>
  );
};
