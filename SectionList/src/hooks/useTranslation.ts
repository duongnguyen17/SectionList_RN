import { LOCALES } from '@/common';
import LocaleContext from '@/i18n/localeContext';
import { LocaleType } from '@/types';
import { useCallback, useContext } from 'react';

const useTranslation = () => {
  return useContext(LocaleContext);
};

export default useTranslation;

export const useCompareLanguage = (locale: LocaleType) => {
  const checkLanguageId = useCallback(() => {
    switch (locale) {
      case LOCALES.ENGLISH:
        return LOCALES.ENGLISH;
      case LOCALES.VIETNAMESE:
        return LOCALES.VIETNAMESE;
      default:
        return LOCALES.ENGLISH;
    }
  }, [locale]);

  const checkNextLanguage = useCallback((loc: LocaleType) => {
    switch (loc.id) {
      case LOCALES.ENGLISH.id:
        return LOCALES.ENGLISH;
      case LOCALES.VIETNAMESE.id:
        return LOCALES.VIETNAMESE;
      default:
        return LOCALES.ENGLISH;
    }
  }, []);
  return {
    checkLanguageId,
    checkNextLanguage,
  };
};
