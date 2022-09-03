import React from 'react';
import i18n from 'i18next';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      caches: [],
    },
  });

export const TranslationProvider: React.FC = ({children}) => (
  <I18nextProvider i18n={i18n}>
    {children}
  </I18nextProvider>
);
