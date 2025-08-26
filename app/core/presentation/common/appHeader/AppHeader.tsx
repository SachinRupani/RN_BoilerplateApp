import {memo} from 'react';
import {View} from 'react-native';
import {useAppNavigation} from '../../../../navigation/hooks/useAppNavigation';
import {useAppTheme} from '../../../../theme/ThemeContext';
import {AppIconMemoized} from '../appIcon/AppIcon';
import {AppTextMemoized} from '../appText/AppText';
import {TextColorVariant} from '../appText/data/TextColorVariant';
import {AppTouchableSection} from '../appTouchableSection/AppTouchableSection';
import {getAppHeaderStyles} from './styles/AppHeader.styles';

type PropsAppHeader = {
  textString: string;
  headerVariant?: 'large' | 'xl' | '2xl' | '3xl';
  textColorVariant?: TextColorVariant;
  enableBackButton?: boolean;
  testID?: string;
  onBackButtonClick?: () => void;
};

const AppHeader = ({
  textString,
  textColorVariant,
  headerVariant,
  enableBackButton,
  testID,
  onBackButtonClick,
}: PropsAppHeader) => {
  const {colors} = useAppTheme();
  const stylesToUse = getAppHeaderStyles(colors);

  const {navigateBack} = useAppNavigation();

  const _handleBackButtonClick = () => {
    onBackButtonClick ? onBackButtonClick() : navigateBack();
  };

  const _renderBackButton = () => {
    return (
      <AppTouchableSection onPressAction={_handleBackButtonClick}>
        <AppIconMemoized iconName="arrow-back" iconHexColor={colors.text1} />
      </AppTouchableSection>
    );
  };

  return (
    <View style={stylesToUse.headerContainer}>
      {/* Back Button */}
      {enableBackButton && _renderBackButton()}

      {/* Title */}
      <AppTextMemoized
        testID={testID}
        textString={textString}
        textColorVariant={textColorVariant}
        textVariant={headerVariant ?? 'xl'}
      />
    </View>
  );
};

export const AppHeaderMemoized = memo(AppHeader);
