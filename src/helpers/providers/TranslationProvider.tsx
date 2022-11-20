import React from 'react';
import i18n from 'i18next';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {SupportedLanguages} from '@helpers/common/enums';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    fallbackLng: SupportedLanguages.English.toLowerCase(),
    interpolation: {
      escapeValue: false,
    },
    detection: {
      caches: [],
    },
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    },
  });

export const TranslationProvider: React.FC = ({children}) => (
  <I18nextProvider i18n={i18n}>
    {children}
  </I18nextProvider>
);
