import {ScrollView, View} from 'react-native';

import {useCallback} from 'react';
import {useAppNavigation} from '../../../../../../../navigation/hooks/useAppNavigation';
import {useAppTheme} from '../../../../../../../theme/ThemeContext';
import {appStorageImpl} from '../../../../../../data/interfaceImpl/AppStorageImpl';
import {AppBottomTabType} from '../../../../../common/appBottomTabs/data/AppBottomTabEntity';
import {AppButtonMemoized} from '../../../../../common/appButton/AppButton';
import {AppButtonVariantType} from '../../../../../common/appButton/data/AppButtonVariantType';
import {AppComponentColorType} from '../../../../../common/appButton/data/AppComponentColorType';
import {AppHeaderMemoized} from '../../../../../common/appHeader/AppHeader';
import {AppThemeSwitcher} from '../../../../../common/appThemeSwitcher/AppThemeSwitcher';
import {KitchenUiSectionMemoized} from '../../../../../common/kitchenUiSection/KitchenUiSection';
import {getAppCommonStyles} from '../../../../../common/styles/CommonStyles';
import {getSettingsStyles} from './styles/Settings.styles';

export function SettingsScreen() {
  const {colors} = useAppTheme();
  const commonStyles = getAppCommonStyles(colors);
  const settingsStyles = getSettingsStyles(colors);

  const {navigateToLogin} = useAppNavigation();

  const handleLogOut = useCallback(() => {
    appStorageImpl.clearStorage();
    navigateToLogin();
  }, [navigateToLogin]);

  const _renderBodyContent = () => {
    return (
      <ScrollView
        style={settingsStyles.scrollViewContainer}
        contentContainerStyle={settingsStyles.scrollViewContentContainer}>
        {/* Theme Switch Button */}
        <AppThemeSwitcher
          extraContainerStyle={settingsStyles.switchButtonContainerStyle}
        />

        {/* Kitchen sync component */}
        <KitchenUiSectionMemoized />

        {/* Log out button */}
        <AppButtonMemoized
          colorsToUse={colors}
          textString="Log out"
          variant={AppButtonVariantType.Outline}
          colorType={AppComponentColorType.Primary}
          extraContainerStyle={settingsStyles.logOutButtonContainer}
          onClickAction={handleLogOut}
        />
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
