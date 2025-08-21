import {PropsWithChildren} from "react";
import {Provider} from "react-redux";
import {store} from "../core/data/redux/store";
import {AppContextProvider} from "../theme/ThemeContext";

export const AppProviders = ({children}: PropsWithChildren<unknown>) => {
  return (
    <Provider store={store}>
      <AppContextProvider>{children}</AppContextProvider>
    </Provider>
  );
};
