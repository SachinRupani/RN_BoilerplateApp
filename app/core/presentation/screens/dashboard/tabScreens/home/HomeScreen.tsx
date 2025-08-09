import {ScrollView, View} from "react-native";

import {useAppTheme} from "../../../../../../theme/ThemeContext";
import {AppBottomTabType} from "../../../../common/appBottomTabs/data/AppBottomTabEntity";
import {AppHeaderMemoized} from "../../../../common/appHeader/AppHeader";
import {KitchenUiSectionMemoized} from "./components/kitchenUiSection/KitchenUiSection";
import {getHomeStyles} from "./styles/HomeScreen.styles";

export function HomeScreen() {
  const {colors} = useAppTheme();
  const stylesToUse = getHomeStyles(colors);

  const _renderBodyContent = () => {
    return (
      <ScrollView
        style={stylesToUse.scrollViewBodyContainer}
        contentContainerStyle={stylesToUse.scrollViewContentContainer}>
        <KitchenUiSectionMemoized />
      </ScrollView>
    );
  };

  return (
    <View style={stylesToUse.container}>
      <AppHeaderMemoized textString={AppBottomTabType.Home.valueOf()} />
      {_renderBodyContent()}
    </View>
  );
}
