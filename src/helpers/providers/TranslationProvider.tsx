import React from 'react';
import i18n from 'i18next';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import {SupportedLanguages} from '@helpers/common/enums';
import {getItem} from '@helpers/services/localStorage';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    lng: getItem('language')?.toLowerCase()
      || window.navigator.language
      || SupportedLanguages.English.toLowerCase(),
    fallbackLng: SupportedLanguages.English.toLowerCase(),
    interpolation: {
      escapeValue: false,
    },
    detection: {
      caches: [],
    },
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`,
    },
  });

export const TranslationProvider: React.FC = ({children}) => (
  <I18nextProvider i18n={i18n}>
    {children}
  </I18nextProvider>
);
