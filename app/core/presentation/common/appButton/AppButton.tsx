import {memo, useMemo} from "react";
import {Text, TouchableOpacity} from "react-native";
import {AppColors} from "../../../../theme/AppColors";
import {useThrottle} from "../_hooks/useThrottle";
import {AppLoadingIndicator} from "../appLoadingIndicator/AppLoadingIndicator";
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
  isLoading?: boolean;
  isButtonDisabled?: boolean;
  textString: string;
  colorType?: AppButtonColorType;
  variant?: AppButtonVariantType;
  widthType?: AppButtonWidthType;
  extraContainerStyle?: any;
  onClickAction?: () => void;
};

const AppButton = ({
  colorsToUse,
  isLoading,
  isButtonDisabled = false,
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

  const throttledPressAction = useThrottle(onClickAction, 700);

  const _handleButtonPress = () => {
    if (!isLoading) {
      throttledPressAction();
    }
  };

  const _renderButtonLoading = () => {
    return (
      <AppLoadingIndicator
        indicatorSize="small"
        indicatorColor={colorSet.loadingIndicatorColor}
      />
    );
  };

  const _renderButtonText = () => {
    return <Text style={stylesToUse.buttonText}>{textString}</Text>;
  };

  return (
    <TouchableOpacity
      disabled={isButtonDisabled || isLoading}
      activeOpacity={0.7}
      onPress={_handleButtonPress}
      style={[
        stylesToUse.buttonContainer,
        stylesToUse[widthType] ?? null,
        isButtonDisabled ? stylesToUse.buttonContainerDisabled : null,
        extraContainerStyle ? extraContainerStyle : null,
      ]}>
      {isLoading ? _renderButtonLoading() : _renderButtonText()}
    </TouchableOpacity>
  );
};

export const AppButtonMemoized = memo(AppButton);
