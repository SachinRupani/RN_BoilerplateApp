import {View} from "react-native";

import {useAppTheme} from "../../../../../../theme/ThemeContext";
import {sampleUsers} from "../../../../../domain/entity/user/UserEntity";
import {AppBottomTabType} from "../../../../common/appBottomTabs/data/AppBottomTabEntity";
import {AppHeaderMemoized} from "../../../../common/appHeader/AppHeader";
import {UserList} from "./components/userList/UserList";
import {getHomeStyles} from "./styles/HomeScreen.styles";

export function HomeScreen() {
  const {colors} = useAppTheme();
  const stylesToUse = getHomeStyles(colors);

  const _renderBodyContent = () => {
    return <UserList listData={sampleUsers} colors={colors} />;
  };

  return (
    <View style={stylesToUse.container}>
      <AppHeaderMemoized textString={AppBottomTabType.Home.valueOf()} />
      {_renderBodyContent()}
    </View>
  );
}
