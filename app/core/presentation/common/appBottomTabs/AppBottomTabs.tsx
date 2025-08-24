import {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useAppTheme} from '../../../../theme/ThemeContext';
import {AppIconMemoized} from '../appIcon/AppIcon';
import {AppTextMemoized} from '../appText/AppText';
import {AppBottomTabEntity, AppBottomTabType} from './data/AppBottomTabEntity';
import {getAppBottomTabsStyles} from './styles/AppBottomTabs.styles';

type PropsAppBottomTabs = {
  tabs: Array<AppBottomTabEntity>;
  onClickAction?: (clickedTabType: AppBottomTabType) => void;
};

const AppBottomTabs = ({tabs, onClickAction}: PropsAppBottomTabs) => {
  const {colors} = useAppTheme();
  const stylesToUse = getAppBottomTabsStyles(colors);

  const _renderTabs = () => {
    return tabs.map((tabItem, index) => {
      const isTabActive = tabItem.isActive;

      return (
        <TouchableOpacity
          key={`item-${index}`}
          activeOpacity={0.7}
          style={stylesToUse.tabContainer}
          onPress={() => {
            onClickAction?.(tabItem.tabType);
          }}>
          {/* Icon */}
          <AppIconMemoized
            iconName={tabItem.icon?.iconName}
            iconHexColor={tabItem.icon?.iconHexColor}
          />

          {/* Text */}
          <AppTextMemoized
            textString={tabItem.tabType.valueOf()}
            textVariant="sm"
            extraTextStyle={[
              stylesToUse.tabTextStyle,
              {
                color: isTabActive
                  ? colors.tabForegroundActive
                  : colors.tabForegroundDefault,
              },
            ]}
          />
        </TouchableOpacity>
      );
    });
  };

  return <View style={stylesToUse.container}>{_renderTabs()}</View>;
};

export const AppBottomTabsMemoized = memo(AppBottomTabs);
