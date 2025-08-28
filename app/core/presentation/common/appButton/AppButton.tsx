import {memo, useMemo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../../../../theme/AppColors';
import {useThrottle} from '../_hooks/useThrottle';
import {AppLoadingIndicator} from '../appLoadingIndicator/AppLoadingIndicator';
import {
  AppButtonColorSet,
  getPrimaryButtonColorSet,
  getSecondaryButtonColorSet,
} from './data/AppButtonColorSet';
import {AppComponentColorType} from './data/AppButtonColorType';
import {AppButtonVariantType} from './data/AppButtonVariantType';
import {AppButtonWidthType} from './data/AppButtonWidthType';
import {getAppButtonStyles} from './styles/AppButton.styles';

type PropsAppButton = {
  colorsToUse: AppColors;
  isLoading?: boolean;
  isButtonDisabled?: boolean;
  textString: string;
  colorType?: AppComponentColorType;
  variant?: AppButtonVariantType;
  widthType?: AppButtonWidthType;
  extraContainerStyle?: any;
  testID?: string;
  onClickAction?: () => void;
};

const AppButton = ({
  colorsToUse,
  isLoading,
  isButtonDisabled = false,
  textString,
  colorType = AppComponentColorType.Primary,
  variant = AppButtonVariantType.Main,
  widthType = AppButtonWidthType.Full,
  testID,
  extraContainerStyle,
  onClickAction,
}: PropsAppButton) => {
  const colorSet: AppButtonColorSet = useMemo(() => {
    return colorType === AppComponentColorType.Secondary
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
      testID={testID}
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
