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
  const {isLoading, users, loadNextPage} = useHomeScreenHook();

  const _handleLoadMore = () => {
    loadNextPage();
  };

  const _renderBodyContent = () => {
    return (
      <View style={stylesToUse.bodyContainer}>
        {/* Loading */}
        {isLoading && (
          <AppLoadingContainerised
            propsLoadingIndicator={{
              indicatorSize: "large",
            }}
          />
        )}

        {/* List Component */}
        <UserList
          listData={users}
          colors={colors}
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
