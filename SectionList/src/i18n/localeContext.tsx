import { LOCALES } from '@/common';
import { useStorage } from '@/hooks';
import { LocaleContextI, LocaleContextProviderPropsI, LocaleType } from '@/types';
import React, { createContext, useCallback, useMemo } from 'react';
import I18nClient from './i18n';
import TranslateOrFallback from './translateFallback';

const LocaleContext = createContext<LocaleContextI>({} as LocaleContextI);

export const LocaleContextProvider = ({ children }: LocaleContextProviderPropsI) => {
  const [locale, changeLocale] = useStorage<LocaleType>('Language', LOCALES.ENGLISH);

  I18nClient.locale = locale.name;

  const _changeLocale = useCallback(
    (loc: LocaleType) => {
      I18nClient.locale = loc.name;
      changeLocale(loc);
    },
    [changeLocale],
  );

  const localizationContext = useMemo<LocaleContextI>(
    () =>
      ({
        ...I18nClient,
        locale: locale.name,
        localeProvider: locale,
        t: TranslateOrFallback,
        changeLocale: _changeLocale,
      } as LocaleContextI),
    [_changeLocale, locale],
  );

  return <LocaleContext.Provider value={localizationContext}>{children}</LocaleContext.Provider>;
};

export default LocaleContext;
