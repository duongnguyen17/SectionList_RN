import { LOCALES } from '@/common';
import { useCompareLanguage, useHookState, useLogin, useTranslation } from '@/hooks';
import { appStateGlobal } from '@/state';
import { LocaleType } from '@/types';
import { env } from '@/utils';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export const HomeScreen = () => {
  const appSate = useHookState(appStateGlobal);
  const { t, changeLocale, localeProvider } = useTranslation();
  const { checkNextLanguage } = useCompareLanguage(localeProvider);
  const [currLocale, setCurrLocale] = useState<LocaleType>(localeProvider);
  const { mutate: onLogin } = useLogin();
  const testLogin = () => {
    onLogin({
      email: 'duong.nv@comartek.com',
      password: 'pyroc1803',
      appVersion: '',
      deviceId: '',
      deviceToken: '',
    });
  };

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
    changeLocale(checkNextLanguage(currLocale.id == LOCALES.ENGLISH.id ? LOCALES.VIETNAMESE : LOCALES.ENGLISH));
    setCurrLocale((pre) => (pre.id == LOCALES.ENGLISH.id ? LOCALES.VIETNAMESE : LOCALES.ENGLISH));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('home')}</Text>
      <Text>Test codepush</Text>
      <Text>{env.test}</Text>
      <Button title={t('test_login')} onPress={testLogin} />
      <Button title={t('logout')} onPress={logout} />
      <Button title={t('change_language')} onPress={changeLanguage} />
    </View>
  );
};
