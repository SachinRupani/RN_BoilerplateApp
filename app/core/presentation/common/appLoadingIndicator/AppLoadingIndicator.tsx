import {ActivityIndicator} from "react-native";

export type PropsAppLoadingIndicator = {
  indicatorSize: "large" | "small";
};

export const AppLoadingIndicator = ({
  indicatorSize = "large",
}: PropsAppLoadingIndicator) => {
  return <ActivityIndicator size={indicatorSize} />;
};
