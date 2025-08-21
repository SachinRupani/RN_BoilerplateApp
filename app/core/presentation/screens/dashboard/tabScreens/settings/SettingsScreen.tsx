import {ScrollView, View} from "react-native";

import {useCallback} from "react";
import {useAppTheme} from "../../../../../../theme/ThemeContext";
import {ThemeType} from "../../../../../../theme/ThemeType";
import {AppBottomTabType} from "../../../../common/appBottomTabs/data/AppBottomTabEntity";
import {AppButtonMemoized} from "../../../../common/appButton/AppButton";
import {AppButtonColorType} from "../../../../common/appButton/data/AppButtonColorType";
import {AppButtonVariantType} from "../../../../common/appButton/data/AppButtonVariantType";
import {AppButtonWidthType} from "../../../../common/appButton/data/AppButtonWidthType";
import {AppHeaderMemoized} from "../../../../common/appHeader/AppHeader";
import {KitchenUiSectionMemoized} from "../../../../common/kitchenUiSection/KitchenUiSection";
import {getAppCommonStyles} from "../../../../common/styles/CommonStyles";
import {getSettingsStyles} from "./styles/Settings.styles";

export function SettingsScreen() {
  const {colors, theme, toggleTheme} = useAppTheme();
  const commonStyles = getAppCommonStyles(colors);
  const settingsStyles = getSettingsStyles(colors);

  const isDarkTheme = theme === ThemeType.Dark;

  const _handleThemeSwitchAction = useCallback(() => {
    toggleTheme();
  }, []);

  const _renderBodyContent = () => {
    return (
      <ScrollView
        style={settingsStyles.scrollViewContainer}
        contentContainerStyle={settingsStyles.scrollViewContentContainer}>
        {/* Theme Switch Button */}
        <AppButtonMemoized
          colorsToUse={colors}
          textString={`Switch to ${isDarkTheme ? "Light Theme" : "Dark Theme"}`}
          colorType={AppButtonColorType.Primary}
          variant={AppButtonVariantType.Flat}
          widthType={AppButtonWidthType.ContentWidthCenter}
          onClickAction={_handleThemeSwitchAction}
          extraContainerStyle={settingsStyles.switchButtonContainerStyle}
        />

        {/* Kitchen sync component */}
        <KitchenUiSectionMemoized />
      </ScrollView>
    );
  };

  return (
    <View style={commonStyles.container}>
      <AppHeaderMemoized textString={AppBottomTabType.Settings.valueOf()} />
      {_renderBodyContent()}
    </View>
  );
}
