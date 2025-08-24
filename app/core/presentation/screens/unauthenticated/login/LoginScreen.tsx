import React, {useCallback} from 'react';
import {View} from 'react-native';
import {AppDefaults} from '../../../../../config/AppDefaults';
import {useAppNavigation} from '../../../../../navigation/hooks/useAppNavigation';
import {useAppTheme} from '../../../../../theme/ThemeContext';
import {AppButtonMemoized} from '../../../common/appButton/AppButton';
import {AppButtonColorType} from '../../../common/appButton/data/AppButtonColorType';
import {AppHeaderMemoized} from '../../../common/appHeader/AppHeader';
import {AppPasswordRulesMemoized} from '../../../common/appPasswordRules/AppPasswordRules';
import {AppTextMemoized} from '../../../common/appText/AppText';
import {AppTextInputMemoized} from '../../../common/appTextInput/AppTextInput';
import {AppThemeSwitcher} from '../../../common/appThemeSwitcher/AppThemeSwitcher';
import {getAppCommonStyles} from '../../../common/styles/CommonStyles';
import {useLoginScreenHook} from './hooks/useLoginScreenHook';
import {getLoginScreenStyles} from './styles/LoginScreen.styles';

export const LoginScreen = () => {
  const {colors} = useAppTheme();
  const appCommonStyles = getAppCommonStyles(colors);
  const loginStyles = getLoginScreenStyles(colors);

  const {navigateToDashboard} = useAppNavigation();

  const _handleLoginAction = useCallback(() => {
    navigateToDashboard();
  }, [navigateToDashboard]);

  // Functions & state
  const {
    loginEntity,
    shouldEnableLoginButton,
    shouldDisplayPasswordRules,
    updateEmail,
    updatePassword,
  } = useLoginScreenHook();

  const _renderBodyContent = () => {
    return (
      <View style={loginStyles.container}>
        {/* Theme Switch Button */}
        <AppThemeSwitcher
          extraContainerStyle={loginStyles.themeSwitchContainer}
        />

        <View style={loginStyles.loginCardContainer}>
          <AppTextMemoized
            testID="idBlockTitle"
            textString="Welcome user"
            textVariant="2xl"
          />

          {/* Email */}
          <AppTextInputMemoized
            testID={'idEmailInput'}
            colors={colors}
            label="Email ID"
            keyboardType="email-address"
            placeholderText="email address"
            characterLimit={AppDefaults.CHARACTER_LIMITS.EMAIL}
            onChangeText={updateEmail}
          />

          {/* Password */}
          <AppTextInputMemoized
            testID={'idPasswordInput'}
            colors={colors}
            label="Password"
            keyboardType="default"
            placeholderText="password"
            isSecureEntry={true}
            characterLimit={AppDefaults.CHARACTER_LIMITS.PASSWORD}
            onChangeText={updatePassword}
          />

          {/* Password Rules */}
          {shouldDisplayPasswordRules && (
            <AppPasswordRulesMemoized
              testID={'idPasswordRules'}
              colors={colors}
              rules={loginEntity.passwordRules}
            />
          )}

          {/* Login Button */}
          <AppButtonMemoized
            testID={'idLoginButton'}
            isButtonDisabled={!shouldEnableLoginButton}
            colorType={AppButtonColorType.Primary}
            colorsToUse={colors}
            textString="Log in"
            extraContainerStyle={loginStyles.loginButtonContainer}
            onClickAction={_handleLoginAction}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={[appCommonStyles.container]}>
      <AppHeaderMemoized testID={'idTitle'} textString={'Login'} />
      {_renderBodyContent()}
    </View>
  );
};
