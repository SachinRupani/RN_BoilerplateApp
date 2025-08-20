import {RootNavigation} from "./app/navigation/RootNavigation";
import {AppProviders} from "./app/providers/AppProviders";
import {RootComponent} from "./app/RootComponent";

function App(): JSX.Element {
  return (
    <AppProviders>
      <RootComponent>
        <RootNavigation />
      </RootComponent>
    </AppProviders>
  );
}

export default App;
