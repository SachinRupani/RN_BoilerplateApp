import {memo} from "react";
import {View} from "react-native";
import {useAppTheme} from "../../../../../../../../theme/ThemeContext";
import {AppButtonMemoized} from "../../../../../../common/appButton/AppButton";
import {AppButtonColorType} from "../../../../../../common/appButton/data/AppButtonColorType";
import {AppButtonVariantType} from "../../../../../../common/appButton/data/AppButtonVariantType";
import {AppTextMemoized} from "../../../../../../common/appText/AppText";
import {kitcheButtonSectionStyles} from "./styles/KitchenButtonsSection.styles";

type PropsKitchenButtonsSection = {};

const KitchenUiSection = ({}: PropsKitchenButtonsSection) => {
  const {colors} = useAppTheme();
  const stylesToUse = kitcheButtonSectionStyles;

  const _renderButtonsTitle = (btnColorType: AppButtonColorType) => {
    return (
      <AppTextMemoized
        textString={btnColorType.valueOf()}
        textColorVariant={btnColorType}
        textVariant="large"
      />
    );
  };

  const _renderSectionPrimary = () => {
    return (
      <View style={stylesToUse.sectionContainer}>
        {/* Title */}
        {_renderButtonsTitle(AppButtonColorType.Primary)}

        {/* Buttons */}
        <View style={stylesToUse.rowContainer}>
          <AppButtonMemoized
            colorsToUse={colors}
            textString="Main"
            variant={AppButtonVariantType.Main}
            colorType={AppButtonColorType.Primary}
            extraContainerStyle={stylesToUse.singleButtonContainer}
          />
          <AppButtonMemoized
            colorsToUse={colors}
            textString="Flat"
            variant={AppButtonVariantType.Flat}
            colorType={AppButtonColorType.Primary}
            extraContainerStyle={stylesToUse.singleButtonContainer}
          />
          <AppButtonMemoized
            colorsToUse={colors}
            textString="Outline"
            variant={AppButtonVariantType.Outline}
            colorType={AppButtonColorType.Primary}
            extraContainerStyle={stylesToUse.singleButtonContainer}
          />
        </View>
      </View>
    );
  };

  const _renderSectionSecondary = () => {
    return (
      <View style={stylesToUse.sectionContainer}>
        {/* Title */}
        {_renderButtonsTitle(AppButtonColorType.Secondary)}

        {/* Buttons */}
        <View style={stylesToUse.rowContainer}>
          <AppButtonMemoized
            colorsToUse={colors}
            textString="Main"
            variant={AppButtonVariantType.Main}
            colorType={AppButtonColorType.Secondary}
            extraContainerStyle={stylesToUse.singleButtonContainer}
          />
          <AppButtonMemoized
            colorsToUse={colors}
            textString="Flat"
            variant={AppButtonVariantType.Flat}
            colorType={AppButtonColorType.Secondary}
            extraContainerStyle={stylesToUse.singleButtonContainer}
          />
          <AppButtonMemoized
            colorsToUse={colors}
            textString="Outline"
            variant={AppButtonVariantType.Outline}
            colorType={AppButtonColorType.Secondary}
            extraContainerStyle={stylesToUse.singleButtonContainer}
          />
        </View>
      </View>
    );
  };

  const _renderTextsSection = () => {
    return (
      <View style={stylesToUse.sectionContainer}>
        {/* Title */}
        <AppTextMemoized
          textString={`Texts used in App`}
          textColorVariant={`text1`}
          textVariant="large"
        />

        {/* Various Texts */}
        <View style={stylesToUse.textsContainer}>
          <AppTextMemoized
            textString={`Heading1`}
            textColorVariant={`text1`}
            textVariant="4xl"
          />
          <AppTextMemoized
            textString={`Heading2`}
            textColorVariant={`text1`}
            textVariant="3xl"
          />
          <AppTextMemoized
            textString={`Heading3`}
            textColorVariant={`text1`}
            textVariant="2xl"
          />
          <AppTextMemoized
            textString={`XL Text`}
            textColorVariant={`text1`}
            textVariant="xl"
          />
          <AppTextMemoized
            textString={`Large Text`}
            textColorVariant={`text1`}
            textVariant="large"
          />
          <AppTextMemoized
            textString={`Base Text`}
            textColorVariant={`text1`}
            textVariant="base"
          />
          <AppTextMemoized
            textString={`Small Text`}
            textColorVariant={`text1`}
            textVariant="sm"
          />
          <AppTextMemoized
            textString={`Very small text`}
            textColorVariant={`text1`}
            textVariant="xs"
          />
        </View>
      </View>
    );
  };

  return (
    <View style={stylesToUse.container}>
      {/* Primary */}
      {_renderSectionPrimary()}

      {/* Secondary */}
      {_renderSectionSecondary()}

      {/* Texts */}
      {_renderTextsSection()}
    </View>
  );
};

export const KitchenUiSectionMemoized = memo(KitchenUiSection);
