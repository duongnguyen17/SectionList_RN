import { LOCALES } from '@/common';
import { I18n } from 'i18n-js';

const I18nClient = new I18n();

//default locale
I18nClient.defaultLocale = LOCALES.ENGLISH.name;

//current locale
I18nClient.locale = LOCALES.ENGLISH.name;

I18nClient.translations = {
  en: require('./languages/english.json'),
  vn: require('./languages/vietnamese.json'),
};

export default I18nClient;
