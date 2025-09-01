import {useCallback} from 'react';
import {useAppTheme} from '../../../../theme/ThemeContext';
import {ThemeType} from '../../../../theme/ThemeType';
import {AppButtonMemoized} from '../appButton/AppButton';
import {AppButtonVariantType} from '../appButton/data/AppButtonVariantType';
import {AppButtonWidthType} from '../appButton/data/AppButtonWidthType';
import {AppComponentColorType} from '../appButton/data/AppComponentColorType';

export type PropsAppThemeSwitcher = {
  extraContainerStyle?: any;
};

export const AppThemeSwitcher = ({
  extraContainerStyle,
}: PropsAppThemeSwitcher) => {
  const {colors, theme, toggleTheme} = useAppTheme();
  const isDarkTheme = theme === ThemeType.Dark;

  const _handleThemeSwitchAction = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <AppButtonMemoized
      colorsToUse={colors}
      textString={`Switch to ${isDarkTheme ? 'Light Theme' : 'Dark Theme'}`}
      colorType={AppComponentColorType.Primary}
      variant={AppButtonVariantType.Flat}
      widthType={AppButtonWidthType.ContentWidthCenter}
      extraContainerStyle={extraContainerStyle}
      onClickAction={_handleThemeSwitchAction}
    />
  );
};
