import React, {PropsWithChildren} from 'react';
import AppStatusBar from './core/presentation/common/statusBar/AppStatusBar';

export const RootComponent = ({children}: PropsWithChildren<unknown>) => {
  return (
    <>
      <AppStatusBar />
      {children}
    </>
  );
};
