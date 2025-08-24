import {View} from 'react-native';
import {useAppRouteParams} from '../../../../../navigation/hooks/useAppRouteParams';
import {useAppTheme} from '../../../../../theme/ThemeContext';
import {AppHeaderMemoized} from '../../../common/appHeader/AppHeader';
import {AppLoadingContainerised} from '../../../common/appLoadingIndicator/AppLoadingContainerised';
import {getAppCommonStyles} from '../../../common/styles/CommonStyles';
import {UserInfoMemoized} from './components/userInfo/UserInfo';
import {useUserDetailsScreenHook} from './hooks/useUserDetailsScreenHook';
import {getUserDetailsScreenStyles} from './styles/UserDetailsScreen.styles';

export const UserDetailsScreen = () => {
  const {colors} = useAppTheme();
  const appCommonStyles = getAppCommonStyles(colors);
  const userDetailsStyles = getUserDetailsScreenStyles(colors);

  // Get incoming route params
  const {params} = useAppRouteParams();

  // Functions and state
  const {isLoading, userEntity} = useUserDetailsScreenHook(
    params?.userId ?? '0',
  );

  const _renderBodyContent = () => {
    return (
      <View
        style={[
          appCommonStyles.bodyContainer,
          userDetailsStyles.bodyContainer,
        ]}>
        {/* Loading */}
        {isLoading && (
          <AppLoadingContainerised
            propsLoadingIndicator={{
              indicatorSize: 'large',
              indicatorColor: colors.primary,
            }}
          />
        )}

        {/* User Info */}
        {userEntity && <UserInfoMemoized colors={colors} user={userEntity} />}
      </View>
    );
  };

  return (
    <View style={appCommonStyles.container}>
      {/* Header */}
      <AppHeaderMemoized textString={'User Details'} enableBackButton={true} />

      {/* Body Content */}
      {_renderBodyContent()}
    </View>
  );
};
