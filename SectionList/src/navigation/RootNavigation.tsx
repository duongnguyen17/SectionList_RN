import { useHookState } from '@/hooks';
import { SplashScreen } from '@/screens';
import { navigationRef } from '@/services';
import { appStateGlobal } from '@/state';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootNavigation = () => {
  const colorTheme = useColorScheme();
  const appState = useHookState(appStateGlobal);
  if (appState.isStarting.value) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorTheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle="dark-content" />
      {appState.isLoggedIn.value ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
export default RootNavigation;
