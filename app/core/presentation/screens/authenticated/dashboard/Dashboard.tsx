import {useCallback, useMemo} from 'react';
import {View} from 'react-native';

import {useAppTheme} from '../../../../../theme/ThemeContext';
import {AppBottomTabsMemoized} from '../../../common/appBottomTabs/AppBottomTabs';
import {AppBottomTabType} from '../../../common/appBottomTabs/data/AppBottomTabEntity';
import {useDashboardHook} from './hooks/useDashboardHook';
import {getDashboardStyles} from './styles/Dashboard.styles';
import {HomeScreen} from './tabScreens/home/HomeScreen';
import {SettingsScreen} from './tabScreens/settings/SettingsScreen';

export function Dashboard() {
  const {colors} = useAppTheme();
  const stylesToUse = getDashboardStyles(colors);

  // Functions & state
  const {tabs, updateTabSelection} = useDashboardHook(colors);

  // Active Tab Type memoized
  const activeTabType = useMemo(
    () => tabs.find(tab => tab.isActive)?.tabType,
    [tabs],
  );

  // Render specific tab content
  const _renderTabContent = useCallback(() => {
    switch (activeTabType) {
      case AppBottomTabType.Home:
        return <HomeScreen />;
      case AppBottomTabType.Settings:
        return <SettingsScreen />;
    }
  }, [activeTabType]);

  // Handle tab click
  const _handleTabClick = useCallback(
    (clickedTabType: AppBottomTabType) => {
      updateTabSelection(clickedTabType);
    },
    [updateTabSelection],
  );

  return (
    <View style={stylesToUse.container}>
      {/* Tab Screen */}
      <View style={stylesToUse.tabContentContainer}>{_renderTabContent()}</View>

      {/* Bottom Tabs */}
      <AppBottomTabsMemoized tabs={tabs} onClickAction={_handleTabClick} />
    </View>
  );
}
