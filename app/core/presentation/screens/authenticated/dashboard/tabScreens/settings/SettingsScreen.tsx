import {ScrollView, View} from 'react-native';

import {useAppTheme} from '../../../../../../../theme/ThemeContext';
import {AppBottomTabType} from '../../../../../common/appBottomTabs/data/AppBottomTabEntity';
import {AppHeaderMemoized} from '../../../../../common/appHeader/AppHeader';
import {AppThemeSwitcher} from '../../../../../common/appThemeSwitcher/AppThemeSwitcher';
import {KitchenUiSectionMemoized} from '../../../../../common/kitchenUiSection/KitchenUiSection';
import {getAppCommonStyles} from '../../../../../common/styles/CommonStyles';
import {getSettingsStyles} from './styles/Settings.styles';

export function SettingsScreen() {
  const {colors} = useAppTheme();
  const commonStyles = getAppCommonStyles(colors);
  const settingsStyles = getSettingsStyles(colors);

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
