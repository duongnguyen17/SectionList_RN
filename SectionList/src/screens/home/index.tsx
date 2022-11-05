import { LOCALES } from '@/common';
import { useCompareLanguage, useHookState, useTranslation } from '@/hooks';
import { appStateGlobal } from '@/state';
import { LocaleType } from '@/types';
import { env } from '@/utils';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const HomeScreen = () => {
  const appSate = useHookState(appStateGlobal);
  const { t, changeLocale, localeProvider } = useTranslation();
  const { checkNextLanguage } = useCompareLanguage(localeProvider);
  const [currLocale, setCurrLocale] = useState<LocaleType>(localeProvider);

  const testLogin = () => {};

  const logout = async () => {
    appSate.merge({
      isLoading: true,
    });
    setTimeout(() => {
      appSate.merge({
        isLoggedIn: false,
        isLoading: false,
      });
    }, 2000);
  };

  const changeLanguage = () => {
    changeLocale(
      checkNextLanguage(
        currLocale.id === LOCALES.ENGLISH.id ? LOCALES.VIETNAMESE : LOCALES.ENGLISH,
      ),
    );
    setCurrLocale((pre) => (pre.id === LOCALES.ENGLISH.id ? LOCALES.VIETNAMESE : LOCALES.ENGLISH));
  };

  return (
    <View style={styles.container}>
      <Text>{t('home')}</Text>
      <Text>Test codepush</Text>
      <Text>{env.test}</Text>
      <Button title={t('test_login')} onPress={testLogin} />
      <Button title={t('logout')} onPress={logout} />
      <Button title={t('change_language')} onPress={changeLanguage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
