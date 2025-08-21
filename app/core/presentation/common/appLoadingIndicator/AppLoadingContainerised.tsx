import {StyleSheet, View} from "react-native";
import {
  AppLoadingIndicator,
  PropsAppLoadingIndicator,
} from "./AppLoadingIndicator";

type PropsAppLoadingContainerised = {
  propsLoadingIndicator: PropsAppLoadingIndicator;
};

export const AppLoadingContainerised = ({
  propsLoadingIndicator,
}: PropsAppLoadingContainerised) => {
  return (
    <View style={styles.container}>
      <AppLoadingIndicator {...propsLoadingIndicator} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
