import {useCallback, useState} from 'react';
import {AppColors} from '../../../../../../theme/AppColors';
import {
  AppBottomTabEntity,
  AppBottomTabType,
} from '../../../../common/appBottomTabs/data/AppBottomTabEntity';
import {
  defaultTabs,
  getDesiredIconProps,
} from '../../../../common/appBottomTabs/data/BottomTabsData';

export const useDashboardHook = (appColors: AppColors) => {
  const [tabs, setTabs] = useState<Array<AppBottomTabEntity>>(
    defaultTabs(appColors),
  );

  const updateTabSelection = useCallback(
    (selectedTabType: AppBottomTabType) => {
      setTabs(prevTabs =>
        prevTabs.map(tabItem => {
          const isTabSelected: boolean = tabItem.tabType === selectedTabType;
          return {
            ...tabItem,
            isActive: isTabSelected,
            icon: getDesiredIconProps(
              tabItem.tabType,
              isTabSelected,
              appColors,
            ),
          };
        }),
      );
    },
    [appColors],
  );

  return {
    tabs,
    updateTabSelection,
  };
};
