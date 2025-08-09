import {memo} from "react";
import {View} from "react-native";
import {AppTextMemoized} from "../appText/AppText";
import {TextColorVariant} from "../appText/data/TextColorVariant";
import {appHeaderStyles} from "./styles/AppHeader.styles";

type PropsAppHeader = {
  textString: string;
  headerVariant?: "large" | "xl" | "2xl" | "3xl";
  textColorVariant?: TextColorVariant;
};

const AppHeader = ({
  textString,
  textColorVariant,
  headerVariant,
}: PropsAppHeader) => {
  const stylesToUse = appHeaderStyles;
  return (
    <View style={stylesToUse.headerContainer}>
      <AppTextMemoized
        textString={textString}
        textColorVariant={textColorVariant}
        textVariant={headerVariant ?? "3xl"}
      />
    </View>
  );
};

export const AppHeaderMemoized = memo(AppHeader);
