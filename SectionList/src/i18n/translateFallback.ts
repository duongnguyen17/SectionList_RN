import { Scope, TranslateOptions } from 'i18n-js/typings';
import I18nClient from './i18n';

const missingTranslationRegex = /^\[missing ".*" translation\]$/;

const TranslateOrFallback = (initialMsg: Scope, options?: TranslateOptions) => {
  if (typeof initialMsg !== 'string') {
    __DEV__ && console.log(`I18n: you must give a string to translate instead of "${typeof initialMsg}"`);

    return '';
  }

  let localMsg = I18nClient.t(initialMsg, options);

  if (missingTranslationRegex.test(localMsg)) {
    __DEV__ && console.log(`translation "${initialMsg}" does not exists in translations files`);

    return initialMsg;
  }
  return localMsg;
};

export default TranslateOrFallback;
