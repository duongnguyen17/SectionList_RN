import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from 'react-query';
import { LoadingFullScreen } from './src/components/loading';
import { LocaleContextProvider } from './src/i18n/localeContext';
import RootNavigation from './src/navigation';
import { NetInfoProvider } from './src/services';
import { InstantQueryClient } from './src/services/query_client';
// import codePush from 'react-native-code-push';

const App = () => {
  return (
    <QueryClientProvider client={InstantQueryClient}>
      <SafeAreaProvider>
        <LocaleContextProvider>
          <NetInfoProvider>
            <React.Fragment>
              <LoadingFullScreen />
              <RootNavigation />
            </React.Fragment>
          </NetInfoProvider>
        </LocaleContextProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
export default App;
// export default codePush({
//   updateDialog: false,
//   installMode: codePush.InstallMode.IMMEDIATE,
// })(App);
