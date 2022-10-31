import { I18n } from 'i18n-js/typings';

export interface LocaleType {
  id: number;
  name: LocaleName;
  label: LocaleLabel;
}
type LocaleName = 'en' | 'vn';
type LocaleLabel = 'English' | 'Việt Nam';

export interface LocaleContextI extends I18n {
  localeProvider: LocaleType;
  changeLocale: (locale: LocaleType) => void;
}
