import {View} from "react-native";

import {useAppTheme} from "../../../../../../theme/ThemeContext";
import {AppBottomTabType} from "../../../../common/appBottomTabs/data/AppBottomTabEntity";
import {AppHeaderMemoized} from "../../../../common/appHeader/AppHeader";
import {AppLoadingContainerised} from "../../../../common/appLoadingIndicator/AppLoadingContainerised";
import {UserList} from "./components/userList/UserList";
import {useHomeScreenHook} from "./hooks/useHomeScreenHook";
import {getHomeStyles} from "./styles/HomeScreen.styles";

export function HomeScreen() {
  const {colors} = useAppTheme();
  const stylesToUse = getHomeStyles(colors);

  // Functions and state
  const {isLoading, users, isDataRefreshing, loadNextPage, triggerRefresh} =
    useHomeScreenHook();

  const _handleLoadMore = () => {
    loadNextPage();
  };

  const _handleRefresh = () => {
    triggerRefresh();
  };

  const _renderBodyContent = () => {
    return (
      <View style={stylesToUse.bodyContainer}>
        {/* Loading */}
        {isLoading && (
          <AppLoadingContainerised
            propsLoadingIndicator={{
              indicatorSize: "large",
              indicatorColor: colors.primary,
            }}
          />
        )}

        {/* List Component */}
        <UserList
          listData={users}
          colors={colors}
          isRefreshing={isDataRefreshing}
          onRefresh={_handleRefresh}
          onLoadNextPage={_handleLoadMore}
        />
      </View>
    );
  };

  return (
    <View style={stylesToUse.container}>
      <AppHeaderMemoized textString={AppBottomTabType.Home.valueOf()} />
      {_renderBodyContent()}
    </View>
  );
}
