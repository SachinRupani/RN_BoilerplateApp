import {View} from "react-native";

import {useAppTheme} from "../../../../../../theme/ThemeContext";
import {AppBottomTabType} from "../../../../common/appBottomTabs/data/AppBottomTabEntity";
import {AppHeaderMemoized} from "../../../../common/appHeader/AppHeader";
import {getHomeStyles} from "./styles/HomeScreen.styles";

export function HomeScreen() {
  const {colors} = useAppTheme();
  const stylesToUse = getHomeStyles(colors);

  const _renderBodyContent = () => {
    return <></>;
  };

  return (
    <View style={stylesToUse.container}>
      <AppHeaderMemoized textString={AppBottomTabType.Home.valueOf()} />
      {_renderBodyContent()}
    </View>
  );
}
