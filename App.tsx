import {RootNavigation} from "./app/navigation/RootNavigation";
import {RootComponent} from "./app/RootComponent";
import {AppContextProvider} from "./app/theme/ThemeContext";

function App(): JSX.Element {
  return (
    <AppContextProvider>
      <RootComponent>
        <RootNavigation />
      </RootComponent>
    </AppContextProvider>
  );
}

export default App;
