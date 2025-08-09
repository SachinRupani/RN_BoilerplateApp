import {memo, useMemo} from "react";
import {Text, TouchableOpacity} from "react-native";
import {AppColors} from "../../../../theme/AppColors";
import {
  AppButtonColorSet,
  getPrimaryButtonColorSet,
  getSecondaryButtonColorSet,
} from "./data/AppButtonColorSet";
import {AppButtonColorType} from "./data/AppButtonColorType";
import {AppButtonVariantType} from "./data/AppButtonVariantType";
import {AppButtonWidthType} from "./data/AppButtonWidthType";
import {getAppButtonStyles} from "./styles/AppButton.styles";

type PropsAppButton = {
  colorsToUse: AppColors;
  textString: string;
  colorType?: AppButtonColorType;
  variant?: AppButtonVariantType;
  widthType?: AppButtonWidthType;
  extraContainerStyle?: any;
  onClickAction?: () => void;
};

const AppButton = ({
  colorsToUse,
  textString,
  colorType = AppButtonColorType.Primary,
  variant = AppButtonVariantType.Main,
  widthType = AppButtonWidthType.Full,
  extraContainerStyle,
  onClickAction,
}: PropsAppButton) => {
  const colorSet: AppButtonColorSet = useMemo(() => {
    return colorType === AppButtonColorType.Secondary
      ? getSecondaryButtonColorSet(colorsToUse, variant)
      : getPrimaryButtonColorSet(colorsToUse, variant);
  }, [colorType, variant, colorsToUse]);

  const stylesToUse = getAppButtonStyles(colorSet, variant);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onClickAction}
      style={[
        stylesToUse.buttonContainer,
        stylesToUse[widthType] ?? null,
        extraContainerStyle ? extraContainerStyle : null,
      ]}>
      <Text style={stylesToUse.buttonText}>{textString}</Text>
    </TouchableOpacity>
  );
};

export const AppButtonMemoized = memo(AppButton);
