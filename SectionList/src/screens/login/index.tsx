import { useHookState, useTranslation } from '@/hooks';
import { appStateGlobal } from '@/state';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const LoginScreen = () => {
  const appSate = useHookState(appStateGlobal);
  const { t } = useTranslation();
  const login = () => {
    appSate.merge({
      isLoading: true,
    });
    setTimeout(() => {
      appSate.merge({
        isLoggedIn: true,
        isLoading: false,
      });
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text>{t('login')}</Text>
      <Button title="Login" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
